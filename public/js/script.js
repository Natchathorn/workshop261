function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU077c7e55d9566f5e5ff8d23712d81b3b63f45eb1a7003c7a669b6cdb508882dacc89925e84d8d6855fb09804b90339ac' 
        },
        body: JSON.stringify({ "UserName": username, "PassWord": password })
    })
    .then(response => response.json())
    .then(data => {
        const popupMessage = document.getElementById('message'); // ใช้ 'message' เป็น element แสดงผลด้านล่างปุ่ม
        if (data.status) {
            // แสดงชื่อและคณะที่ดึงมาจาก API
            popupMessage.innerHTML = `
                <strong>ชื่อ:</strong> ${data.displayname_th}<br>
                <strong>คณะ:</strong> ${data.faculty}
            `;
            popupMessage.style.display = 'block';

        } else {
            popupMessage.innerText = "Login failed. Please try again.";
            popupMessage.style.display = 'block';

        }
    })
    .catch(error => {
        console.error('Error:', error);
        const popupMessage = document.getElementById('message');
        popupMessage.innerText = "An error occurred. Please try again.";
        popupMessage.style.display = 'block';
        popupMessage.style.color = 'red';
    });
}

function sHowpass() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}