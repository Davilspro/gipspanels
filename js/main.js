function view(n) {    
    style = document.getElementById(n).style;
    arrow = document.querySelector(n + " i");
    if (style.display == 'block') {
        style.display ='none';
    }
    else {
        style.display ='block';
        arrow.style.rotate = "180deg";        
    }       
};


function opac(n) {
    var style = $(n);
    console.log(style);

    if (style.css('opacity') == '0' && style.css('display') == 'none') {
        style.css('opacity','1');
        style.css('display','flex');
    }
    else {
        style.css('opacity','0');
        style.css('display','none');
    }
}


var style = $('.section-cart');
$('.section-best__items__item__button').click(function() {
    var cartImg = $(this).parent().children('img').attr('src');
    $('.section-cart-block__img').attr('src',cartImg);
    var cartName = $(this).parent().children('.section-best__items__item__name').text();
    $('.section-cart-block__h3').text(cartName);    
    cartCost = $(this).parent().children('.section-best__items__item__price').text();
    console.log(cartCost);

    style.css('opacity','1');
    style.css('display','flex'); 
});

$('.section-cart-block__sum').click(function() {
    var cartColich = $('.section-cart-block__colichinput').val();
    console.log(cartColich);
    console.log(cartCost * cartColich);
    $('.section-cart-block__itog').css('display','block');
    $('.section-cart-block__itog').html(cartCost * cartColich + ' ' + '<i class="fas fa-ruble-sign"></i>');        
});

$('.section-cart-block__zakaz').click(function() {
    $('.section-cart-block__good').css('display','flex');
    setTimeout(function() {
        $('.section-cart').css('opacity','0');
        $('.section-cart').css('display','none');
        $('.section-cart-block__good').css('display','none');
      }, 1300);      
});

$('.section-callback-form__submit').click(function() {
    $('.section-callback-form__good').css('display','flex');
    setTimeout(function() {
        $('.section-callback').css('opacity','0');
        $('.section-callback').css('display','none');
        $('.section-callback-form__good').css('display','none');
      }, 1300);      
});



$('.section-cart-block__cross').click(function() {
    style.css('opacity','0');
    style.css('display','none'); 
});