let btn=document.getElementById('btn');
btn.addEventListener("click",getdata());
function getdata(){
    fetch('https://api.thedogapi.com/v1/breeds')
    // fetch("https://dog.ceo/api/breeds/list/all")
    .then(Response => Response.json())
     .then(data=> handle(data))
     .catch(err => console.log('Request Failed'));
}
   function handle(data){
       let gdata=document.getElementById('tabledata')
       for(let i in data){
           let row=`
           <tr>
           <td>${d[i].id}</td>
            <td>${d[i].name}</td>
            <td>${d[i].origin}</td>
            <td>${d[i].life_span}</td>
            <td><img src=${data[i].image.url} width=300px height=300px </td>
</tr>
        `
        gdata.innerHTML +=row
       }
   }