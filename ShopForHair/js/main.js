//Техника валидации форм https://htmlacademy.ru/blog/95-form-validation-techniques

let cart = {}; //Корзина

$("document").ready(function(){
  init();
  loadCart();
  //filter();
  $('.nav-link').click(function() {
    $('.nav-mobile').toggleClass('nav-mobile-active');
  });

  $('.nav-close').click(function() {
    $('.nav-mobile').toggleClass('nav-mobile-active');
  });

  $('.sl-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true
  });



 
});


function filter() {
  $('input[type="checkbox"]').click(function() {
    if ($('input[type="checkbox"]:checked').length > 0) {
        $('.cart').hide();  
        $('input[type="checkbox"]:checked').each(function() {      
             $('.cart[data-category=' + this.value + ']').show();
             $('.cart[data-brand=' + this.value + ']' ).show(); 
             
        });      
    }    
    else {
        $('.cart').show();
    }
  }); 
}

function goodsOut(data) {
  //выводим на страницу
  data = JSON.parse(data);
  let out = '';
    for (let key in data) {
      out += `<div class="cart" data-category='${data[key]['category']}' data-brand='${data[key]['brand']}'>`;
      out += `<p class="name" > ${data[key]['name']} </p>`;
      out += `<div> Цена: ${data[key]['cost']} </div>`;
      out += `<a href='goods.php#${key}'><img src="${data[key].img}"> </a>`;
      out += `<button class="add-to-cart" data-id='${key}' >Купить </button>`;
      /* out += `<button class="later" data-id='${key}' >&hearts;</button>`; */
      
      out += `<a href="#" class="later like" data-id='${key}'><img class="like-img" src="img/like.svg"> </a>`;
      out += '</div>';
      
    }

    $(".goods").html(out);
    $("button.add-to-cart").on("click", addToCart);
    $(".later").on("click", addToLater);
    
  function pagination() {
                //////Pagination//////      
    //всего карт 
    /* function allCart () {
      let allCarts = 0;
      let shampoo = 0;
      for (let id in data) {
        allCarts++;
        if(data[id]['category'] == 'Шампунь'){
          shampoo++;
        }
      }
      console.log('Шампунь', shampoo);
      $('#shamp').html(shampoo);
      return allCarts;
    }
    allCart();//всего карт
    let limitPage = 6;//6 кол.элементов на стр.
    $('.cart:gt(' + (limitPage - 1) + ')').hide();
    let totalPages = Math.round(allCart() / limitPage);
    $(".pagination").append("<li class='current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");
    for (let i = 2; i <= totalPages; i++) {
      $(".pagination").append("<li class='current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>"); 
    }
    $(".pagination").append("<li class='page-item' id='next-page'><a class='page-link' href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");


    $(".pagination li.current-page").on("click", function() {
        if($(this).hasClass('active')) {
          return false;
        } 
        else {
          let currentPage = $(this).index(); // получить текущий номер страницы
          console.log("Тек номер стр ", currentPage);
          $(".pagination li").removeClass('active');
          $(".cart").hide();
          let grandTotal = limitPage * currentPage;
          console.log("общее количество элементов до номера страницы", grandTotal);
          for (let i = grandTotal - limitPage; i < grandTotal; i++) {
            $(".cart:eq(" + i + ")").show(); 
          }
        }
    });

    $("#next-page").on("click", function() {
      let currentPage = $(".pagination li.active").index();
      if (currentPage === totalPages) {
        return false;
      }
      else {
        currentPage++;
        $(".pagination li").removeClass('active');
        $(".cart").hide();
        let grandTotal = limitPage * currentPage; //Получить общее количество элементов до выбранной страницы
        for (let i = grandTotal - limitPage; i < grandTotal; i++) {
          $(".cart:eq(" + i + ")").show(); // Показывать элементы с выбранной новой страницы
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
      }
    });

    $("#previous-page").on("click", function() {
      var currentPage = $(".pagination li.active").index();
      if (currentPage === 1) {
        return false;
      }
      else {
        currentPage--;
        $(".pagination li").removeClass('active');
        $(".cart").hide();
        var grandTotal = limitPage * currentPage;
        for (var i = grandTotal - limitPage; i < grandTotal; i++) {
          $(".cart:eq(" + i + ")").show(); 
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
      }
    }); */
  }
}

function addToLater(e) {
  //добавляем товар в избраные, желания
  e.preventDefault();
  let later = {};
  if(localStorage.getItem('later')) {
    later = JSON.parse(localStorage.getItem('later'));
  }
  alert("Добавлено в желаемое");
  let id = $(this).attr("data-id");
  later[id] = 1;
  localStorage.setItem('later', JSON.stringify(later));

 
}

function init() {
  //вычитуем файл goods.json
  //$.getJSON("goods.json", goodsOut);
  $.post(
    "admin/core.php",
    {
      "action":"loadGoods"
    },
    goodsOut
  
  );
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

function showCart() {
  // не использую
  //показваем корзину
  let out = '';
  for (let key in cart) {
      //out += key + '---' + cart[key] + '<br>';
      out +=` ${key} ---- ${cart[key]}<br>`;
  }

  $(".mini-cart").html(out);
  
}


////////////////////////


