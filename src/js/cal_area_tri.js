function calAreaTri() {
    const length = parseFloat(document.getElementById("length").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(length & height) || (length & height) <= 0) {
        showAlert();
        return;
    }

    let area = 1 / 2 * length * height;
    document.getElementById("area").innerText = area.toFixed(2);
}