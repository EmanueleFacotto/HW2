@extends('layouts.guest')

@section('title', '| Accedi')
@section('script')

<script src='{{ asset('js/scriptLogin.js') }}' defer></script>
<script type="text/javascript">
</script>
@endsection
@section('content')
<body>
    
<div id="login">
    <div id="titolologin"><label>Login</label></div>
 
<form action='login' class="formlogin" method="post" name="login">
@csrf

    <label>Username:</label>
    <input type="text" name="username" class="testo" placeholder="Inserisci username" /><br>
    <span>&nbsp;@error('username') {{ $message }} @enderror @error('email') {{ $message }} @enderror</span>


    <label>Password:</label>
    <input type="password" name="password" class="testo" placeholder="Inserisci password" /><br>
    <label> <div id="errorMessage" ></div> </label>

    <br></br>


@if ($message = Session::get ('error') )
<strong>{{ $message }}</strong>

@endif
    
     <input type='submit' class="button" value="Login" name="login" />  
</form>

 <div class="signup">Non hai ancora un account?<a href="{{ route('register') }}"> Iscriviti</a>

</div>
</body>
@endsection




