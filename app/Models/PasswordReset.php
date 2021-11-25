<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Log;

class PasswordReset extends Model
{
    use HasFactory;
    protected $table = 'password_resets';
    public $incrementing = false;
    public $timestamps = false;
    public function addNewRecord($email,$key){
        try {
            $this->email  = $email;
            $this->token = $key;
            $this->is_enabled = true;
            $this->is_used = false;
            $this->created_at = Carbon::now();
            if ($this->save()){
                return true;
            }
            return false;
        }catch (QueryException $ex){
            Log::info('PasswordResetModel Error',['addNewRecord'=>$ex->getMessage(),'line'=>$ex->getLine()]);
            return false;
        }
    }
    public function getRecord($key){
        try {
            $result = $this->where('token',$key)->where('is_enabled',true)->where('is_used',false)->first();
            if ($result){
                return $result;
            }
            return null;
        }catch (QueryException $ex){
            Log::info('PasswordResetModel Error',['getRecord'=>$ex->getMessage(),'line'=>$ex->getLine()]);
            return null;
        }
    }
    public function addRecord($key,$email){
        try {
            $result = $this->where('email',$email)
                ->update(['is_enabled'=>true,'is_used'=>true]);
            if ($result){
                return true;
            }
            return false;
        }catch (QueryException $ex){
            Log::info('PasswordResetModel Error',['addRecord'=>$ex->getMessage(),'line'=>$ex->getLine()]);
            return null;
        }
    }
}
