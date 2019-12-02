(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');
    $(".fa-search").css('color','#942625') ;
    if (results.length) { // Are there any results?
      var appendString = '';
      for (var i = 0; i < results.length; i++) {  // Iterate over the results

         var item = store[results[i].ref];
        console.log(item) ;

        if(item.type == "news"){
        let string = item.tag.substring(0, item.tag.length - 1);;
        let arr = string.split(',');
        let tagggs ="" ;
        for (var j = 0; j < arr.length; j++) {  
          tagggs +='<span class="tagx">'+arr[j]+'</span>'
        }

        appendString += '<li> <div class="date-news "> '+ item.date +" "+tagggs+'</div>'
        +'<a href="' + item.url + '"> <div class="title-actualites m-0">' + item.title + '</div></a>'
           +'<div class="paragraphe-actualites  justify p-0" markdown="1">'
             +'<p>'  + item.content.substring(0,350);+ '...</p></div></li>' ; 
        
      }



      if(item.type == "page"){
        appendString += '<li class="mt-5 pt-3"><a href="' + item.url + '"> <div class="title-actualites m-0">' + item.title + '</div></a>'
           +'<div class="paragraphe-actualites  justify p-0" markdown="1">'
             +'<p>'  + item.content.replace(/\s+/g, ' ').substring(0,150)+ '...</p></div></li>' ; 
      }


      if(item.type == "jobs"){

      
          appendString += '<li class="mt-5 pt-3"><a href="/carrieres"> <div class="title-actualites m-0">LES POSTES À POUVOIR</div></a>'
          +' <div id="poste_selected" class="mt-3 ">'+item.title+ " - " +item.dep+'</div>'
          +'<div id="poste_contrat" class="paragraphe-news m-0">'+item.tdc+ " - " +item.ldt+'</div>'
          +'<div id="entreprise" class="paragraphe-news ">' + item.content.replace(/\s+/g, ' ').substring(0,350)+ '...</div>' ;

        
        }
        if(item.type == "réalisations"){
         if(item.dep == 'mission'){item.dep = "MISSION AMO GRAND PROJET"}
         if(item.dep == 'etudex'){item.dep = "ÉTUDES"}
         if(item.dep == 'expert'){item.dep = "EXPERTISE/CONSEIL"}
         if(item.dep == 'vente'){item.dep = "VENTE LOGICIEL"}
      
          appendString += '<li class="mt-5"><a href="' + item.url + '"> <div class="title-actualites m-0">NOS RÉALISATIONS</div></a>'
          +' <div id="poste_selected" class="mt-3 ">'+item.dep+ " - " +item.title+'</div>'
          +'<div id="poste_contrat" class="paragraphe-news m-0">'+item.tdc+ " - " +item.ldt+'</div>'
          +'<div id="entreprise" class="paragraphe-news ">' + item.content.replace(/\s+/g, ' ').substring(0,350)+ '...</div>' ;

        
        }



      }

     


      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
  

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('date');
      this.field('tag');
      this.field('dep');
      this.field('tdc');
      this.field('ldt');
      this.field('content');
      
      

   




      for (var key in window.store) { // Add the data to lunr
        this.add({
          'id': key,
          'title': window.store[key].title,
          'date': window.store[key].date,
          'tag': window.store[key].tag,
          'dep': window.store[key].dep,
          'tdc': window.store[key].tdc,
          'ldt': window.store[key].ldt,
          'content': window.store[key].content
        });
  
      
      }
    });

    var results = idx.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results, window.store); // We'll write this in the next section
  }
})();