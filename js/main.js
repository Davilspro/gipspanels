function view(n) {    
    style = document.getElementById(n).style;
    if (style.display == 'block') {
        style.display ='none';
    }
    else {
        style.display ='block';       
    }             
};
var a = 0;
$('.section-faq__items__item__list').click(function() {
    a = a + 180;
    var blockFaq = $(this).children('.section-faq__items__item__list__arrow');    
    blockFaq.css('transform','rotate('+a+'deg)');    
});

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

$('.section-callback-form__submit').click(function() {
    $('.section-callback-form__good').css('display','flex');
    setTimeout(function() {
        $('.section-callback').css('opacity','0');
        $('.section-callback').css('display','none');
        $('.section-callback-form__good').css('display','none');
      }, 1800);      
});

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

var cartColich;

$('.section-cart-block__sum').click(function() {
    cartColich = $('.section-cart-block__colichinput').val();
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
      }, 1800);      
});

function closeCart() {
    $('.section-cart-block__itog').css('display','none');
    $('.section-cart-block__itog').html(cartCost * cartColich + ' ' + '<i class="fas fa-ruble-sign"></i>');        
    cartColich = null;    
    $('.section-cart-block__colichinput').val('');
    style.css('opacity','0');
    style.css('display','none'); 
}

function closeCallBack() {
    $('.section-callback').css('opacity','0');
    $('.section-callback').css('display','none'); 
}

$('.section-callback-form__cross').click('',closeCallBack);
$('.section-callback-wrap').click('',closeCallBack);

$('.section-cart-block__cross').click('',closeCart);
$('.section-cart-wrap').click('',closeCart);

$('.section-application__app__submit').click(function() {
    var style = $('.section-application__app__good');
    style.css('display','flex');
    style.css('opacity','1');
    setTimeout(function() {
        $('.section-application').css('opacity','0');
        $('.section-application').css('display','none');
      }, 1800);  
})

$('.gallery__block').click(function() {
    lengthGal = $('.gallery__block').length;
    indexGal = $('.gallery__block').index(this);

    var galSrcImg = $(this).children('img').attr('src');
    cartBlock = $('.cartGallery');

    cartBlock.css('display','flex');

    cartBlock.children('.cartGallery__imgBlock').children('img').attr('src', galSrcImg);
})

$('.--zone-left').click(function() {
    if (indexGal == 0) {
        indexGal = lengthGal;
    }
    indexGal = indexGal - 1;
    
    var galSrcImg = $('.gallery__block:eq('+ indexGal +')').children('img').attr('src');    

    cartBlock.children('.cartGallery__imgBlock').children('img').attr('src', galSrcImg);
})

$('.--zone-right').click(function() {
    indexGal = indexGal + 1;
    if (indexGal == 6) {
        indexGal = 0;
    }    
    
    var galSrcImg = $('.gallery__block:eq('+ indexGal +')').children('img').attr('src');    

    cartBlock.children('.cartGallery__imgBlock').children('img').attr('src', galSrcImg);
})