$(document).ready(function() {
  $("form#groclist").submit(function(event) {
    var items = ["item1", "item2", "item3", "item4"];

    var values = [];

    items.forEach(function(item) {
      var userInput = $("input#" + item).val();
      $("." + item).text(userInput);
      values.push(userInput.toUpperCase());

    });

    values.sort();
    values.forEach(function(value) {
      $("#results").append("<li>" + value + "</li>");
    });

    $("#results").show();
    $("#groclist").hide();
  event.preventDefault();
  });
});
