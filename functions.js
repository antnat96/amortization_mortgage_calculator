$(document).ready(function() { 

  // Initialize Materialize components
  M.AutoInit();

  if (!sessionStorage.alreadyClicked) {
    var cookieNotice = '<span>By continuing to use our site, you agree to the use of cookies.</span><button id = "cookie-ok" class="btn-flat toast-action">OK</button><button id = "cookie-learn-more" class="btn-flat toast-action">Learn More</button>';
    M.toast({html: cookieNotice, displayLength: 100000000000000});
  }

  $("#cookie-ok").on('click', function() { 
    sessionStorage.alreadyClicked = 1;
    M.Toast.dismissAll();
  });
  
  $("#cookie-learn-more, #cookie-info-link").on('click', function() { 
    var instance = M.Modal.getInstance($("#cookie-modal"));
    instance.open();
    sessionStorage.alreadyClicked = 1;
    M.Toast.dismissAll(); 
  });

  // Handle nav bar practice areas dropdown hover event
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    hover: true, 
    gutter: 0, 
    belowOrigin: false, 
    alignment: 'left',
    coverTrigger: false,
  });

  // Handle nav bar click smooth scrolls to anchors on index.php
  $('.scroll-to').on('click', function() {

    // If a value is set for the top of the anchor (aka if the client is on the anchor page)
    if ($("#" + $(this).attr('id') + "-destination").offset().top) {

      // Prevent normal linking
      event.stopPropagation();
      event.preventDefault();

      // Animate scroll
      $('html, body').animate({
        scrollTop: $("#" + $(this).attr('id') + "-destination").offset().top   
      }, 1500);
    }
    // Else, link normally to the anchor tag

  });

  // Handle nav bar for mobile click smooth scrolls to anchors on index.php
  $('.scroll-then-close').on('click', function() {

    // If a value is set for the top of the anchor (aka if the client is on the anchor page)
    if ($("#" + $(this).attr('id') + "-destination").offset().top) {

      // Prevent normal linking
      event.stopPropagation();
      event.preventDefault();

      // Animate scroll
      $('html, body').animate({
        scrollTop: $("#" + $(this).attr('id') + "-destination").offset().top   
      }, 1500);

      var instance = M.Sidenav.getInstance($(".sidenav"));
      instance.close();
    }
    // Else, link normally to the anchor tag

  });

  // Pop out the location div when visit us button is clicked
  $('#location').on('click', function () {
      $('#location-flash').addClass('z-depth-5');
  });

  // Push back the location div on hover
  $('#location-flash').hover( function () {
      if ($(this).hasClass('z-depth-5')) {
          $('#location-flash').removeClass('z-depth-5');
      }
  });

  /*
  * Author: Anthony Natale
  * Date: 1/23/2020
  * Purpose: Validate the non-email fields for contact form submission prior to ajax
  */
  function validateContactForm() {

    // Get field values
    let fieldVals = [$('#first_name').val().trim(),$('#last_name').val().trim(),$('#subject').val().trim(),$('#message').val().trim(),$('#email').val().trim()];

    // Set up the condition function that will return a boolean based on field value
    const fieldIsValid = (fieldVal) => (fieldVal != null && fieldVal != undefined && typeof fieldVal == 'string' && fieldVal.length >= 1);

    // Return true or false if fields are all valid or not
    return fieldVals.every(fieldIsValid);
  }

  /*
  * Author: Anthony Natale
  * Date: 1/23/2020
  * Purpose: Remove the preloader and the div grey-out class after contact form ajax call receives response from php script
  */
  function resetContactForm() {
    $('#contact-form').find("input[type=text], textarea, input[type=email]").val("");
    $("#contact-preloader").css("display","none");
    $("#contact-form > div").removeClass('coming-soon');
    $("#remaining-char").text("500 characters remaining");
  }

  /*
  * Author: Anthony Natale
  * Date: 1/23/2020
  * Purpose: Handle contact form submission click event
  */
  $('#contact-submit-btn').on('click', function(event) {

      // Prevent standard HTTP post
      event.preventDefault();

      // Run validate function to trim field and make sure they have length and aren't null
      let contactFormIsValid = validateContactForm();

      // Check if email is valid with regex pattern 'something@something.something'
      let emailIsValid = /\S+@\S+\.\S+/.test($('#email').val()) ? true : false;

      // If fields are filled and email matches regex pattern
      if (contactFormIsValid && emailIsValid) {

         // Grey out the contact form
        $("#contact-form > div").addClass('coming-soon');

        // Display the preloader
        $("#contact-preloader").css("display","block"); 

        // Get URL based on the host, needed for xampp
        let getUrl = window.location;
        let baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
        let finalUrl = "";
        if (baseUrl != "http://localhost/") {
          finalUrl = baseUrl + "php/contact-form-submission.php";
        }
        else {
          finalUrl = "http://localhost/mdennylawfirm/php/contact-form-submission.php";
        }

        // Send the contact form info to the php script
        $.ajax({
          type: "POST",
          url: finalUrl,
          data: {
            first_name: $("#first_name").val(),
            last_name: $("#last_name").val(),
            subject: $("#subject").val(), 
            message: $("#message").val(), 
            email: $("#email").val()
          }
        })

        // Do on ajax complete
        .done(function(result) {
            
            // Empty and ungrey the contact form
            resetContactForm();

            // Get result of mail function and choose appropriate modal
            let instance;

            if (result != "Success") {
              instance = M.Modal.getInstance($("#failure-modal"));
            }
            else {
              instance = M.Modal.getInstance($("#success-modal"));
            }

            // Show the modal
            instance.open();

        })

        // Do on ajax fail
        .fail(function(result){

            // Empty and ungrey the contact form
            resetContactForm();

            // Show the failure modal
            let instance = M.Modal.getInstance($("#failure-modal"));
            instance.open();

            });
      }

      // If the fields are filled but the email doesn't match the regex pattern
      else if (contactFormIsValid && !emailIsValid) {
        window.alert("Your email address doesn't seem to be valid. Please check the spelling and format.");
      }

      // If some fields are empty or some fields are empty and the regex pattern doesn't match
      else {
        window.alert("Please fill in all fields prior to submitting the contact form.");
      }

  });

  /*
  * Author: Anthony Natale
  * Date: 1/23/2019
  * Purpose: Handles changes to mortgage calculator input fields and calculates mortgage payment/cost
  */
  $('#mortgage-calculator-form > div > div > input').on('input', function() {

    // Setting initial values
    let totalPrice = $("#total_price").val();let interestRate = $("#interest_rate").val();let downPayment = $("#down_payment").val();let mortgagePeriod = $("#mortgage_period").val();let totalMortgageCost = 0;let monthlyPayment = 0;

    // Using defaults if none entered or if 0
    if (!$.trim(totalPrice).length || totalPrice <= 0) {
      totalPrice = 0;
    }
    if (!$.trim(interestRate).length || interestRate <= 0) {
      interestRate = 4.0;
    }
    if (!$.trim(downPayment).length || downPayment < 0) {
      downPayment = 0;
    }
    if (!$.trim(mortgagePeriod).length || mortgagePeriod <= 0) {
      mortgagePeriod = 30;
    }

    let loanAmount = totalPrice - downPayment;

    let monthlyInterestRate = interestRate / (12 * 100);
    let numOfPaymentsOverLifetime = mortgagePeriod * 12;

    let num = monthlyInterestRate * ((1 + monthlyInterestRate) ** numOfPaymentsOverLifetime);
    let denom = ((1 + monthlyInterestRate) ** numOfPaymentsOverLifetime) - 1;
    let div = num / denom;

    // Get total cost
    monthlyPayment = loanAmount * div;
    monthlyPayment = monthlyPayment.toFixed(2);
    totalMortgageCost = monthlyPayment * numOfPaymentsOverLifetime;
    totalMortgageCost = totalMortgageCost.toFixed(2);

    if (totalMortgageCost < 0 || isNaN(parseFloat(totalMortgageCost))) {
      resetMortgageCalculator();
    }
    else {
      let lastVal = parseFloat($("#mortgage-cost").text());
      $("#mortgage-cost").countTo({
        from: lastVal, 
        to: totalMortgageCost, 
        refreshInterval: 3, 
        decimals: 2, 
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        } 
      });

    }
    if (monthlyPayment < 0 || isNaN(parseFloat(monthlyPayment))) {
      resetMortgageCalculator();

    }
    else {
      let lastVal = parseFloat($("#monthly-payment").text());
      $("#monthly-payment").countTo({
        from: lastVal, 
        to: monthlyPayment, 
        refreshInterval: 3, 
        decimals: 2,         
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }  
      });

    }

  });

  function resetMortgageCalculator() {
    $("#monthly-payment").text("0.00");
    $("#mortgage-cost").text("0.00");
  }

  /*
  * Author: Anthony Natale
  * Date: 1/28/2019
  * Purpose: Counts down the number of characters remaining in the contact form message
  */
 $('#message').on('input', function() {
    let message = $("#message").val();
    let messageLength = message.length;
    let remainingInt = 500 - messageLength;
    let remainingString = remainingInt.toString();

    if (remainingInt != 1) {
      $("#remaining-char").text(remainingString + " characters remaining");
    }
    else {
      $("#remaining-char").text(remainingString + " character remaining");
    }
 });


});