$(document).ready(function() {



$("#upload").click(function(){
    var url =  "https://script.google.com/macros/s/AKfycbzB6lBa6MyqKkr-j3NFQLEhs-X5mJ-KSqzKU5MJQbWXnvG-G_g5/exec";
    var formData = new FormData($( "#uploadForm" )[0]);
    // for (var [key, value] of formData.entries()) {
    //     console.log(key, value);
    //   };
     $.ajax({
          url: url,
          type: 'POST',
          data: formData,
//          async: false,
         // cache: false,
//          contentType: false,
          processData: false,
          success: function (returndata) {
              $("div#imi").text(returndata+" okay");


          },
          error: function (returndata,b,errorThrown) {
            //  $("div#imi").text(returndata+"no okay");

              $("div#imi").text(JSON.stringify(errorThrown));

          }
     });
//     return  false;
});




//$('form#uploadForm').submit(function() {
//  search('https://script.google.com/macros/s/AKfycbzB6lBa6MyqKkr-j3NFQLEhs-X5mJ-KSqzKU5MJQbWXnvG-G_g5/exec', $('div#imi'), $('div#imi'));
//  return false;
//  return false;
//});






});




//function search(resource, jqsucc, jqerr) {
//
//  $.ajax({
//    type:     "POST",
//    dat :
//    url:      resource,
//    dataType: "file",
//    success:  function(data, textStatus, jqXHR) {
//                jqsucc.text(data+"okay");
//              },
//    error:    function(jqXHR, textStatus, errorThrown) {
//                jqerr.text(jqXHR+"no okay");
//              }
//    });
//
//}




//算数
// $('form#aa').submit(function() {
//
//   var bb =$('form#aa [name=bb]').val();
//   var cc =$('form#aa [name=cc]').val();
//   var ans =parseInt(bb)+parseInt(cc);
//   var str =""+ans;
//
//   //search('https://script.google.com/macros/s/AKfycbzB6lBa6MyqKkr-j3NFQLEhs-X5mJ-KSqzKU5MJQbWXnvG-G_g5/exec', $('div#imi'), $('div#imi'));
//   $('div#imi').text(ans);
//   return false;
//   return false;
//
// });
// });
