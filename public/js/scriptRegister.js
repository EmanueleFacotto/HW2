var errorBox= document.getElementById("errorMessage");

function validazione(event)
{
  console.log( form.username.value);
  console.log( form.password.value);
  console.log( form.pass2.value);
  console.log( form.email.value);

  console.log( form.name.value);

  if( form.name.value== "" || form.username.value =="" || form.password.value=="" || form.pass2.value=="" || form.email.value=="" ) {
    errorBox.innerHTML= '<strong>Attenzione!</strong> Inserisci tutti i dati.' + "</div>"
    event.preventDefault();

  } else{
   
    if (form.password.value != form.pass2.value) {
      errorBox.innerHTML= '<strong>Attenzione Password!</strong>  Le password non coincidono!' + "</div>"
      event.preventDefault();

    }else{
    
    if (form.password.value.length < 8){
      errorBox.innerHTML= '<strong>Attenzione Password!</strong>  Utilizzare almeno 8 caratteri' + "</div>"
      event.preventDefault();
    } else{
      if (form.password.value.length > 15){
        errorBox.innerHTML= '<strong>Attenzione Password!</strong>  Utilizzare una password con caratteri<15' + "</div>"
        event.preventDefault();
      } else{
       
        if ((form.password.value.match(/[A-Z]/)) && (form.password.value.match(/[a-z]/)) && (form.password.value.match(/[0-9]/))) {
          return true;
          }
          else {
            errorBox.innerHTML= '<strong>Attenzione Password!</strong> Usa almeno un carattere maiuscolo, uno minuscolo e una cifra' + "</div>"
            event.preventDefault();

          } 
          }
    
      }

    }
  
 
  }

}

const form = document.forms['register'];
form.addEventListener('submit', validazione);







function fetchResponse(response) {
  if (!response.ok) return null;
  return response.json();
}