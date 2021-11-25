<?php

namespace App\Http\Controllers;

use App\Classes\DashboardClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    private $dashboard;
    public function __construct(DashboardClass $dashboard)
    {
        $this->dashboard = $dashboard;
    }
    public function getCount(){
        return $this->dashboard->getCount();
    }
}
