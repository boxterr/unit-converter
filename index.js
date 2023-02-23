const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("input")
const popUp = document.getElementById("myPopup")
const lengthOut = document.getElementById("length")
const volumeOut = document.getElementById("volume")
const massOut = document.getElementById("mass")

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    convertBtn.click();
  }
})

convertBtn.addEventListener("click", function() {
     if (isNaN(input.value) == true) {
       noNumber()
   } else if (input.value == "") {
       noNumber()
    } else {
       length()
       volume()
       mass()
    }
})

function noNumber() {
    popUp.textContent = "You must enter a number. Try again! :)"
    popUp.classList.toggle("show")
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function length() {
    let metersToFeet = (input.value*3.28).toFixed(2)
    let feetToMeters = (input.value/3.28).toFixed(2)
    lengthOut.textContent = `${input.value} meters = ${metersToFeet} feet | ${input.value} feet = ${feetToMeters} meters`
}

function volume() {
    let litersToGallons = (input.value*0.264).toFixed(2)
    let gallonsToLiters  = (input.value/0.264).toFixed(2)
    volumeOut.textContent = `${input.value} liters = ${litersToGallons} gallons | ${input.value} gallons = ${gallonsToLiters} liters`
}

function mass() {
    let kilosToPounds = (input.value*2.204).toFixed(2)
    let poundsToKilos = (input.value/2.204).toFixed(2)
    massOut.textContent = `${input.value} kilos = ${kilosToPounds} pounds | ${input.value} pounds = ${poundsToKilos} kilos`
}