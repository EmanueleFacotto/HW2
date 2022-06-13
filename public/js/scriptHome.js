
const searchform = document.querySelector('#search-btn');
searchform.addEventListener("click", search);
const result = document.querySelector("#content");

const inviaMex = document.querySelector('#invia');

inviaMex.addEventListener("click", checkMex);




  
function checkMex(event)
{
var errorBox= document.getElementById("errorMessage");
const messaggio=document.querySelector('#mex').value;
console.log(messaggio);
  if( messaggio == "" ) {
    errorBox.innerHTML= '<strong>Attenzione!</strong> Il campo messaggio non può essere vuoto' + "</div>";
    event.preventDefault();
  } else{
	fetch(BASE_URL +'/sendMess/' + messaggio).then(SvuotaMex);
	fetch(BASE_URL +'/getMess').then(onJsonChatResponse).then(onJsonChat);


}}
function SvuotaMex(){
	document.querySelector('#mex').value = "";

}
function onJsonChatResponse(response){
	return response.json();
}

function onJsonChat(json){
	const Chat= document.querySelector('#visualizza_mex');
	Chat.innerHTML="";
  for (row of json.reverse()){
    const box= document.createElement("p");
    box.innerHTML='';
    const messaggio = document.createElement("p");
	messaggio.innerHTML = row.mex;
	messaggio.classList.add('msg');
    const utente = document.createElement("p");
	utente.innerHTML = row.name;
	utente.classList.add('user');
	const time = document.createElement("p");
	time.classList.add('ora');
	time.innerHTML = row.data;
    box.appendChild(utente);
    box.appendChild(messaggio);
    box.appendChild(time);
    Chat.appendChild(box);

  }
		}
fetch(BASE_URL +'/getMess').then(onJsonChatResponse).then(onJsonChat);










function onJson(json) { 

	console.log(json);
	result.innerHTML = "";
	let i=0;
	for(it of json.tracks.items) {
		if(i<12){
			const elemento = document.createElement("div");
			result.appendChild(elemento);
			const image = document.createElement("img");
			image.src = it.album.images["0"].url;
			const title = document.createElement("p");
			title.innerHTML = it.name;
		
			const artists = it.artists;
			const artis = document.createElement("p");
			for(t of artists) {    
				const artisti = t.name;
				artis.innerHTML = artis.innerHTML + " " + artisti;
			}
			const form1 = document.createElement("form");
				form1.name = "select";
				form1.method = "post";
				const add = document.createElement("button");

	     	    add.innerHTML = "Aggiungi";
			elemento.appendChild(title);
			elemento.appendChild(artis);
			elemento.appendChild(image);
			elemento.appendChild(form1);
     	    form1.appendChild(add);

			result.appendChild(elemento);
     	   
			elemento.addEventListener("click", aggiungiPlaylist);
	
			i++;
		}
	}
	
	
	
}	

function onJsonResponse(response) {	

	return response.json();
}

function search(event)
{
   const search_text=document.querySelector('#search-text').value;
   fetch(BASE_URL +'/create/search/' + search_text).then(onJsonResponse).then(onJson);
}

function onPlaylistResponse(response){
	return response.json();
}


function aggiungiPlaylist(event){
	event.preventDefault();
	
	const elemento = event.currentTarget;
	const button= elemento.querySelector("form");
	button.innerHTML="";
	const add= document.createElement("h1");
	add.innerHTML = "Aggiunto";
	add.classList.add("aggiunto");
	elemento.appendChild(add);


	let artista = elemento.childNodes[0].innerHTML
	let titolo= elemento.childNodes[1].innerHTML
	fetch(BASE_URL + '/playlist/add/' + artista + '/' + titolo );

}














