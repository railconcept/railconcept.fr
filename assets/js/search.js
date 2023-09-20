$(document).ready(function() {

  // display the search input when clicked on it
  $("#search-link").click(function (event) {
    // avoid navigating when clicking on the magnifying glass icon
    event.preventDefault();
    if ($('#input-search').css("display") == "block") {
        $('#input-search').css("display", "none");
    } else {
        $('#input-search').css("display", "block");
    }
  });


  // hide search input when clicking away
  $(document).on('click', function (event) {
    if (typeof event != "undefined") {
        if (!$(event.target).hasClass("loope")) {
            if (event.target.id != 'search-link') {
                if (event.target.id != 'input-search') {
                    $('#input-search').css("display", "none");
                }
            }
        }
    }
  });


  let searchInput = $('#input-search');

  searchInput.on('keypress', function(e) {

    // 13 is backspace in ACII / character code
    // see https://api.jquery.com/event.which/
    if (e.which === 13) {
        //site%3A%22railconcept.fr%22+%22{0}%22
        // site:"railconcept.fr"+"{0}"
        // https://www.google.com/search?q=site%3A%22railconcept.fr%22+%22{0}%22

        let searchInputValue = searchInput.val();
        if (searchInputValue.length > 0) {
            // see
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/location
            let urlEncoded = encodeURIComponent(searchInputValue);
            window.location.assign(`https://www.google.com/search?q=site%3A%22railconcept.fr%22+%22${urlEncoded}%22`);
        }
    }
  });

});
