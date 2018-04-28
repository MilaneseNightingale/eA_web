var mainEventType  = [
	{
		name: 'Social',
		pic: "img/social.jpg",
		sub: ["birthday","marriage","party","birthday","marriage","party"]
	},
	{
		name: 'Tech',
		pic: "img/tech.jpg",
		sub: ["talk","Hackathon","Session","Workshop","talk","Hackathon","Session","Workshop"]
	},
	{
		name: 'Trip',
		pic: "img/trip.jpg",
		sub: ["Picnic","Trek","Road Trip","site seeing","Picnic","Trek","Road Trip","site seeing"]
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


var subEvents = [
	{
		name: "birthday",
		sub: ["birthday 1","birthday 2","birthday 3","birthday 4","birthday 5","birthday 6","birthday 7","birthday 8","birthday 9","birthday 10"]
	},
	{
		name: "marriage",
		sub: ["marriage 1","marriage 2","marriage 3","marriage 4","marriage 5","marriage 6","marriage 7","marriage 8","marriage 9","marriage 10"]
	}
];





// populating the page with main events
const main = document.querySelector(".main");


function eA_mainEventPopulate(mainEventType ) {
	
	if(window.innerWidth < 900){
		main.innerHTML ='<div class="directory">\
				<i class="fas fa-arrow-left"></i>\
				<span data-href="mainEventType " >home /</span>\
			</div>'
		main.innerHTML += '<div class="events"></div>';
		for (let i = 0; i < mainEventType .length; i++) {
			document.querySelector('.events').innerHTML += '<div class="eventMain" style="background-image: url(' + mainEventType [i].pic + ');" data-num="'+ i +'"><h4 data-num="' + i + '">' + mainEventType [i].name + '</h4></div>';
		}
	}
	if(window.innerWidth >= 900){
		var mainEventBar = document.querySelector('.mainEvent-sidebar');
		for (let i = 0; i < mainEventType .length; i++) {
			mainEventBar.innerHTML += '<div class="mainEvent" data-num='+ i +'><p data-num='+ i +'>' + mainEventType [i].name + '</p>\</div>'
		}
	}
}
eA_mainEventPopulate(mainEventType );

// main event to sub event

$(".eventMain").click(function(e) {
	if(window.innerWidth <= 899){
		document.querySelector('.events') .innerHTML= '';
	}
	let subIndex = e.target.getAttribute("data-num");
	document.querySelector('.events').innerHTML += '<div class="sub-group"></div>';
	for(let i = 0; i < mainEventType [subIndex].sub.length; i++ ){
		document.querySelector('.sub-group').innerHTML += '<div class="sub"><p>' + mainEventType [subIndex].sub[i] + '</p></div>';
	}
	document.querySelector(".directory").innerHTML += '<span data-href="'+ mainEventType [subIndex].name +'" > ' + mainEventType [subIndex].name +' /</span>';
	dirClick();
	dirArrayUpdate();
	subEventUpdates();
});

$(".mainEvent").click(function(e) {
	main.innerHTML ='<div class="directory"><i class="fas fa-arrow-left"></i></div>';
	let subIndex = e.target.getAttribute("data-num");
	main.innerHTML += '<div class="sub-group grid-rand'+ Math.floor(Math.random() * Math.floor(3)) +'"></div>';
	for(let i = 0; i < mainEventType [subIndex].sub.length; i++ ){
		document.querySelector('.sub-group').innerHTML += '<div class="sub"><p>' + mainEventType [subIndex].sub[i] + '</p></div>';
	}
	document.querySelector(".directory").innerHTML += '<span data-href="'+ mainEventType [subIndex].name +'" > ' + mainEventType [subIndex].name +' /</span>';
	dirClick();
	dirArrayUpdate();
	subEventUpdates();
});


// Sub event clicks 
function subEventUpdates(){
	$(".sub").click(function(e) {
	
		let currentSub = e.delegateTarget.getElementsByTagName("p")[0].innerText;
		var foundSub = 0;
		document.querySelector('.sub-group') .innerHTML= '';
		$.each(subEvents, function(key, value){
			if(value.name.search(currentSub) != -1){
				foundSub = 1
				for(let i = 0; i < value.sub.length; i++ ){
					document.querySelector('.sub-group').innerHTML += '<div class="sub"><p>' + value.sub[i] + '</p></div>';
				}
				document.querySelector(".directory").innerHTML += '<span data-href="'+ value.name +'" > ' + value.name +' /</span>';
			}
		});
		
		if(foundSub != 1){
			document.querySelector('.sub-group').innerHTML += '<p>You have reached the end</p>';
		}
		dirClick();
		dirArrayUpdate();
		subEventUpdates();
	});	
}






//  Directory structure in events

function dirClick() {
	$(".directory>*").on('click', function(e) {
		console.log(e);
		console.log(e.currentTarget.attributes[0].value);		
	});
};
dirClick();

// For Directory structure

var eA_dirArray = new Array();
// $(window).on('load', dirArrayUpdate());

function dirArrayUpdate(){
	var dir = document.querySelector('.directory').innerText;
	eA_dirArray = dir.split('/');
	for(var i = eA_dirArray.length - 1; i >= 0; i--) {
		if(eA_dirArray[i] === "") {
			eA_dirArray.splice(i, 1);
		}
		// eA_dirArray[i] = eA_dirArray[i].trim();
	}
	console.log(eA_dirArray);
}

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
			<select id="event-name" required="true">\
				<option>Event 1</option>\
				<option>Event 2</option>\
				<option>Event 3</option>\
				<option>Event 4</option>\
			</select>\
		</label>\
		<label for="invite-label">Invite Label\
			<input type="text" id="invite-label" required="true">\
		</label>\
		<label for="invite-media">Upload image/video\
			<input type="file" id="invite-media">\
		</label>\
		<label for="invite-desc">Invite Description\
			<textarea type="text" id="invite-desc" required="true"></textarea>\
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
			name: 'Prashant\'s marrige',
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
$("#navClose").click(function() {
	$('.navPopup').slideUp();
	$('.backDark').fadeOut();
});



// Populate the results of shop and eventhandlers

		// code here

// Shop details pages

$('.result-card').click(function(e){
	if(e.currentTarget.classList[0] === 'shop'){
		// Call shop details function
	}
	if(e.currentTarget.classList[0] === 'eventhandler'){
		// call eventhandler details
	}
});

function shopDetails(){
	// main.innerHTML
}
function eventhandlerDetails(){
	// code here
}



// my event detai
$('.myEvent-card').click(function(e){

	
	document.querySelector("#main").innerHTML = e.currentTarget.innerHTML;
});




// Post calls 

var requestVar = '{ "message" : "somethimggggg", "This" : "ISsssssss" }';

$.post("https://webhook.site/b96c4f6c-fbfc-4a1f-b9ec-98dc8a251c89",requestVar, function(data){
	console.log(data);
},"JSON");





// Service worker

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