function calWay() {
    const way = parseFloat(document.getElementById("way").value);
    const speed = parseFloat(document.getElementById("speed").value);

    if (isNaN(way & speed) || (way & speed) <= 0) {
        showAlert();
        return;
    }

    let time = way / speed;
    document.getElementById("time").innerText = time.toFixed(2);
}