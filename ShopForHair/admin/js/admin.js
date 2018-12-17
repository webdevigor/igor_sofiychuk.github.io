function init() {
  $.post(
      "core.php",
      {
          "action" : "init"
      },
      showGoods
  );
}

function showGoods(data) {
  data = JSON.parse(data);
  //console.log(data);
  let out='<select>';
      out +=' <option data-id="0">Новый товар</option> ';
  for (let id in data) {
      out +=` <option data-id="${id}">${data[id].name}</option> `;
  }
      out +=' </select>'; 
  
  $('.goods-out').html(out);
  $('.goods-out select').on('change', selectGoods);
}

function selectGoods() {
    let id = $('.goods-out select option:selected').attr('data-id');
    //console.log(id);
    $.post(
        "core.php",
        {
            "action": "selectOneGoods",
            "gid": id
        },
        function (data) {
            data = JSON.parse(data);
            $('#gname').val(data.name);
            $('#gcost').val(data.cost);
            $('#gcategory').val(data.category);
            $('#gvolume').val(data.volume);
            $('#gbrand').val(data.brand);
            $('#gproducer').val(data.producer);
            $('#gdescription').val(data.description);
            $('#gavailability').val(data.availability);
            $('#gimg').val(data.img);
            $('#gid').val(data.id);
            
        }
    );
}
function saveToDb(){
    let id = $('#gid').val();
    console.log("id");
    if(id != "") {
        $.post(
            "core.php",
            {
                "action": "updateGoods",
                "id": id,
                "gname":         $('#gname').val(),
                "gcost":         $('#gcost').val(),
                "gcategory":     $('#gcategory').val(),
                "gvolume":       $('#gvolume').val(),
                "gbrand":        $('#gbrand').val(),
                "gproducer":     $('#gproducer').val(),
                "gdescription":  $('#gdescription').val(),
                "gavailability": $('#gavailability').val(),
                "gimg":          $('#gimg').val()
            },
            function (data){
                if(data == 1) {
                    alert("Записть добавлена!!!");
                    init();
                }
                else {
                    console.log(data);
                }        
            }
        );
    }
    else {
        console.log("new")
        $.post(
            "core.php",
            {
                "action": "newGoods",
                "id": 0,
                "gname":         $('#gname').val(),
                "gcost":         $('#gcost').val(),
                "gcategory":     $('#gcategory').val(),
                "gvolume":       $('#gvolume').val(),
                "gbrand":        $('#gbrand').val(),
                "gproducer":     $('#gproducer').val(),
                "gdescription":  $('#gdescription').val(),
                "gavailability": $('#gavailability').val(),
                "gimg":          $('#gimg').val()
            },
            function (data){
                if(data == 1) {
                    init();
                    alert("Записть добавлена!!!");
                }
                else {
                    console.log(data);
                }
            }
        );
    }
}

$(document).ready(function () {
 init();
 $('.add-to-db').on('click', saveToDb);
});