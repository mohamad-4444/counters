let count = 0;

function increase() {
    count++;

    updateScreen();
}

function decrease() {
    count--;

    updateScreen();
}

function reset() {
    count = 0;

    updateScreen();
}

function updateScreen() {

    document.getElementById("count").innerText = count;

    if (count > 0) {
        document.getElementById("count").style.color = "green";
        document.getElementById("message").innerText = "Positive number";
    }
    else if (count < 0) {
        document.getElementById("count").style.color = "red";
        document.getElementById("message").innerText = "Negative number";
    }
    else {
        document.getElementById("count").style.color = "black";
        document.getElementById("message").innerText = "Start counting!";
    }
}