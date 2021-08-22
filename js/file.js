// variables
const ename = document.getElementById("name");
const ename22 = document.getElementById("name");

const profile = document.getElementById("profile");
const gender = document.getElementById("Gender");
const day = document.getElementById("Day");
const month = document.getElementById("Month");
const year = document.getElementById("Year");
export default class Employee{
    constructor(){}
    setEname(ename){
       var ename = this.ename
    }
    setProfile(profile){
        var profile = this.profile;
    }
    setGender(gender){
        var gender = this.gender;
    }
    setDay(day){
        var day = this.day;
    }
    setMonth(month){
        var month = this.month;
    }
    setYear(year){
        var year = this.year;
    }
    getEname(){
        return ename;
    }
    
    getProfile(){
        return profile;
    }
    
    getGender(){
        return gender;
    }
    
    getDay(){
        return day;
    }
    
    getMonth(){
        return month;
    }
    
    getYear(){
        return year;
    }

}
