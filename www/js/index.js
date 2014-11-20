function resize() {
	var w_total = $(window).width();
	var h_total = $(window).height();
	
	
	if(h_total > 480) {
		$('.home_footer').css('position', 'fixed');
		$('.home_footer').css('bottom', '0');
		$('.home_footer').css('top', 'auto');
		
		var mlinks = (h_total/2)-230;
		$('.links_home').css('margin-top', mlinks+'px');
		
	} else {
		$('.home_footer').css('position', 'absolute');
		$('.home_footer').css('bottom', 'auto');
		$('.home_footer').css('top', '410');
		
		$('.links_home').css('margin-top', '30px');
	}	
	
	$('#home').css('height', h_total+'px');
	
}

$(window).resize(function() { resize(); });


var app = {
    initialize: function() { this.bindEvents(); },

    bindEvents: function() { document.addEventListener('deviceready', this.onDeviceReady, false); },

    onDeviceReady: function() { app.receivedEvent('deviceready');  },

    receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		
		deviceInfo();
		
		resize();
		
        //console.log('Received Event: ' + id);
    }

};

function deviceInfo() {
	document.getElementById("cordova").innerHTML = cordova.version;
	document.getElementById("platform").innerHTML = device.platform;
	document.getElementById("version").innerHTML = device.version;
	document.getElementById("uuid").innerHTML = device.uuid;
	document.getElementById("model").innerHTML = device.model;
	document.getElementById("width").innerHTML = screen.width;
	document.getElementById("height").innerHTML = screen.height;
	document.getElementById("colorDepth").innerHTML = screen.colorDepth;
	document.getElementById("user-agent").textContent = navigator.userAgent;
};

function interceptBackbutton() { eventOutput("Back button intercepted"); };
function interceptMenubutton() { eventOutput("Menu button intercepted"); };
function interceptSearchbutton() { eventOutput("Search button intercepted"); };
function interceptResume() { eventOutput("Resume event intercepted"); };
function interceptPause() { eventOutput("Pause event intercepted"); };
function interceptOnline() { eventOutput("Online event intercepted"); };
function interceptOffline() { eventOutput("Offline event intercepted"); };

var eventOutput = function(s) {
    var el = document.getElementById("results");
    el.innerHTML = el.innerHTML + s + "<br>";
};

window.onload = function() {
	addListenerToClass('interceptBackButton', function() { document.addEventListener('backbutton', interceptBackbutton, false); });
	addListenerToClass('stopInterceptOfBackButton', function() { document.removeEventListener('backbutton', interceptBackbutton, false); });
	
	addListenerToClass('interceptMenuButton', function() { document.addEventListener('menubutton', interceptMenubutton, false); });
	addListenerToClass('stopInterceptOfMenuButton', function() { document.removeEventListener('menubutton', interceptMenubutton, false); });
	
	addListenerToClass('interceptSearchButton', function() { document.addEventListener('searchbutton', interceptSearchbutton, false); });
	addListenerToClass('stopInterceptOfSearchButton', function() { document.removeEventListener('searchbutton', interceptSearchbutton, false); });
	
	addListenerToClass('interceptResume', function() { document.addEventListener('resume', interceptResume, false); });
	addListenerToClass('stopInterceptOfResume', function() { document.removeEventListener('resume', interceptResume, false); });
	
	addListenerToClass('interceptPause', function() { document.addEventListener('pause', interceptPause, false); });
	addListenerToClass('stopInterceptOfPause', function() { document.removeEventListener('pause', interceptPause, false); });
	
	addListenerToClass('interceptOnline', function() { document.addEventListener('online', interceptOnline, false); });
	addListenerToClass('stopInterceptOfOnline', function() { document.removeEventListener('online', interceptOnline, false); });
	
	addListenerToClass('interceptOffline', function() { document.addEventListener('offline', interceptOffline, false); });
	addListenerToClass('stopInterceptOfOffline', function() { document.removeEventListener('offline', interceptOffline, false); });
	
	resize();
}