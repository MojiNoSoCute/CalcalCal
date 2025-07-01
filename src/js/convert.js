function convert() {    
        let select = document.getElementById("select").value;
        let numberInput = document.getElementById("number_input").value;
        let result = 0;
        let number = parseInt(numberInput);

        if (isNaN(number)) {
            showAlert();
            return;
        }
        
        if (select === "1") {
            result = number.toString(2); // แปลงเป็นเลขฐาน 2
        } else if (select === "2") {
            result = number.toString(8); // แปลงเป็นเลขฐาน 8
        } else if (select === "3") {
            result = number.toString(16).toUpperCase(); // แปลงเป็นเลขฐาน 16
        }
        
        console.log(result);
        document.getElementById("result").innerText = result;
    }