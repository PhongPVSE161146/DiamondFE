document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const id = document.getElementById('id').value;
    const address = document.getElementById('address').value;
    const service = document.getElementById('service').value;
    const quantity = document.getElementById('quantity').value;
    const date = new Date().toLocaleString(); // Current date and time

    // Create a new page with appointment details
    const newPageContent = `
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Đặt hẹn thành công</title>
            <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background-color: #f8f1e6;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            
            .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                width: 300px;
                text-align: center;
            }
            
            .form-header h2, .success-header h2 {
                margin: 0;
            }
            
            label {
                display: block;
                margin: 10px 0 5px;
            }
            
            input, select, button {
                width: 100%;
                padding: 10px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }
            
            button {
                background-color: #000;
                color: #fff;
                border: none;
                cursor: pointer;
            }
            
            button:hover {
                background-color: #333;
            }
            
            .success-header p {
                margin-top: 5px;
                color: #666;
            }
            
            .appointment-details {
                background-color: #f8f1e6;
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
            }
            
            .appointment-details p {
                margin: 5px 0;
            }
            
            </style>
        </head>
        <body>
            <div class="container">
                <div class="success-header">
                    <h2>ĐẶT HẸN THÀNH CÔNG</h2>
                    <p>Chúc mừng bạn đã đặt hẹn thành công, <br>thông tin lịch hẹn:</p>
                </div>
                <div class="appointment-details">
                    <p><strong>Mã giao dịch:</strong> ${Math.floor(Math.random() * 1000)}</p>
                    <p><strong>Tên khách hàng:</strong> ${name}</p>
                    <p><strong>Số điện thoại:</strong> ${phone}</p>
                    <p><strong>Dịch vụ:</strong> ${service}</p>
                    <p><strong>Số lượng (Viên):</strong> ${quantity}</p>
                    <p><strong>Ngày hẹn:</strong> ${date}</p>
                    
                    
                </div>
            </div>
        </body>
        </html>
    `;

    // Open new window with the appointment details
    const newWindow = window.open();
    newWindow.document.write(newPageContent);
    newWindow.document.close();
});
