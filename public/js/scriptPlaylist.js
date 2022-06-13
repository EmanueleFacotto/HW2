
const pulsanteApri= document.querySelector('.apriPlaylist');
pulsanteApri.addEventListener('click', apri);

function onJsonPlaylist(json){
    const playlist= document.querySelector('.song');
    playlist.innerHTML='';

  for (row of json){
    const box= document.createElement("p");
    box.innerHTML='';
    const title = document.createElement("p");
    const songId = document.createElement("p");
    songId.innerHTML = row.id;
    songId.classList.add("hidden");
    title.innerHTML = row.titolo;
		const artista = document.createElement("p");
		artista.innerHTML=row.artista;
    const rem = document.createElement("button");
    rem.innerHTML = "Rimuovi";
    box.appendChild(songId);
    box.appendChild(title);
    box.appendChild(artista);
    box.appendChild(rem);
    box.classList.add("border");
    playlist.appendChild(box);
    playlist.classList.add("songadd");
    box.addEventListener("click", rimuoviSong);

  }

}
function onJsonResponsePlaylist(response) {	
	return response.json();
}

function apri(){
    pulsanteApri.classList.add("hidden");
  fetch(BASE_URL + '/getplaylist').then(onJsonResponsePlaylist).then(onJsonPlaylist);
}





function rimuoviSong(event){
	event.preventDefault();
	const elemento = event.currentTarget;
	const songID = elemento.childNodes[0].innerHTML
	fetch(BASE_URL + '/removeSongplaylist/' + songID  ).then(onJsonResponsePlaylist).then(onJsonPlaylist);


}