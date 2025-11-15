// Dữ liệu giỏ hàng mẫu
//localStorage.clear();
const cartDetails = [
    { user_id: "001", name: "nguyenvana", image_url: "../../image/newps4.png", nameProduct: "Play Station 4", quantity: 1, price: "6.000.000đ"},
    { user_id: "002", name: "nguyenvanb", image_url: "../../image/newps4.png", nameProduct: "Laptop Gaming", quantity: 2, price: "25.000.000đ"},
    { user_id: "003", name: "nguyenvanc", image_url: "../../image/newps4.png", nameProduct: "Màn hình 4K", quantity: 1, price: "12.500.000đ"},
    { user_id: "004", name: "nguyenvand", image_url: "../../image/newps4.png", nameProduct: "Chuột không dây", quantity: 1, price: "500.000đ"},
    { user_id: "001", name: "nguyenvana", image_url: "../../image/newps4.png", nameProduct: "Tay cầm PS5", quantity: 1, price: "2.000.000đ"},
    { user_id: "002", name: "nguyenvanb", image_url: "../../image/newps4.png", nameProduct: "Bàn phím cơ", quantity: 1, price: "3.500.000đ"},
    { user_id: "003", name: "nguyenvanc", image_url: "../../image/newps4.png", nameProduct: "Tai nghe Gaming", quantity: 1, price: "4.800.000đ"},
    { user_id: "004", name: "nguyenvand", image_url: "../../image/newps4.png", nameProduct: "Thẻ Game", quantity: 1, price: "1.000.000đ"},
    { user_id: "001", name: "nguyenvana", image_url: "../../image/newps4.png", nameProduct: "Loa Bluetooth", quantity: 1, price: "1.500.000đ"},
    { user_id: "002", name: "nguyenvanb", image_url: "../../image/newps4.png", nameProduct: "Webcam HD", quantity: 1, price: "800.000đ"},
    { user_id: "003", name: "nguyenvanc", image_url: "../../image/newps4.png", nameProduct: "Máy in", quantity: 1, price: "6.200.000đ"},
    { user_id: "004", name: "nguyenvand", image_url: "../../image/newps4.png", nameProduct: "Ổ cứng SSD", quantity: 1, price: "2.500.000đ" }
];

let userCart = []; // Giỏ hàng của user hiện tại

document.addEventListener("DOMContentLoaded", () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const currentUserId = loggedUser ? loggedUser.userID : null;

    const cartBody = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
    const cartNumEl = document.getElementById("cart_num");
    const forYouEl = document.getElementById("for_you");

    if (!currentUserId) {
        if (cartBody) cartBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Giỏ hàng trống</td></tr>`;
        if (totalPriceEl) totalPriceEl.textContent = "0đ";
        if (cartNumEl) cartNumEl.textContent = 0;
        if (forYouEl) forYouEl.textContent = "Khách";
        return;
    }

    // Lấy giỏ hàng user từ localStorage nếu có, nếu chưa có thì lấy từ cartDetails
    const savedCart = JSON.parse(localStorage.getItem("cart_" + currentUserId));
    if (savedCart && savedCart.length > 0) {
        userCart = savedCart;
    } else {
        userCart = cartDetails.filter(i => i.user_id === currentUserId);
    }

    if (forYouEl && userCart.length > 0) forYouEl.textContent = userCart[0].name;

    function formatToNumber(priceString) {
        return Number(priceString.replace(/\./g, "").replace("đ", ""));
    }

    function formatToMoney(num) {
        return num.toLocaleString("vi-VN") + "đ";
    }

    function updateTotalPrice() {
        let total = userCart.reduce((sum, item) => sum + formatToNumber(item.price) * item.quantity, 0);
        if (totalPriceEl) totalPriceEl.textContent = formatToMoney(total);
    }

    function updateCartIcon() {
        const totalQty = userCart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartNumEl) cartNumEl.textContent = totalQty;
    }

    function saveCart() {
        localStorage.setItem("cart_" + currentUserId, JSON.stringify(userCart));
    }

    window.changeQty = function(index, type) {
        if (type === -1 && userCart[index].quantity === 1) return;
        userCart[index].quantity += type;
        document.getElementById("qty-" + index).textContent = userCart[index].quantity;
        updateTotalPrice();
        updateCartIcon();
        saveCart();
    }

    function renderCart() {
        if (userCart.length === 0) {
            if (cartBody) cartBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Giỏ hàng trống</td></tr>`;
            if (totalPriceEl) totalPriceEl.textContent = "0đ";
            if (cartNumEl) cartNumEl.textContent = 0;
            return;
        }

        let html = "";
        userCart.forEach((item, index) => {
            html += `
                <tr>
                    <td><img src="${item.image_url}" style="width:60px;"></td>
                    <td>${item.nameProduct}</td>
                    <td>
                        <div class="qty-box">
                            <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                            <span id="qty-${index}" class="qty-number">${item.quantity}</span>
                            <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                        </div>
                    </td>
                    <td class="price-col">${item.price}</td>
                </tr>
            `;
        });
        if (cartBody) cartBody.innerHTML = html;
        updateTotalPrice();
        updateCartIcon();
    }

    renderCart();
});