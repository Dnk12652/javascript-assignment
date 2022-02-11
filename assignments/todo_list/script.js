var inputtxt = document.querySelector('input')
var btn = document.querySelector('button')
var remp = document.querySelector(".todos")
var count=0
btn.addEventListener('click',function(){
    var para =document.createElement('p')
    var node_val = document.createTextNode(inputtxt.value)
    para.appendChild(node_val)
    var element = document.querySelector('.todos')
    para.setAttribute('key',count)
    element.appendChild(para)
    count+=1
})
remp.addEventListener('click',remove_val);
function remove_val(e){
    remp.removeChild(e.target)
}
