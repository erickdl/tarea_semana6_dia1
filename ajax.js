

$("#btnsubmit").click(function(event){
    event.preventDefault();
    let objPublicacion = {
        title: inputpost.value,
        body: inputpostbody.value,
        userId: selectuserid.value
    }
    let ajax = new XMLHttpRequest();
    ajax.timeout = 4000;
    ajax.ontimeout=()=>{
        console.log("el servidor no responde");
        
    }
    ajax.onreadystatechange = ()=>{
        if(ajax.readyState == 4){
            console.log(ajax.responseText);
            console.log(ajax.status);
        }
    }
    ajax.open("POST","https://jsonplaceholder.typicode.com/posts");
    ajax.setRequestHeader("Content-type","application/json");
    ajax.send(JSON.stringify(objPublicacion));
});  
    

// if(ruta.indexOf("get")>=0){
//     console.log("estoy en get");
    
// }



// let btnTraerDatos = document.getElementById("btnTraerDatos");

// btnTraerDatos.onclick = () => {

//     let postman = new XMLHttpRequest();
//     //la funcion send() hace dos acciones
//     //1.- Establece el body o el contenido que va a enviar al servidor
//     //2.- Dispara la peticion   HTTP


//     postman.onreadystatechange = () => {
//         let resultado = document.getElementById("resultado");
//         switch (postman.readyState) {
//             case 1:
//                     resultado.innerHTML=`<div class="alert alert-primary" role="alert">
//                     <i class="fas fa-sync-alt fa-spin"></i><span style="margin-left:30px">CARGANDO</span>
//                   </div>`;
//                     console.log("CARGANDO");   
//                 break;
//             case 2:
                    
//                 break;
//             case 3:
                
//                 break;
//             case 4:
//                 console.log("la data ya esta aqui");
//                 console.log(postman.responseText);
//                 let jsonRpta = JSON.parse(postman.responseText);
//                 resultado.innerHTML = "";
//                 let table = document.createElement("table");
//                 table.classList.add("table")
//                 let thead = document.createElement("thead");
//                 thead.innerHTML = `<th>id</th>
//                                 <th>email</th>
//                                 <th>phone</th>
//                                 <th>username</th>
//                                 <th>webside</th>`;
//                 table.appendChild(thead);
//                 for (let i = 0; i < jsonRpta.length; i++) {
//                     let tbody = document.createElement("tbody");
//                     tbody.innerHTML = `<tr>
//         <td>${jsonRpta[i].id}</td>
//         <td>${jsonRpta[i].email}</td>
//         <td>${jsonRpta[i].phone}</td>
//         <td>${jsonRpta[i].username}</td>
//         <td>${jsonRpta[i].website}</td>
//     </tr>`
//                     table.appendChild(tbody);
//                 }
//                 resultado.appendChild(table);
//                 console.log(jsonRpta);

//                 break;
//         }
//     }
//     postman.onprogress=(evento)=>{
//         console.log(evento);
//     }
//     postman.open("GET", "https://jsonplaceholder.typicode.com/users");

//     postman.send(null);
// }
 