document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var button = document.getElementById('stepOne');
  var buttonPing = document.getElementById('pingPong');
  var pTag = document.getElementById('first');
  var buttonSeven = document.getElementById('seven');
  var pTag2 = document.getElementById('p2');
  var buttonTime = document.getElementById('timeButton');
  var pTag3 = document.getElementById('p3');
  var lastButton = document.getElementById('last');
  var list = document.getElementById('car');


    button.addEventListener('click', function(){
    response = $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'html'
    });
  });

    buttonSeven.addEventListener('click', function(){
    var sevenRequest = $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    dataType: 'text'
  });

    sevenRequest.done(function(responseData){
      console.log(responseData);
      pTag2.innerText = 'passed';
    });

    buttonTime.addEventListener('click', function(){
    var timeRequest = $.ajax({
        url: 'http://first-ajax-api.herokuapp.com/time',
        method: 'GET',
        data: {timezone: 'Asia/Kolkata'},
        dataType: 'text'
      });


    timeRequest.done(function(responseData){
      console.log(responseData);
      pTag3.innerText = responseData;
      });
    });

    lastButton.addEventListener('click', function(){
    var carRequest = $.ajax({
        url: 'http://first-ajax-api.herokuapp.com/a_car',
        method: 'GET',
        dataType: 'html'
    });

    carRequest.done(function(responseData){
      console.log(responseData);
      list.innerHTML += responseData;
    })
    })

    buttonPing.addEventListener('click', function(){
      var ping = $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'html'
    });

    ping.done(function(responseData){
      console.log(responseData);
      pTag.innerText = 'passed';
    });
    ping.fail(function(responseData){
      console.log(responseData);
      pTag.innerText = 'tryhard';
    });
    ping.always(function(responseData){
      console.log('Hey the request finished!');
    })
  });
});
});

// 'or''='
// username = ''or''='';
