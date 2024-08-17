// script.js

document.getElementById('calculate-btn').addEventListener('click', function() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTenure = parseFloat(document.getElementById('loan-tenure').value) * 12;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
        alert("Please enter valid values");
        return;
    }

    const x = Math.pow(1 + interestRate, loanTenure);
    const monthlyPayment = (loanAmount * x * interestRate) / (x - 1);
    const totalPayment = monthlyPayment * loanTenure;

    document.getElementById('monthly-payment').textContent = `Monthly Payment: {monthlyPayment.toFixed(2)}`;
    document.getElementById('total-payment').textContent = `Total Payment: {totalPayment.toFixed(2)}`;
});
