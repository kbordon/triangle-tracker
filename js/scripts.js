//Back-end Logic

var isEquilateral = function (sideA, sideB, sideC) {
  if (sideA === sideB && sideA === sideC) {
    alert("working function");
    $(".results").not("#equilateral").hide();
    $("#equilateral").show();
  }
};

var isIsosceles = function (sideA, sideB, sideC) {
  if ((sideA === sideC && sideA !== sideB) || (sideA === sideB && sideB !== sideC) || (sideB === sideC && sideA !==sideB)) {
    alert("working function2");
    $("#isosceles").show();
  }
};

// var isScaleneorNo = function (sideA, sideB, sideC) {
//   if (sideA !== sideC && sideA !== sideB && sideB !== sideC) {
//     alert("working function3");
//     $("#scalene").show();
//   }
// };

var notTriangle = function (sideA, sideB, sideC) {
  if (sideA+sideB <= sideC || sideB+sideC <= sideA || sideC+sideA <= sideB) {
    alert("working function4");
    $("#notTriangle").show();
  } else if (sideA !== sideC && sideA !== sideB && sideB !== sideC) {
    alert("working function3");
    $("#scalene").show();
  }
};
//function notTriangle may not need the else if, and maybe instead just an else to define a scalene.


//Front-end Logic
$(document).ready(function() {
  $("#formTriangle").submit(function(event) {
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    alert("working");

    isEquilateral(sideA, sideB, sideC);
    isIsosceles(sideA, sideB, sideC);
    notTriangle(sideA, sideB, sideC);


    event.preventDefault();
  });
});
