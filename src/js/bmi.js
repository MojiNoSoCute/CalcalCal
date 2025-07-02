let gender = ""; 

function selectGender(selected) {
    gender = selected;
    document.getElementById("show_gender").innerText = gender;
}

function bmi() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!gender) {
        showAlert();
        return;
    }

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        showAlert();
        return;
    }

    const bmiValue = weight / (height * height);
    let category;

    if (gender === "ชาย") {
        if (bmiValue < 18.5) {
            category = "น้ำหนักน้อย";
        } else if (bmiValue < 24.9) {
            category = "น้ำหนักปกติ";
        } else if (bmiValue < 29.9) {
            category = "น้ำหนักเกิน";
        } else {
            category = "โรคอ้วน";
        }
    } else if (gender === "หญิง") {
        if (bmiValue < 18.5) {
            category = "น้ำหนักน้อย";
        } else if (bmiValue < 23.0) {
            category = "น้ำหนักปกติ";
        } else if (bmiValue < 28.0) {
            category = "น้ำหนักเกิน";
        } else {
            category = "โรคอ้วน";
        }
    }

    document.getElementById("result").innerHTML = `${bmiValue.toFixed(2)} (${category})`;
}

