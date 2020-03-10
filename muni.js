//mettre un bouton "afficher la liste des participants" sur la page.
//quand on clique sur ce bouton  la liste des personnes candidates doit s'aaficher en dessousdu bouton.
//utiliser innrHtml.
//améliorer la page : afficher le nom des personnes participants, mais cette fois-ci sous forme de liste Html. (utiliser innerHTML) afficher la liste de participants en ligne droite
let participants = [
  "julien funais",
  "corienne ganne",
  "mathalie baume",
  "Laurent hum",
];

document.querySelector('.afficher-liste').addEventListener('click', function() {
  document.querySelector('.liste-participants').innerHTML = "";
  participants.forEach(function(participant) {
    document.querySelector('.liste-participants').innerHTML += '<li>' + participant + '</li>'
  })
});
document.querySelector('.ajout-participant').addEventListener('click', function(){
  paticipants.push(document.querySelector('.insertion-participant').value);

document.querySelector('.list-participants').innerHTML ="";
participants.forEach(function(participant){
  document.querySelector('.liste-participants').innerHTML += '<li>' + participant + '</li>';
  })
});
