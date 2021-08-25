/*
FileName: app.js
Project: dogyears
last date updated: 08-24-2021
Purpose:
    - dogyears script


*/

let age = 0;

const calcBtn = document.querySelector('.calcBtn');

document.getElementById("textbox")
    .addEventListener("keyup", function (e) {
        if (e.code === 'Enter') {
            document.getElementById("calcBtn").click();
        }
    });

document.getElementById("calcBtn").onclick = function () {

    var textbox = document.getElementById('textbox').value;
    var dogAge = document.querySelector('#dogAge');
    // console.log("textbox: ", textbox);
    // console.log("dogAge: ", dogAge);

    // read the textbox
    age = textbox;
    // console.log(age)

    if (age <= 5) {
        // console.log("less than 5");
        // if dog is one
        if (age == 1) {
            dogYears = 15;
            dogAge.textContent = dogYears;
        };
        // if dog is two
        if (age == 2) {
            dogYears = 24;
            dogAge.textContent = dogYears;
        };
        // if dog is older than two
        if (age >= 3) {
            // calculate dogs age
            // if dog is over 2 multiply each additional year by 5
            remainder = age - 2;
            adultYears = remainder * 4;
            // add the adult years to early years
            dogYears = 24 + adultYears;
            // refresh output
            // display doggo's age
            dogAge.textContent = dogYears;
        };
        // console.log("dogyears: ", dogYears);
    }

    else {

        var select = document.getElementById("size-select");
        const value = select.options[select.selectedIndex].value;

        // console.log("more than 5");
        // console.log("Age: ", age);
        // console.log("this is the value: ", value);

        switch (value) {


            case '1':
                // console.log("case 1");
                var remainder = age - 5;
                adultYears = remainder * 4;
                dogYears = 36 + adultYears;
                // console.log(dogYears);
                dogAge.textContent = dogYears;
                break;
            case '2':

                // console.log("case 2");
                var remainder = age - 5;
                let mLyst = ['42', '47', '51', '56', '60', '65', '69', '74', '78', '83', '87'];
                dogYears = mLyst[remainder - 1];
                // console.log(dogYears);
                dogAge.textContent = dogYears;
                break;
            case '3':
                // console.log("case 3");
                var remainder = age - 5;
                let lLyst = ['45', '50', '55', '61', '66', '72', '77', '82', '88', '93', '120'];
                dogYears = lLyst[remainder - 1];
                // console.log(dogYears);
                dogAge.textContent = dogYears;
                break

            default:
                console.log("input fits no case.")
        };
    };
};

