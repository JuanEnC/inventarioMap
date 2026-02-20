const inventario = new Map();

function agregarProducto(producto) {
    if (producto.precio <= 0 || producto.cantidad <= 0) {
        //imprimir error
        return false;
    }else{
        inventario.set(producto.id, producto);
        return true;
    }
}

function buscarProducto(id) {
    let valor = inventario.get(id);
    return valor;
}