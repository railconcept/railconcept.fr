$initial_height = $small = $bottom = 0;
$initial_height = $("#div-navbar").css("height");
$small = $("#container-navbar").css("padding-top");
$margin_left_container = $("#container-navbar").css("margin-left");
$padding_left_container = $("#container-navbar").css("padding-left");
$left_container = parseInt($margin_left_container) + parseInt($padding_left_container);






function findBootstrapEnvironment() {
    let envs = ['xs', 'sm', 'md', 'lg', 'xl'];

    let el = document.createElement('div');
    document.body.appendChild(el);

    let curEnv = envs.shift();

    for (let env of envs.reverse()) {
        el.classList.add(`d-${env}-none`);

        if (window.getComputedStyle(el).display === 'none') {
            curEnv = env;
            break;
        }
    }

    document.body.removeChild(el);
    return curEnv;
}

$(window).on('resize', function () {
    $("#div-navbar").css("height", '');
    $("#container-navbar").css("padding-top", '');
    $initial_height = $small = $bottom = 0;
    $initial_height = $("#div-navbar").css("height");
    $small = $("#container-navbar").css("padding-top");
    $margin_left_container = $("#container-navbar").css("margin-left");
    $padding_left_container = $("#container-navbar").css("padding-left");
    $left_container = parseInt($margin_left_container) + parseInt($padding_left_container);
    $('.slider-news-caption').css('padding-left', $left_container);
    $('.slider-caption').css('left', $left_container);
    $('#ul-rech-real').css('padding-left', $left_container);


 
    if(findBootstrapEnvironment() == "sm"  || findBootstrapEnvironment() == "xs"){
        $("#loope-etude-img").css("width",'50%');
        $('.loope-etude').css('text-align','right');
    }else{
        $("#loope-etude-img").css("width",'100%')
    }


    if(findBootstrapEnvironment() == "md" || findBootstrapEnvironment() == "sm"  || findBootstrapEnvironment() == "xs"){
        $(".container-fluid-etude").addClass("container") ;
        $('.etude-container-right').css('padding-right', 0);
        $('.etude-container-left').css('padding-left', 0);
        $('.etude-container-right').css('margin-left', 0);
        $('.etude-container-right').css('margin-top', -60);
        $('.etude-container-left').css('right', 0);
        $('.loope-etude').css('margin-left',0);
    }else{
        $(".container-fluid-etude").removeClass("container") ;  
        $('.etude-container-right').css('padding-right', $left_container-50);
        $('.etude-container-left').css('padding-left', $left_container-50);
    
    }


});

$(window).scroll(function () {

    if ($(document).scrollTop() > 0) {
        $("#div-navbar").css("height", parseInt($initial_height) - parseInt($small) + parseInt($bottom));
        $("#container-navbar").css("padding-top", "0px");
        $("#div-navbar").addClass("navshadow");
    } else {
        $("#div-navbar").css("height", parseInt($initial_height));
        $("#container-navbar").css("padding-top", $small);
        $("#div-navbar").removeClass("navshadow");
    }
});


$(document).ready(function () {

    var pathname = window.location.pathname.split('/')[1];
  
    if(pathname != ''){
        $("#"+pathname).addClass('selected');
    }else{
        $("#index").addClass('selected'); 
    }
    console.log(pathname);
    
    $(".nav-li").click(function () {
        if (!$(this).hasClass("no-underline")) {
            $(".link-navbar").removeClass('selected');

            $(this).children().first().addClass("selected");
        }

    });

    $('#main-slider').carousel({
        interval: 5000
    });

    $('#slider-news').carousel({
        interval: 5000
    });

    $('#slider-clients').carousel({
        interval: 10000
    })


    $('.slider-news-caption').css('padding-left', $left_container);
    $('.slider-caption').css('left', $left_container);
    $('#ul-rech-real').css('padding-left', $left_container);
    $('.etude-container-right').css('padding-right', $left_container-50);
    $('.etude-container-left').css('padding-left', $left_container-50);
    $('.clients_carousel .client_item').each(function () {
        var minPerSlide = 2;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });


    $('input[type="checkbox"]').click(function () {
        $('input[type="checkbox"]').not(this).prop("checked", false);
        $id_x = $(this).attr('id');
        $id = $id_x.substr($id_x.length - 1);
        $('#' + $id).click();

    });

    filtrer_gal('all');
    filtrer_act('all');
    $('.gallery-act').each(function (i, obj) {
        $tag='';
        for($i=1;$i<4;$i++){
            if ($(this).hasClass("tag"+$i)) {
                $tag += "<div class='tag tag_"+($i)+" col-md-12'>tag "+($i)+"</div>" ;
              }
        }
        $(this).children(":first").children(":first").prepend("<div class='row tags-row'>"+$tag+"</div>");   
        
    });
    if(findBootstrapEnvironment() == "sm"  || findBootstrapEnvironment() == "xs"){
        $("#loope-etude-img").css("width",'50%');
        $('.loope-etude').css('text-align','right');
    }else{
        $("#loope-etude-img").css("width",'100%')
    }
    if(findBootstrapEnvironment() == "md" || findBootstrapEnvironment() == "sm"  || findBootstrapEnvironment() == "xs"){
        $(".container-fluid-etude").addClass("container") ;
        $('.etude-container-right').css('padding-right', 0);
        $('.etude-container-left').css('padding-left', 0);
        $('.etude-container-right').css('margin-left', 0);
        $('.etude-container-right').css('margin-top', -60);
        $('.etude-container-left').css('right', 0);
        
        $('.loope-etude').css('margin-left',0);
        

        
    }else{
        $(".container-fluid-etude").removeClass("container") ;  
        $('.etude-container-right').css('padding-right', $left_container-50);
        $('.etude-container-left').css('padding-left', $left_container-50);
    
       


    }

    if(pathname == 'realisations' || pathname == 'actualites'){

        $("#all").click();
    }


});


