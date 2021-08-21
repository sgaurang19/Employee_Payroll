// variables
const ename = document.getElementById("name");
const ename22 = document.getElementById("name");

const profile = document.getElementById("profile");
const gender = document.getElementById("Gender");
const day = document.getElementById("Day");
const month = document.getElementById("Month");
const year = document.getElementById("Year");




function showError(input, msg){
    const formCtrl = input.parentElement;
    // formCtrl.className = "form-control error";
    const small = formCtrl.querySelector("small");
    small.innerText = msg;
}
//show sucess
function showSucess(input){
    const formCtrl = input.parentElement;
    // formCtrl.className = "form-control success";
    const small = formCtrl.querySelector("small");
    if(small.value != ''){
    small.style.display="none"}
}
//input value

function checkName(){

    const usern = ename22;
    if(usern.value != ''){
        var regexName = /^[A-Z ][a-z]{2,30}$/;
        var result = regexName.test(usern.value);
        if(result == 1){
            showSucess(usern);
        
        }else{
            showError(usern, "required only characters (First letter should be capital) and length of 2 to 30");
        }
    }
    else{
        showError(usern, 'Username is required');
        //btn.disabled = true;
    }
}
//
function checkUsername(username){
    if(username.value.trim()!= ''){
        var regexName = /^[A-Z ][a-z]{2,30}$/;
        var result = regexName.test(username.value);
        if(result == 1){
            showSucess(username);
        
        }else{
            showError(username, "required only characters (First letter should be capital) and length of 2 to 30");
        }
    }
    else{
        showError(username, 'Name is required.');

    }
}

function checkProfile(profile){
    
        // var regexName = /^[A-Z ][a-z]{2,30}$/;
        // var result = regexName.test(username.value);
        console.log(profile.checked);
        if(profile.checked  == true){
            showSucess(profile);
        
        }else{
            showError(profile, "Profile is not selected.");
        }
    
    
}
function checkGender(gender){
    
    // var regexName = /^[A-Z ][a-z]{2,30}$/;
    // var result = regexName.test(username.value);
    console.log(gender.checked);
    if(gender.checked  == true){
        showSucess(gender);
    
    }else{
        showError(gender, "Gender is not selected.");
    }


}

function checkDate(day, month, year){
    var d = new Date();

    var date = d.getUTCDate();
    var month1 = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
    var year1 = d.getUTCFullYear();
   


    if(year.value >= year1) {
        console.log("yeae")
        if(month.value == month1){
            if(day.value > date){
                showError(day, "Must Not be Future Date.");
            }

        }
        if((month.value > month1)){
            console.log("month")
            showError(day, "Must Not be Future Date.");
            if(day.value > date){
                showError(day, "Must Not be Future Date.");
            }
        }
    }
    else{
        showSucess(day);
        console.log("right")
    }
    var count = 30;
    var priorDate = new Date();
    priorDate.setDate(priorDate.getDate() - 30)
    var pd = priorDate.getUTCDate();
    var pm = priorDate.getUTCMonth();
    var py = priorDate.getUTCFullYear()
    console.log(pd + " " + pm + " " +py)
    var sum =day.value -pd ;
    var sum2 = month.value - pm;
    var sum3 = year.value - py;

    console.log(sum)

    if(year.value == py) {
        console.log("yeae")
        if(month.value == pm){
            console.log("mo")
            if(day.value < pd){
                showError(day, "should be within 30 days of joining.");
            }

        }
        if((month.value < pm)){
            console.log("month")
            showError(day, "should be within 30 days of joining.");
            if(day.value < pd){
                showError(day, "should be within 30 days of joining.");
            }
        }
    }
    else{
        showSucess(day);
        console.log("right")
    }


    
}

const validate = () =>{

    checkUsername(ename);
    checkProfile(profile);
    checkGender(gender);
    checkDate(day, month, year);
}