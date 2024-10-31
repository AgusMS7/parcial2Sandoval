// CATEGORIA

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoriaIn)=>{
    const products = handleGetProductLocalStorage();

    switch (categoriaIn){
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el)=>el.categoria == categoriaIn);
            handleRenderList(result);
        default:
            break;
        case "MayorPrecio":
            const resultPrecioMayor = products.sort((a, b)=> b.precio - a.precio)
            handleRenderList(resultPrecioMayor);
            break;
        case "MenorPrecio":
            const resultPrecioMenor = products.sort((a, b)=> a.precio - b.precio)
            handleRenderList(resultPrecioMenor);
            break;
    }
}


// render de la vista categoría

export const renderCategories = ()=>{
    // Tomamos elementos  de la lista
    const ullist = document.getElementById("listFilter")

    // Creamos esos elementos dentro de la lista
    ullist.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="MayorPrecio">Mayor Precio</li>
    <li id="MenorPrecio">Menor Precio</li>
    `;

    // Añadimos dinamicamente el evento click
    const liElement = ullist.querySelectorAll("li")
    liElement.forEach(liElement=>{
        liElement.addEventListener("click", ()=>{
            handleClick(liElement)
        });
    });

    // Verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento)=>{
        handleFilterProductsByCategory(elemento.id);
        liElement.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove('liActive');
            }else{
                if(elemento == el){
                    el.classList.add('liActive');
                }
            }
        })
    }
};