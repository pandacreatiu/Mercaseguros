var curr_screen = 'home';

function goto(iam){
	$('#'+curr_screen).hide();
	curr_screen = iam;
	$('#'+iam).show();
}

function to_home(){
	$('#'+curr_screen).hide();
	curr_screen = 'home';
	$('#home').show();
}


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
    receivedEvent: function(id) { resize(); }
};

function interceptBackbutton() { 
	
	if(curr_screen == 'asistencia-coche' || curr_screen == 'asistencia-hogar' || curr_screen == 'asistencia-comercio' || curr_screen == 'asistencia-viaje') {
		$('#'+curr_screen).hide();
		$('#asistencia-urgente').show();
		curr_screen = 'asistencia-urgente';
	} else {
		if(curr_screen == 'home') {
			navigator.app.exitApp();
		} else {
			$('#'+curr_screen).hide();
			$('#home').show();
			curr_screen = 'home';
		}
	}	
};

function interceptMenubutton(){
	if(curr_screen != 'home') {
		$('#'+curr_screen).hide();
		curr_screen = 'home';
		$('#home').show();
	}
}

function interceptOnline(){ }
function interceptOffline(){ }

window.onload = function() {
	resize();
	
	document.addEventListener('backbutton', interceptBackbutton, false);
	//document.removeEventListener('backbutton', interceptBackbutton, false);
	
	document.addEventListener('menubutton', interceptMenubutton, false);
	//document.removeEventListener('menubutton', interceptMenubutton, false);
	
	//document.addEventListener('searchbutton', interceptSearchbutton, false);
	//document.removeEventListener('searchbutton', interceptSearchbutton, false);
	
	//document.addEventListener('resume', interceptResume, false);
	//document.removeEventListener('resume', interceptResume, false);
	
	//document.addEventListener('pause', interceptPause, false);
	//document.removeEventListener('pause', interceptPause, false);
	
	document.addEventListener('online', interceptOnline, false);
	//document.removeEventListener('online', interceptOnline, false);
	
	document.addEventListener('offline', interceptOffline, false);
	//document.removeEventListener('offline', interceptOffline, false);
	
	
}