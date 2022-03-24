function login(){
    var player_1 = document.getElementById("player1_input").value;
    var player_2 = document.getElementById("player2_input").value;
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);
    window.location = "game_page.html";
}