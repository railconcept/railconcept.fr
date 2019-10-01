---
layout: eng-page
---
<div class="competence actualite-2 text-center">
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">

        </div>
    </div>
</div>



<!--actualités-->
<section id="1" class="actualités mt-4">
    <div class="container ">
        <div class="row pb-5">
            <div class="col-lg-7 pr-3 pl-0">
                <div class="date-news mt-0 pt-5 pb-3">{{ page.date | date_to_long_string }} À {{ page.date | date: "%HH%M" }}
                    {% for tag in page.news.taggx %}
                    <span class="tagx">{{tag}}</span>
                    {% endfor %}
                </div>
                <div class="title-actualites">{{page.title_eng}}</div>
                <div class="paragraphe-actualites  justify p-0" markdown="1">
                 <p>  {{page.news.news_1 | markdownify}}</p>
                </div>
            </div>
            <div class="col-lg-5 videoWrapper padding-right-none ">
                <iframe src="https://www.youtube.com/embed/{{page.video_news}}" frameborder="0" allowfullscreen
                    class=" pb-5 mt-5 mb-5" width="100%" height="100%"></iframe>
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
            <div class="paragraphe-actualites espace  justify p-0" markdown="1">
               <p> {{page.news.news_2 | markdownify}}</p>
            </div>
        <div class="container p-0 mt-5">   
                  <div class="row d-flex">
                <div class="col-lg-3 title-actualites mt-0 mb-0 justify-content-center align-self-center">PARTAGER</div>
                <div class="col-lg-9 d-flex text-right">
                 <div class="row justify-content-center align-self-center w-100">
                    <div class="col-md-3 pt-2 pb-2   text-left aos-init aos-animate ml-2 ml-md-0" data-aos="zoom-in-down" data-aos-delay="50">
                        <a id="copy" class=" partager_link text-nowrap" href="#" > <img src="{{base_url}}/assets/img/page-actualites/copie.png" class="  partager img-fluid"> Copier le lien vers l'article</a>
                    </div>
                    <div class="col-md-3 pt-2 pb-2   text-left  aos-init aos-animate ml-3 ml-md-0" data-aos="zoom-in-down" data-aos-delay="50">
                        <a id="facebook" class=" partager_link text-nowrap" href="#" > <img src="{{base_url}}/assets/img/page-actualites/facebook.png" class="  partager img-fluid">Partagez sur Facebook</a>
                    </div>
                    <div class="col-md-3  pt-2 pb-2  text-left  aos-init aos-animate ml-4 ml-md-0" data-aos="zoom-in-down" data-aos-delay="50">
                        <a id="twitter" class=" partager_link text-nowrap" href="#" > <img src="{{base_url}}/assets/img/page-actualites/twitter.png" class="  partager img-fluid">Partagez sur Twitter</a>
                    </div>
                    <div class="col-md-3  pt-2 pb-2 text-left  aos-init aos-animate ml-5 ml-md-0" data-aos="zoom-in-down" data-aos-delay="50">
                        <a id="linkedin" class=" partager_link text-nowrap" href="#" > <img src="{{base_url}}/assets/img/page-actualites/lin.png" class=" partager img-fluid mx-auto vertical-align-center">Partagez sur Linkedin</a>
                    </div>
                  </div>  
                </div>
    </div></div>
        </div>
    </div>
    </div>
</section>



<!-- More news-->

<section class="more_news">
    <div class="container p-0">
        <hr class="mb-5 ">
        <div class="row">           
                <span class="plus col-12 p-0">VOIR PLUS D'ACTUALITéS</span>       
{% assign maxPost = 3 %}
{% assign counter = 0 %}
  {% for post in site.posts %}
  {% if post.title != page.title %}
        {% assign counter = counter | plus: 1 %}
            <div class="gallery-act  col-md-4  mt-3  
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
     {% endif %}
       {% if counter == maxPost %}
        {% break %} {% comment %}exit the for loop{% endcomment %}
        {% endif %}
     {% endfor %}

        </div>

    </div>
</section>

{% include contact.html %}

<script type="text/javascript"> 
    let tagsss =[[],[]];
     "{% for tagz in site.catnews %}"
         tagsss["{{tagz.name}}"] = ["{{tagz.title_eng}}"]
      "{% endfor %}"
  </script>

{% include footer.html %}