<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\Rule;
use Illuminate\Routing\Controller;
use DB;
use Session;
use App\Models\chat;
use App\Models\User;


class ChatController extends Controller
{
    public function send($mex){
        if(!session::get('user_id')){
            return redirect('login');
        }
        $t=time();
        $userID=session::get('user_id');
        $user = User::where('id', $userID)->first();
        $chat= new Chat;
        $chat->mex= $mex;
        $chat->name=$user['username'];
        $chat->data= (date("H:i",$t));
        $chat->save();
        }

    public function getMex(){
                if(!session::get('user_id')){
                    return redirect('login');
                }
                $chat = Chat::all();
                return $chat;
                
    }
    }

   
   