//Back-end Logic

var isTriangle = function (sideA, sideB, sideC) {
  if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
    $("#equilateral, #isosceles, #scalene").hide();
    $("#notTriangle").show();
    return false
  } else {
    return true
  }
}

var typeOfTriangles = function (sideA, sideB, sideC) {
  if (sideA === sideB && sideA === sideC) {
    $("#isosceles, #scalene, #notTriangle").hide();
    $("#equilateral").show();
  } else if ((sideA === sideC && sideA !== sideB) || (sideA === sideB && sideB !== sideC) || (sideB === sideC && sideA !== sideB)) {
    $("#equilateral, #scalene, #notTriangle").hide();
    $("#isosceles").show();
  }  else if (sideA !== sideC && sideA !== sideB && sideB !== sideC) {
    $("#isosceles, #equilateral, #notTriangle").hide();
    $("#scalene").show();
  } else {
    alert("There's an error. Find it! The triangles won't...");
  }
};


//Front-end Logic
$(document).ready(function() {
  $("#formTriangle").submit(function(event) {
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    var triangle;

    triangle = isTriangle(sideA, sideB, sideC);
    //notTriangle(sideA, sideB, sideC);

    if (triangle) {
      typeOfTriangles(sideA, sideB, sideC);
    }


    event.preventDefault();
  });
});
