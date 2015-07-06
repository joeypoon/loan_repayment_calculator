//Standard repayment is 10 years
//>= 50 per month
//@ fixed interest

//monthly_payment = principle( interest_rate / ( 1 - ( 1 + interest_rate )^(-total_payments) ) )

function calculateMonthlyPayment(principle, monthlyInterestRate, totalPayments) {
  return ((principle * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-1 * totalPayments))))).toFixed(2));
}

$(document).ready(function() {

  $('#calculate-button').on('click', function(event) {

    event.preventDefault();

    var principle = $('#principle').val(); //in dollars
    var monthlyInterestRate = ($('#interest-rate').val() / (100 * 12))
    var standardTotalPayments = 120; //in years
    var eightTotalPayments = 8 * 12
    var sixTotalPayments = 6 * 12
    var fourTotalPayments = 4 * 12
    var twoTotalPayments = 2 * 12

    var standardMonthlyPayment = calculateMonthlyPayment(principle, monthlyInterestRate, standardTotalPayments)
    var standardTotalAmountPaid = (standardMonthlyPayment * standardTotalPayments).toFixed(2)
    var standardTotalInterestPaid = ((standardMonthlyPayment * standardTotalPayments) - principle).toFixed(2)

    var eightMonthlyPayment = calculateMonthlyPayment(principle, monthlyInterestRate, eightTotalPayments)
    var eightTotalAmountPaid = (eightMonthlyPayment * eightTotalPayments).toFixed(2)
    var eightTotalInterestPaid = ((eightMonthlyPayment * eightTotalPayments) - principle).toFixed(2)

    var sixMonthlyPayment = calculateMonthlyPayment(principle, monthlyInterestRate, sixTotalPayments)
    var sixTotalAmountPaid = (sixMonthlyPayment * sixTotalPayments).toFixed(2)
    var sixTotalInterestPaid = ((sixMonthlyPayment * sixTotalPayments) - principle).toFixed(2)

    var fourMonthlyPayment = calculateMonthlyPayment(principle, monthlyInterestRate, fourTotalPayments)
    var fourTotalAmountPaid = (fourMonthlyPayment * fourTotalPayments).toFixed(2)
    var fourTotalInterestPaid = ((fourMonthlyPayment * fourTotalPayments) - principle).toFixed(2)

    var twoMonthlyPayment = calculateMonthlyPayment(principle, monthlyInterestRate, twoTotalPayments)
    var twoTotalAmountPaid = (twoMonthlyPayment * twoTotalPayments).toFixed(2)
    var twoTotalInterestPaid = ((twoMonthlyPayment * twoTotalPayments) - principle).toFixed(2)

    if (isNaN(parseFloat(standardMonthlyPayment))) {
      var result = 'Please complete all boxes';
    } else {

      $('#ten-monthly-payment').html(standardMonthlyPayment);
      $('#ten-total-interest-paid').html(standardTotalInterestPaid);
      $('#ten-total-amount-paid').html(standardTotalAmountPaid);

      $('#eight-monthly-payment').html(eightMonthlyPayment);
      $('#eight-total-interest-paid').html(eightTotalInterestPaid);
      $('#eight-total-amount-paid').html(eightTotalAmountPaid);

      $('#six-monthly-payment').html(sixMonthlyPayment);
      $('#six-total-interest-paid').html(sixTotalInterestPaid);
      $('#six-total-amount-paid').html(sixTotalAmountPaid);

      $('#four-monthly-payment').html(fourMonthlyPayment);
      $('#four-total-interest-paid').html(fourTotalInterestPaid);
      $('#four-total-amount-paid').html(fourTotalAmountPaid);

      $('#two-monthly-payment').html(twoMonthlyPayment);
      $('#two-total-interest-paid').html(twoTotalInterestPaid);
      $('#two-total-amount-paid').html(twoTotalAmountPaid);

    }

  });

});
