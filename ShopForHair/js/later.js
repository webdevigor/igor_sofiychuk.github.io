function init() {

  $.post(
    "admin/core.php", {
      "action": "loadGoods"
    },
    goodsOut

  );
}

let later = {};
function goodsOut(data) {
  //выводим на страницу
  data = JSON.parse(data);
  let out = ""
  later = JSON.parse(localStorage.getItem('later'));
  if (/* localStorage.getItem('later') */ ! $.isEmptyObject(later)) {
    for (let key in later) {
      out += `<div class="cart" data-category='${data[key]['category']}' data-brand='${data[key]['brand']}'>`;
      out += `<p class="name" > ${data[key]['name']} </p>`;
      out += `<div> Цена: ${data[key]['cost']} </div>`;
      out += `<a href='goods.php#${key}'><img src="${data[key].img}"> </a>`;
      /* out += `<button class="add-to-cart" data-id='${key}' >Купить </button>`;*/
      out += `<button class="del-to-later" data-id='${key}' >Убрать</button>`; 
      out += '</div>';
    }

    $(".goods").html(out);
    //$("button.add-to-cart").on("click", addToCart);
    $("button.del-to-later").on("click", delToLater);
  }  else  {
    $(".goods").html("<div class='title-later'><a href='index.php'>Добавте товар!</a></div>");
  }

}

function delToLater(){
  let id = $(this).attr("data-id");
  
    if(later[id] == 1) {
      delete later[id];
    }   

  saveLater(later);
  init();
}

$("document").ready(function () {
  init();

  $('.nav-link').click(function () {
    $('.nav-mobile').toggleClass('nav-mobile-active');
  });

  $('.nav-close').click(function () {
    $('.nav-mobile').toggleClass('nav-mobile-active');
  });
});

function saveLater(later) {
  //сохр. корзину в localStorage
  localStorage.setItem('later', JSON.stringify(later));
}