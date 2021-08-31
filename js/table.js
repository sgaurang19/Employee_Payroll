// require("service.js");
const empData = document.getElementById("EmpData");
var headCont = '<colgroup><col span="1" style="width: 10%;"><col span="1" style="width: 50%;"><col span="1" style="width: 20%;"><col span="1" style="width: 35%;"><col span="1" style="width: 15%;"><col span="1" style="width: 25%;"><col span="1" style="width: 15%;"></colgroup> <tr><th></th> <th>Name</th> <th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>';
// var cont = `<tr> <td><img src="../assets/img/Ellipse -1.png" alt="prfile"></td> <td>FirstName MiddleName LastName</td> <td>Male</td> <td> <div class="divDept"> <label class="deptSales">Sales</label> <label class="deptHr">HR</label> <label class="deptFinance">Finance</label></div></td> <td><span>&#8377;</span>100000</td> <td>31/10/2012</td> <td><div class="divDept"><input type="image" class="actionImg"src="../assets/img/delete_ic.png"><input type="image" class="actionImg" src="../assets/img/edit_ic.png"></div></td> `;

// const createEmployeePayrollObject = () =>{
//     let listofEmployess = [{
//         empName: "Gaurang", 
//         empGender: "M",
//         empDept: ["hr", "Sales"],
//         empSalary:"100000",
//         empDate: "10/10/2021",
//     }
//     ];
//     return listofEmployess;
// }
var josnDatal ="";
function ShowEmp(){
    var cont ="";
    // let josnData = JSON.parse(localStorage.getItem("EmpPayrollList"));

 makeAjaxPromiseCall("GET", site_properties.JSON_host_server, true).then(resp =>{
    
           josnDatal = JSON.parse(resp);

    //    console.log(josnDatal.length)
    console.log(josnDatal)
    for (const josnData of josnDatal) {



    cont = cont + `
                <tr>
                        <td><img src="${josnData._profile_img}"</td>
                        <td>${josnData._name}</td>
                        <td>${josnData._gender}</td>
                        <td> <div class="divDept"> ${showDeptsTable(josnData._dept)} </div></td>
                        <td><span>&#8377;</span> ${josnData._salary}</td>
                        <td>${josnData._doj[0]} / ${josnData._doj[1]} / ${josnData._doj[2]}</td>
                        <td><div class="divDept"><input id="${josnData.id}" type="image" class="actionImg" onclick="delEmp(this)" src="../assets/img/delete_ic.png"><input type="image" id="${josnData.id}" class="actionImg" onclick="updateEmp(this)" src="../assets/img/edit_ic.png"></div></td>
                    </tr> 
    `;
    // console.log(cont);
    empData.innerHTML = headCont + cont;
    var showCount = document.getElementById("number");
    showCount.innerHTML = josnDatal.length;
    }
        
    }).catch(err =>{
        console.log("error"+ err)
    });
}
ShowEmp();
function delEmp(node){
    // let empData = JSON.parse(localStorage.getItem("EmpPayrollList"));
    var eid= node.id;
    // let employeePayroll_ID = empData.find(emp => emp._id == eid);
    // const id = empData.map(emp => emp._id).indexOf(employeePayroll_ID._id);
    // empData.splice(id, 1);
    
    // localStorage.setItem("EmpPayrollList", JSON.stringify(empData));
    // ShowEmp();
    makeAjaxPromiseCall("delete", site_properties.JSON_host_server+`/${node.id}`, true).then(resp =>{
        ShowEmp();
    }).catch(err => {console.log("error" + err)})

}


function showDeptsTable(dep){
    var de = "";
    console.log(dep)
    for (var x=0; x<dep.length; x++){
        console.log(x)
        
        if(dep[x] != null){
            console.log(dep[x])
           de = de + `<label class="deptFinance">${dep[x]}</label>`;
        }   
    }
    return de;
}

