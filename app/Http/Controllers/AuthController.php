<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Mail\VerifyEmail;
use App\Mail\ResetPassword;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Models\PasswordReset;

class AuthController extends Controller
{
    private $user;
    private $password_reset;
    public function __construct(User $user, PasswordReset $password_reset)
    {
        $this->user = $user;
        $this->password_reset = $password_reset;
    }

    public function checkAuth()
    {
        try {
            if (Auth::check()) {
                return (new ResponseHelper(true, "Auth Alive success", 200))->get();
            }
            return (new ResponseHelper(false, "Auth Alive Failed", 401))->get();
        }catch (\Exception $ex){
            Log::info("AuthController",["checkAuth"=>$ex->getMessage(),"line"=>$ex->getLine()]);
            return response()->json(["status"=>false,"message"=>"Auth Alive Failed"])->setStatusCode(500);
        }
    }

    public function registerAuth(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required|min:8'
            ], [
                'name.required' => 'name Field is Required',
                'email.email' => 'Valid Email Address'
            ]);
            if ($validator->fails()) {
                $error = $validator->errors()->first();
                return (new ResponseHelper(false, $error, 400))->get();
            }
            $result = $this->user->checkUserExist($request->email);
            if ($result) {
                return (new ResponseHelper(false, "User Already Exist", 400))->get();
            }
            $password = Hash::make($request->password);
            $result = $this->user->registerAuth($request->name, $request->email, $password);
            if ($result) {
                return (new ResponseHelper(true, 'user register success', 200))->get();
            }
            return (new ResponseHelper(false, 'error while register user', 400))->get();
        } catch (\Exception $ex) {
            Log::info('UserControllerError', ['message' => $ex->getMessage(), 'line' => $ex->getLine()]);
            return (new ResponseHelper(false, 'internal server Error', 500))->get();
        }

    }

    public function loginAuth(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required'
            ]);
            if ($validator->fails()) {
                $error = $validator->errors()->first();
                return (new ResponseHelper(false, $error, 400))->get();
            }
            $result = $this->user->loginAuth($request->email);
            if (isset($result) && !empty($result)) {
                if (Hash::check($request->password, $result->password)) {
                    Auth::login($result);
                    return (new ResponseHelper(true, "Authentication Success", 200))->get();
                }
            }
            return (new ResponseHelper(false, "Invalid Credential", 400))->get();
        } catch (\Exception $ex) {
            return (new ResponseHelper(false, 'internal server Error', 500))->get();
        }
    }

    public function conformMail($key)
    {
        try {
            $result = $this->user->conformMail($key);
            if ($result) {
                return (new ResponseHelper(true, 'Email Id Is Verify Successful', 200))->get();
            }
            return (new ResponseHelper(false, 'Invalid Code Or Link Expire Please Try Again..', 400))->get();
        } catch (\Exception $ex) {
            return (new ResponseHelper(false, 'internal server Error', 500))->get();
        }
    }

    public function SendVerifyMail()
    {
        try {
            $email = Auth::user()->email;
            $key = self::generateRandomString(30);
            $data = array();
            $data['name'] = Auth::user()->name;
            $data['key'] = $key;
            $result = $this->user->updateConformKey($email, $key);
            if ($result) {
                Mail::to($email)->send(new VerifyEmail($data));
                return (new ResponseHelper(true, 'Email Send Success', 200))->get();
            }
            return (new ResponseHelper(false, 'Email Not Send', 400))->get();
        } catch (\Exception $ex) {
            Log::info("AuthController",["SendVerifyMail"=>$ex->getMessage(),"line"=>$ex->getLine()]);
            return (new ResponseHelper(false, 'internal server Error', 500))->get();
        }
    }
    public static function  generateRandomString($length = 30) {
        try {
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            return $randomString;
        }catch (\Exception $ex){
            return (new ResponseHelper(false,'Internal Server Error',500))->get();
        }
    }

    public function logout()
    {
        try {
            if (Auth::check()) {
                Auth::logout();
                return (new ResponseHelper(true, 'Logout Success', 200))->get();
            }
            return (new ResponseHelper(false, 'Logout Failed', 400))->get();
        } catch (\Exception $ex) {
            return (new ResponseHelper(false, 'Internal Server Error', 500))->get();
        }
    }

    public function forgotPassword(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email'
            ], [
                'email.required' => 'Email Id is Required'
            ]);
            if ($validator->fails()) {
                $error = $validator->errors()->first();
                return (new ResponseHelper(false, $error, 400))->get();
            }
            $key = self::generateRandomString(30);
            $email = $request->email;
            $user_exist = $this->user->checkUserExist($email);
            if ($user_exist === false) {
                return (new ResponseHelper(true, 'Mail Send Success', 200))->get();
            }
            $add_record = $this->password_reset->addNewRecord($email, $key);
            if ($add_record === false) {
                return (new ResponseHelper(false, 'error_while_sending_reset_email', 400))->get();
            }
            $user_name = $this->user->getUserdetail($email);
            $data = array();
            $data['name'] = $user_name;
            $data['hash_key'] = $key;
            Mail::to($email)->send(new ResetPassword($data));
            return (new ResponseHelper(true, 'Mail Send Success', 200))->get();
        } catch (\Exception $ex) {
            Log::info('AuthenticationController Error', ['forgotPassword' => $ex->getMessage(), 'line' => $ex->getLine()]);
            return (new ResponseHelper(false, 'Internal Server Error', 500))->get();
        }
    }
    public function resetPasswordEmail($key){
        try {
            $email_detail = $this->password_reset->getRecord($key);
            if (!isset($email_detail) && empty($email_detail)){
                return (new ResponseHelper(false, 'Provided reset key is not valid Or is expired', 400))->get();
            }
            if ($email_detail->is_used == true){
                return (new ResponseHelper(false, 'Provided reset key is not valid Or is expired', 400))->get();
            }
            return (new ResponseHelper(true, 'password_reset_success', 200))->get();
        }catch (\Exception $ex){
            Log::info('AuthenticationController Error',['resetPasswordEmail'=>$ex->getMessage(),'line'=>$ex->getLine()]);
            return (new ResponseHelper(false, 'Internal Server Error', 500))->get();
        }
    }
    public function resetPassword(Request $request){
        try {
            $validator = Validator::make($request->all(),[
                'key' => 'required',
                'password' => 'required|same:new_password|min:8',
                'new_password' => 'required|min:8'
            ],[
                'key.required' => 'try again later.'
            ]);
            if ($validator->fails()){
                $error = $validator->errors()->first();
                return (new ResponseHelper(false, $error, 400))->get();
            }
            $reset_email = $this->password_reset->getRecord($request->key);
            if (!isset($reset_email) && empty($reset_email)){
                return (new ResponseHelper(false, 'Provided reset key is not valid Or is expired', 400))->get();
            }
            $add_record = $this->password_reset->addRecord($request->key,$reset_email->email);
            if (!$add_record){
                return (new ResponseHelper(false, 'error_while_resetting_password', 400))->get();
            }
            $email = $reset_email->email;
            $password = $request->password;
            $reset_password = $this->user->resetPassword($email,$password);
            if ($reset_password){
                return response()->json(["status"=>true,"message"=>'password_reset_success'])->setStatusCode(200);
            }
            return (new ResponseHelper(false, 'error_while_resetting_password', 400))->get();
        }catch (\Exception $ex){
            Log::info('AuthenticationController Error',['resetPassword'=>$ex->getMessage(),'line'=>$ex->getLine()]);
            return (new ResponseHelper(false, 'Internal Server Error', 500))->get();
        }
    }
}
