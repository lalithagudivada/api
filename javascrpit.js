let b=document.getElementById('btn')
b.addEventListener("click",data());
function data(){
    let xhr=new XMLHttpRequest();
    xhr.open("get","https://api.thedogapi.com/v1/breeds" ,true);
    xhr.send();
    xhr.onload=function(){
        let d=JSON.parse(this.responseText);
        display(d);
    }
}
function display(d){
    let g=document.getElementById('tabledata');
    for(let i in d){
        let row=`
        <tr>
        <td>${d[i].id}</td>
         <td>${d[i].name}</td>
         <td>${d[i].origin}</td>
         <td>${d[i].life_span}</td>
     
        </tr>
        `
      g.innerHTML+=row;
    }
}