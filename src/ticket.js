var lista=[["ID","Nombre","Unidad","Cantidad","Precio","Subtotal"]];


const ticket ={
    productos:{
        list(){
            return lista;
        },
        agregar(producto){
            lista.push([producto.id,producto.nombre,producto.unidad,producto.cantidad,producto.precio,producto.subtotal]);
            console.table(lista);
        },
        editar(){

        },
        eliminar(){

        },
    },
};

export default ticket;