<?php

use Illuminate\Support\Facades\Route;

Route::get('{any}',function (){
    return view('vue');
})->where('any', '.*')->where('any', '^(?!api).*');

Route::group(['prefix'=>'api/v1'],function (){
    Route::post('/register',[\App\Http\Controllers\AuthController::class, 'registerAuth']);
    Route::post('/login',[\App\Http\Controllers\AuthController::class, 'loginAuth']);
    Route::get('/auth/check',[\App\Http\Controllers\AuthController::class, 'checkAuth']);
    Route::get('/conform-mail/{key}',[\App\Http\Controllers\AuthController::class, 'conformMail']);
    Route::post('/forgot_password',[\App\Http\Controllers\AuthController::class, 'forgotPassword']);
    Route::get('/reset_password/{key}',[\App\Http\Controllers\AuthController::class, 'resetPasswordEmail']);
    Route::post('/reset_password',[\App\Http\Controllers\AuthController::class, 'resetPassword']);
});
Route::group(['prefix'=>'api/v1','middleware'=>'auth'],function (){
    Route::get('/get/user/info',[\App\Http\Controllers\UserController::class, 'getUserInfo']);
    //Basic Info Navbar
    Route::get('/profile/info', [\App\Http\Controllers\UserController::class, 'getProfileInfo']);

    //Verify
    Route::get('/sendVerifyMail',[\App\Http\Controllers\AuthController::class,'SendVerifyMail']);

    //Dashboard
    Route::get('/count', [\App\Http\Controllers\DashboardController::class, 'getCount']);

    //Project
    Route::get('/projects', [\App\Http\Controllers\ProjectController::class, 'getProject']);
    Route::post('/add/project', [\App\Http\Controllers\ProjectController::class, 'addProject']);
    Route::get('/get/project/{id}', [\App\Http\Controllers\ProjectController::class, 'getSingleProject']);
    Route::put('/update/project', [\App\Http\Controllers\ProjectController::class, 'updateProject']);
    Route::delete('/delete/project/{id}', [\App\Http\Controllers\ProjectController::class, 'deleteProject']);

    //Task
    Route::get('/tasks', [\App\Http\Controllers\TaskController::class, 'getTask']);
    Route::post('/add/task', [\App\Http\Controllers\TaskController::class, 'addTask']);
    Route::get('/get/task/{id}', [\App\Http\Controllers\TaskController::class, 'getSingleTask']);
    Route::put('/update/task', [\App\Http\Controllers\TaskController::class, 'updateTask']);
    Route::delete('/delete/task/{id}', [\App\Http\Controllers\TaskController::class, 'deleteTask']);

    //Profile
    Route::get('/profile', [\App\Http\Controllers\UserController::class, 'getProfile']);
    Route::post('/update/profile/pic',[\App\Http\Controllers\UserController::class, 'updateProfilePic']);
    Route::put('/update/profile', [\App\Http\Controllers\UserController::class, 'updateProfileInformation']);

    //setting
    Route::get('/notification', [\App\Http\Controllers\UserController::class, 'getNotification']);
    Route::post('/change_password', [\App\Http\Controllers\UserController::class, 'changePassword']);
    Route::post('/update/notification', [\App\Http\Controllers\UserController::class, 'updateNotification']);

    //Auth
    Route::get('/logout',[\App\Http\Controllers\AuthController::class, 'logout']);

});
