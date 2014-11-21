var curr_screen = 'home';

function goto(iam){
	$('#'+curr_screen).hide();
	curr_screen = iam;
	$('#'+iam).show();
	
	
	if(iam == 'localizacion'){
		
		if (navigator.onLine) {
			
		setTimeout(function() {
			var $frame = $('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3092.2318606252948!2d-0.437048!3d39.19218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61b0339aa7e835%3A0xbc05e54ba6e73988!2sBoix+Brokers+Consultores+Corredur%C3%ADa+de+Seguros%2C+S.L.!5e0!3m2!1ses!2ses!4v1416566913885" width="600" height="450" frameborder="0" style="border:0"></iframe>');
			$('.content_iframe').html( $frame );
			var w_total = $(window).width();
			var h_total = $(window).height();
			$('.content_iframe iframe').css('width', w_total+'px');
			$('.content_iframe iframe').css('height', (h_total-80)+'px');	
		}, 0);
		
		} else {
		
			$('.content_iframe').html('<div class="txt_oficina txt_gen"> PROXIMAMENTE </div>');
		
		}
			
	}
	
}

function to_home(){
	$('#'+curr_screen).hide();
	curr_screen = 'home';
	$('#home').show();
}


function add_contact(){
	if(navigator.contacts){
		var mycontacts = [];
		navigator.contacts( ['aaa@aaa.com', 'panda', ''],
		function(contacts) { for(i in contacts) { mycontacts.push(contacts[i]); }  });
	}
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

	switch(curr_screen) {
		
		case 'asistencia-coche':
		case 'asistencia-hogar':
		case 'asistencia-comercio':
		case 'asistencia-viaje':
        	$('#'+curr_screen).hide();
			$('#asistencia-urgente').show();
			curr_screen = 'asistencia-urgente';
        	break;
			
		case 'home':
			navigator.app.exitApp();
			break;
			
		case 'localizacion':
			$('#'+curr_screen).hide();
			$('#contacto-oficina').show();
			curr_screen = 'contacto-oficina';
        	break;
			
		default:
			$('#'+curr_screen).hide();
			$('#home').show();
			curr_screen = 'home';
			break;
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