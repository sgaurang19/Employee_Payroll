function GenderMale(gender){
    if(gender == "m"){
        return "checked";
    }
    else{
        return ""
    }
}
function GenderFemale(gender){
    if(gender == "f"){
        return "checked";
    }
    
    else{
        return ""
    }
}

function showDepts(dep){

        if(dep != null){
            return "true";
        }   
        else{
            return "false"
        }
    }

function setForm(){
    const empData = document.getElementById("EmpForm");
        var EmpPayrollList = JSON.parse(localStorage.getItem("EmpPayrollListUpdate"))[0];
        var m = GenderMale(EmpPayrollList._gender);
        var f = GenderFemale(EmpPayrollList._gender);
        document.getElementById("name").value= EmpPayrollList._empname;
        // <input class="checkbox" type="checkbox" id="dept1" name="c1" value="hr" ${showDepts(EmpPayrollList._empDep[0])}> HR &nbsp;&nbsp;
        // <input class="checkbox" type="checkbox" name="c2" value="sales" ${showDepts(EmpPayrollList._empDep[1])}>Sales &nbsp;&nbsp;
        // <input class="checkbox" type="checkbox" name="c3" value="finance" ${showDepts(EmpPayrollList._empDep[2])}>Finance &nbsp;&nbsp;
        // <input class="checkbox" type="checkbox" name="c4" value="engineer" ${showDepts(EmpPayrollList._empDep[3])}>Engineer &nbsp;&nbsp;
        // <input class="checkbox" type="checkbox" name="c5" value="other" ${showDepts(EmpPayrollList._empDep[4])}>Others &nbsp;&nbsp;
        if(EmpPayrollList._empDep[0] != null){
            document.getElementById("dept1").checked = true; 
        }
        if(EmpPayrollList._empDep[1] != null){
            document.getElementById("dept2").checked = true;  
        }
        if(EmpPayrollList._empDep[2] != null){
            document.getElementById("dept3").checked = true;  
        }
        if(EmpPayrollList._empDep[3] != null){
            document.getElementById("dept4").checked = true;  
        }
        if(EmpPayrollList._empDep[4] != null){
            document.getElementById("dept5").checked = true;  
        }


        if(EmpPayrollList._empProfile == "../assets/img/Ellipse -10.png"){
            document.getElementById("profile4").checked = true; 
        }
        if(EmpPayrollList._empProfile =="../assets/img/Ellipse -2.png"){
            document.getElementById("profile3").checked = true; 
        }
        if(EmpPayrollList._empProfile=="../assets/img/Ellipse -3.png"){
            document.getElementById("profile2").checked = true; 
        }
        if(EmpPayrollList._empProfile=="../assets/img/Ellipse -4.png"){
            document.getElementById("profile1").checked = true; 
        }
        

        if(EmpPayrollList._empGender == "Male"){document.getElementById("Gender1").checked = true;}
        if(EmpPayrollList._empGender == "Female"){document.getElementById("Gender2").checked = true;}


        document.getElementById("Salary1").value = EmpPayrollList._empSal;
        document.getElementById("salVal").innerHTML = EmpPayrollList._empSal;
        document.getElementById("Day").value = EmpPayrollList._empDOJ[0];
        document.getElementById("Month").value = EmpPayrollList._empDOJ[1];

        document.getElementById("Year").value = EmpPayrollList._empDOJ[2];


        // document.getElementById("dept1").checked = showDepts(EmpPayrollList._empDep[0]);
        // document.getElementById("dept2").checked = showDepts(EmpPayrollList._empDep[1]);
        // document.getElementById("dept3").checked = showDepts(EmpPayrollList._empDep[2]);
        // document.getElementById("dept4").checked = showDepts(EmpPayrollList._empDep[3]);
        // document.getElementById("dept5").checked = showDepts(EmpPayrollList._empDep[4]);
        



}

