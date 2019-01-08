<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="less/main.css">
  <link rel="stylesheet" href="less/media.css">
  <title>Корзина</title>
</head>
<body>
  <header>
     <?php include 'structure/header.php';?>
  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="main-cart">
            
          </div>
          <div class="email-field">
            <p>Имя: <input type="text" id="ename"> </p>
            <p>Email: <input type="text" id="email"> </p>
            <p>Телефон: <input type="number" id="ephone"> </p>
            <p><button class="send-email">Отправить</button> </p>
          </div>
        </div>
      </div>
    </div>
  </main>
  

  <footer>
    <?php include 'structure/footer.php';?>
  </footer>

  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/cart.js"></script>
</body>
</html>