function rech_releaseEvents(el) {

    $id = $(el).attr('id');
    $('.bg-circle').removeClass('image-active');
    $('#bg-circle-' + $id).addClass("image-active");
    $(".rech-check").prop("checked", false);
    $("#check0" + $id).prop("checked", true);
}


$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {

            $('.filter').show('1000');
        } else {

            $(".filter").not('.' + value).hide('1000');
            $('.filter').filter('.' + value).show('1000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});


function paginate($cls) {
  
    $("#paginate_real").off('click');
    var target = $("#gallerie-real");
    $n = '';
    $clsx = '';
    $n = $('.' + $cls).length;
     $('#paging-real').Pagination({
        size: $n,
        pageShow: 5,
        page: 1,
        limit: 6,
    }, function (obj) {
        $('.gallery-real').filter(':not([data-pagex="' + obj.page + '"])').css('display', 'none');
        $('.gallery-real').filter('[data-pagex="' + obj.page + '"]').css('display', 'block');
        $('html,body').stop(true, false).animate({
            scrollTop: eval(target.offset().top - 100)
        }, 1000);
    });

}


function filtrer_gal($class) {
    $(".filter-button").removeClass("btn-active");
    $("#" + $class).addClass("btn-active");
    $nbre_per_page = 6;


    $('.gallery-real').each(function (i, obj) {
        $(this).attr('data-pagex', 'X');
    });
    $('.gallery-real').css('display', 'block');

    if ($class == 'all') {
        $('.gallery-real').each(function (i, obj) {
            $(this).attr('data-pagex', Math.ceil((i + 1) / $nbre_per_page));
        });
        paginate('gallery-real');

    } else {
        $('.gallery-real:not(.' + $class + ')').css('display', 'none');
        $('.' + $class).each(function (i, obj) {
            $(this).attr('data-pagex', Math.ceil((i + 1) / $nbre_per_page));
        });
        paginate($class);
    }
    $('.gallery-real').filter(':not([data-pagex=1])').css('display', 'none');

}

function filtrer_act($class) {
    $(".filter-button").removeClass("btn-active");
    $("#" + $class).addClass("btn-active");
    $nbre_per_page = 6;


    $('.gallery-act').each(function (i, obj) {
        $(this).attr('data-pagex', 'X');
    });
    $('.gallery-act').css('display', 'block');

    if ($class == 'all') {
        $('.gallery-act').each(function (i, obj) {
            $(this).attr('data-pagex', Math.ceil((i + 1) / $nbre_per_page));
        });
        paginate_actualite('gallery-act');

    } else {
        $('.gallery-real:not(.' + $class + ')').css('display', 'none');
        $('.' + $class).each(function (i, obj) {
            $(this).attr('data-pagex', Math.ceil((i + 1) / $nbre_per_page));
        });
        paginate_actualite($class);
    }
    $('.gallery-act').filter(':not([data-pagex=1])').css('display', 'none');

}

function paginate_actualite($cls) {
    $("#paginate_real").off('click');
    var target = $("#gallerie-actualite");
    $n = '';
    $n = $('.' + $cls).length;
   
     $('#paging-real').Pagination({
        size: $n,
        pageShow: 5,
        page: 1,
        limit: 6,
    }, function (obj) {
        $('.gallery-act').filter(':not([data-pagex="' + obj.page + '"])').css('display', 'none');
        $('.gallery-act').filter('[data-pagex="' + obj.page + '"]').css('display', 'block');
        $('html,body').stop(true, false).animate({
            scrollTop: eval(target.offset().top - 100)
        }, 1000);
    });

}

$(document).ready(function () {

$('#input_cv').change(function () {
    var a = $('#input_cv').val().toString().split('\\');

    if(a.length == 1){
        $('#fake_input_cv').text('Parcourir');  
        $("#label_input_cv").css("opacity",0.65);

    }else{
        $('#fake_input_cv').text(a[a.length -1]);
        $("#label_input_cv").css("opacity",1);
    }
    
});
$('#input_lm').change(function () {
    var a = $('#input_lm').val().toString().split('\\');
  
    if(a.length == 1){
        $('#fake_input_lm').text('Parcourir');
        $("#label_input_lm").css("opacity",0.65);
    }else{
        $('#fake_input_lm').text(a[a.length -1]);
        $("#label_input_lm").css("opacity",1);
    }
});
$('#input_ad').change(function () {
    var a = $('#input_ad').val().toString().split('\\');
  
    if(a.length == 1){
        $('#fake_input_ad').text('Parcourir');
        $("#label_input_ad").css("opacity",0.65);
    }else{
        $('#fake_input_ad').text(a[a.length -1]);
        $("#label_input_ad").css("opacity",1);
    }
});

$(document).on('input', '.d_pers', function(){
    $a = $(this).val();
    console.log($(this).css("opacity"));
    if($a ==''){
        $(this).css("opacity",0.65);
    }else{
        $(this).css("opacity",1);
    }
});
});