function Algorithm() {
    let answer = document.getElementById("Fakt").value;
    answer = Number(answer);
    let x = answer;
    for (let i = 1; i < x; i++) {
        answer = answer * i;
    }
    document.getElementById("Algor").innerHTML = answer;
}