function updateEmp(node){
    
let newEmpData1 = { };
    let empData1 = JSON.parse(localStorage.getItem("EmpPayrollList"));
    var eid1= node.id;
    makeAjaxPromiseCall("GET", site_properties.JSON_host_server+`/${node.id}`, true).then(resp =>{
    
        josnDataload = JSON.parse(resp);
    newEmpData1._empname = josnDataload._name
    newEmpData1._empProfile = josnDataload._profile_img;
    newEmpData1._empGender = josnDataload._gender;
    newEmpData1._empDep = josnDataload._dept;
    newEmpData1._empSal = josnDataload._salary;
    newEmpData1._empDOJ = josnDataload._doj;
    newEmpData1.id = eid1;

    var EmpPayrollList1 = JSON.parse(localStorage.getItem("EmpPayrollListUpdate"));
    
    if(EmpPayrollList1 != null){
        EmpPayrollList1.push(newEmpData1);
    }
    else{
        EmpPayrollList1 = [newEmpData1];
    }
    localStorage.setItem("EmpPayrollListUpdate", JSON.stringify(EmpPayrollList1));
    window.location.href="http://127.0.0.1:5500/pages/index.html";

    }

    ).catch(err => {console.log(err)});

    // let employeePayroll1_ID = empData1.find(emp1 => emp1._id == eid1);
    // const id = empData1.map(emp => emp._id).indexOf(employeePayroll1_ID._id);
    // newEmpData1._empname = employeePayroll1_ID._name
    // newEmpData1._empProfile = employeePayroll1_ID._profile_img;
    // newEmpData1._empGender = employeePayroll1_ID._gender;
    // newEmpData1._empDep = employeePayroll1_ID._dept;
    // newEmpData1._empSal = employeePayroll1_ID._salary;
    // newEmpData1._empDOJ = employeePayroll1_ID._doj;
    // newEmpData1._id = eid1;

    // var EmpPayrollList1 = JSON.parse(localStorage.getItem("EmpPayrollListUpdate"));
    
    // if(EmpPayrollList1 != null){
    //     EmpPayrollList1.push(newEmpData1);
    // }
    // else{
    //     EmpPayrollList1 = [newEmpData1];
    // }
    // localStorage.setItem("EmpPayrollListUpdate", JSON.stringify(EmpPayrollList1));
  
}
function searchQuery(){
    // const searchvar = document.getElementById("searchKey").value.toLowerCase();
    // if(searchvar == ""){
    //     ShowEmp();
    // }
    // else{
    // console.log(searchvar);
    // makeAjaxPromiseCall("GET", site_properties.JSON_host_server, true).then(resp1 =>{
    
    //     josnDatal1 = JSON.parse(resp1);
    //     // console.log(josnDatal1)
    //     var jsonList = josnDatal1.filter(function(user){
    //         user._name = user._name.toLowerCase();
    //        return user._name.indexOf(searchvar) > -1; 
    //     });
    //   console.log("list  "+ jsonList);
    // //   console.log(josnDatal1)
    //     for (const josnData1 of josnDatal1) {
    //         cont = cont + `
    //                     <tr>
    //                             <td><img src="${josnData1._profile_img}"</td>
    //                             <td>${josnData1._name}</td>
    //                             <td>${josnData1._gender}</td>
    //                             <td> <div class="divDept"> ${showDeptsTable(josnData1._dept)} </div></td>
    //                             <td><span>&#8377;</span> ${josnData1._salary}</td>
    //                             <td>${josnData1._doj[0]} / ${josnData1._doj[1]} / ${josnData1._doj[2]}</td>
    //                             <td><div class="divDept"><input id="${josnData1.id}" type="image" class="actionImg" onclick="delEmp(this)" src="../assets/img/delete_ic.png"><input type="image" id="${josnData1.id}" class="actionImg" onclick="updateEmp(this)" src="../assets/img/edit_ic.png"></div></td>
    //                         </tr> 
    //         `;
    //         // console.log(cont);
    //         empData.innerHTML = headCont + cont;
    //         var showCount = document.getElementById("number");
    //         showCount.innerHTML = josnDatal.length;
    //         }

    // }).catch(err =>{

    // });
    // }
    var input, tr, filter, table, td, i;
    input = document.getElementById("searchKey");
    // if(input == ""){
    //     ShowEmp();
    // }
    // else{
    //     console.log(input.value.toLowerCase())
        input.addEventListener('keyup', function(){
            
            filter = input.value.toUpperCase();
            table = empData;
            tr = table.getElementsByTagName("tr");
            for (i=0; i<tr.length; i++){
                td = tr[i].getElementsByTagName("td");
                for(var j=0; j<td.length; j++){
                    let tdata = td[j];
                    if(tdata){
                        if(tdata.innerHTML.toUpperCase().indexOf(filter)>-1){
                            tr[i].style.display ="";
                            break;
                        }else{
                            tr[i].style.display = "none"
                        }
                    }
                }
            }
            // console.log(i);
            // var showCount = document.getElementById("number");
            // showCount.innerHTML = j - tr.length;    
        }
        
        );
        


    // }

}