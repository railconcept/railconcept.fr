$(document).ready(function() {

// display the search input when clicked on it

$("search-link").click(function (event)) {
    ///avoid navigationg when clicking on the magnifiyng glass icon
    event.preventDefault();
    if (($'#input-search').css("display") == "block") {
         $('#input-search').css("display", "none");
  } else {
    $('#input-search').css("display", "block");
  }
    } 
      });



        //hide search input when cloick away
  $(document).on('click', function (event) {
      if (typeof event != "undefinded") {
        if (!$(even.target).hasClass("loope")) {
          if (even.target.id != 'input-search') {
            $('#input-search').css("display", "none");
          }
       }
      }
    } )

    

  let searchInput = $('#input-search');

    searchInput.on('keypress', function(e) {

      // site%3A%22railconcept.fr%22+%22{0}%22
      // site:"railconcept.fr"+"{0}"
      // https://www.google.com/search?q=site%3A%22railconcept.fr%22+%22{0}%22
      // 13 is backspace in ACII / character code
      // see https://api.jquery.com/event.which/
      
      if(e.which === 13) {

        if (searchInput.val().lengh > 0) {
            //window.location.replace(base_url + "/recherche?query=" + searchInput.val());
            window.location.replace("https://www.google.com/search?q=" + searchInput.val());
          }
        }
    });  
