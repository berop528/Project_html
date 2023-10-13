function validation_Sendto() {
    var sendValue = document.getElementById("send_to").value;
    var sendGolive = document.getElementById('go_live').value;
    var sendAlongwith = document.getElementById('along_with').value;
    var sendToWhat = document.getElementById('to_what').value;
    var sendStartdate = document.getElementById('startDate').value;
    var sendEnddate = document.getElementById('endDate').value;
    var sendWherelive = document.getElementById('where_live').value;
    var sendNumberPhone = document.getElementById('number_phone').value;
    
    if (sendValue === '' || sendGolive === '' || sendAlongwith === '' || sendToWhat === '' || sendStartdate === '' ||
     sendEnddate === '' || sendWherelive === '' || sendNumberPhone === '') {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return false;
    }
}


function validateFormNumber_Phone() {
    var input = document.getElementById("number_phone").value;
    var pattern = /^[0-9]{10}/;

    if (!pattern.test(input)) {
        alert("โปรดใส่เฉพาะตัวเลข 0-9 เท่านั้นและความยาว 10 ตัวเท่านั้น");
        return false; // ไม่ส่งฟอร์มถ้าข้อมูลไม่ถูกต้อง
    }
    return true; // ส่งฟอร์มถ้าข้อมูลถูกต้อง
}