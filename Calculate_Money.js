// <!-- <?!= include('form_request_official_travel'); ?> -->

  
  function calculateTotalDaily_allowance() {
  var dailyAllowance = parseFloat(document.getElementById("daily_allowance").value);
  var dailyAllowancePerDay = parseFloat(document.getElementById("dailyAllowance_Perday").value);
  var dailyAllowancePerPeople = parseFloat(document.getElementById("dailyAllowance_PerPeople").value);

  var sumDailyAllowance = dailyAllowance * dailyAllowancePerDay * dailyAllowancePerPeople;

  document.getElementById("sum_DailyAllowance").value = sumDailyAllowance;
}
  ///คำนวณค่าเบี้ยเลี้ยง

  //////////////////////////////////////////////////////////////////////////////////////////////

  ////คำนวณค่าที่พัก
  function calculateTotal_Rent() {
    var dailyRent = parseFloat(document.getElementById("rent_dailyAllowance").value);
    var daysRent = parseFloat(document.getElementById("rent_numberOfDays").value);
    var people_Rent = parseFloat(document.getElementById("rent_numberOfPeople").value);

    var sum_rent = dailyRent * daysRent * people_Rent;

    document.getElementById('sum_Rent').value = sum_rent;

  }
  // var dailyRent = document.getElementById('Rent_dailyAllowance');
  // var daysRent = document.getElementById('Rent_numberOfDays');
  // var People_Rent = document.getElementById('Rent_numberOfPeople');
  // var result_Rent = document.getElementById('sum_Rent');

  // var Rent_daily = parseFloat(dailyRent.value) || 0 ;
  //     var Rent_days = parseFloat(dailyRent.value) || 0 ;
  //     var Rent_people = parseFloat(People_Rent.value) || 0;

  // function calculateTotal_Rent(){
     
  //     var Rent_result = Rent_daily * Rent_days * Rent_people ;
  //     result_Rent.value = Rent_result;
  // }
  //     dailyRent.addEventListener('input',calculateTotal_Rent);
  //     daysRent.addEventListener('input',calculateTotal_Rent);
  //     People_Rent.addEventListener('input',calculateTotal_Rent);

  //     calculateTotal_Rent();

  //     //คำนวณประเภท ก

  //     ////

  function lump_payment() {
    var dailyLamp = parseFloat(document.getElementById("Lump_dailyAllowance").value);
    var dayLamp = parseFloat(document.getElementById("Lump_numberOfDays").value);
    var  peopleLamp  = parseFloat(document.getElementById("Lump_numberOfPeople").value);
    
    var resultLamp = dailyLamp * dayLamp * peopleLamp;

    document.getElementById('Lump_totalAmount').value = resultLamp;
  }
  // var dailyLamp = document.getElementById('Lump_dailyAllowance');
  // var dayLamp = document.getElementById('Lump_numberOfDays');
  // var peopleLamp = document.getElementById('Lump_numberOfPeople');
  // var resultLamp = document.getElementById('Lump_totalAmount');

  // function lump_payment(){
  //     var lampDaily = parseFloat(dailyLamp.value) || 0 ;
  //     var lampDay = parseFloat(dayLamp.value) || 0 ;
  //     var lampPeople = parseFloat(peopleLamp.value) || 0;
  //     var lampResult = lampDaily * lampDay * lampPeople ;
  //     resultLamp.value = lampResult;
  // }
  //     dailyLamp.addEventListener('input', Lump_payment);
  //     dayLamp.addEventListener('input', Lump_payment);
  //     peopleLamp.addEventListener('input', Lump_payment);

  //     lump_payment();
  //     ////คำนวณแบบเหมาจ่าย

  // //////////////////////////////////////////////////////////////////////////////////////////////

  //     //// ฟังชั่นคำนวณพาหนะการเดินทาง 

  //     //// ประเภทรถ
  
  function calculate_Car() {
    var numberPeopleCar = parseFloat(document.getElementById("car_numberOfPeople").value);
    var peopleCar = parseFloat(document.getElementById("car_toPeople").value);
    
    var resultCar = numberPeopleCar * peopleCar;

    document.getElementById('car_sum').value = resultCar;
  }
  // var numberPeopleCar = document.getElementById('car_numberOfPeople');
  // var peopleCar = document.getElementById('car_toPeople');
  // var resultCar = document.getElementById('car_sum');

  // function calculate_Car() {
  //     var Carday = parseFloat(numberPeopleCar.value) || 0 ;
  //     var Carpeople = parseFloat(peopleCar.value) || 0 ;
  //     var Carresult = Carday * Carpeople ;
  //     resultCar.value = Carresult;
  // }
  //     numberPeopleCar.addEventListener('input', calculate_Car);
  //     peopleCar.addEventListener('input', calculate_Car);
      
  //     calculate_Car();

  //     ////เครื่องบิน

    calculate_Plane();

    /////
    //// รถส่วนตัว 

