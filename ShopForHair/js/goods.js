
let cart = {}; //Корзина
$("document").ready(function () {
    init();
    loadCart();
    $('.nav-link').click(function () {
        $('.nav-mobile').toggleClass('nav-mobile-active');
    });

    $('.nav-close').click(function () {
        $('.nav-mobile').toggleClass('nav-mobile-active');
    });

});

function init() {

    let hash = window.location.hash.substring(1);
    console.log(hash);
    $.post(
        "admin/core.php",
        {
            "action": "loadSingleGoods",
            "id": hash
        },
        goodsOut

    );
}


function goodsOut(data) {
    //выводим на страницу
    if(data != 0) {
        data = JSON.parse(data);
        console.log(data);
        let out = '';
        out += `<div class="cart" data-category='${data.category}' data-brand='${data.brand}'>`;
        out += `<p class="name" > ${data.name} </p>`;
        out += `<div> Цена: ${data.cost} </div>`;
        out += `<img src="${data.img}">`;
        out += `<p class="" > ${data.description} </p>`;
        out += `<button class="add-to-cart" data-id='${data.id}' >Купить </button>`; 
        out += `<a href="#" class="later like" data-id='${data.id}'><img class="like-img" src="img/like.svg"> </a>`;
        /* out += `<a class="like" href=''><img src="img/like.png"> </a>`; */
        out += '</div>';
    
        $(".goods").html(out);
        $("button.add-to-cart").on("click", addToCart);
        $("button.later").on("click", addToLater); 
    }
    else {

        $(".goods").html('Такого товара не существует');
        
    }
    
}

function addToLater() {
    //добавляем товар в избраные, желания
    let later = {};
    if (localStorage.getItem('later')) {
        later = JSON.parse(localStorage.getItem('later'));
    }

    let id = $(this).attr("data-id");
    later[id] = 1;
    localStorage.setItem('later', JSON.stringify(later));
    alert("Добавлено в желаимое");

}

function addToCart() {
    //добавляем товар в корзину
    let id = $(this).attr("data-id");
  
    if (cart[id] == undefined) {
        cart[id] = 1;
    } 
    else {
      cart[id]++;
    }
  
    //showCart();--
    saveCart(cart);
  }
  
  function saveCart(obj) {
    //сохр. корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    //console.log(cart);
  }
  
  function loadCart() {
    //проверка  localStorage на наличие корзины 
    if( localStorage.getItem("cart") ){
        //закидываю в корзину 
        cart = JSON.parse(localStorage.getItem('cart'));
        //выгружаю на страницу
        //showCart();--
    } 
  }
  
  function checkCart() {
    //проверка наличия корзины в localStorage
    if(getLocalStorage() != null) {
      cart = getLocalStorage();
    }
  }
  
  /* function showCart() {
    // не использую
    //показваем корзину
    let out = '';
    for (let key in cart) {
        //out += key + '---' + cart[key] + '<br>';
        out +=` ${key} ---- ${cart[key]}<br>`;
    }
  
    $(".mini-cart").html(out);
    
  } */