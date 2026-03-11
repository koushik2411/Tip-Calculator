const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tipPercentage");
const peopleInput = document.getElementById("peopleNum");
const btn = document.getElementById("btn");
const totalAmount = document.getElementById("totalAmount");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    
    const bill = billInput.value;
    const tipPercent = tipInput.value;
    const people = peopleInput.value;

    if(bill === "" || tipPercent === "" || people === "") return;

    const tipAmount = (bill * tipPercent) / 100;
    const total = tipAmount + Number(bill);
    const perPerson = total / people;

    totalAmount.textContent = total;

    result.textContent = "Each person have to pay: ₹ " + perPerson.toFixed(2) + " /-";
})