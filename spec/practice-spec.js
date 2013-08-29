describe('updateUserList', function() {

	beforeEach(function(){
		// empty form --> clears out form
		$('input').val('')
	});

// Check 1---works
	it('should add an li with user\'s name to .users-list ul', function(){
		// seed the form with data
		$('.name-input').val('Tyler');
		$('.birthday-input').val('24');
		$('.hometown-input').val('Greenville');
		$('.job-input').val('Frontend Engineer');
		$('.tele').val('3808131');

		//manually click the submit button
		$('.add-user').click()

		expect($('.users-list ul li').last().text()).toContain('Tyler')
	});

// check 2--works
	it('should\'t add an li with user\'s name with wrong .users-list ul', function(){
	
		$('.name-input').val('Andy');
		$('.birthday-input').val('24');
		$('.hometown-input').val('LA');
		$('.job-input').val('Coffee');
		$('.tele').val('55555555');
	
		// manual click --> Submit button
		$('.add-user').click()

		expect($('.users-list ul li').last().text()).not.toContain('Mason')
		})
	
// check 10

	// it('should ', function(){
	// 	var id =  $(this).attr('href');
	// 	var activeWindow = $('.window' + id)

	// 	expect($('(this).attr(href)')).toBe('activeWindow')
	// })

	// });

// check 9 --> havent got validate quite yet so it actually says it should be false

describe("inputProfile", function(){

	beforeEach(function(){
		// inputs will be cleared every single time --> might want to give its own 'describe'
		$('input').val('')
	})

	it("should warn the user when fields are blank", function(){

		$('.add-user').click()
		// adds the click since you have to submit

		expect($('.error-notice').hasClass('active')).toBe(true)

	})
});



// check 3 -- works

	it('name variable entered into form should be the same as the name output', function() {
		
		// fill in the name input
		$('.name-input').val('ANDY')

		// click the submit button
		$('.add-user').click() 

		// now name input's value should match preview-name's value
		expect($('.name-input').val()).toMatch($('.preview-name').text())

	})
})


//check 4 

// describe('activeWindow', function() {

// 	it('should create activeWindow after clicking the link', function(){

// 		var activeWindow

// 		$('a.modalLink').click(e){
// 			// e.preventDefault();
// 			var id = $(this).attr('href');

// 	expect($('.window + id')).toBe(activeWindow)
// 	})
// });

// check 5
	
	// it('should create the blind class after the modal is launched', function(){

	// 	var activeWindow

	// 	 $('#modal')
 //            .append('<div id="blind" />') // create a <div> with an id of 'blind'
 //            .find('#blind') // select the div we've just created
 //            .css('opacity', '0') // set the initial opacity to 0
 //            .fadeTo(500, 0.6) // fade in to an opacity of 0.8 (80%) over 500 milliseconds
 //            .click(function(e){
 //                closeModal(); // close modal if someone clicks anywhere on the blind (outside of the window)
 //            })

 //            expect($('<div id="blind" />')).hasClass('#blind').toBe(true)
	// });

// check 6

	// it('should show that the button hasClass "add-user"', function() {

	// 	$('.add-user').click()

	// 	expect ('button').hasClass('add-user').toBe(true)

	// })

	// it('keyboard characters other than numbers should be prevented from be keyed into the telephone input', function(){

	// 	$('#telephone').keydown()
	// 		if ( event.keyCode == 46 || event.keyCode == 8 ) {
	// 	}
	// 	else {
	// 		if (event.keyCode < 48 || event.keyCode > 57 ) {
	// 			event.preventDefault();	
	// 		}	
	// 	}
	
	// 		expect 

	// })

// check 7

// describe('getFormValues', function() {

// 	it('form data should be pushed to userCollection', function(){

// 		$('.add-user').click()
//   			usersCollection.push(getFormValues())

//   		expect usersCollection.push(getFormValues())

// 	})

// check 8	

// describe ('activateModal', function(){
	
// 	it('should show that the overlay div also has the class overlay')
// 		$('.button').click('.modal-active')

// 		expect ('overlay div').hasClass('overlay').toBe(true)

// })




