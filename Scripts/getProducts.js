import { getProducts } from "./productData.js";
const products = await getProducts("http://localhost:3000/products");
let isNeedToAdd = true;
let count = 0;
const itemField = document.querySelector('.container_content-right_items');
products.forEach(product => {

    if(isNeedToAdd) {
        let row = document.createElement('div');
        row.classList.add("row")  
        row.classList.add("item-row");
        row.innerHTML += `
            <div class="grid-item c-3" id-item=${product.id}>
                <div class="products_item_wrap">
                    <a href="#"><img class="products_item_img"
                            src="${product.image}"></a>
                </div>
                <div class="products_item_infor">
                    <p><a href="#">${product.name}</a></p>
                </div>
                <div class="products_item_price">
                    <p>${product.price}</p>
                </div>
            </div>
        `
        itemField.appendChild(row);
        isNeedToAdd = !isNeedToAdd;
    }
    
    else {
        let row = document.querySelectorAll('.row.item-row')[document.querySelectorAll('.row.item-row').length - 1];
        row.innerHTML += `
            <div class="grid-item c-3" id-item=${product.id}>
                <div class="products_item_wrap">
                    <a href="#"><img class="products_item_img"
                            src="${product.image}"></a>
                </div>
                <div class="products_item_infor">
                    <p><a href="#">${product.name}</a></p>
                </div>
                <div class="products_item_price">
                    <p>${product.price}</p>
                </div>
            </div>
        `
    }
    count++;
    if(count % 4 == 0) isNeedToAdd = !isNeedToAdd;
});

const gridItems = itemField.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
    gridItem.onclick = () => {
        const itemId = gridItem.getAttribute('id-item');
        const url = `./productInfo.html?id=${itemId}`;
        gridItem.querySelector('a').setAttribute('href', url);
        console.log(gridItem);
    }
})
