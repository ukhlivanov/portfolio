function showDefine() {
  $('.main-content .content-wrap').children().hide();
  $('#define').fadeIn();
  $('.main-content').addClass("align-center");
  $('.main-content').removeClass("clear-padding");
  $('#projects-button').click(function() {
    navAnimation('#1');
    showProjects();
  })
}


function showAbout() {
  $('.main-content .content-wrap').children().hide();
  $('#about').fadeIn();
  $('.main-content').removeClass("clear-padding");
  $('.main-content').addClass("align-center");
}

// creates li for each nav item
function createNav() {
  var content = ["Sergey Ukhlivanov", "About"];
  content.forEach(function(i) {
    var liItem = $("<li><a id='" + content.indexOf(i) +"' class='nav-link'>" + i + "</a></li>");
    $('.nav-list').append(liItem);
    liItem.click(function() {
      navRouter(liItem);
    });
  });
}

// animates and handles show/hide of content
function navRouter(i) {
  if (i.text() === "Sergey Ukhlivanov") {
    navAnimation('#0');
    showDefine();
  } else if (i.text() === "Projects") {
    navAnimation('#1');
    showProjects();
  } else {
    navAnimation('#2');
    showAbout();
  }
}

function navAnimation(selection) {

  if (selection === '#0') {
    $('#0').addClass('nav-link-open');
    $('#1').removeClass('nav-link-open');
  } else{
    $('#1').addClass('nav-link-open');
    $('#0').removeClass('nav-link-open');
  }
}

$(function() {
  var year = new Date().getFullYear()
  document.querySelector('footer p').innerHTML = '&copy; Sergey Ukhlivanov ' + year
  createNav();
  navAnimation('#0');
  showDefine();
  $('body').fadeIn().css({
    'display': 'block'
  });
});
