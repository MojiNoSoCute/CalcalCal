function calAreaReg() {
    const length = parseFloat(document.getElementById("length").value);

    if (isNaN(length) || length <= 0) {
        showAlert();
        return;
    }

    let area = length * length; // คำนวณพื้นที่สี่เหลี่ยมจัตุรัส
    document.getElementById("area").innerText = area.toFixed(2);
}