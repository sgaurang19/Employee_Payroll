function makeAjaxPromiseCall(methodType, url, async=true, data){

    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
                if(xhr.readyState == 4){
                    if(xhr.status >=200 && xhr.status<300){
                        let list = JSON.stringify(xhr.responseText);
                        resolve(xhr.responseText);
                        // resolve(list);
                    }
                    else{
                        reject({
                            status: xhr.status,
                            statusText :xhr.statusText
                        });
                        console.log("Error occured");
                    }
            }
        }

        xhr.open(methodType, url, async);
        if(data){
            xhr.setRequestHeader("Content-Type","application/json");
            xhr.send(JSON.stringify(data));
        }
        else{
            xhr.send();
        }
    });

}