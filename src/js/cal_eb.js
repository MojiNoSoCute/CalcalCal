function calEb() {
    const power = parseFloat(document.getElementById("power").value);
    const number = parseFloat(document.getElementById("number").value);
    const T = parseFloat(document.getElementById("T").value);

    if (isNaN(power & number & T) || (power & number & T) <= 0) {
        showAlert();
        return;
    }

    let unit = power * number / 1000 * T;
    document.getElementById("unit").innerText = unit.toFixed(2);
}