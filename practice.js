var usersCollection = [] 

$(document).ready(function() {

	$('.button').click(function(){
	    var nameValue = $('.name-input').val();
	    $('.preview-name').text(nameValue);

	    var nameValue = $('.birthday-input').val();
	    $('.preview-birthday').text(nameValue);

	    var nameValue = $('.hometown-input').val();
	    $('.preview-hometown').text(nameValue);

	    var nameValue = $('.job-input').val();
	    $('.preview-job').text(nameValue);

		var nameValue = $('.tele').val();
	    $('.preview-tele').text(nameValue);
	});

	$('.add-user').click(function(){
  	usersCollection.push(getFormValues());
  	
  	updateUserList(usersCollection);
  	// Calling a function called updateUserList and passing in a variable called usersCollection

  });

});

// this checks if inputs are empty
// make sure you have if (validateForm) in your initial function
// function validateForm (){
// 	// reset status
// 	var good=true																				
// 	$('.errormessage-left').removeClass('active-left')
// 	$('input').removeClass("warning")
// 	$('input').each(function(){
// 		if ($(this).val() == "") {
// 			console.log("found a bad one");
// 			good=false
// 			$(this).addClass("warning")
// 			$('.errormessage-left').	addClass('active-left')
// 		}
// 	})
// 	console.log(good)
// 	return good
// };

function getFormValues () {
	var nameVal 	= $('.name-input').val();
	var birthVal 	= $('.birthday-input').val();
	var homeVal 	= $('.hometown-input').val();
	var jobVal 		= $('.job-input').val();
	var teleVal 	= $('.tele').val();

	var formData = {
		name: nameVal,
		birthday: birthVal,
		hometown: homeVal,
		job: jobVal,
		phone: teleVal
	}

	return formData;
};

function updateUserList (list) {
	var ul = $('.users-list ul');
	ul.html('');

list.forEach(function(user, index){
	var text = "<li>User #"+ index + ' -'  + user.name + "</li>"
	console.log(index)
	ul.append(text);

	})
}

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

