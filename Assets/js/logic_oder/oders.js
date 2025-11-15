//localStorage.clear();
// Trong database thật thì không cần location trong historyOfCarts
const historyOfCarts = [
    { order_id: "DH01", user_id: "001", order_date: "14/11/2025", status: "Đã giao", total_amount: "2.000.000đ", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
    { order_id: "DH02", user_id: "001", order_date: "14/11/2025", status: "Đã giao", total_amount: "15.000.000đ", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
    { order_id: "DH03", user_id: "002", order_date: "13/11/2025", status: "Đã giao", total_amount: "2.500.000đ", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
    { order_id: "DH04", user_id: "002", order_date: "14/11/2025", status: "Đã giao", total_amount: "3.500.000đ", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
    { order_id: "DH05", user_id: "003", order_date: "14/11/2025", status: "Đã giao", total_amount: "4.500.000đ", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
    { order_id: "DH06", user_id: "003", order_date: "14/11/2025", status: "Đã giao", total_amount: "2.500.000đ", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
    { order_id: "DH07", user_id: "004", order_date: "14/11/2025", status: "Đã giao", total_amount: "7.500.000đ", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
    { order_id: "DH08", user_id: "004", order_date: "10/11/2025", status: "Đã giao", total_amount: "500.000đ", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
];

const userDetails = [
    {user_id: "001", name: "nguyenvana", fullname: "Nguyễn Văn A", phoneNum: "0123456789", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
    {user_id: "002", name: "nguyenvanb", fullname: "Nguyễn Văn B", phoneNum: "0123456789", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
    {user_id: "003", name: "nguyenvanc", fullname: "Nguyễn Văn C", phoneNum: "0123456789", location: "Khu phố 6, phường Linh Trung, Thủ Đức"},
    {user_id: "004", name: "nguyenvand", fullname: "Nguyễn Văn D", phoneNum: "0123456789", location: "Khu phố 6, phường Linh Trung, Thủ Đức"}
];

// Lấy user đã đăng nhập từ localStorage
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if(loggedInUser) {
    const currentUserId = loggedInUser.userID; // lấy user_id từ login

    // Lấy thông tin user login
    const currentUserDetails = userDetails.find(u => u.user_id === currentUserId);

    if(currentUserDetails){
        document.getElementById("username_display").textContent = currentUserDetails.name;
        document.getElementById("usernameDetails").textContent = currentUserDetails.fullname;
        document.getElementById("phoneNum").textContent = currentUserDetails.phoneNum;
        document.getElementById("location").textContent = currentUserDetails.location;
    }

    // Hiển thị lịch sử đơn hàng
    const orderTableBody = document.querySelector(".order-table tbody");
    orderTableBody.innerHTML = ""; // xóa nội dung cũ nếu có

    const userOrders = historyOfCarts.filter(o => o.user_id === currentUserId);

    if(userOrders.length === 0){
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 5;
        td.textContent = "Bạn chưa có đơn hàng nào";
        td.style.textAlign = "center";
        tr.appendChild(td);
        orderTableBody.appendChild(tr);
    } else {
        userOrders.forEach(order => {
            const tr = document.createElement("tr");

            const tdOrder = document.createElement("td");
            tdOrder.textContent = order.order_id;

            const tdDate = document.createElement("td");
            tdDate.textContent = order.order_date;

            const tdLocation = document.createElement("td");
            tdLocation.textContent = order.location;

            const tdPrice = document.createElement("td");
            tdPrice.textContent = order.total_amount;

            const tdStatus = document.createElement("td");
            tdStatus.textContent = order.status;
            tdStatus.style.fontWeight = "bold";

            if(order.status.toLowerCase().includes("đang xử lý")){
                tdStatus.style.color = "orange";
            } else if(order.status.toLowerCase().includes("đã giao")){
                tdStatus.style.color = "green";
            }

            tr.append(tdOrder, tdDate, tdLocation, tdPrice, tdStatus);
            orderTableBody.appendChild(tr);
        });
    }

} else {
    // Nếu chưa login → hiển thị giỏ hàng trống / thông báo
    document.getElementById("username_display").textContent = "Khách";
    const orderTableBody = document.querySelector(".order-table tbody");
    orderTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Bạn chưa đăng nhập</td></tr>`;
}
