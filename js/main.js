var $windowWith = $(window).width();
if ($windowWith < 992){
    $("#navbarSupportedContent").on("click",function(){
        console.log("I'm clicked");
        $(this).removeClass('show');
    })
    $(".navbar-inner").on("click",function(e){
        console.log("I'm clicked");
        e.stopPropagation();
    })
}

$('.menu .wrapper .hamb_menu').click(function(e) {
    e.preventDefault();
    $(".menu .leftmenu").addClass("leftmenu_active");
});
$('.menu .forclose').click(function() {
    $(".menu .leftmenu").removeClass("leftmenu_active");
});

$(function(){
  $( "body" ).on( "swipeleft", swiperightHandler );
  function swiperightHandler( ){
    	$(".menu .leftmenu").removeClass("leftmenu_active");
  }
});

$('.menu .search img').click(function(e) {
    e.preventDefault();
    if($(".menu .search form").hasClass("active_form")){
    	$(".menu .search form").removeClass("active_form");
    }else{
    	$(".menu .search form").addClass("active_form");
    }
});
$('.home_cat .categories a').click(function(e) {
    e.preventDefault();
    $(".home_cat .categories a").removeClass("activated")
    $(this).addClass("activated")
});

$('.cart_checkout_page .box .rightside .tipc h2').click(function(e) {
    $(".cart_checkout_page .box .rightside .tipc .activated").removeClass("activated");
    $(this).addClass("activated");
});

$('.cart_checkout_page .box .rightside .sendasgift').click(function(e) {
    if($(this).hasClass("activatedgif")){
      $(this).removeClass("activatedgif");
    }else{
      $(this).addClass("activatedgif");
    }
});


$('.menu .leftmenu ul li a').click(function(e) {
    if($(this).parent().hasClass("dropdown_m")){
    e.preventDefault();
    	if($(this).parent().hasClass("dropdown_active")){
    		$(this).parent().removeClass("dropdown_active");
    	}else{
    		$(this).parent().addClass("dropdown_active");
    	}
    }
});

$('.slider_c .product .btn_c .counter .arrow_up_c').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find(".noofc").html());
    var calcint = val + 1;
    if(calcint < 100){
        $(this).parent().find(".noofc").html(calcint);
    }
});
$('.slider_c .product .btn_c .counter .arrow_down_c').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find(".noofc").html());
    var calcint = val - 1;
    if(calcint >= 1){
        $(this).parent().find(".noofc").html(calcint);
    }
});

$('.products_catalog .product .btn_c .counter .arrow_up_c').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find(".noofc").html());
    var calcint = val + 1;
    if(calcint < 100){
        $(this).parent().find(".noofc").html(calcint);
    }
});
$('.products_catalog .product .btn_c .counter .arrow_down_c').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find(".noofc").html());
    var calcint = val - 1;
    if(calcint >= 1){
        $(this).parent().find(".noofc").html(calcint);
    }
});

$('.product_page .box .productpacks .option').click(function(e) {
    e.preventDefault();
    $(".product_page .box .productpacks .option").removeClass("option_selected");

    $(this).addClass("option_selected");
    $(".product_page .box_r").addClass("box_r_active");
});
$('.product_page .box_r .modl .xicon').click(function(e) {
    e.preventDefault();
    $(".product_page .box_r").removeClass("box_r_active");
});
$('.product_page .box_r .modl .options .option').click(function(e) {
      e.preventDefault();
    if ($(window).width() >= 992) {
      e.preventDefault();
    }
    $(".product_page .box_r .modl .options .option").removeClass("option_selected");
    $(this).addClass("option_selected");
});

