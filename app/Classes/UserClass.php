<?php

namespace App\Classes;

use App\Helper\Common;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;


class UserClass
{
    private $userManager;
    public function __construct(User $user)
    {
        $this->userManager = $user;
    }
    public function getProfile(){
        try {
            $email = Common::AuthID();
            $data = $this->userManager->getProfile($email);
            if (isset($data) && !empty($data)){
                return response()->json(["status" => true, "message" => "profile get success","data"=>$data])->setStatusCode(200);
            }
        }catch (\Exception $ex){
            Log::info("UserClass Error", ["getProfile" => $ex->getMessage(), "line" => $ex->getLine()]);
            return response()->json(["status" => false, "message" => "internal server Error"])->setStatusCode(500);
        }
    }
    public function updateProfileInformation($email,$name,$first_name,$last_name,$headline,$about_me,$address,$city,$country,$postal_code,$phone_number){
        try {
            $update_status = $this->userManager->updateProfileInformation($email,$name,$first_name,$last_name,$headline,$about_me,$address,$city,$country,$postal_code,$phone_number);
            if ($update_status){
                return response()->json(['status' => true, 'message' => 'profile information update success'])->setStatusCode(200);
            }
            return response()->json(['status' => false, 'message' => 'Profile Up to Date'])->setStatusCode(400);
        } catch (\Exception $ex) {
            Log::info('UserClass Error', ['updateProfileHeadline' => $ex->getMessage(), 'line' => $ex->getLine()]);
            return response()->json(['status' => false, 'message' => 'internal server error'])->setStatusCode(500);
        }
    }
    public function changePassword($email,$current_password,$new_password){
        try {
            $email = $this->userManager->getSingleUser($email);
            if (isset($email) && !empty($email)){
                if (Hash::check($current_password, $email->password)){
                    $update = $this->userManager->updatePassword($email->email, Hash::make($new_password));
                    if ($update){
                        return response()->json(['status' => true, 'message' => 'password change success'])->setStatusCode(200);
                    }
                }
            }
            return response()->json(['status' => false, 'message' => 'error while reset password'])->setStatusCode(400);
        } catch (\Exception $ex) {
            Log::info('UserClass Error', ['resetPassword' => $ex->getMessage(), 'line' => $ex->getLine()]);
            return response()->json(['status' => false, 'message' => 'internal server error'])->setStatusCode(500);
        }
    }
    public function updateNotification($email,$setting_name,$setting_value){
        try {
                $update_status = $this->userManager->updateNotification($email,$setting_name,$setting_value);
            if ($update_status){
                return response()->json(['status' => true, 'message' => 'notification update success'])->setStatusCode(200);
            }
            return response()->json(['status' => false, 'message' => 'error while update notification'])->setStatusCode(400);
        } catch (\Exception $ex) {
            Log::info('UserClass Error', ['updateSetting' => $ex->getMessage(), 'line' => $ex->getLine()]);
            return response()->json(['status' => false, 'message' => 'internal server error'])->setStatusCode(500);
        }
    }
    public function updateProfilePic($email,$image_name){
        try {
            $update_status = $this->userManager->updateProfilePic($email,$image_name);
            if ($update_status){
                return response()->json(['status' => true, 'message' => 'profile update success'])->setStatusCode(200);
            }
            return response()->json(['status' => false, 'message' => 'error while update profile'])->setStatusCode(400);
        } catch (\Exception $ex) {
            Log::info('UserClass Error', ['updateSetting' => $ex->getMessage(), 'line' => $ex->getLine()]);
            return response()->json(['status' => false, 'message' => 'internal server error'])->setStatusCode(500);
        }
    }
    public function getNotification(){
        try {
            $email = Common::AuthID();
            $data = $this->userManager->getNotification($email);
            if (isset($data) && !empty($data)){
                return response()->json(["status" => true, "message" => "notification get success","data"=>$data])->setStatusCode(200);
            }
            return response()->json(["status" => false, "message" => "error while get notification",])->setStatusCode(400);
        }catch (\Exception $ex){
            Log::info("UserClass Error", ["getProfile" => $ex->getMessage(), "line" => $ex->getLine()]);
            return response()->json(["status" => false, "message" => "internal server Error"])->setStatusCode(500);
        }
    }
    public function getProfileInfo(){
        try {
            $email = Common::AuthID();
            $data = $this->userManager->getProfileInfo($email);
            if (isset($data) && !empty($data)){
                return response()->json(["status" => true, "message" => "profile get success","data"=>$data])->setStatusCode(200);
            }
        }catch (\Exception $ex){
            Log::info("UserClass Error", ["getProfile" => $ex->getMessage(), "line" => $ex->getLine()]);
            return response()->json(["status" => false, "message" => "internal server Error"])->setStatusCode(500);
        }
    }

    public function getUserInfo(){
        try {
            $email = Common::AuthID();
            $data = $this->userManager->getUserInfo($email);
            if (isset($data) && !empty($data)){
                return response()->json(["status" => true, "message" => "profile get success","data"=>$data])->setStatusCode(200);
            }
        }catch (\Exception $ex){
            Log::info("UserClass Error", ["getProfile" => $ex->getMessage(), "line" => $ex->getLine()]);
            return response()->json(["status" => false, "message" => "internal server Error"])->setStatusCode(500);
        }
    }
}
