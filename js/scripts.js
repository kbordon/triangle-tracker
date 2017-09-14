//Back-end Logic

var isEquilateral = function (sideA, sideB, sideC) {
  if (sideA === sideB && sideA === sideC) {
    alert("working function");
    $("#equilateral").show();
  }
};

var isIsosceles = function (sideA, sideB, sideC) {
  if (sideA === sideC || sideA === sideB || sideB === sideC) {
    alert("working function2");
    $("#isosceles").show();
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
    isIsosceles(sideA,sideB, sideC);


    event.preventDefault();
  });
});