function checkPage(){

    var EmpPayrollList1 = JSON.parse(localStorage.getItem("EmpPayrollListUpdate"));
    
    if(EmpPayrollList1 != null){
        const empData = document.getElementById("EmpForm");
        var EmpPayrollList = JSON.parse(localStorage.getItem("EmpPayrollListUpdate"))[0];
        var m = GenderMale(EmpPayrollList._gender);
        var f = GenderFemale(EmpPayrollList._gender);
        setForm();
        console.log("Female " +GenderFemale(EmpPayrollList._empGender));
        console.log("Male" +GenderMale(EmpPayrollList._empGender));

    //     var formData = `
    //     <div class="headForm"><h2>Employee Payroll Form</h2></div>
    //     <!-- UC2 -->
    // <div class="row">
    //     <label class="label-text" for="name">Name:</label>
    //     <input  class="input-text" type="text" id="name" placeholder="" value ="${EmpPayrollList._empname}" oninput="checkName()">
    //     <small></small>
    // </div>
    // <br>
    // <!-- UC3 -->
    // <div class ="row">
    //     <label class="label-text" for="profile">Profile Iamge</label>
    //     <div class="input-text ver" align="left">
    //         <input type="radio" id="profile4" name="profile" value="../assets/img/Ellipse -10.png">
    //     <img class="rimg" src="../assets/img/Ellipse -10.png">  
    //     <input class="rimg" id="profile3" type="radio" name="profile" value="../assets/img/Ellipse -2.png">
    //     <img class="rimg" src="../assets/img/Ellipse -2.png">  
    //     <input type="radio" id="profile2" name="profile" value="../assets/img/Ellipse -3.png">
    //     <img  class="rimg" src="../assets/img/Ellipse -3.png">  
    //     <input type="radio" id="profile1" name="profile" value="../assets/img/Ellipse -4.png">
    //     <img class="rimg" src="../assets/img/Ellipse -4.png"> 
    //     <br>
    //     <small></small>
    //     </div>
        
        
    // </div>
    // <br>
    // <!-- UC4 -->
    // <div class ="row">
    //     <label class="label-text" for="Gender">Gender</label>
    //     <div class="input-text">
    //         <input type="radio" name="Gender" id=""value="m"  >Male
    //         <input type="radio" name="Gender" id="Gender2" value="f" >Female
    //         <br><small></small>
    //     </div>
         
        
    // </div>
    // <br>

    // <!-- UC5 -->
    // <div class ="row">
    //     <label class="label-text" for="Dept">Department</label>
    //     <div class="input-text ver">
    //         <input class="checkbox" type="checkbox" name="c1" value="hr" ${showDepts(EmpPayrollList._empDep[0])}> HR &nbsp;&nbsp;
    //         <input class="checkbox" type="checkbox" name="c2" value="sales" ${showDepts(EmpPayrollList._empDep[1])}>Sales &nbsp;&nbsp;
    //         <input class="checkbox" type="checkbox" name="c3" value="finance" ${showDepts(EmpPayrollList._empDep[2])}>Finance &nbsp;&nbsp;
    //         <input class="checkbox" type="checkbox" name="c4" value="engineer" ${showDepts(EmpPayrollList._empDep[3])}>Engineer &nbsp;&nbsp;
    //         <input class="checkbox" type="checkbox" name="c5" value="other" ${showDepts(EmpPayrollList._empDep[4])}>Others &nbsp;&nbsp;
            
            
    //     </div>
         
        
    // </div>
    // <br>

    // <!-- uc6 -->
    // <div class ="row">
    //     <label class="label-text" for="Salary">Choose Your Salary</label>
    //     <div class="input-text">
    //         <input type="range" id="Salary1" name="salary1" oninput="slide(this.value);" min="0" max="400000" value="${EmpPayrollList._empSal}"> 
    //         <div style="display: flex; justify-content: space-between;"><p style="font-size:10px;">Min= Rs. 0 </p> <p style="font-size:10px;">Max= Rs. 4,00,000</p></div>
    //         <p>Salary: Rs. <span id="salVal">${EmpPayrollList._empSal}</span> </p>
            
            
    //     </div>
    //     <script>
    //         // Salary Event
    //         function slide( val){
    //             // var slider = document.getElementById("salary1");
    //             var output = document.getElementById("salVal");
    //             // var showSal= slider.value; // Display the default slider value

    //             // Update the current slider value (each time you drag the slider handle)
                
    //             output.innerHTML = val;
    //             }
    //     </script>
    // </div>

    //     <br>

    //     <!-- UC7 -->    
    //     <div class ="row">
    //         <label class="label-text" for="DOJ">Start Date</label>
    //         <div class="input-text">
    //             <select style="width: 30%;"name="Day" id="Day">
    //                 <option value ="">Day</option>
    //                 <option value ="${EmpPayrollList._empDOJ[0]}" selected>${EmpPayrollList._empDOJ[0]}</option>

    //                     <option value="01">01</option>
    //                     <option value="02">02</option>
    //                     <option value="03">03</option>
    //                     <option value="04">04</option>
    //                     <option value="05">05</option>
    //                     <option value="06">06</option>
    //                     <option value="07">07</option>
    //                     <option value="08">08</option>
    //                     <option value="09">09</option>
    //                     <option value="10">10</option>
    //                     <option value="11">11</option>
    //                     <option value="12">12</option>
    //                     <option value="13">13</option>
    //                     <option value="14">14</option>
    //                     <option value="15">15</option>
    //                     <option value="16">16</option>
    //                     <option value="17">17</option>
    //                     <option value="18">18</option>
    //                     <option value="19">19</option>
    //                     <option value="20">20</option>
    //                     <option value="21">21</option>
    //                     <option value="22">22</option>
    //                     <option value="23">23</option>
    //                     <option value="24">24</option>
    //                     <option value="25">25</option>
    //                     <option value="26">26</option>
    //                     <option value="27">27</option>
    //                     <option value="28">28</option>
    //                     <option value="29">29</option>
    //                     <option value="30">30</option>
    //                     <option value="31">31</option>
    //                 </select>
    //               <select  style="width: 30%;"name="Month" id="Month">
    //                 <option value ="">Month</option>
    //                 <option value ="${EmpPayrollList._empDOJ[1]}" selected>${EmpPayrollList._empDOJ[1]}</option>
    //                 <option value="01">January</option>
    //                 <option value="02">February</option>
    //                 <option value="03">March</option>
    //                 <option value="04">April</option>
    //                 <option value="05">May</option>
    //                 <option value="06">June</option>
    //                 <option value="07">July</option>
    //                 <option value="08">August</option>
    //                 <option value="09">September</option>
    //                 <option value="10">October</option>
    //                 <option value="11">November</option>
    //                 <option value="12">December</option>
    //               </select>
    //               <select style="width: 30%;"name="Year" id="Year">
                    
    //                     <option value ="">Year</option>
    //                     <option value ="${EmpPayrollList._empDOJ[2]}" selected>${EmpPayrollList._empDOJ[2]}</option>
    //                     <option value="1990">1990</option>
    //                     <option value="1991">1991</option>
    //                     <option value="1992">1992</option>
    //                     <option value="1993">1993</option>
    //                     <option value="1994">1994</option>
    //                     <option value="1995">1995</option>
    //                     <option value="1996">1996</option>
    //                     <option value="1997">1997</option>
    //                     <option value="1998">1998</option>
    //                     <option value="1999">1999</option>
    //                     <option value="2000">2000</option>
    //                     <option value="2001">2001</option>
    //                     <option value="2002">2002</option>
    //                     <option value="2003">2003</option>
    //                     <option value="2004">2004</option>
    //                     <option value="2005">2005</option>
    //                     <option value="2006">2006</option>
    //                     <option value="2007">2007</option>
    //                     <option value="2008">2008</option>
    //                     <option value="2009">2009</option>
    //                     <option value="2010">2010</option>
    //                     <option value="2011">2011</option>
    //                     <option value="2012">2012</option>
    //                     <option value="2013">2013</option>
    //                     <option value="2014">2014</option>
    //                     <option value="2015">2015</option>
    //                     <option value="2016">2016</option>
    //                     <option value="2017">2017</option>
    //                     <option value="2018">2018</option>
    //                     <option value="2019">2019</option>
    //                     <option value="2020">2020</option>
    //                     <option value="2021">2021</option>
    //                 </select>

    //             <br>
    //             <small></small>
    //         </div>
    //     </div>

    //     <!-- uc8 -->
    //     <div class ="row">
    //         <label class="label-text" for="Notes">Notes</label>
    //         <div class="input-text">
    //             ​<textarea id="txtArea" rows="3"></textarea>
                
    //         </div>
    //     </div>

    //     <br>
    //     <!-- uc9  -->
    //     <div class ="row">
    //         <div class="label-text btn">
    //         <button type="button" id="cancel"> Cancel</button></div>
    //         <div class="input-text" align="right">
    //             ​<button type="button" id="button" onclick="validate()"> Submit</button>
    //                 <button type="reset" id="rest"> Reset</button>
                
    //         </div>

    //     `;
    //     empData.innerHTML = formData;
    } 

}