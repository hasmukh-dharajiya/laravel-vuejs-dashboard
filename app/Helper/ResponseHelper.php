<?php


namespace App\Helper;


class ResponseHelper
{
    private $status;
    private $message;
    private $http_code;
    private $data;

    public function __construct($status,$message,$http_code,$data = null)
    {
        $this->status = $status;
        $this->message = $message;
        $this->data = $data;
        $this->http_code = $http_code;
    }
    public function get(){
        return response()->json(['status'=>$this->status,'message'=>$this->message,'data'=>$this->data,'HttpStatus'=>$this->http_code])->setStatusCode($this->http_code);
    }
}
