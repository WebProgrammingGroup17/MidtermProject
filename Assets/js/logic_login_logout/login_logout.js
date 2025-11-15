//localStorage.clear();
document.addEventListener("DOMContentLoaded", function() {
    // -------------------------------------------------------------------
    // KHAI BÁO VÀ TÌM KIẾM PHẦN TỬ (CHỈ CHẠY SAU KHI DOM ĐÃ TẢI)
    // -------------------------------------------------------------------
    const users = [
        { userID: "001", username: "nguyenvana", password: "123456", email: "vana@gmail.com"},
        { userID: "002", username: "nguyenvanb", password: "123456", email: "vanb@gmail.com"},
        { userID: "003", username: "nguyenvanc", password: "123456", email: "vanc@gmail.com"},
        { userID: "004", username: "nguyenvand", password: "123456", email: "vand@gmail.com"}
    ];
    //localStorage.clear();
    const loginForm = document.getElementById("loginForm2");
    const message = document.getElementById("message");
    const icon = document.getElementById("icon3");

    const target = document.getElementById("loginForm");
    const div_after_login = document.getElementById("personal_logout");
    // const savedUser = JSON.parse(localStorage.getItem("loggedInUser")); // Không cần khai báo ở đây
    const logoutButton = document.getElementById("logoutbtn");


    // -------------------------------------------------------------------
    // HÀM KHỞI TẠO TRẠNG THÁI (QUAN TRỌNG NHẤT)
    // -------------------------------------------------------------------
    /**
     * Hàm này đảm bảo giao diện luôn được ẩn ban đầu trên mọi trang
     * để tránh bị lộ giao diện trước khi người dùng click icon.
     */
    function checkLoginStatus() {
        if (target) target.style.display = "none";
        if (div_after_login) div_after_login.style.display = "none";
    }

    checkLoginStatus(); // Gọi hàm khởi tạo khi trang tải


    // -------------------------------------------------------------------
    // SỰ KIỆN CLICK ICON (ĐÃ SỬA THÀNH TOGGLE LOGIC)
    // -------------------------------------------------------------------
    if (icon) {
        icon.addEventListener("click", function (event) {
            event.stopPropagation();

            // Lấy trạng thái mới nhất
            const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));

            if (savedUser) {
                // Đã đăng nhập: Toggle div_after_login
                if (div_after_login) {
                    div_after_login.style.display = div_after_login.style.display === "block" ? "none" : "block";
                }
                if (target) target.style.display = "none";

            } else {
                // Chưa đăng nhập: Toggle target (form login)
                if (target) {
                    target.style.display = target.style.display === "block" ? "none" : "block";
                }
                if (div_after_login) div_after_login.style.display = "none";
            }
        });
    }

    // -------------------------------------------------------------------
    // SỰ KIỆN CLICK RA NGOÀI
    // -------------------------------------------------------------------
    document.addEventListener("click", function (event) {
        // Chỉ chạy nếu các phần tử cần thiết tồn tại
        if (icon && target && div_after_login) {
            const clickedElement = event.target;
            const isIcon = icon.contains(clickedElement);
            const isInTarget = target.contains(clickedElement);
            const isInDivAfterLogin = div_after_login.contains(clickedElement);

            if (!isIcon && !isInTarget && !isInDivAfterLogin) {
                target.style.display = "none";
                div_after_login.style.display = "none";
            }
        }
    });

    // -------------------------------------------------------------------
    // SỰ KIỆN ĐĂNG NHẬP
    // -------------------------------------------------------------------
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const email = document.getElementById("username").value.trim();
            const user = users.find(u =>
                (u.username === username || u.email === email) && u.password === password
            );

            if (user) {
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                if (message) {
                    message.style.color = "green";
                    message.textContent = `Đăng nhập thành công! Xin chào ${user.username}`;
                }
                // CHUYỂN HƯỚNG SAU KHI ĐĂNG NHẬP
                window.location.href = "../../../index.html";

            } else {
                if (message) {
                    message.style.color = "red";
                    message.textContent = "Tài khoản hoặc mật khẩu không đúng!";
                }
                localStorage.removeItem("loggedInUser");
                if (div_after_login) div_after_login.style.display = "none";
            }
        });
    }


    // -------------------------------------------------------------------
    // SỰ KIỆN ĐĂNG XUẤT (ĐÃ TỐI ƯU HÓA)
    // -------------------------------------------------------------------
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            // Xóa thông tin người dùng
            localStorage.removeItem("loggedInUser");

            // Xóa tổng số lượng giỏ hàng
            localStorage.removeItem("cart_total");

            // Chuyển hướng hoặc reload trang để cập nhật giao diện
            window.location.reload();
        });
    }


}); // ĐÓNG document.addEventListener("DOMContentLoaded")