var distancePerson = document.getElementById('person_distance');
var bathPerson = document.getElementById('person_numberOfBath');
var rangePerson = document.getElementById('person_numberOfRange');
var resultPerson = document.getElementById('person_sum');

function calculate_Person() {
    var personDistance = parseFloat(distancePerson.value) || 0;
    var personBath = parseFloat(bathPerson.value) || 0 ;
    var personRange = parseFloat(rangePerson.value) || 0 ;
    personResult = (personDistance * personBath)  * personRange;
    resultPerson.value = personResult;
 
}
function handleRadioChange() {
    var radioButtons = document.getElementsByName('rent_Live');
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('change', function() {
            var selectedValue = this.value;

            var lampInputs = document.getElementsByClassName('lamp');
            var rentInputs = document.getElementsByClassName('rent');

            for (var j = 0; j < lampInputs.length; j++) {
                lampInputs[j].disabled = selectedValue === 'ประเภท ก';
            }

            for (var k = 0; k < rentInputs.length; k++) {
                rentInputs[k].disabled = selectedValue === 'เหมาจ่าย';
            }
        });
    }
}

handleRadioChange();

const group1Radios = document.querySelectorAll('input[name="select_car"]');
const group2Radio = document.querySelector('input[name="select_car2"]');
var carInputs = document.getElementsByClassName('car');
var planeInputs = document.getElementsByClassName('plane');
var pscarInputs = document.getElementsByClassName('pscar');
group2Radio.addEventListener('change', function() {
    if (this.checked) {
      group1Radios.forEach(radio => (radio.checked = false));
    }
    var selectedValue = this.value;
    
  });
  
  group1Radios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        // Uncheck group2 radio
        group2Radio.checked = false;
      }
      var selectedValue = this.value;
      alert(selectedValue);
    });
  });



    distancePerson.addEventListener('input',calculate_Person);
    bathPerson.addEventListener('input',calculate_Person);
    rangePerson.addEventListener('input',calculate_Person);
  function calculate_Plane(){
    var planePeople = parseFloat(document.getElementById("plane_numberOfPeople").value);
    var planePrice = parseFloat(document.getElementById("plane_priceOfPeople").value);
    
    var resultPlane = planePeople * planePrice;

    document.getElementById('Sum_plane').value = resultPlane;
  }

  // var planePeople = document.getElementById('plane_numberOfPeople');
  // var planePrice = document.getElementById('plane_numberOfPeople');
  // var resultPlane = document.getElementById('Sum_plane');

  // function calculate_Plane() {
  //     var peoplePlane = parseFloat(planePeople.value) || 0 ;
  //     var pricePlane = parseFloat(planePrice.value) || 0 ;
  //     var planeResult = peoplePlane * pricePlane;
  //     resultPlane.value = planeResult;
  // }
  //     planePeople.addEventListener('input',calculate_Plane);
  //     planePrice.addEventListener('input',calculate_Plane);

  //     calculate_Plane();

  //     /////
  //     //// รถส่วนตัว 

  function calculate_Person() {
    var distancePerson = parseFloat(document.getElementById("person_distance").value);
    var bathPerson = parseFloat(document.getElementById("person_numberOfBath").value);
    var rangePerson  = parseFloat(document.getElementById("person_numberOfRange").value);

    var resultPerson = (distancePerson * bathPerson) * rangePerson ;

    document.getElementById('person_sum').value = resultPerson;
  }
  // var distancePerson = document.getElementById('person_distance');
  // var bathPerson = document.getElementById('person_numberOfBath');
  // var rangePerson = document.getElementById('person_numberOfRange');
  // var resultPerson = document.getElementById('person_sum');
  
  // function calculate_Person() {
  //     var personDistance = parseFloat(distancePerson.value) || 0;
  //     var personBath = parseFloat(bathPerson.value) || 0 ;
  //     var personRange = parseFloat(rangePerson.value) || 0 ;
  //     personResult = (personDistance * personBath)  * personRange;
  //     resultPerson.value = personResult;
  
  // }

