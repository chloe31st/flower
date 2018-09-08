$(document).ready(function() {

$('form#uploadForm').submit(function() {
  search('https://script.google.com/macros/s/AKfycbzB6lBa6MyqKkr-j3NFQLEhs-X5mJ-KSqzKU5MJQbWXnvG-G_g5/exec', $('div#imi'), $('div#imi'));
  return false;
  return false;
});


});

function search(resource, jqsucc, jqerr) {

  $.ajax({
    type:     "POST",
    url:      resource,
    dataType: "text",
    success:  function(data, textStatus, jqXHR) {
                jqsucc.text(data+"okay");
              },
    error:    function(jqXHR, textStatus, errorThrown) {
                jqerr.text(jqXHR+"no okay");
              }
    });

}




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
