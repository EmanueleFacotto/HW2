
    @extends('layouts.guest')

@section('title', '| Registrazione')

@section('script')
<script src='{{ asset('js/scriptRegister.js') }}' defer></script>
<script type="text/javascript">
    const REGISTER_ROUTE = "{{route('register')}}";
</script>
@endsection


@section('content')

    <body>
       
    <div id="containerRegister">
        <div id="titolologin"><label>Registrazione</label></div>
    <form  method='post' class="formregister" name='register' enctype="multipart/form-data" autocomplete="off" action="{{ route('register') }}">
    @csrf

       
    <p>  
    <div class="username @error('username') errorj @enderror">
        <label> Username:</label> <input  value='{{ old('username') }}' type="text" class="testo" name="username" placeholder="Inserisci username" /> 
        <span>&nbsp;@error('username') {{ $message }} @enderror</span>
</div>
    </p>
            <p>
        <label> Nome e cognome :</label> <input type="text" class="testo" name="name" value='{{ old('name') }}' placeholder="Inserisci nome completo" /> 

    </p>
            
        
            <p>  
        <label> Password: </label><input type="password" class="testo" name="password" value='{{ old('password') }}'" placeholder="Inserisci password"/>
            </p><p>  
        <label> Ripeti password: </label><input type="password" class="testo" name="pass2" placeholder="Inserisci di nuovo la password"/>
    </p>
            <p> 
            <div class="email @error('email') errorj @enderror"> 
        <label> E-mail: </label><input type='text' name='email' value='{{ old('email') }}' autocomplete="email"  class="testo" placeholder="Inserisci e-mail"/>
        <span>&nbsp;@error('email') {{ $message }} @enderror</span>
  
        </div>  </p> 
            <label> <div id="errorMessage"></div> </label>
            @if($message = Session::get ('error') )
<a id="errorMessage">{{ $message }}</a>
@endif
            <input type='submit' class="button" value="Registrati" id="submit" >

</form>

</div>
    </body>
@endsection