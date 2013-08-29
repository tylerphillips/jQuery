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

    // create variable to hold the current modal window

    var activeWindow;


    $('a.modalLink').click(function(e){


        // cancel the default link behaviour
        e.preventDefault();

        // find the href of the link that was clicked to use as an id
        var id = $(this).attr('href');


        // assign the window with matching id to the activeWindow variable, move it to the center of the screen and fade in
        activeWindow = $('.window' + id)
            .css('opacity', '0') // set to an initial 0 opacity
            .css('top', '40%') // position vertically at 50%
            .css('left', '32%') // position horizontally at 50%
            .fadeTo(500, 1); // fade to an opacity of 1 (100%) over 500 milliseconds


        // create blind and fade in
        $('#modal')
            .append('<div id="blind" />') // create a <div> with an id of 'blind'
            .find('#blind') // select the div we've just created
            .css('opacity', '0') // set the initial opacity to 0
            .fadeTo(500, 0.6) // fade in to an opacity of 0.8 (80%) over 500 milliseconds
            .click(function(e){
                closeModal(); // close modal if someone clicks anywhere on the blind (outside of the window)
            });


    });


    $('a.close').click(function(e){
            // cancel default behaviour
            e.preventDefault();


            // call the closeModal function passing this close button's window
            closeModal();
    });		


    function closeModal() {

        // fade out window and then move back to off screen when fade completes
        activeWindow.fadeOut(250, 
        	function(){ $(this).css('top', '0px').css('left', '0px'); });


        // fade out blind and then remove it
        $('#blind').fadeOut(250,	
        	function(){	$(this).remove(); });

    }
});

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

}

function updateUserList (list) {
	var ul = $('.users-list ul');
	ul.html('');

list.forEach(function(user, index){
	var text = "<li>User #"+ index + ' -'  + user.name + "</li>";
	console.log(index);
	ul.append(text);

	})
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

// function overlay() {
// 	el = document.getElementById("overlay");
// 	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
// };

// function overlayback() {
// 	el = document.getElementById("overlayback");
// 	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
// };





// $('button').hasClass('add-user')

// $('.button').click('.overlay')

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


// this checks if inputs are empty
// make sure you have if (validateForm) in your initial function
// function validateForm (){
// 	// reset status
// 	var good=true																				
// 	$('.errormessage-left').removeClass('active-left')
// 	$('info-input').removeClass("warning")
// 	$('info-input').each(function(){
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

