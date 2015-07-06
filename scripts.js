//Standard repayment is 10 years
//>= 50 per month
//@ fixed interest

//monthly_payment = principle( interest_rate / ( 1 - ( 1 + interest_rate )^(-total_payments) ) )

function calculateMonthlyPayment(principle, monthlyInterestRate, totalPayments) {
  return ((principle * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-1 * totalPayments))))).toFixed(2));
}

function calculateMonthlyInterestRate(annualInterestRate) {
  return (annualInterestRate / (100 * 12));
}

$(document).ready(function() {

  $('#calculate-button').on('click', function(event) {

    event.preventDefault();

    var principle = $('#principle').val(); //in dollars
    var monthlyInterestRate = calculateMonthlyInterestRate($('#interest-rate').val());
    var totalPayments = 120; //in years

    var monthlyPayment = calculateMonthlyPayment(principle, monthlyInterestRate, totalPayments);

    if (isNaN(parseFloat(monthlyPayment))) {
      var result = 'Please complete all boxes';
    } else {
      var result = 'Monthly Payments: <strong>$' + monthlyPayment + '</strong><br> Total Interest Paid: <strong>$' + ((monthlyPayment * totalPayments) - principle).toFixed(2) + '</strong><br> Total Amount Paid: <strong>$' + (monthlyPayment * totalPayments).toFixed(2) + '</strong>';
    }

    $('#display-calculation').html(result);
    $('#display-calculation').show();

  });

});
