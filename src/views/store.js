// ------------------STORE-----------------

import { openModal } from "./modal";
import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";

// Función encargada de traer los elementos y llamar al render
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();

    handleRenderList(products);
};

// Función encargada de filtrar y renderizar las sección con todos sus elementos.
export const handleRenderList = (productosIn) => {

    // Filtrar productos por categoría
    const burgers = productosIn.filter((el) => el.categoria?.trim().toLowerCase() === "hamburguesas");
    const papas = productosIn.filter((el) => el.categoria?.trim().toLowerCase() === "papas");
    const gaseosas = productosIn.filter((el) => el.categoria?.trim().toLowerCase() === "gaseosas");
    

    console.log(productosIn);//este log devuelve los productos correctamente

    // Renderiza los elementos de la sección
    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `
                    <div class='containerTargetItem' id='product-${producto.categoria}-${index}'>
                        <img class="cardImg" src=${producto.imagen} />
                        <div>
                            <div>
                                <h2>${producto.nombre}</h2>
                            </div>
                            <div class='targetProps'>
                                <p><b>Precio:</b> $ ${producto.precio}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            // Retorna con todos los elementos dentro
            return `
                <section class='sectionStore'>
                    <div class='containerTitleSection'><h3>${title}</h3></div>
                    <div class='containerProductStore'>
                        ${productosHTML.join("")}
                    </div>
                </section>
            `;
        } else {
            return "";
        }
        
    };

    // Renderizar cada uno de los productos dentro de su categoría
    const appContainer = document.getElementById("storeContainer");
    console.log("Contenedor de la tienda:", appContainer); //Devuelve <div class="store" id="storeContainer"/>
    
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    // Se añaden los eventos de manera dinámica
    const addEvent = (productosIn) => {
        productosIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
            if (productContainer) {
                productContainer.addEventListener('click', () => {
                    setProductoActivo(element);
                    openModal();
                });
            }
        });
    };

    addEvent(burgers);
    addEvent(papas);
    addEvent(gaseosas);
};