let string = "";
let btn = document.querySelectorAll("button");
Array.from(btn).forEach((element) => {
    element.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            if (string == "") {
                let f = document.getElementById("disp");
                f.innerHTML = "Nothing Entered"
            } else {
                let a = document.getElementById("disp");
                let b = eval(string);
                a.innerHTML = b;
            }
        } else if (e.target.innerHTML == "clc") {
            string = "";
            let d = document.getElementById("disp");
            d.innerHTML = "";
        } else {
            string = string + e.target.innerHTML;
            let c = document.getElementById('disp');
            c.innerHTML = string;
        }
    })
})