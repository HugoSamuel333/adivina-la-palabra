function boton1 (){
player1_name = document.getElementById("persona").value;
player2_name = document.getElementById("persona2").value;
localStorage.setItem("player1_name", player1_name);
localStorage.setItem("player2_name", player2_name);
window.location = "Adivina la palabra.html";
}