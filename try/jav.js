let btn=document.getElementById("btn");
btn.addEventListener("click",getdata)


function getdata(){
      
      let xhr=new XMLHttpRequest();
      xhr.open("get","https://jsonplaceholder.typicode.com/users",true);

      xhr.onload=function(){

          let data=JSON.parse(this.responseText);
               displaytable(data);

      }
      xhr.send();



}

   function displaytable(data){
          let gdata=document.getElementById("tabledata");
          for(let i in data){

              let row =`
              
              <tr>
               <td>${data[i].id}</td>
               <td>${data[i].name}</td>
               <td>${data[i].phone}</td>
               <td>${data[i].email}</td>
              </tr>
              
              `
                   gdata.innerHTML+=row;
          }

              

   }


















