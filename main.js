import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css';
import { openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/searchBar";

// APLICACIÓN

export let categoriaActiva = null 
export const setCategoriaActiva = (categoriaIn)=>{
    categoriaActiva = categoriaIn;
}

export let productoActivo = null 
export const setProductoActivo = (productoIn)=>{
    productoActivo = productoIn;
}

handleGetProductsToStore();
renderCategories();

// HEADER

const buttonAdd = document.getElementById('buttonAddElement');
buttonAdd.addEventListener('click', ()=>{
    openModal();
})

// boton de búsqueda

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', ()=>{
    handleSearchProductByName();
})


