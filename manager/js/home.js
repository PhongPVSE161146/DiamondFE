// Hàm để xác nhận giám định
function xacnhanGiamdinh() {
    var nhanvien = document.getElementById('nhanvien').value;
    var nguoinhan = document.getElementById('nguoinhan').value;

    // Hiển thị thông tin giám định
    var thongtin = `
        <p>Nhân viên giám định: ${nhanvien}</p>
        <p>Người nhận giám định: ${nguoinhan}</p>
    `;
    document.getElementById('thongtinGiamdinh').innerHTML = thongtin;
}

// Hàm để hủy giám định
function huyGiamdinh() {
    // Kiểm tra và thông báo nếu kim cương là giả
    var isFake = confirm("Bạn có chắc chắn kim cương này là giả không?");
    if (isFake) {
        document.getElementById('thongtinGiamdinh').innerHTML = "<p>Giám định đã bị hủy. Kim cương này là giả.</p>";
    }
}
