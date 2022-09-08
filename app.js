let miArbol=new BinaryTree();
const btnadd=document.getElementById("btnadd");
btnadd.addEventListener("click",()=>{
    let cod=document.getElementById("txtcod").value;
    let nom=document.getElementById("txtnom").value;
    let pre=document.getElementById("txtpre").value;
    let can=document.getElementById("txtcan").value;
    let producto=new Producto(cod, nom, pre, can);
    miArbol.agregar(producto); 

    let detalles=document.getElementById("detalles");
    detalles.innerHTML+=`<h2>Se agrego un producto ${producto.nombre}</h2>`

})
const btninOrder=document.getElementById("btnInOrder");
btninOrder.addEventListener("click",()=>{
 let resultados=miArbol.inOrder;
 let mostrar=document.getElementById("detalles");
 mostrar.innerHTML+=`<h2>InOrder</h2><br>` + resultados;
})

const btnpreOrder=document.getElementById("btnpreOrder")
btnpreOrder.addEventListener("click",()=>{
    let preOrder=miArbol.preOrder();
    let detalles=document.getElementById("detalles");
if(preOrder!=""){
    detalles.innerHTML+="<h3>preOrder</h3>"+preOrder;
}
else
    detalles.innerHTML+="<h3>no hay productos</h3>";
})

const btnpostOrder=document.getElementById("btnpostOrder")
btnpostOrder.addEventListener("click",()=>{
    let postOrder=miArbol.postOrder();
    let detalles=document.getElementById("detalles");
if(postOrder!=""){
    detalles.innerHTML+="<h3>postOrder</h3>"+postOrder;
}
else
    detalles.innerHTML+="<h3>no hay productos</h3>";
})
const btnclear=document.getElementById("btnclear");
btnclear.addEventListener("click",()=>{
    document.getElementById("detalles").innerHTML="";
})


const btnfind=document.getElementById("btnfind");
btnfind.addEventListener("click",()=>{
    let cod=document.getElementById("txtcod").value
    let buscar=miArbol.buscar(cod);
    let detalles=document.getElementById("detalles");
if(buscar!=null){
    detalles.innerHTML+= "<h3>se encontro</h3>" + buscar;
}
else 
    detalles.innerHTML+="<h3>No encontro</h3>";

})