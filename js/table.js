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

function showDeptsTable(dep){
    var de = "";
    for (var x=0; x<dep.length; x++){
        console.log(x)
        if(dep[x] != null){
            console.log(dep[x])
           de = de + `<label class="deptFinance">${dep[x]}</label>`;
        }   
    }
    return de;
}

function ShowEmp(){
    var cont ="";
    let josnData = JSON.parse(localStorage.getItem("EmpPayrollList"));
    for( var i = 0; i<josnData.length; i++ )

    {


    cont = cont + `
                <tr>
                        <td><img src="${josnData[i]._profile_img}"</td>
                        <td>${josnData[i]._name}</td>
                        <td>${josnData[i]._gender}</td>
                        <td> <div class="divDept"> ${showDeptsTable(josnData[i]._dept)} </div></td>
                        <td><span>&#8377;</span> ${josnData[i]._salary}</td>
                        <td>${josnData[i]._doj[0]} / ${josnData[i]._doj[1]} / ${josnData[i]._doj[2]}</td>
                        <td><div class="divDept"><input id="${josnData[i]._id}" type="image" class="actionImg" onclick="delEmp(this)" src="../assets/img/delete_ic.png"><input type="image" id="${josnData[i]._id}" class="actionImg" onclick="updateEmp(this)" src="../assets/img/edit_ic.png"></div></td>
                    </tr> 
    `;
    // console.log(cont);

    }
    empData.innerHTML = headCont + cont;
    var showCount = document.getElementById("number");
    showCount.innerHTML = i;
}
ShowEmp();
function delEmp(node){
    let empData = JSON.parse(localStorage.getItem("EmpPayrollList"));
    var eid= node.id;
    let employeePayroll_ID = empData.find(emp => emp._id == eid);
    const id = empData.map(emp => emp._id).indexOf(employeePayroll_ID._id);
    empData.splice(id, 1);
    
    localStorage.setItem("EmpPayrollList", JSON.stringify(empData));
    ShowEmp();
}
function updateEmp(node){
    
let newEmpData1 = { };
    let empData1 = JSON.parse(localStorage.getItem("EmpPayrollList"));
    var eid1= node.id;
    let employeePayroll1_ID = empData1.find(emp1 => emp1._id == eid1);
    const id = empData1.map(emp => emp._id).indexOf(employeePayroll1_ID._id);
    newEmpData1._empname = employeePayroll1_ID._name
    newEmpData1._empProfile = employeePayroll1_ID._profile_img;
    newEmpData1._empGender = employeePayroll1_ID._gender;
    newEmpData1._empDep = employeePayroll1_ID._dept;
    newEmpData1._empSal = employeePayroll1_ID._salary;
    newEmpData1._empDOJ = employeePayroll1_ID._doj;
    newEmpData1._id = eid1;

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
