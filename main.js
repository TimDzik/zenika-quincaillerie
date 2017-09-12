$( document ).ready(function() {
  var state = $('input[name=state]:checked').val();
  $('#price').on('input',function(e){
    var result = $('#price').val()
    $('#result').val(result)
});
<form action="">
  <input type="radio" name="state" value="0.0825">CA<br>
  // <input type="radio" name="gender" value="female"> Female<br>
  // <input type="radio" name="gender" value="other"> Other
</form>
