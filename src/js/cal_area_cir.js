function calAreaCir() {
    const radius = parseFloat(document.getElementById("radius").value);

    if (isNaN(radius) || radius <= 0) {
        showAlert();
        return;
    }

    let area = Math.PI * radius * radius; // คำนวณพื้นที่สี่เหลี่ยมจัตุรัส
    let perimeter = 2 * Math.PI * radius; // คำนวณเส้นรอบวง
    
    document.getElementById("area").innerText = area.toFixed(2);
    document.getElementById("perimeter").innerText = perimeter.toFixed(2);
}