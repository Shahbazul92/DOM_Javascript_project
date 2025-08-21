let isi = document.querySelector("h5");
let addF = document.querySelector("#acr");

let flag = 0

acr.addEventListener("click", function(){
    if(flag == 0){
        isi.innerHTML = "Friend";
        isi.style.color = "green";
        acr.innerHTML = "Remove Friend";
        flag = 1;
    } else {
        isi.innerHTML = "Unknown";
        isi.style.color = "red";
        acr.innerHTML = "Add Friend";
        acr.style.fontSize = "10px";
        flag = 0;
    }
})

