player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
puntuacion1 = 0;
puntuacion2 = 0;
document.getElementById("player1_name").InnerHTML = player1_name + "_";
document.getElementById("player2_name").InnerHTML = player2_name + "_";
document.getElementById("player1_score").InnerHTML = puntuacion1;
document.getElementById("player2_score").InnerHTML = puntuacion2;
document.getElementById("player_question").InnerHTML = "Tu turno de preguntar" + player1_name;
document.getElementById("player_answer").InnerHTML = "Tu turno para responder" + player2_name;
function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}