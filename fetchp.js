let btn=document.getElementById('btn');
btn.addEventListener("click" ,getdata);
function getdata(){
    
    let xhr=new XMLHttpRequest();
    xhr.open("get" ,"https://api.thedogapi.com/v1/breeds" ,true);
   
    xhr.onload=function(){
        let data=JSON.parse(this.responseText);
        displaytable(data);
    }
    xhr.send();
}
function displaytable(data){
    let gdata=document.getElementById('tabledata');
    for(let i in data){
        let row=`
        <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].origin}</td>
        <td>${data[i].life_span}</td>
        <td><img src=${data[i].image.url} width=300px height=300px </td>
        </tr>
        `
        gdata.innerHTML+=row;
    }
}