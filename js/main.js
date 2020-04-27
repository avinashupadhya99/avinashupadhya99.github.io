$(document).ready(function(){
    const typed = new Typed('.typed',{
      strings: ["Software Engineer.", "Student."],
      typeSpeed: 80,
      loop: true,
      startDelay: 1000,
      showCursor: false
    });
  });

 
  $(window).scroll(function(e) {
    let scroll = $(window).scrollTop();
    if (scroll >= 150 && scroll < 650) {
        $('.navbar').addClass("navbar-hide animated slideOutUp");
    } 
    else if(scroll >=650){
      $('.navbar').removeClass("navbar-hide animated slideOutUp");
      $('.navbar').addClass("animated slideInDown");
    }
    else {
        $('.navbar').removeClass("navbar-hide animated slideOutUp");
        $('.navbar').addClass("animated slideInDown");
    }
  });

  function Utils() {

}

var about_position = $('#AboutMe').offset().top;
var screen_height = $(window).height();
var about_activation_point = about_position - (screen_height * 0.4);
var project_position = $('#Project').offset().top;
var project_activation_point = project_position - (screen_height * 0.4);
var contact_position = $('#ContactInfo').offset().top;
var contact_activation_point = contact_position - (screen_height * 0.8);
var max_scroll_height = $('body').height() - screen_height - 5;

$(window).on('scroll', function() {
  var y_scroll_pos = window.pageYOffset;

  var about_in_view = y_scroll_pos > about_activation_point;
  var project_in_view = y_scroll_pos > project_activation_point;
  var contact_in_view = y_scroll_pos > contact_activation_point;

  if(about_in_view && !(project_in_view)) {
    document.getElementById('AboutLink').classList.add('active');
  }
  else{
    document.getElementById('AboutLink').classList.remove('active');
  }
  if(project_in_view && !(contact_in_view)) {
    document.getElementById('navbarDropdown').classList.add('active');
  }
  else{
    document.getElementById('navbarDropdown').classList.remove('active');
  }
  if(contact_in_view) {
    document.getElementById('ContactLink').classList.add('active');
  }
  else{
    document.getElementById('ContactLink').classList.remove('active');
  }
});