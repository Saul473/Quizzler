let leaderboard = document.getElementById("leaderboard");

function retrieveHighScores() {
    let storedUsers = JSON.parse(localStorage.getItem("highscores"));
    console.log(storedUsers);
    for (let i = 0; i < storedUsers.length; i++) {
        let scoresDiv = document.createElement("div");
        scoresDiv.innerHTML = "User: " + storedUsers[i].user + " Score: " + storedUsers[i].userScore;
        scoresDiv.style.fontSize = "30px"
        leaderboard.append(scoresDiv);
    }
}

retrieveHighScores();