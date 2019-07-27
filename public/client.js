
'use strict';

function getCount() {
    $.get('/the-count', function(data) {
      $('.js-current-count').text(data.count);
    });
}

function buttonPress() {
    $('body').on('click', '.js-button', function() {
        event.preventDefault();
        getCount();
    });
}

function setupEventListeners() {
    buttonPress();
}

function initialize() {
    setupEventListeners();
}

$(initialize);



