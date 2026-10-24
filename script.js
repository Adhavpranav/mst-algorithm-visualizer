$(function () {

  function validateGraph() {
    var n = Number($("#n").val());
    var lines = $("#edges").val().trim().split("\n");

    if (!Number.isInteger(n) || n < 1 || n > 12) {
      $("#msg").text("Enter vertices between 1 and 12.");
      return false;
    }

    for (var i = 0; i < lines.length; i++) {
      var edge = lines[i].trim().split(/\s+/);

      if (edge.length !== 3) {
        $("#msg").text("Enter edges as: u v weight.");
        return false;
      }
});
