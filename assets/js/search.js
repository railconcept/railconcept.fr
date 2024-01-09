$(document).ready(function() {

    let inputSearch = $('#input-search');
    // display the search input when clicked on it
    $("#search-link").click(function (event) {
        // avoid navigating when clicking on the magnifying glass icon
        event.preventDefault();

        inputSearch.toggleClass("d-lg-none");
        inputSearch.focus();
    });


    // used only to determine if the user clicked away from the toolbar
    // when searching so we can close the search input
    let navbar = $("nav.navbar");    
    // hide search input when clicking away
    $(document).on('click', function (event) {
        if (typeof event != "undefined") {
            let mouseInNavbar = !navbar.is(event.target) && navbar.has(event.target).length === 0;
            if(mouseInNavbar) {
                inputSearch.addClass("d-lg-none");
            }
        }
    });



    // Get a reference to the search input element
    //var searchInput = document.getElementById("input-search");

    // Add a click event listener to the input element
    //searchInput.addEventListener("click",function()) {
    // Set focus on the input element when it's clicked
    //this.focus()
    


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
