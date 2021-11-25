<?php

namespace App\Http\Controllers;

use App\Classes\TaskClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    private $task;

    public function __construct(TaskClass $task)
    {
        $this->task = $task;
    }

    public function getTask()
    {
        return $this->task->getTask();
    }

    public function addTask(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'due_date' => 'required',
            'responsible_user' => 'required',
            'status' => 'required',
        ]);
        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json(['status' => false, 'message' => $error])->setStatusCode(400);
        }
        $name = $request->name;
        $due_date = $request->due_date;
        $responsible_user = $request->responsible_user;
        $status = $request->status;
        return $this->task->addTask($name, $due_date, $responsible_user, $status);
    }

    public function getSingleTask($id)
    {
        return $this->task->getSingleTask($id);
    }

    public function updateTask(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'name' => 'required|string',
            'due_date' => 'required',
            'responsible_user' => 'required',
            'status' => 'required',
        ]);
        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json(['status' => false, 'message' => $error])->setStatusCode(400);
        }
        $id = $request->id;
        $name = $request->name;
        $due_date = $request->due_date;
        $responsible_user = $request->responsible_user;
        $status = $request->status;
        return $this->task->updateTask($id, $name, $due_date, $responsible_user, $status);
    }

    public function deleteTask($id)
    {
        return $this->task->deleteTask($id);
    }
}
