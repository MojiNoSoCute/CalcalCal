function showAlert() {
    const alertBox = document.getElementById("alert");
    const okBtn = document.getElementById("OK_Btn");

    alertBox.style.display = "flex";

    okBtn.onclick = function() {
        alertBox.style.display = "none";
    };
}

window.onload = function() {
    const alertBox = document.getElementById("alert");
    if (alertBox) alertBox.style.display = "none";
};