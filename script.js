$(document).ready(function () {
  // Hamburger menu toggle
  $('.toggler').on('click', function () {
    $('.menu-wrap').toggleClass('active');
  });

  // Handling flip-over effect for interests section
  $('.interest-container').on('click', function () {
    $(this).toggleClass('flip');
  });

  // Collaborate form functionality
  $("#submit-form").click(function (event) {
    event.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const formError = $("#form-error");

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "" || email === "") {
      formError.text("Please complete all mandatory fields.").show();
      return;
    } else if (!emailPattern.test(email)) {
      formError.text("Please enter a valid email address.").show();
      return;
    } else {
      formError.hide();
    }

    $(".collaborate-form").html("<p>Details submitted successfully.</p>");
  });

  // Typewriter effect for heading elements
  function typeWriterEffect(element, text, speed, callback) {
    let index = 0;
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
    type();
  }

  const helloElement = document.getElementById('typewriter-hello');
  const zoeElement = document.getElementById('typewriter-text');

  if (helloElement && zoeElement) {
    typeWriterEffect(helloElement, "Hello there,", 100, function () {
      typeWriterEffect(zoeElement, "I’m Zoë.", 100);
    });
  }
});

