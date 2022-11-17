import { getProducts } from "./productData.js";
import { getParameterByName } from "./Utils/utils.js"

let selectedProduct = await getProducts(`http://localhost:3000/products?id=${getParameterByName('id')}`);
selectedProduct = selectedProduct[0];

const productContainerWrap = document.querySelector('.product_container_wrap');
let html = `
            <div class="product_container_left c-4">
                <img src="${selectedProduct.image}" alt="" class="product_container_left-img">
            </div>
            <div class="product_container_mid c-4" >
                <div class="product_container_mid-infor">
                    <h2>
                        ${selectedProduct.name}
                    </h2>
                    <div class="product_container_mid-brand-and-type">
                        Thương hiệu: <span>Converse</span> | Loại: <span>${selectedProduct.type}</span>
                    </div>
                    <div class="product_container_mid-price">
                        ${selectedProduct.price}
                    </div>
                </div>

                <div class="product_container_mid-description">
                    <h4>Mô tả:</h4>
                    <p>- Mắt xỏ dây âm với dây cột nylon</p>
                    <p>- Lót trong bằng da thoáng khí tự nhiên</p>
                    <p>- Đệm lót giày bằng da bọc thoải mái và hỗ trợ chân</p>
                </div>

                <div class="product_container_mid-buy-option">
                    <div class="option color-option">
                        <div class="option-wrap">
                            <div class="option-left">
                                <span>Màu sắc</span>
                            </div>
                            <div class="option-right">
                                <select name="color">
                                    <option value="Đen">Đen</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="option quantity-option">
                        <div class="option-wrap">
                            <div class="option-left">
                                <span>Số lượng</span>
                            </div>
                            <div class="option-right">                                
                                <button class="btn minus-btn">-</button>
                                <input type="text" value="1">
                                <button class="btn add-btn">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="add-to-store">
                        <button class="add-to-store-btn">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Thêm vào giỏ hàng
                        </button>
                    </div>

                </div>

            </div>
            <div class="product_container_right c-4"></div>
`

productContainerWrap.innerHTML = html;