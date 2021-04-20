var cars = ["Volkswagen","Mercedes","Lamborghini","Ferrari","Audi"];
function load() {
  document.getElementById('cars').innerHTML = cars;
}
function add() {
  var car = prompt("What is your new car?");
  cars[cars.length]=car;
  document.getElementById('cars').innerHTML = cars;
}
