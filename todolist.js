
function addEvent(text){

    let list =document.createElement("li");
    list.classList.add("li");

    let icondiv = document.createElement("div");
    icondiv.classList.add("icon");

    let paragraph = document.createElement("p");
    paragraph.innerText=text;

    let indiv =document.createElement("div");
    indiv.appendChild(paragraph);
    indiv.classList.add("para");


    let outerdiv =document.createElement("outerdiv");
    outerdiv.classList.add("start");

    outerdiv.appendChild(icondiv);
    outerdiv.appendChild(indiv);

    list.appendChild(outerdiv);

    let deldiv = document.createElement("div");
    deldiv.classList.add("delete");
    deldiv.addEventListener("click",function(){
        let parent = this.parentElement;
        parent.remove();
        
    });

    list.appendChild(deldiv);
    list.addEventListener("click",function(){
        let icon = this.querySelector(".icon");
        icon.classList.toggle("check");
        this.classList.toggle("checked");
     
    });
    let ul = document.querySelector("ul");
    ul.appendChild(list);
   
}
let addB= document.querySelector(".AddButton");
addB.addEventListener("click",function(){

    let addtext= document.querySelector(".searchbox");
    let input= document.querySelector("input");
    let text=input.value;
    text = text.trim();
    if(!(text==="")){
        input.value="";
        addEvent(text);
    }else{
        alert("Sorry ! Empty Task Not Supported.");
        input.value="";
    }

});
