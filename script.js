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
       var u = Number(edge[0]);
      var v = Number(edge[1]);
      var w = Number(edge[2]);

      if (
        !Number.isInteger(u) ||
        !Number.isInteger(v) ||
        u < 0 || v < 0 ||
        u >= n || v >= n ||
        u === v || !Number.isFinite(w) || w <= 0
      ) {
        $("#msg").text("Invalid edge on line " + (i + 1) + ".");
        return false;
      }
    }

    $("#msg").text("Graph input is valid.").addClass("ok");
    return true;
  }

});
