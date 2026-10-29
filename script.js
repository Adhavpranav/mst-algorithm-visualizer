
$(function () {
  // Pranav added this
  function validateGraph() {
    var n = Number($("#n").val());
    var edgeText = $("#edges").val().trim();
    var lines = edgeText === "" ? [] : edgeText.split(/\n/);

    $("#msg").removeClass("ok");

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

  // Mayur's changes
  $("#draw").click(function () {
    validateGraph();
  });

  $("#sample").click(function () {
    $("#n").val(6);
    $("#edges").val(
      "0 1 4\n0 2 3\n1 2 1\n1 3 2\n" +
      "2 3 4\n3 4 2\n4 5 6\n3 5 7"
    );

    validateGraph();
  });

  $("#run").click(function () {
    if (validateGraph()) {
      $("#msg").text("Input accepted. Algorithms will be implemented next.")
        .addClass("ok");
    }
  });
});
