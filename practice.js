$(document).ready(function() {

	$('.button').click(function(){
	    var nameValue = $('.name').val();
	    $('.preview-name').text(nameValue);

	    var nameValue = $('.birthday').val();
	    $('.preview-birthday').text(nameValue);

	    var nameValue = $('.hometown').val();
	    $('.preview-hometown').text(nameValue);

	    var nameValue = $('.job').val();
	    $('.preview-job').text(nameValue);

		var nameValue = $('.tele').val();
	    $('.preview-tele').text(nameValue);
	})
});

function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
};

function overlayback() {
	el = document.getElementById("overlayback");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
};


// Can only use numbers in telephone
$("#telephone").keydown(function(event) {
		// Allow only backspace and delete
		if ( event.keyCode == 46 || event.keyCode == 8 ) {
			// let it happen, don't do anything
		}
		else {
			// Ensure that it is a number and stop the keypress
			if (event.keyCode < 48 || event.keyCode > 57 ) {
				event.preventDefault();	
			}	
		}
	});

// var nameValue[0]='telephone'

// if ($('#telephone').val() !== "/^[0-9]+$/")
// {
// 		nameValue[0]= $('#telephone').val }

// else {alert ('enter')};

// $('modal').bind('click', function(event) { 
//     event.preventDefault();
//     $('.modal').fadeIn(800);
// });


// $(function() {
//     $("opener").dialog({
//       autoOpen: false,
//       show: {
//         effect: "blind",
//         duration: 1000
//       },
//       hide: {
//         effect: "explode",
//         duration: 1000
//       }
//     });
 
//     $(".opener").click(function() {
//       $(".dialog").dialog("open");
//     });
//   });
// 	var person = {
//   firstName : 'Mason',
//   lastName : 'Eric',
//   greet : function() {
//     console.log( 'Hi, ' + this.firstName );
//     console.log( 'Hi, ' + this.lastName );
//   }
// };

// person.greet();