function calculate_Regis(){
    var regis_people = parseFloat(peopleRegis.value) || 0 ;
    var numberOfpricePeople = parseFloat(pricePeople.value) || 0 ;
    //var resultRegis = ;

    resultRegis.value = regis_people * numberOfpricePeople;
}
  //     distancePerson.addEventListener('input',calculate_Person);
  //     bathPerson.addEventListener('input',calculate_Person);
  //     rangePerson.addEventListener('input',calculate_Person);
      
  //     calculate_Person();

  // //////////////////////////////////////////////////////////////////////////////////////////////

  // ////ค่ารถรับจ้างประจำทาง 
  function calculate_Bus() {
    var peopleBus = parseFloat(document.getElementById("bus_people").value);
    var busPrice = parseFloat(document.getElementById("bus_pricePeople").value);
    
    var resultBus = peopleBus * busPrice;

    document.getElementById('sum_bus').value = resultBus;
  }
  
  // var peopleBus = document.getElementById('bus_people');
  // var busPrice = document.getElementById('bus_pricePeople');
  // var resultBus = document.getElementById('sum_bus');

  // function calculate_Bus() {
  //     var bus_people = parseFloat(peopleBus.value) || 0 ;
  //     var bus_pricePeople = parseFloat(busPrice.value) || 0 ;
  //     busResult = bus_people * bus_pricePeople;

  //     resultBus.value = busResult;
  // }

  //     peopleBus.addEventListener('input',calculate_Bus);
  //     busPrice.addEventListener('input',calculate_Bus);
  //     calculate_Bus();

  // //////////////////////////////////////////////////////////////////////////////////////////////

  // ////ค่าลงทะเบียน

  function calculate_Regis() {
    var peopleRegis = parseFloat(document.getElementById("regis_people").value);
    var pricePeople = parseFloat(document.getElementById("numberOfpricePeople").value);
    
    var resultRegis = peopleRegis * pricePeople;

    document.getElementById('sum_regis').value = resultRegis;
  }
  // var peopleRegis = document.getElementById('regis_people');
  // var pricePeople = document.getElementById('numberOfpricePeople');
  // var resultRegis = document.getElementById('sum_regis');

  // function calculate_Regis(){
  //     var regis_people = parseFloat(peopleRegis.value) || 0 ;
  //     var numberOfpricePeople = parseFloat(pricePeople.value) || 0 ;
  //     regisResult = regis_people * numberOfpricePeople;

  //     resultRegis.value = resultRegis;
  // }

  //     peopleRegis.addEventListener('input',calculate_Regis);
  //     pricePeople.addEventListener('input',calculate_Regis);

  //     calculate_Regis();

    calculate_Regis();

      document.getElementById('createInputsButton').addEventListener('click', createBothInputs);

const inputIds = [];
function createBothInputs(event) {
    event.preventDefault();
    const inputContainer = document.getElementById('otherInput');

    const newInputGroup = document.createElement('div');
    newInputGroup.className = 'input-group mb-3 me';

    const newOtherInput = document.createElement('input');
    const otherInputId = 'otherInput_' + inputIds.length;
    newOtherInput.id = otherInputId;
    newOtherInput.type = 'text';
    newOtherInput.className = 'form-control me-2';
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
            
        }, 1500);
       
    });

    const otherTotal = document.getElementById("otherTotal");

    function calculateTotal() {
        let totalBahtInputValue = 0;
        for (const inputId of inputIds) {
            const otherBahtInput = document.getElementById(inputId);
            if (otherBahtInput) {
                const inputValue = parseFloat(otherBahtInput.value);
                if (!isNaN(inputValue)) {
                    totalBahtInputValue += inputValue;
                    otherTotal.value = totalBahtInputValue;
                }
            }
        }
        console.log('ค่ารวมจาก input fields:', totalBahtInputValue);
    }
}
