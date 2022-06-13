

<html>
  <head>
    <meta charset = 'utf-8'>
  <script src='{{ url('js/scriptPlaylist.js') }}' defer></script>
  <link rel = 'stylesheet' href = '{{ url('css/styleChat.css') }}'/>
  <script>const BASE_URL="{{url('/')}}"; </script>

   <title>Home</title>
  </head>
  <body>
  <div id = "flex-container">
		<div class="flex-item" id = 'link' name='logout' >
		<a name="logout" class="flex-item" id = 'link' href="{{url('logout') }}">Logout</a>
</div>
<div id = "flex-container">
		<div class="flex-item" id = 'link' name='home' >
		<a name="home" class="flex-item" id = 'link' href="{{url('home') }}">Home</a>
</div>

</div>
<button class="apriPlaylist flex-item " id = 'linkPlaylist'   >Richiedi Playlist</button> 

	</div> 
  </div>

</div>







	<section class="Playlist ">
	<div class="song"  ></div>
	</section>

  </body>
</html>
