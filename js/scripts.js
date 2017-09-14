//Back-end Logic

var isEquilateral = function (sideA, sideB, sideC) {
  if (sideA === sideB && sideA === sideC) {
    alert("working function");
    $("#equilateral").show();
  }
};


//Front-end Logic
$(document).ready(function() {
  $("#formTriangle").submit(function(event) {
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    alert("working");

    isEquilateral(sideA, sideB, sideC);


    event.preventDefault();
  });
});
