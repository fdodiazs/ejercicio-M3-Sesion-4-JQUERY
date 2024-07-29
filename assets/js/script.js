var origen = "";
var destino = "";
function escala() {
  if (
    ($("#from").val() === "Chicago" && $("#to").val() === "Venice") ||
    ($("#from").val() === "Boston" && $("#to").val() === "Paris")
  ) {
    $("#trans").text("¡Ojo! Tú vuelo tiene escala.");
  } else {
    $("#trans").text("¡Tú vuelo no tiene escalas!");
  }
}
$(document).ready(function () {
  origen = $("#from").val();
  $("#origin").text(origen);
  destino = $("#to").val();
  $("#dest").text(destino);
  $("#fromDate").on("change", function () {
    var fecha = $(this).val();
    var parrafo = "<p>" + fecha + "</p>";
    $("#originDate").append(parrafo);
  });
  $("#toDate").on("change", function () {
    var fecha = $(this).val();
    var parrafo = "<p>" + fecha + "</p>";
    $("#destDate").append(parrafo);
  });
  $("#from").on("change", function () {
    origen = $(this).val();
    $("#origin").text(origen);
    escala();
  });
  $("#to").on("change", function () {
    destino = $(this).val();
    $("#dest").text(destino);
    escala();
  });

  escala();
});
