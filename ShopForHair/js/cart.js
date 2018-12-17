let cart = {};

//----------------------------//
// Все alerts заменить на 
// всплывающие окна.
//----------------------------//

$(document).ready(function(){
  loadCart();
  $(".send-email").on("click", sendEmail);//отпрвить письмо с заказом
})

function loadCart() {
  //проверка  localStorage на наличие корзины 
  if( localStorage.getItem("cart") ){
      //закидываю в корзину 
      cart = JSON.parse(localStorage.getItem('cart'));
      //выгружаю на страницу    
        mainShowCart();   
  } 
  else {
    $(".main-cart").html("Корзина пустая");
  }
}

function mainShowCart() {
  //показываю корзину
  if ($.isEmptyObject(cart)) {
    let out = ` Корзина пустая...`;
    $(".main-cart").html(out);
    
  }
  else {
    $.getJSON("goods.json", function(data) {
      let goods = data;
      let out = '';
      
      for (let id in cart) {
        out += ' <div class="cart"> ';
        out += ` <p class="name" > ${goods[id]['name']} </p> `;
        out += ` <div> Цена: ${goods[id]['cost']} </div> `;
        out += ` <img src="${goods[id].img}"> `;
        out += ` <button class="del-goods" data-id='${id}' >Удалить </button> `;
        out += ` <button class="up-goods" data-id='${id}' > + </button> `;
        out += ` <button class="down-goods" data-id='${id}' > - </button> `;
        out += ` <span class="">${cart[id]}</span> `
        out += `  <p><span class="">${cart[id]*goods[id].cost} грн</span> </p>`
        out += ' </div> ';
      }

      $(".main-cart").html(out);
      $(".del-goods").on("click", delGoods);
      $(".up-goods").on("click", upGoods);
      $(".down-goods").on("click", downGoods);
    });
  }
}

function downGoods() {
  //умуньшаем количество данного товара в корзине
  let id = $(this).attr("data-id");
 
    
    if (cart[id] == 1){
      delete cart[id];
    }else {
      cart[id]--;
    }
    
  mainShowCart();
  saveCart(cart);
}

function upGoods() {
  //увеличиваем количество данного товара в корзине
  let id = $(this).attr("data-id");
  cart[id]++;

  mainShowCart();
  saveCart(cart);
}

function delGoods() {
  //Удалить товар из корзины
  let id = $(this).attr("data-id");
  delete cart[id];
  saveCart();
  mainShowCart();
}

function saveCart(obj) {
  //сохр. корзину в localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  //console.log(cart);
}

function sendEmail() {
  let ename = $("#ename").val();
  let email = $("#email").val();
  let ephone = $("#ephone").val();
  if(ename != " " && email != " " && ephone != " " ) {
    if (!$.isEmptyObject(cart)) {
      $.post(
        "../core/mail.php",
        {
          "ename": ename,
          "email": email,
          "ephone": ephone,
          "cart": cart
        }, 
        function(data) {
          if(data == 1) {
            alert("Заказ отправлен");
          }
          else {
            alert("Повтрите заказа");
          }
        }
      );
    }
    else {
      alert("Корзина пуста"); 
    }
  }
  else {
    alert("Заполните поля");
  }
}

