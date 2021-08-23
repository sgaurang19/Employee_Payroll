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

// var cont ="";
// let josnData = JSON.parse(localStorage.getItem("EmpPayrollList"));
// for( var i = 0; i<josnData.length; i++ )

// {

//     console.log(i)
// cont = cont + `
//             <tr>
//                     <td><img src="${josnData[i]._profile_img}"</td>
//                     <td>${josnData[i]._name}</td>
//                     <td>${josnData[i]._gender}</td>
//                     <td> <div class="divDept"> <label class="deptSales">${josnData._dept}</label> </div></td>
//                     <td>${josnData[i]._salary}</td>
//                     <td>${josnData[i]._doj}</td>
//                     <td><div class="divDept"><input type="image" class="actionImg"src="../assets/img/delete_ic.png"><input type="image" class="actionImg" src="../assets/img/edit_ic.png"></div></td>
//                 </tr> 
// `;
// console.log(cont);

// }
// empData.innerHTML = headCont + cont;
// var showCount = document.getElementById("number");
// showCount.innerHTML = i;
