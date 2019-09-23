---
layout: page
---
<div class="competence actualite-2 text-center">
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">

        </div>
    </div>
</div>



<!--actualités-->
<section id="1" class="actualités mt-5">
    <div class="container mt-5">
        <div class="row pt-5 pb-5">
            <div class="col-lg-7 pr-3 pl-0">
                <div class="date-news mt-0 pt-5 pb-3">{{ page.date | date_to_long_string }} À {{ page.date | date: "%HH%M" }}
                    {% for tag in page.news.taggx %}
                    <span class="tagx">{{tag}}</span>
                    {% endfor %}
                </div>
                <div class="title-actualites">{{page.title}}</div>
                <div class="paragraphe-actualites pr-3 pl-3 justify p-0" markdown="1">
                 <p>  {{page.news.news_1 | markdownify}}</p>

                </div>
            </div>
            <div class="col-lg-5 videoWrapper padding-right-none ">
                <iframe src="https://www.youtube.com/embed/{{page.video_news}}" frameborder="0" allowfullscreen
                    class="pt-5 pb-5 mt-5 mb-5" width="100%" height="100%"></iframe>
            </div>
            <div class="col-md-4 pt-5">
                <img src="{{page.news_photo.photo_news1}}" class="img-100">
            </div>
            <div class="col-md-4 pt-5">
                <img src="{{ page.news_photo.photo_news2}}" class="img-100">
            </div>
            <div class="col-md-4 pt-5">
                <img src="{{ page.news_photo.photo_news3}}" class="img-100">
            </div>

            <div class="paragraphe-actualites espace pr-3 pl-3 justify p-0" markdown="1">

               <p> {{page.news.news_2 | markdownify}}</p>
            </div>

            <div class="share-links row">
                <div class="title-actualites">PARTAGER</div>
                <span class="partager"><img src="{{ site.baseurl }}\assets\img\page-actualites\icon-copier.png">Copier
                    le lien vers l'article </span>
                <span class="partager"><img
                        src="{{ site.baseurl }}\assets\img\page-actualites\icon-facebook.png">Partager sur
                    facebook</span>
                <span class="partager"><img
                        src="{{ site.baseurl }}\assets\img\page-actualites\icon-twitter.png">Partager sur Twitter</span>
                <span class="partager"><img
                        src="{{ site.baseurl }}\assets\img\page-actualites\icon-linkedin.png">Partager sur
                    Linkedin</span>

            </div>
        </div>
    </div>
    </div>
</section>



<!-- More news-->

<section class="more_news">
    <div class="container">
        <hr class="mb-5 ">
        <div class="row">
            <div class="col-12">
                <a href="#" class="plus mb-5">VOIR PLUS D'ACTUALITéS</a>
            </div>

  {% for post in site.posts %}
            <div class="gallery-act  col-md-4  mt-5  
             {% for tags in post.news.taggx%}
                       {{tags}}
                      {% endfor %}
                      ">
                <div class="card card-border-none">
                    <div class="act-tag">


                         <img src="{{post.news_photo.photo_news1}}" class="img-100">
                    </div>
                    <div class="card-body pl-0 pr-0">
                        <div class="paragraphe-actualites mb-3">{{ post.news.news_1 | strip_html | truncatewords: 25 }} </div>
                        <span class="date-news ">{{ post.date | date_to_long_string }}</span>
                                <a href="{{ post.url | prepend: site.baseurl }}" class="card-link float-right ">LIRE LA SUITE</a>
                    </div>
                </div>
            </div>

     {% endfor %}

        </div>

    </div>
</section>







{% include contact.html %}

<script type="text/javascript"> 
    let tagsss =[[],[]];
     "{% for tagz in site.catnews %}"
         tagsss["{{tagz.name}}"] = ["{{tagz.title}}"]
      "{% endfor %}"
  </script>

{% include footer.html %}