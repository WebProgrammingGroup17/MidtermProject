document.addEventListener("DOMContentLoaded", () => {
    // Lấy user đăng nhập
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const currentUserId = loggedUser ? loggedUser.userID : null;

    const cartNumEl = document.getElementById("cart_num"); // icon giỏ hàng
    const forYouEl = document.getElementById("for_you");   // tên người dùng

    // Nếu chưa đăng nhập
    if (!currentUserId) {
        if (cartNumEl) cartNumEl.textContent = 0;
        if (forYouEl) forYouEl.textContent = "Khách";
        return;
    }

    // Lấy giỏ hàng từ localStorage
    let userCart = JSON.parse(localStorage.getItem("cart_" + currentUserId));

    // Nếu chưa có giỏ hàng trong localStorage → dùng dữ liệu tạm cartDetails
    if (!userCart || userCart.length === 0) {
        userCart = cartDetails.filter(item => item.user_id === currentUserId);
        localStorage.setItem("cart_" + currentUserId, JSON.stringify(userCart));
    }

    // Cập nhật tổng số lượng sản phẩm và tên người dùng
    const totalQty = userCart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartNumEl) cartNumEl.textContent = totalQty;
    if (forYouEl && userCart.length > 0) forYouEl.textContent = userCart[0].name;
});
