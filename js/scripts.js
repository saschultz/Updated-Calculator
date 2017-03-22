//Back-end Logic:
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var mathOp = function(number1, number2) {
    if ($('.btn').is('#addBtn')) {
      var result = add(number1, number2);
      return result;
      console.log(result);
    }
  };
    // } else if ("#subBtn") {
    //   result = subtract(number1, number2);
    // } else if ("#multBtn") {
    //   result = multiply(number1, number2);
    // } else if ("#divBtn") {
    //   result = divide(number1, number2);
    // } else {
    //   alert("TEST");
    // }





//Front-end Logic:
$(document).ready(function() {

  $("form#calculate").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    result = mathOp(number1, number2);
    $("#output").text(result);
  });
});
