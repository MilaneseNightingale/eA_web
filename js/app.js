var eventDetails = [
	{
		name: 'Social',
		pic: "img/social.jpg",
		sub: ["birthday","marriage","party"]
	},
	{
		name: 'Tech',
		pic: "img/tech.jpg",
		sub: ["talk","Hackathon","Session","Workshop"]
	},
	{
		name: 'Trip',
		pic: "img/trip.jpg",
		sub: ["Picnic","Trek","Road Trip","site seeing"]
	},
	{
		name: 'Cultural',
		pic: "img/cultural.jpg",
		sub: ["dance", "Music", "Painting"]
	},
	{
		name: 'Something',
		pic: "img/trip.jpg",
		sub: ["something 1","something 2","something 3"]
	},
	{
		name: 'Educational',
		pic: "img/cultural.jpg",
		sub: ["Educational trip","seminar","something"]
	},
	{
		name: 'Live The design',
		pic: "img/social.jpg",
		sub: ["Travis", "theFutur", "Dann Petty"]
	},
	{
		name: 'Whatsup Yo',
		pic: "img/tech.jpg",
		sub: ["cool", "yoi", "sup"]
	}
];

// populating the page with main events

const eA_events = document.querySelector("#events");

function eA_mainEventPopulate(eventDetails) {
	
		for (let i = 0; i < eventDetails.length; i++) {
			
			eA_events.innerHTML += '<div class="eventMain" data-num="'+ i +'"\
			style="background-image: url('+ eventDetails[i].pic +');">\
			<h4 data-num="' + i + '">' + eventDetails[i].name + '</h4>\
			</div>';
		}
}
eA_mainEventPopulate(eventDetails);


$(".eventMain").click(function(e) {
	eA_events.innerHTML = '';
	let subIndex = e.target.getAttribute("data-num");
	for(let i = 0; i < eventDetails[subIndex].sub.length; i++ ){
		eA_events.innerHTML += '<div class="sub"><p>' + eventDetails[subIndex].sub[i] + '</p></div>';
	}
	document.querySelector(".directory").innerHTML += '<span data-href="'+ eventDetails[subIndex].name +'" > ' + eventDetails[subIndex].name +' /</span>';
	dirClick();
	dirArrayUpdate();
});

//  Directory structure in events

function dirClick() {
	$(".directory>*").on('click', function(e) {
		console.log(e);
		console.log(e.currentTarget.attributes[0].value);		
	});
}; dirClick();

// Fab button for navActivity on mobile

$('#fab-button').click(function() {
	var delay = -50;
	$('#navActivity div').each(function(){
		var $div = $(this);
        setTimeout(function() {
          $div.toggleClass('swipe');
        }, delay+=100);
	});
	$('#fab-button').toggleClass('fab-rotate');
});

// Grid button for navActivity on desktop

$('#grid-button').click(function() {
	$('#navActivity').slideToggle();
	$('.backLight').fadeIn();
});
$('.backLight').click(function() {
	$('#navActivity').slideUp();
	$('.backLight').fadeOut();
});

$('.newEvents').click(function() {
	document.getElementById("navPopup").innerHTML = '\
	<form action="#" method="POST">\
		<h3>Create New Event</h3>\
		<label for="event-name">Event Name\
			<input type="text" id="event-name" required="true">\
		</label>\
		<label for="start-date">Start date\
			<input type="date" id="start-date" required="true">\
		</label>\
		<label for="end-date">End date\
			<input type="date" id="end-date">\
		</label>\
		<label for="start-time">Start time\
			<input type="time" id="start-time">\
		</label>\
		<label for="end-time">End time\
			<input type="time" id="end-time">\
		</label>\
		<input type="submit" value="Create">\
	</form>' ;
	$('.navPopup').slideDown();
	$('.backDark').fadeIn();
});

$('.createInvite').click(function(){
	document.getElementById("navPopup").innerHTML = '\
	<form action="#" method="POST">\
		<h3>Create Invite</h3>\
		<label for="event-name">Event Name\
			<select id="event-name">\
				<option>Event 1</option>\
				<option>Event 2</option>\
				<option>Event 3</option>\
				<option>Event 4</option>\
			</select>\
		</label>\
		<label for="invite-label">Invite Label\
			<input type="text" id="invite-label">\
		</label>\
		<label for="invite-media">Upload image/video\
			<input type="file" id="invite-media">\
		</label>\
		<label for="invite-desc">Invite Description\
			<textarea type="text" id="invite-desc"></textarea>\
		</label>\
		<input type="submit" value="Create">\
	</form>' ;

	$('.navPopup').slideDown();
	$('.backDark').fadeIn();
});

$('.myEvents').click(function(){

	var eA_myEvents = [
		{ 
			name: 'Hackathon',
			date:  '20-Feb'
		},
		{
			name: 'Trip to Goa',
			date: '30-Mar'
		},
		{
			name: 'Prashant\'s mirrage',
			date: '07-Apr'
		},
		{
			name: 'Painting Exhibition',
			date: '09-Dec'
		}];
		document.getElementById("navPopup").innerHTML = '';
	for(let i = 0; i< eA_myEvents.length; i++){
		document.getElementById("navPopup").innerHTML += '\
		<div class="my-event-inst">\
			<p>'+ eA_myEvents[i].name +'</p>\
			<p>'+ eA_myEvents[i].date +'</p>\
			<i class="fas fa-share-alt"></i>\
		</div>';
	}
	$('.navPopup').slideDown();
	$('.backDark').fadeIn();
});
$('.backDark').click(function() {
	$('.navPopup').slideUp();
	$('.backDark').fadeOut();
});



var eA_dirArray = new Array();
$(window).on('load', dirArrayUpdate());
function dirArrayUpdate(){
	var dir = document.querySelector('.directory').innerText;
	eA_dirArray = dir.split(' / ');
	console.log(eA_dirArray);
}



// window.addEventListener('load', async e =>{
// 	if('serviceWorker' in navigator){
// 		try{
// 			navigator.serviceWorker.register('sw.js');
// 			console.log('SW registered');
// 		} catch(error){
// 			console.log('SW registration failed');
// 		}
// 	}
// });