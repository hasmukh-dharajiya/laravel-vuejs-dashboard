<?php

namespace App\Http\Controllers;

use App\Classes\UserClass;
use App\Helper\Common;
use App\Helper\ResponseHelper;
use App\Mail\VerifyEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    private $user;

    public function __construct(UserClass $user)
    {
        $this->user = $user;
    }

    public function getUserInfo(){
        try {
            $email = Auth::user()->email;
                $result = $this->user->getUserInfo($email);
            if (isset($result) && !empty($result)){
                return (new ResponseHelper(true,'Data Get Success',200,$result))->get();
            }
            return (new ResponseHelper(false,'Data Not Found',400))->get();
        }catch (\Exception $ex){
            return (new ResponseHelper(false,'internal server Error',500))->get();
        }
    }
    public function getProfile(){
        return $this->user->getProfile();
    }
    public function updateProfileInformation(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string',
            'mobile' => 'max:10',
            'location' => 'number|max:6'
        ]);
        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json(['status' => false, 'message' => $error])->setStatusCode(400);
        }
        $email = Common::AuthID();
        $name = $request->name ? $request->name : null;
        $first_name = $request->first_name ? $request->first_name : null;
        $last_name = $request->last_name ? $request->last_name : null;
        $headline = $request->headline ? $request->headline : null;
        $about_me = $request->about_me ? $request->about_me : null;
        $address = $request->address ? $request->address : null;
        $city = $request->city ? $request->city : null;
        $country = $request->country ? $request->country : null;
        $postal_code = $request->postal_code ? $request->postal_code : null;
        $phone_number = $request->phone_number ? $request->phone_number : null;

        return $this->user->updateProfileInformation($email,$name,$first_name,$last_name,$headline,$about_me,$address,$city,$country,$postal_code,$phone_number);
    }
    public function changePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'currentPassword' => 'required',
            'newPassword' => 'required|same:confirmPassword|min:8',
            'confirmPassword' => 'required|min:8'
        ]);
        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json(['status' => false, 'message' => $error])->setStatusCode(400);
        }
        $email = Common::AuthID();

        return $this->user->changePassword($email, $request->currentPassword, $request->newPassword);
    }
    public function updateNotification(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'setting_name' => 'required|string',
            'setting_value' => 'required|boolean'
        ]);
        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json(['status' => false, 'message' => $error])->setStatusCode(400);
        }
        $email = Common::AuthID();
        return $this->user->updateNotification($email, $request->setting_name, $request->setting_value);
    }
    public function updateProfilePic(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image'=>'required|image|mimes:jpeg,png,jpg,svg'
        ]);
        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json(['status' => false, 'message' => $error])->setStatusCode(400);
        }
        if ($request->image){
            $destinationPath = 'assets/img/profile';
            $fileName = rand(808182838485111,707172737475999) . '.'. $request->image->extension();
            $request->image->move(public_path($destinationPath), $fileName);
            $image_name =$fileName;
            $email = Common::AuthID();
            return $this->user->updateProfilePic($email,$image_name);
        }
        return (new ResponseHelper(false, 'Validation Error', 400, "Error While Add Image"))->get();
    }
    public function getNotification(){
        return $this->user->getNotification();
    }
    public function getProfileInfo(){
        return $this->user->getProfileInfo();
    }
}
