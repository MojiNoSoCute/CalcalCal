function calAreaPar() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("height").value);

    if (isNaN(length & width) || (length & width) <= 0) {
        showAlert();
        return;
    }

    let area = length * width;
    document.getElementById("area").innerText = area.toFixed(2);
}