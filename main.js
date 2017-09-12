// <form action="">
//   <input type="radio" name="state" value="0.0825">CA<br>
//   // <input type="radio" name="gender" value="female"> Female<br>
//   // <input type="radio" name="gender" value="other"> Other
// </form>
$( document ).ready(function() {

  function calcul() {
    var tax = $('input[name=state]:checked').val();
    var qtt = $('#qtt').val()
    var result = $('#price').val()
    var result_notax = result * qtt
    if (result_notax > 50000) {
      result_notax = result_notax * 0.85
    }
    result =  result_notax * (1 - tax)
    $('#result').val(result)
  }
  $("input[name=state]:radio").change(function () {
    calcul()
  })
  $('#price').on('input',function(e){
    calcul()
  });

  $('#qtt').on('input',function(e){
    calcul()
  });
});
