$(document).ready(function(){
  $("h1").click(function() {
    $(this).after('<img src="img/cat.jpg"/>');
  });
  $("h2").click(function(){
    $('img').first().remove();
  });
});
