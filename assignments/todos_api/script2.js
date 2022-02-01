var button = document.querySelector("#clickme");
var completed1 = document.querySelector(".completed");
var notcompleted1 = document.querySelector(".notcompleted");
button.addEventListener("click", getapi)
function getapi(){
  fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => renderdata(data))
}
function renderdata(data){
    for(var i=0; i<data.length; i++){
        var item = data[i];
        if (item.completed===false){
            let para = document.createElement('p')
            let text = item.title;
            para.innerHTML = text;
            notcompleted1.appendChild(para);
        }
        else if (item.completed===true){
            let para= document.createElement('p')
            let text = item.title;
            para.innerHTML = text;
            completed1.appendChild(para);
        }  
    }
}
