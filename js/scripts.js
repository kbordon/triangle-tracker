//Back-end Logic

var isEquilateral = function (sideA, sideB, sideC) {
  if (sideA === sideB && sideA === sideC) {
    alert("working function");
    $("#isosceles, #scalene, #notTriangle").hide();
    $("#equilateral").show();
    return 0;
  } else {
    return 1;
  }
};

var otherTriangles = function (sideA, sideB, sideC) {
  if ((sideA === sideC && sideA !== sideB) || (sideA === sideB && sideB !== sideC) || (sideB === sideC && sideA !==sideB)) {
    alert("working function2");
    $("#equilateral, #scalene, #notTriangle").hide();
    $("#isosceles").show();
  } else if (sideA+sideB <= sideC && sideA  || sideB+sideC <= sideA || sideC+sideA <= sideB) {
    $("#isosceles, #scalene, #equilateral").hide();
    $("#notTriangle").show();
  } else if (sideA !== sideC && sideA !== sideB && sideB !== sideC) {
    alert("working function3");
    $("#isosceles, #equilateral, #notTriangle").hide();
    $("#scalene").show();
  } else {
    alert("There's an error. Find it! The triangles won't...");
  }
};

// var isScaleneorNo = function (sideA, sideB, sideC) {
//   if (sideA !== sideC && sideA !== sideB && sideB !== sideC) {
//     alert("working function3");
//     $("#scalene").show();
//   }
// };

// var notTriangle = function (sideA, sideB, sideC) {
//   if (sideA+sideB <= sideC || sideB+sideC <= sideA || sideC+sideA <= sideB) {
//     alert("working function4");
//     $("#notTriangle").show();
//   } else if (sideA !== sideC && sideA !== sideB && sideB !== sideC) {
//     alert("working function3");
//     $("#scalene").show();
//   }
// };
//function notTriangle may not need the else if, and maybe instead just an else to define a scalene.


//Front-end Logic
$(document).ready(function() {
  $("#formTriangle").submit(function(event) {
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    alert("working");

    var otherCheck = 0;
    otherCheck = isEquilateral(sideA, sideB, sideC);
    if (otherCheck) {
      otherTriangles(sideA, sideB, sideC);
    }
    // notTriangle(sideA, sideB, sideC);


    event.preventDefault();
  });
});
