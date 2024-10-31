
import { setProductoActivo } from "../../main";
import { productoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";


// POPUP


const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', ()=>{
    closeModal();
})


// Funciones abrir cerrar modal
export const openModal = ()=>{
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex"; 

    const buttonDelete = document.getElementById("deleteButton");
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if(productoActivo){
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categoria = document.getElementById("categoria");
            imagen.value = productoActivo.imagen;
            categoria.value = productoActivo.categoria;
            precio.value = productoActivo.precio;
            nombre.value = productoActivo.nombre;
    }
}

export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none"; 
    setProductoActivo(null);
    resetModal();
}

const resetModal = ()=>{
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
        imagen.value = "";
        categoria.value = "Seleccione una categoría";
        precio.value = 0;
        nombre.value = "";
}

const deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener('click', ()=>{
    handleButtonDelete();
});

const handleButtonDelete = ()=>{
    handleDeleteProduct();
};