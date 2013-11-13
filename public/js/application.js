$(document).ready(function() {
  
  $('#tweet-form').on('submit', function(event) {
    event.preventDefault();
    var data= $(this).serialize();
    // console.log(data);
    $("#tweet-form").prop('disabled', true)
    if ($('#response')) {
      $('#response').remove();
    }
    $('.messages').append("<p class='progress'>Sending tweet...</p>")
    $.post('/tweet', data, function(response) {
      console.log(response);
      $('.messages').append("<p id='response'>" + response + "</p>");
      $('.progress').remove();
      $("#tweet-form").prop('disabled', false);
      $("#tweet-text").prop('value', '');
    });

  });

});
