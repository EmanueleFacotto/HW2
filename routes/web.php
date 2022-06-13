<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('login');
});


Route::get('/login', 'App\Http\Controllers\LoginController@login');
Route::get('/logout', "App\Http\Controllers\LoginController@logout")->name("logout");
Route::post('/login', "App\Http\Controllers\LoginController@checkLogin");

Route::get('/register',"App\Http\Controllers\RegisterController@index")->name("register");


 Route::post("/register", "App\Http\Controllers\RegisterController@create");
 Route::get('/home', "App\Http\Controllers\HomeController@index");
 Route::get('/home', "App\Http\Controllers\HomeController@index")->name('home');



 
 Route::get('/create/search/{search}', 'App\Http\Controllers\CreateController@search');
 Route::get('/playlist/add/{titolo}/{artista}','App\Http\Controllers\PlaylistController@add');

 Route::get('/playlist', 'App\Http\Controllers\PlaylistController@index');
 Route::get('/getplaylist', 'App\Http\Controllers\PlaylistController@view');
 Route::get('/removeSongplaylist/{titolo}', 'App\Http\Controllers\PlaylistController@remove');

 Route::get('/sendMess/{mex}', 'App\Http\Controllers\ChatController@send');
 Route::get('/getMess', 'App\Http\Controllers\ChatController@getMex');














Route::get('lang/{locale}', function ($locale) {
    if (!in_array($locale, ['en', 'it'])) abort(400);
    
    session()->put('locale', $locale);

    return redirect()->back();
})->name('setlanguage');