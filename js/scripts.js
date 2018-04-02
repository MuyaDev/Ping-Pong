// business logic
var ping = function(number) {
    var numbersToBeTested = [];
    for (var index = 1; index <= number; index += 1) {
      if (index % 15 === 0) {
        numbersToBeTested.push("pingpong");
      } else if (index % 5 === 0) {
        numbersToBeTested.push("pong");
      } else if (index % 3 === 0) {
        numbersToBeTested.push("ping");
      } else {
        numbersToBeTested.push(index);
      } {
        return numbersToBeTested
      }
      // jQuery user interface logic
      $(document).ready(function() {
        $("form#ping-pong").submit(function(event) {
          event.preventDefault();
          $('ul#output').empty();
          var number = parseInt($("Input#number").val());
          var numbersToBeTested = pingpong(year);
          for (i = 0; i < numbersToBeTested.length; i += 1) {
            $("ul#output").append('<li>' + numbersToBeTested[i] + ",/li>");
          }
        });
      });