
'use strict';

function getCount() {                                                   // when getCount runs...
    $.get('/the-count', function(data) {                                // "$.get() will load the data from the server using an HTTP GET request using the route "/the-count"
      $('.js-current-count').text(data.count);                          // and the current count will show the current count.
    });
}

function buttonPress() {                                                 // when button press occurs...
    $('body').on('click', '.js-button', function() {                     // on click of the button with the class .js-button, run getCount.
        getCount();
    });
}

function setupEventListeners() {                                        //  Listen for button press (in this case, listening for when the client presses the increment button)
    buttonPress();
}

function initialize() {                                                 // setup event listeners...
    setupEventListeners();
}

$(initialize);                                                          // App initilizes...



