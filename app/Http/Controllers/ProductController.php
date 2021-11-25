<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    private $product;
    public function __construct(Product $product)
    {
        $this->product = $product;
    }
    public function totalProduct(){
        try {
            $result = $this->product->totalProduct();
            return (new ResponseHelper(true,'data Show Success',200,$result))->get();
        }catch (\Exception $ex){
            return (new ResponseHelper(false,'Internal Server Error',500))->get();
        }
    }
    public function getProduct(){
        try {
            $result = $this->product->getProduct();
            if (isset($result) && !empty($result)){
                return (new ResponseHelper(true,'Data Get Success',200,$result))->get();
            }
            return (new ResponseHelper(false,'Data Not Found',400))->get();
        }catch (\Exception $ex){
            return (new ResponseHelper(false,'Internal Server Error',500))->get();
        }
    }
    public function addProduct(Request $request){
        try {
            $validator = Validator::make($request->all(),[
                'name' => 'required',
                'description' => 'required',
                'category' => 'required',
                'price' => 'required',
                'quantity' => 'required'
            ]);
            if ($validator->fails()){
                $error = $validator->errors()->first();
                return (new ResponseHelper(false,$error,400))->get();
            }
            if ($this->product->addProduct($request->name,$request->description,$request->category,$request->price,$request->quantity)){
                return ( new ResponseHelper(true,"Product Add Success",200))->get();
            }
            return ( new ResponseHelper(false,"Product Add Failed",400))->get();
        }catch (\Exception $ex){
            return (new ResponseHelper(false,'Internal Server Error',500))->get();
        }
    }
    public function deleteProduct($id){
        try {
            if (isset($id) && !empty($id)){
                $result = $this->product->deleteProduct($id);
                if ($result){
                    return (new ResponseHelper(true,'Product Delete Success',200))->get();
                }
                return (new ResponseHelper(true,'Product Delete Failed',400))->get();
            }
        }catch (\Exception $ex){
            return (new ResponseHelper(false,'Internal Server Error',500))->get();
        }
    }
}
