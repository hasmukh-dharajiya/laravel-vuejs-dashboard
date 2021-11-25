<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Log;

class Project extends Model
{
    protected $table = "projects";
    protected $primaryKey = "id";
    public $incrementing = false;

    public function getProject($email)
    {
        try {
            $result = $this->where('email',$email)->get();
            if (count($result) > 0) {
                return $result;
            }
            return null;
        } catch (QueryException $ex) {
            Log::info("ProjectModel Error", ["getProject" => $ex->getMessage(), "line" => $ex->getLine()]);
            return null;
        }
    }

    public function addProject($email,$name,$budget, $responsible_user,$status,$completion)
    {
        try {
            $this->email = $email;
            $this->name = $name;
            $this->budget = $budget;
            $this->responsible_user = $responsible_user;
            $this->status = $status;
            $this->completion = $completion;
            if ($this->save()) {
                return true;
            }
            return false;
        } catch (QueryException $ex) {
            Log::info("ProjectModel Error", ["addProject" => $ex->getMessage(), "line" => $ex->getLine()]);
            return false;
        }
    }

    public function getSingleProject($id)
    {
        try {
            $result = $this->where('id', $id)->first();
            if (isset($result) & !empty($result)) {
                return $result;
            }
            return null;
        } catch (QueryException $ex) {
            Log::info("ProjectModel Error", ["getSingleProject" => $ex->getMessage(), "line" => $ex->getLine()]);
            return null;
        }
    }

    public function updateProject($id, $name, $budget, $responsible_user, $status, $completion)
    {
        try {
            $result = $this->where('id', $id)
                ->update(['name' => $name, 'budget' => $budget, 'responsible_user' => $responsible_user, 'status' => $status, 'completion' => $completion]);
            if ($result) {
                return true;
            }
            return false;
        } catch (QueryException $ex) {
            Log::info("ProjectModel Error", ["addProject" => $ex->getMessage(), "line" => $ex->getLine()]);
            return false;
        }
    }

    public function deleteProject($id)
    {
        try {
            $result = $this->where('id', $id)->delete();
            if ($result) {
                return true;
            }
            return false;
        } catch (QueryException $ex) {
            Log::info("ProjectModel Error", ["deleteProject" => $ex->getMessage(), "line" => $ex->getLine()]);
            return false;
        }
    }
    public function getTotalProject($email_id)
    {
        try {
            $result = $this->where('email',$email_id)->count();
            if ($result > 0) {
                return $result;
            }
            return 0;
        } catch (QueryException $ex) {
            Log::info("TaskModel Error", ["getTotalProduct" => $ex->getMessage(), "line" => $ex->getLine()]);
            return 0;
        }
    }
    public function getCompleteProject($email_id)
    {
        try {
            $result = $this->where('email',$email_id)->where('status','COMPLETED')
                            ->count();
            if ($result > 0) {
                return $result;
            }
            return 0;
        } catch (QueryException $ex) {
            Log::info("TaskModel Error", ["getTotalProduct" => $ex->getMessage(), "line" => $ex->getLine()]);
            return 0;
        }
    }
}
