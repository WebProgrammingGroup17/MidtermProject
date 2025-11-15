const productData = [
    {
        id: "C001",
        name: "Tay Cầm Chơi Game Flydigi Vader 4 Pro Controller",
        category: "Handheld Console",
        price: 8990000,
        description:
            "Phiên bản nâng cấp với màn hình OLED 7 inch rực rỡ, hiển thị màu sắc sống động và độ tương phản cao. Chân đế điều chỉnh linh hoạt, loa ngoài cải tiến cho âm thanh mạnh mẽ hơn, và bộ nhớ trong 64GB giúp bạn lưu trữ nhiều trò chơi hơn.",
        fullDescription:
            "Nintendo Switch OLED là phiên bản hoàn thiện nhất của dòng máy chơi game đình đám đến từ Nintendo. Thiết bị sở hữu màn hình OLED 7 inch sống động, mang lại hình ảnh rực rỡ, độ tương phản cao và màu đen sâu hơn hẳn so với màn hình LCD truyền thống. Nhờ đó, trải nghiệm hình ảnh khi chơi game ở mọi môi trường ánh sáng đều trở nên tuyệt vời. Chân đế thiết kế mới có thể điều chỉnh nhiều góc độ giúp việc chơi ở chế độ tabletop tiện lợi hơn bao giờ hết. Bên cạnh đó, loa ngoài được cải tiến mang lại âm thanh to và rõ hơn, giúp người chơi đắm chìm vào từng trận đấu hoặc cảnh phim. Bộ nhớ trong được nâng lên 64GB, đủ để bạn lưu trữ nhiều tựa game yêu thích mà không cần thẻ nhớ mở rộng ngay lập tức. Ngoài ra, Dock mới hỗ trợ cổng LAN, mang lại kết nối mạng ổn định và mượt mà khi chơi online. Nintendo Switch OLED là lựa chọn lý tưởng cho cả game thủ di động và người thích chơi trên màn hình lớn — một sự kết hợp hoàn hảo giữa hiệu năng, thiết kế và tính di động.",
        specs: {
            "Màn hình": "OLED 7 inch (1280x720)",
            "Bộ nhớ trong": "64GB",
            "Kết nối": "Wi-Fi, Bluetooth 4.1, LAN (qua Dock)",
            "Thời lượng pin": "4.5 - 9 giờ",
            "Trọng lượng": "420g",
        },
        image: "/Assets/image/pd_nintendo_switch_oled.jpg",
        gallery: [
            "/Assets/image/pd_nintendo_switch_oled.jpg",
            "/Assets/image/pd_nintendo_switch_oled1.jpg",
            "/Assets/image/pd_nintendo_switch_oled2.jpg",
        ],
        bonus: ["Bảo hành 12 tháng", "Tặng túi đựng console", "Tặng ốp bảo vệ Joy-Con"],
    },

    {
        id: "C002",
        name: "Tay Cầm Chơi Game Flydigi Apex 5 Elite Controller",
        category: "Home Console",
        price: 14990000,
        description:
            "Máy chơi game thế hệ mới của Sony với sức mạnh xử lý vượt trội, SSD siêu nhanh và khả năng hiển thị 4K chân thực. Thiết kế hiện đại, sang trọng cùng tay cầm DualSense mang lại trải nghiệm xúc giác độc đáo.",
        fullDescription:
            "PlayStation 5 Standard là biểu tượng của thế hệ console mới, đánh dấu bước nhảy vọt về công nghệ giải trí tại gia. Được trang bị CPU AMD Ryzen Zen 2 8 nhân cùng GPU RDNA 2 mạnh mẽ, PS5 mang đến hiệu năng đồ họa ấn tượng, hỗ trợ hình ảnh 4K HDR sắc nét và tốc độ khung hình ổn định. Ổ SSD tùy chỉnh dung lượng 825GB giúp thời gian tải game gần như biến mất, cho phép bạn chuyển đổi giữa các màn chơi nhanh chóng và mượt mà. Tay cầm DualSense — điểm nhấn nổi bật của PS5 — tích hợp phản hồi xúc giác tinh tế, cùng cò nhạy thích ứng, giúp bạn cảm nhận được từng cú nảy, rung hay độ căng của vũ khí trong game. Ngoài ra, hệ thống tản nhiệt mới cùng thiết kế tương lai với ánh sáng LED xanh trắng mang lại cảm giác hiện đại và cao cấp. PS5 không chỉ là máy chơi game, mà còn là trung tâm giải trí đa năng hỗ trợ xem phim, nghe nhạc, và stream nội dung 4K. Đây là sự lựa chọn hàng đầu cho game thủ mong muốn hiệu năng đỉnh cao và trải nghiệm hoàn hảo nhất hiện nay.",
        specs: {
            CPU: "AMD Ryzen Zen 2 8 nhân",
            GPU: "AMD RDNA 2, 10.28 TFLOPs",
            RAM: "16GB GDDR6",
            "Lưu trữ": "825GB SSD",
            "Độ phân giải": "Tối đa 8K",
            "Trọng lượng": "4.5 kg",
        },
        image: "/Assets/image/pd_playStation_5_standard.webp",
        gallery: [
            "/Assets/image/pd_playStation_5_standard.webp",
            "/Assets/image/pd_playStation_5_standard1.webp",
            "/Assets/image/pd_playStation_5_standard2.webp",
        ],
        bonus: ["Bảo hành 12 tháng", "Miễn phí giao hàng toàn quốc"],
    },

    {
        id: "C003",
        name: "Steam Deck 512GB",
        category: "Handheld PC",
        price: 18990000,
        description:
            "Máy chơi game cầm tay mạnh mẽ của Valve, chạy SteamOS và hỗ trợ hầu hết các tựa game PC. Màn hình chống chói, ổ SSD tốc độ cao và khả năng tùy chỉnh linh hoạt.",
        fullDescription:
            "Steam Deck 512GB là chiếc máy chơi game cầm tay kết hợp hoàn hảo giữa sức mạnh của PC và tính di động. Được phát triển bởi Valve, Steam Deck sử dụng vi xử lý AMD APU tùy chỉnh, kết hợp CPU Zen 2 và GPU RDNA 2, mang lại hiệu năng mạnh mẽ đủ để chạy mượt các tựa game AAA hiện nay. Phiên bản 512GB trang bị ổ SSD NVMe tốc độ cao, giúp rút ngắn đáng kể thời gian tải và cải thiện trải nghiệm tổng thể. Màn hình cảm ứng 7 inch chống chói giúp hiển thị tốt ngay cả dưới ánh sáng mặt trời. Với hệ điều hành SteamOS, người dùng có thể truy cập toàn bộ thư viện Steam, cài thêm Windows, Epic Games hoặc các trình giả lập console cổ điển. Thiết kế công thái học được tối ưu cho các phiên chơi dài, cùng pin 40Wh cung cấp thời lượng sử dụng từ 2 đến 8 giờ tùy mức độ tải. Steam Deck 512GB là lựa chọn hoàn hảo cho game thủ yêu thích sự tự do — một chiếc PC thu nhỏ có thể mang đi mọi nơi.",
        specs: {
            CPU: "Zen 2 4 nhân",
            GPU: "RDNA 2 – 8 CU",
            RAM: "16GB LPDDR5",
            "Lưu trữ": "512GB NVMe SSD",
            "Màn hình": "7 inch - 1280×800",
            "Trọng lượng": "669g",
        },
        image: "/Assets/image/pd_steam_deck.jpg",
        gallery: [
            "/Assets/image/pd_steam_deck.jpg",
            "/Assets/image/pd_steam_deck1.jpg",
            "/Assets/image/pd_steam_deck2.jpg",
        ],
        bonus: ["Tặng túi chống sốc", "Miễn phí vệ sinh máy 1 năm"],
    },
    {
        id: "C004",
        name: "PlayStation Portal",
        category: "Remote Handheld",
        price: 6990000,
        description:
            "Thiết bị chơi game cầm tay của Sony giúp truyền trực tiếp trò chơi từ PS5 qua Wi-Fi, cho phép bạn chơi mọi nơi trong nhà mà không cần TV.",
        fullDescription:
            "PlayStation Portal là thiết bị Remote Play chính thức dành riêng cho PS5, được thiết kế để mang trải nghiệm console đến mọi nơi trong nhà bạn. Với màn hình LCD 8 inch Full HD và tay cầm DualSense tích hợp, Portal mang lại cảm giác chơi chân thực như chơi trực tiếp trên PS5. Công nghệ stream giúp bạn không cần ngồi trước TV mà vẫn chơi mọi tựa game PS5.",
        specs: {
            "Màn hình": "LCD 8 inch, 1080p, 60Hz",
            "Kết nối": "Wi-Fi, Bluetooth 5.1",
            Pin: "4500mAh (khoảng 8 giờ)",
            "Tương thích": "PS5 (Remote Play)",
            "Trọng lượng": "530g",
        },
        image: "/Assets/image/pd_playStation_portal.webp",
        gallery: [
            "/Assets/image/pd_playStation_portal.webp",
            "/Assets/image/pd_playStation_portal1.webp",
            "/Assets/image/pd_playStation_portal2.webp",
        ],
        bonus: ["Tặng dây sạc USB-C", "Hỗ trợ kỹ thuật 24/7"],
    },

    {
        id: "C005",
        name: "Xbox Series X",
        category: "Home Console",
        price: 13990000,
        description:
            "Máy console mạnh mẽ nhất của Microsoft, hỗ trợ chơi game 4K, HDR10 và tốc độ khung hình lên tới 120FPS.",
        fullDescription:
            "Xbox Series X là console mạnh mẽ nhất của Microsoft, được tối ưu cho hiệu năng khủng và tốc độ xử lý vượt trội. Trang bị CPU Zen 2 và GPU RDNA 2 với 12 TFLOPs, Series X đáp ứng tốt các tựa game 4K mượt mà. SSD 1TB giúp tải game nhanh và hỗ trợ tính năng Quick Resume cực tiện lợi.",
        specs: {
            CPU: "AMD Zen 2 8 nhân @3.8GHz",
            GPU: "AMD RDNA 2 (12 TFLOPs)",
            RAM: "16GB GDDR6",
            "Lưu trữ": "1TB SSD",
            "Độ phân giải": "Tối đa 4K@120Hz",
            "Trọng lượng": "4.45 kg",
        },
        image: "/Assets/image/pd_Xbox_Series_X.webp",
        gallery: [
            "/Assets/image/pd_Xbox_Series_X.webp",
            "/Assets/image/pd_Xbox_Series_X1.jpg",
            "/Assets/image/pd_Xbox_Series_X2.jpg",
        ],
        bonus: ["Bảo hành chính hãng 12 tháng", "Tặng gói Game Pass 3 tháng"],
    },
];
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    let productId = params.get("id");

    // Nếu URL không có id -> dùng sản phẩm đầu tiên
    if (!productId) productId = productData[0].id;

    // Tìm sản phẩm trong mảng data
    const product = productData.find(p => p.id === productId);

    // Không tìm thấy => báo lỗi
    if (!product) {
        document.body.innerHTML = `
            <h2 style="color:red; text-align:center; margin-top:50px;">
                Không tìm thấy sản phẩm!
            </h2>`;
        return;
    }

    // Gán dữ liệu vào giao diện
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-id").textContent = product.id;
    document.getElementById("product-category").textContent = product.category;
    document.getElementById("product-price").textContent =
        product.price.toLocaleString("vi-VN") + " ₫";
    
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-full-description").textContent = product.fullDescription;

    // Ảnh chính
    document.getElementById("product-image").src = product.image;

    // Gallery ảnh
    document.getElementById("product-gallery").innerHTML =
        product.gallery.map(img => `<img src="${img}" alt="">`).join("");

    // Ưu đãi
    document.getElementById("product-bonus").innerHTML =
        product.bonus.map(b => `<li>${b}</li>`).join("");

    // Specs
    const specsTable = document.getElementById("product-specs");
    specsTable.innerHTML = "";
    for (let key in product.specs) {
        specsTable.innerHTML += `
            <tr>
                <td>${key}</td>
                <td>${product.specs[key]}</td>
            </tr>`;
    }

    // Hiện giao diện khi data đã sẵn sàng
    document.querySelector(".product-details").classList.remove("hidden");
});

