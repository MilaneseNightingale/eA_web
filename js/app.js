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


var gColor = [
	{
		p : '#FFE53B',
		s : '#FF2525'
	},
	{
		p : '#08AEEA',
		s : '#2AF598'
	},
	{
		p : "#21D4FD",
		s : "#5221FF"
	},
	{
		p : "#FEE140",
		s : "#F93A6E"
	},
	{
		p : "#C850BA",
		s : "#FFCC70"
	},
	{
		p : "#17EAD9",
		s : "#6078EA"
	},
	{
		p : "#29badc",
		s : "#2d5bdd"
	}
];



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


// function randomColor(){
// 	return (Math.floor(Math.random()* 7));
// }


$(".eventMain").click(function(e) {
	eA_events.innerHTML = '';
	let subIndex = e.target.getAttribute("data-num");
	for(let i = 0; i < eventDetails[subIndex].sub.length; i++ ){
		eA_events.innerHTML += '<div class="sub"><p>' + eventDetails[subIndex].sub[i] + '</p></div>';
	}
	document.querySelector(".directory").innerHTML += '<span data-href="'+ eventDetails[subIndex].name +'" > ' + eventDetails[subIndex].name +' /</span>'
	dirClick();
});


function dirClick() {
	$(".directory>*").on('click', function(e) {
		console.log(e);
		console.log(e.currentTarget.attributes[0].value);
		
	});
		
}; dirClick();


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

$('#grid-button').click(function() {
	$('#navActivity').slideToggle();
	$('.backLight').fadeIn();
});
$('.backLight').click(function() {
	$('#navActivity').slideUp();
	$('.backLight').fadeOut();
});



$('.newEvents').click(function() {
	$('.navPopup').slideDown();
	$('.backDark').fadeIn();
});
$('.backDark').click(function() {
	$('.navPopup').slideUp();
	$('.backDark').fadeOut();
});

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