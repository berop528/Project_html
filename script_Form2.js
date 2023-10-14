import { ArabicNumberToText } from './thaibath.js';
const rentDay = document.getElementById("rent_date");
const rentList = document.getElementById("rentList");
const rentBaht = document.getElementById("rentBaht");

const startDateTimeInput = document.getElementById("startpoint_date");
const endDateTimeInput = document.getElementById("endpoint_date");

const allowanceDay =   document.getElementById("allowance_date"); 
const allowanceList = document.getElementById("allowanceList");
const allowanceBaht = document.getElementById("allowanceBaht");

const vehicleBaht = document.getElementById("vehicleBaht")
const vehicle = document.getElementById("vehicle");

const otherTotal = document.getElementById("otherTotal");
function calculateTimeDifference() {
    const startDateTimeInput = document.getElementById("startpoint_date");
    const endDateTimeInput = document.getElementById("endpoint_date");
    const daysResult = document.getElementById("daysResult");
    const hoursResult = document.getElementById("hoursResult");
    const minutesResult = document.getElementById("minutesResult");
    const totalday = document.getElementById("total_daysResult");
    
    // Get the values from the datetime-local inputs
    const startDateTimeValue = startDateTimeInput.value;
    const endDateTimeValue = endDateTimeInput.value;

    // Convert the input values to Date objects
    const startDate = new Date(startDateTimeValue);
    const endDate = new Date(endDateTimeValue);

    if (isNaN(startDate) || isNaN(endDate)) {
        // Handle invalid date input, display an error message, or take appropriate action.
        // For example, clear the result fields.
        daysResult.value = "";
        hoursResult.value = "";
        minutesResult.value = "";
        return;
    }

    // Calculate the time difference in milliseconds
    const timeDifference = endDate - startDate;

    // Calculate the number of days, hours, and minutes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    let additionalDays = 0;
    if (days <= 0 ){
        if (hours >= 12 && minutes >= 0) {
            additionalDays = 1;
        }else if(hours >= 6 && minutes >= 0){
            additionalDays = 0.5;
        }
            
    }
    else{
        if (hours >= 12 && minutes >= 0) {
            additionalDays = 1;
        }
    }
    
    
    // Display the time difference in the input text field
    daysResult.value = days ;
    hoursResult.value = hours;
    minutesResult.value = minutes;
    totalday.value = days + additionalDays ;
   
    if(additionalDays == 0.5){
        rentDay.value = 0;
        rentList.disabled = true;
    }else{ 
        rentList.disabled = false;
        rentDay.value = days + additionalDays;
    }
    
    //rentDay.value = days + additionalDays;
    allowanceDay.value = days + additionalDays;
    


    calculateTotalallowance();
    calculateTotalRent();
}

function calculateTotalallowance() {
    const selectedValue = allowanceList.value;
    const days = parseFloat(allowanceDay.value, 10);
    console.log(days)
    let totalExpense = 0;
    if (!isNaN(days)) {
        if (selectedValue === '1') {
        totalExpense = days * 300;
        } else if(selectedValue === '2'){
        totalExpense = days * 270;   
        }
        allowanceBaht.value = totalExpense;
        calculateTotalPrice();
    }
}

function calculateTotalRent() {
    const selectedValue = rentList.value;
    
    const days = parseInt(rentDay.value, 10);
    let totalExpense = 0;
    if (!isNaN(days)) {
        if (selectedValue === '1') {
        totalExpense = days * 1600;
        } else if(selectedValue === '2'){
        totalExpense = days * 600;   
        }
        rentBaht.value = totalExpense;
        calculateTotalPrice();
    }
}

;

document.getElementById('createInputsButton').addEventListener('click', createBothInputs);

const inputIds = [];
function createBothInputs(event) {
    event.preventDefault();
    const inputContainer = document.getElementById('otherInput');

    const newInputGroup = document.createElement('div');
    newInputGroup.className = 'input-group mb-3';

    const newOtherInput = document.createElement('input');
    const otherInputId = 'otherInput_' + inputIds.length;
    newOtherInput.id = otherInputId;
    newOtherInput.type = 'text';
    newOtherInput.className = 'form-control';
    newOtherInput.placeholder = 'อื่น';

    const newOtherBahtInput = document.createElement('input');
    const otherBahtInputId = 'otherBahtInput_' + inputIds.length;
    newOtherBahtInput.id = otherBahtInputId;
    newOtherBahtInput.type = 'text';
    newOtherBahtInput.className = 'form-control';
    newOtherBahtInput.placeholder = 'บาท';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'ลบ';
    deleteButton.className = 'btn btn-danger';
    deleteButton.addEventListener('click', function () {
        newInputGroup.remove();
        const index = inputIds.indexOf(otherBahtInputId);
        if (index !== -1) {
            inputIds.splice(index, 1);
        }
        calculateTotal();
    });

    newInputGroup.appendChild(newOtherInput);
    newInputGroup.appendChild(newOtherBahtInput);
    newInputGroup.appendChild(deleteButton);
    inputContainer.appendChild(newInputGroup);

    inputIds.push(otherBahtInputId);

    // เชื่อมต่อกับการคำนวณทันทีเมื่อผู้ใช้ป้อนข้อมูล
    let timeout;
    newOtherBahtInput.addEventListener('input', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            calculateTotal();
            calculateTotalPrice();
            
        }, 3000);
       
    });
}

function calculateTotal() {
    let totalBahtInputValue = 0;
    for (const inputId of inputIds) {
        const otherBahtInput = document.getElementById(inputId);
        if (otherBahtInput) {
            const inputValue = parseFloat(otherBahtInput.value);
            if (!isNaN(inputValue)) {
                totalBahtInputValue += inputValue;
                otherTotal.value = totalBahtInputValue;
                calculateTotalPrice();
            }
        }
    }
    console.log('ค่ารวมจาก input fields:', totalBahtInputValue);
}

const total_Price = document.getElementById("total_Price");
function calculateTotalPrice(){
    let allowanceValue = parseFloat(allowanceBaht.value) || 0;
    let rentValue = parseFloat(rentBaht.value) || 0;
    let vehicleValue = parseFloat(vehicleBaht.value) || 0;
    let otherTotalValue = parseFloat(otherTotal.value) || 0;

    // ตรวจสอบค่าว่างของ allowanceValue, rentValue, และ vehicleValue
    if (isNaN(allowanceValue)) {
        allowanceValue = 0;
    }
    if (isNaN(rentValue)) {
        rentValue = 0;
    }
    if (isNaN(vehicleValue)) {
        vehicleValue = 0;
    }

    // ถ้า otherTotalValue เป็น NaN หรือเป็นค่าว่าง (สตริงว่าง) ก็ไม่มีปัญหา
    if (isNaN(otherTotalValue)) {
        otherTotalValue = 0;
    }

    let total = allowanceValue + rentValue + vehicleValue + otherTotalValue;
    total_Price.value = total;
    let thaibath =  ArabicNumberToText(total);
    document.getElementById("thaibaht").innerHTML  = "จำนวนเงิน (ตัวอักษร) ( " + thaibath +")";

     
}



// Use the "input" event for real-time updates for both input fields
startDateTimeInput.addEventListener("input", calculateTimeDifference);
endDateTimeInput.addEventListener("input", calculateTimeDifference);
allowanceList.addEventListener('change', calculateTotalallowance);
rentList.addEventListener('change', calculateTotalRent);
vehicle.addEventListener('input', function () {
    vehicleBaht.value = vehicle.value;
    calculateTotalPrice();
});



