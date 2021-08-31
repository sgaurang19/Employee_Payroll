
const mob = document.getElementById("username");
const pass= document.getElementById("pass");
const U_Mob = "8879427323";
const U_pass = "admin";
function makeAjaxPromiseCallLogin(methodType, url, async=true, data){

    return new Promise(function(resolve, reject){
        let xhrload = new XMLHttpRequest();
        xhrload.onload = function(){
                if(xhrload.readyState == 4){
                    if(xhrload.status >=200 && xhrload.status<300){
                        let list = JSON.stringify(xhrload.responseText);
                        resolve(xhrload.responseText);
                        // resolve(list);
                    }
                    else{
                        reject({
                            status: xhrload.status,
                            statusText :xhrload.statusText
                        });
                        console.log("Error occured");
                    }
            }
        }

        xhrload.open(methodType, url, async);
        if(data){
            xhrload.setRequestHeader("Content-Type","application/json");
            xhrload.send(JSON.stringify(data));
        }
        else{
            xhrload.send();
        }
    });

}
function TokenCheck(){
    makeAjaxPromiseCallLogin("get", `http://localhost:3000/credentials/1`, true).then(logs => {
        var tokn = JSON.parse(logs)
        console.log(tokn.TKN)
        if(tokn.TKN != ""){
            window.location.href="http://127.0.0.1:5500/pages/home.html";
        }
    }).catch(err => {console.log("Error")})
}


let validatePassword = ()=>{
    // console.log(mob);
    if((mob.value ==U_Mob)&&(pass.value == U_pass)){
        var token = {
            "TKN" : U_Mob
        };
            makeAjaxPromiseCallLogin("PUT", `http://localhost:3000/credentials/1`, true, token).then(log =>{
                window.location.href="http://127.0.0.1:5500/pages/home.html";
            }).catch(err =>{ console.log(err)
                    
            })
        }
        else{
            const formCtrlErr = pass.parentElement;
                    const smallErr = formCtrlErr.querySelector("small");
                    smallErr.innerText = "Please Enter Valid Username and Password";
        }
}
function tokenCheck(){
    makeAjaxPromiseCallLogin("get", `http://localhost:3000/credentials/1`, true).then(logs => {
        var tokn = JSON.parse(logs)
        console.log(tokn.TKN)
        if(tokn.TKN == ""){
            window.location.href="http://127.0.0.1:5500/pages/login.html";
        }
    }).catch(err => {console.log("Error")})
}
function logout(){
    var tokenremove = {
        "TKN" : ""
    };
    makeAjaxPromiseCallLogin("put", `http://localhost:3000/credentials/1`, true, tokenremove).then(log =>{
                window.location.href="http://127.0.0.1:5500/pages/login.html";
            }).catch(err =>{ console.log(err)})
}