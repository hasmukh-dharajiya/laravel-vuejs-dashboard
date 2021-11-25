<?php

namespace App\Classes;

use App\Helper\Common;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Support\Facades\Log;

class DashboardClass
{
    private $task,$project;
    public function __construct(Project $project,Task $task)
    {
        $this->task = $task;
        $this->project = $project;
    }
    public function getCount(){
        try {
            $email_id = Common::AuthID();
            $data = [];

            $getTotalProject = $this->project->getTotalProject($email_id);
            $getCompleteProject = $this->project->getCompleteProject($email_id);

            $getTotalTask = $this->task->getTotalTask($email_id);
            $getCompleteTask = $this->task->getCompleteTask($email_id);

            $data["totalProject"] = $getTotalProject;
            $data["totalTask"] = $getTotalTask;
            $data["completeProject"] = $getCompleteProject;
            $data["completeTask"] = $getCompleteTask;

            if (isset($data) && !empty($data)){
                return response()->json(["status"=>true,"message"=>"dashboard count get success","data"=>$data])->setStatusCode(200);
            }
            return response()->json(["status"=>false,"message"=>"error while get dashboard data"])->setStatusCode(400);
        }catch (\Exception $ex){
            Log::info("DashboardClass Error",["getCount"=>$ex->getMessage(),"line"=>$ex->getLine()]);
            return response()->json(["status"=>false,"message"=>"internal server Error"])->setStatusCode(500);
        }
    }
}
