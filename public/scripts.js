const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
    $("button").click(function(){
        $.ajax({url: "/addTwoNumber", success: function(result){
          $("#div1").html(result);
        }});
      });
});
