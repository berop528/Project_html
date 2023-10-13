var dailyAllowanceInput = document.getElementById('Daily_allowance');
var numberOfDaysInput = document.getElementById('DailyAllowance_Perday');
var numberOfPeopleInput = document.getElementById('DailyAllowance_PerPeople');
var resultOutput_dailyAllowance = document.getElementById('sum_DailyAllowance');

function calculateTotalDaily_allowance() {
    var dailyAllowance = parseFloat(dailyAllowanceInput.value) || 0;
    var numberOfDays = parseFloat(numberOfDaysInput.value) || 0;
    var numberOfPeople = parseFloat(numberOfPeopleInput.value) || 0;
    var total = dailyAllowance * numberOfDays * numberOfPeople;
    resultOutput_dailyAllowance.value = total;
}
    dailyAllowanceInput.addEventListener('input', calculateTotalDaily_allowance);
    numberOfDaysInput.addEventListener('input', calculateTotalDaily_allowance);
    numberOfPeopleInput.addEventListener('input', calculateTotalDaily_allowance);

    
    calculateTotalDaily_allowance();
///คำนวณค่าเบี้ยเลี้ยง

//////////////////////////////////////////////////////////////////////////////////////////////

////คำนวณค่าที่พัก

var dailyRent = document.getElementById('Rent_dailyAllowance');
var daysRent = document.getElementById('Rent_numberOfDays');
var People_Rent = document.getElementById('Rent_numberOfPeople');
var result_Rent = document.getElementById('sum_Rent');

function calculateTotal_Rent(){
    var Rent_daily = parseFloat(dailyRent.value) || 0 ;
    var Rent_days = parseFloat(dailyRent.value) || 0 ;
    var Rent_people = parseFloat(People_Rent.value) || 0;
    var Rent_result = Rent_daily * Rent_days * Rent_people ;
    result_Rent.value = Rent_result;
}
    dailyRent.addEventListener('input',calculateTotal_Rent);
    daysRent.addEventListener('input',calculateTotal_Rent);
    People_Rent.addEventListener('input',calculateTotal_Rent);

    calculateTotal_Rent();

    //คำนวณประเภท ก

    ////

var dailyLamp = document.getElementById('Lump_dailyAllowance');
var dayLamp = document.getElementById('Lump_numberOfDays');
var peopleLamp = document.getElementById('Lump_numberOfPeople');
var resultLamp = document.getElementById('Lump_totalAmount');

function Lump_payment(){
    var lampDaily = parseFloat(dailyLamp.value) || 0 ;
    var lampDay = parseFloat(dayLamp.value) || 0 ;
    var lampPeople = parseFloat(peopleLamp.value) || 0;
    var lampResult = lampDaily * lampDay * lampPeople ;
    resultLamp.value = lampResult;
}
    dailyLamp.addEventListener('input', Lump_payment);
    dayLamp.addEventListener('input', Lump_payment);
    peopleLamp.addEventListener('input', Lump_payment);

    Lump_payment();
    ////คำนวณแบบเหมาจ่าย

//////////////////////////////////////////////////////////////////////////////////////////////

    //// ฟังชั่นคำนวณพาหนะการเดินทาง 

    //// ประเภทรถ

var numberPeopleCar = document.getElementById('car_numberOfPeople');
var peopleCar = document.getElementById('car_toPeople');
var resultCar = document.getElementById('car_sum');

function calculate_Car() {
    var Carday = parseFloat(numberPeopleCar.value) || 0 ;
    var Carpeople = parseFloat(peopleCar.value) || 0 ;
    var Carresult = Carday * Carpeople ;
    resultCar.value = Carresult;
}
    numberPeopleCar.addEventListener('input', calculate_Car);
    peopleCar.addEventListener('input', calculate_Car);
    
    calculate_Car();

    ////เครื่องบิน

var planePeople = document.getElementById('plane_numberOfPeople');
var planePrice = document.getElementById('plane_priceOfPeople');
var resultPlane = document.getElementById('Sum_plane');

function calculate_Plane() {
    var peoplePlane = parseFloat(planePeople.value) || 0 ;
    var pricePlane = parseFloat(planePrice.value) || 0 ;
    var planeResult = peoplePlane * pricePlane;
    resultPlane.value = planeResult;
}
    planePeople.addEventListener('input',calculate_Plane);
    planePrice.addEventListener('input',calculate_Plane);

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

    distancePerson.addEventListener('input',calculate_Person);
    bathPerson.addEventListener('input',calculate_Person);
    rangePerson.addEventListener('input',calculate_Person);
    
    calculate_Person();

//////////////////////////////////////////////////////////////////////////////////////////////

////ค่ารถรับจ้างประจำทาง 
var peopleBus = document.getElementById('bus_people');
var busPrice = document.getElementById('bus_pricePeople');
var resultBus = document.getElementById('sum_bus');

function calculate_Bus() {
    var bus_people = parseFloat(peopleBus.value) || 0 ;
    var bus_pricePeople = parseFloat(busPrice.value) || 0 ;
    busResult = bus_people * bus_pricePeople;

    resultBus.value = busResult;
}

    peopleBus.addEventListener('input',calculate_Bus);
    busPrice.addEventListener('input',calculate_Bus);
    calculate_Bus();

//////////////////////////////////////////////////////////////////////////////////////////////

////ค่าลงทะเบียน

var peopleRegis = document.getElementById('regis_people');
var pricePeople = document.getElementById('numberOfpricePeople');
var resultRegis = document.getElementById('sum_regis');

function calculate_Regis(){
    var regis_people = parseFloat(peopleRegis.value) || 0 ;
    var numberOfpricePeople = parseFloat(pricePeople.value) || 0 ;
    regisResult = regis_people * numberOfpricePeople;

    resultRegis.value = resultRegis;
}

    peopleRegis.addEventListener('input',calculate_Regis);
    pricePeople.addEventListener('input',calculate_Regis);

    calculate_Regis();