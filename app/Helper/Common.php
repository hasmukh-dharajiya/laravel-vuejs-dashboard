<?php

namespace App\Helper;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class Common
{
    public static function AuthID(){
        try {
            if (Auth::user() ){
                return Auth::user()->email;
            }
            return null;
        }catch (\Exception $ex){
            Log::info("CommonClass Error", ["AuthID" => $ex->getMessage(), "line" => $ex->getLine()]);
            return response()->json(['status' => false, 'message' => 'internal server error'])->setStatusCode(500);
        }
    }
}