$('.pickupordelivery a').click(function(e) {
    e.preventDefault();
    $(".pickupordelivery a").removeClass("activea");
    $(this).addClass("activea");
});
$('.cart_checkout_page .box .rightside .addpromocodedesktop .forinput').click(function(e) {
    $(this).parent().addClass("addpromocodedesktop_actiavted");
});
$('.product_page .box_r .modl .options .option .rqnt .frow .plicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find("input").val());
    var calcint = val + 1;
    if(calcint < 100){
        $(this).parent().find("input").val(calcint);
    }
});
$('.cart_checkout_page .box .leftside .dataandtime .whichone p').click(function(e) {
    e.preventDefault();
    $(".cart_checkout_page .box .leftside .dataandtime .whichone p").removeClass("activated");
    $(this).addClass("activated");
    if($(this).hasClass("asap")){
      $(".cart_checkout_page .box .leftside .dataandtime .cc").addClass("cc_dis");
    }else{
      $(".cart_checkout_page .box .leftside .dataandtime .cc").removeClass("cc_dis");
    }
});
$('.cart_checkout_page .box .rightside .checkoutbtn a').click(function(e) {
    if ($(window).width() < 992) {
      e.preventDefault();
      $(".cart_checkout_page .box .activatedstep").removeClass("activatedstep")
      $(".cart_checkout_page .box .leftside").addClass("activatedstep")
      $('html,body').animate({ scrollTop: 0 }, 'slow');
              return false; 
    }
});



$('.product_page .box_r .modl .options .option .rqnt .addtc').click(function(e) {
    e.preventDefault();
    $(this).html("Added!");
});
$('.product_page .box_r .modl .options .option .rqnt .frow .miicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find("input").val());
    var calcint = val - 1;
    if(calcint >= 1){
        $(this).parent().find("input").val(calcint);
    }
});

$('.cart_checkout_page .products1 .product .tright .plm .plicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().parent().parent().find(".no").html());
    var calcint = val + 1;
    if(calcint < 100){
        $(this).parent().parent().parent().find(".no").html(calcint);
    }
});
$('.cart_checkout_page .products1 .product .tright .plm .miicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().parent().parent().find(".no").html());
    var calcint = val - 1;
    if(calcint >= 1){
        $(this).parent().parent().parent().find(".no").html(calcint);
    }
});


$('.cart_checkout_page .box .leftside .productsdesktop .product .noofp .plicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find("h3").html());
    var calcint = val + 1;
    if(calcint < 100){
        $(this).parent().find("h3").html(calcint);
    }
});
$('.cart_checkout_page .box .leftside .productsdesktop .product .noofp .miicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find("h3").html());
    var calcint = val - 1;
    if(calcint >= 1){
        $(this).parent().find("h3").html(calcint);
    }
});

$(document).ready(function() {
  var $slider = $('.slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );

  var numItems = $('.slider_c2 .slicksl').length;
  var widthofbar = (100 / numItems);
  $(".slider_c2 .progress").css('background-size', widthofbar + '% 100%');

  var numItems = $('.slider_c1 .slicksl').length;
  var widthofbar = (100 / numItems);
  $(".slider_c1 .progress").css('background-size', widthofbar + '% 100%');


  var calc = 0;
  var noofshown = 5;
  if ($(window).width() < 1200) {
     noofshown = 4;
  }
  if ($(window).width() < 992) {
     noofshown = 2;
  }
  $( window ).resize(function() {
    if ($(window).width() < 1200) {
       noofshown = 4;
    }
    if ($(window).width() < 992) {
       noofshown = 2;
    };
  });

  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   

    

    calc = ( (nextSlide) / (slick.slideCount - noofshown) ) * 100;
    
    $(this).parent().parent().parent().find('.progress')
      .css('background-position', calc + '% 0')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
  
  $slider.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 400,
    infinite: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
  });  
});
$('.slider_c .product').click(function() {
    $('.slider_c .product').removeClass("product_active");
    if($(this).hasClass("product_active")){
        $(this).removeClass("product_active");
    }else{
        $(this).addClass("product_active");
    }
});

$('.products_catalog .product').click(function() {
    $('.products_catalog .product').removeClass("product_active");
    if($(this).hasClass("product_active")){
        $(this).removeClass("product_active");
    }else{
        $(this).addClass("product_active");
    }
});



var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


