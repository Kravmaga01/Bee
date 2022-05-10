function guardar(){
let nombre = document.getElementById("Nombre").value;
let fecha = document.getElementById("fecha").value;
let estado = document.getElementById("estado").value;
let descrip= document.getElementById("descrip").value;

var obj = new TAREAS(nombre,fecha,descrip,estado);
obj = new LISTA (obj.getName(),obj.getEstatus());
console.log(obj.getEstado());
if (estado === "pendiente"){
    let dto = document.getElementById("taskP");
    let dao = obj.getEstado();
    dto.append(dao);
    //document.querySelector("#taskP").createElement(obj.getEstado());
}else if (estado === "emproceso"){
    let dto = document.getElementById("taskE");
    let dao = obj.getEstado();
    dto.append(dao);
}else if (estado === "terminada"){
    let dto = document.getElementById("taskT");
    let dao = obj.getEstado();
    dto.append(dao);
}else if(estado === "cancelada"){
    let dto = document.getElementById("taskC");
    let dao = obj.getEstado();
    dto.append(dao);
}

}
