$(document).bind("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    $.mobile.autoInitializePage = false;
    $.mobile.page.prototype.options.domCache = false;
    $.mobile.page.prototype.options.degradeInputs.date = true;
    $.mobile.changePage.defaults.changeHash = false;
    // Remove page from DOM when it's being replaced
    $('div[data-role="page"]').on('pagehide', function (event, ui) {
    	
        $(event.currentTarget).remove();
    });
});

