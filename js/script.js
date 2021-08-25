const ename = document.getElementById("name");
const ename22 = document.getElementById("name");

// const profile = document.getElementById("profile");
// const gender = document.getElementById("Gender");
const profile123 =document.getElementsByName("profile");
const gender123 = document.getElementsByName("Gender");
const day = document.getElementById("Day");
const month = document.getElementById("Month");
const year = document.getElementById("Year");
const dept = document.getElementsByClassName("checkbox"); 


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
            return 1;
        
        }else{
            showError(username, "required only characters (First letter should be capital) and length of 2 to 30");
            return 0;
        }
    }
    else{
        showError(username, 'Name is required.');
        return 0;

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
        return 1;
        // console.log("right")
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
function getRadio(profile){
    for(var i = 0 ; i< profile.length ; i++){
        if(profile[i].checked){
           
            return profile[i].value;
        }
    }
}
function getValuesCheck(dept){
    let deptli = new Array();
    for(var i = 0; i< dept.length; i++){
        if(dept[i].checked){
            deptli.push(dept[i].value);
        }
    }
    return deptli;
}
function UpdateStorage(newdata){
    var EmpPayrollList = JSON.parse(localStorage.getItem("EmpPayrollList"));
    
    if(EmpPayrollList != null){
        EmpPayrollList.push(newdata);
    }
    else{
        EmpPayrollList = [newdata];
    }
    localStorage.setItem("EmpPayrollList", JSON.stringify(EmpPayrollList));
}

const validate = () =>{

    


    try{
    var uname = checkUsername(ename);
    var pro = getRadio(profile123);
    // checkProfile(profile);
    // checkGender(gender);
    var gen = getRadio(gender123);
    var DOJ = checkDate(day, month, year);
    var deptlist = getValuesCheck(dept);
        
    var EmpPayrollListUpdateAvailable = JSON.parse(localStorage.getItem("EmpPayrollListUpdate"))
    if(EmpPayrollListUpdateAvailable != null){
    var EmpPayrollListUpdate = JSON.parse(localStorage.getItem("EmpPayrollListUpdate"))[0];
    }
    console.log()
    
    if(EmpPayrollListUpdate != null){
        let newDataUpdate = {

        };
        var Eid= EmpPayrollListUpdate._id;
    
        


        newDataUpdate._name = ename.value;
        newDataUpdate._profile_img = pro;
        newDataUpdate._gender = gen;
        newDataUpdate._dept = deptlist;
        newDataUpdate._salary = document.getElementById("Salary1").value;
        let dateContentUpdate = new Array();
        dateContentUpdate.push(day.value);
        dateContentUpdate.push(month.value);
        dateContentUpdate.push(year.value);
        newDataUpdate._doj = dateContentUpdate;
        var idnew  = Eid;
        
        newDataUpdate._id = idnew;


        let empDataUp = JSON.parse(localStorage.getItem("EmpPayrollList"));
        var eidUp= idnew;
        let employeePayroll_ID1 = empDataUp.find(emp1 => emp1._id == eidUp);
        const id1 = empDataUp.map(emp1 => emp1._id).indexOf(employeePayroll_ID1._id);
        empDataUp.splice(id1, 1);
        localStorage.setItem("EmpPayrollList", JSON.stringify(empDataUp));

        UpdateStorage(newDataUpdate);
        localStorage.removeItem("EmpPayrollListUpdate")

        

    }
    else{
        let newData = {};
        newData._name = ename.value;
        newData._profile_img = pro;
        newData._gender = gen;
        newData._dept = deptlist;
        newData._salary = document.getElementById("Salary1").value;
        let dateContent = new Array();
        dateContent.push(day.value);
        dateContent.push(month.value);
        dateContent.push(year.value);
        newData._doj = dateContent;
        var id  = Math.floor((Math.random() * 10000) + 1);
            // let empData = JSON.parse(localStorage.getItem("EmpPayrollList"));
            // var eid= node.id;
            // let employeePayroll_ID = empData.find(emp => emp._id == eid);
            // const id_list = empData.map(emp => emp._id).indexOf(employeePayroll_ID._id);
            // if(id_list == id){
            //     var id  = Math.floor((Math.random() * 10000) + 1);
            //     newData._id = id;
            // }
            // else{
                newData._id = id;
            // }
       
       

        console.log(newData);
        if(uname == 1 && DOJ == 1 ){
            UpdateStorage(newData);
        }
    }

    }catch(e){
        console.log(e);
    }
    window.location.href="http://127.0.0.1:5500/pages/home.html";
}

