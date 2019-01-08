<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/slick.css">
  <link rel="stylesheet" href="css/slick-theme.css">
  <link rel="stylesheet" href="">
  <link rel="stylesheet" href="less/media.css">
  <link rel="stylesheet" href="less/main.css">


  <title>ShopForHair</title>
</head>

<body>

  <header>
  <?php include 'structure/header.php';?>
 
  </header>

  <section class="head-slider">
    <div class="row">
      <div class="col-12">
        <div class="sl-slider">
          <div class="sl-img">
            <img src="img/slider/1.jpg" alt="#">
          </div>

          <div class="sl-img">
            <img src="img/slider/2.jpg" alt="#">
          </div>

          <div class="sl-img">
            <img src="img/slider/3.jpg" alt="#">
          </div>
          <div class="sl-img">
            <img src="img/slider/4.jpg" alt="#">
          </div>
        </div>
      </div>
      <!-- /.click-slider -->
    </div>
  </section>

  <section class="">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3  col-sm-3">
          <aside>
          <?php include 'structure/aside-filter.php';?>
  
              </form>
            </div>
          </aside>
          <!-- /aside -->
        </div>

        <div class="col-xl-8 col-lg-8 col-md-8  col-sm-6">
          <main>
            
            <!-- <div class="leater">
              <a href="later.php"><span>Желания </span> <img src="img/like_active.svg" alt="Желания"></a>
            </div> -->
            <div id="goods" class="goods ">

            </div>
            <div>
              <ul class=pagination>
                <li class="page-item" id="previous-page">
                  <a class="page-link" href="javascript:void(0)" aria-label=Previous>
                    <span aria-hidden=true>&laquo;</span>
                  </a>
                </li>
              </ul>
            </div>
          </main>
          <!-- /main -->
        </div>

      </div>
    </div>
    </div>
  </section>

  <!-- <section>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mini-cart">

            </div>
          </div>
        </div>
      </div>
    </section>
 -->

  <footer>
      <?php include 'structure/footer.php';?>
    
    <!-- <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-tittle">
            <h3>Это лучший интернет магазин по уходу за волосами</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="footer-block-brand">
            <p>Наши бренды</p>
            <ul class="footer-brads-item">
              <li><a href="#">American Crew</a></li>
              <li><a href="#">Beaver Professional</a></li>
              <li><a href="#">Berrywell</a></li>
              <li><a href="#">Cutrin Professional</a></li>
              <li><a href="#">Intercosmo</a></li>
              <li><a href="#">Laboratoіres Bіocos</a></li>
              <li><a href="#">Mades Cosmetics</a></li>
              <li><a href="#">Osmo</a></li>
              <li><a href="#">Revlon Professional</a></li>
              <li><a href="#">Tahe</a></li>
              <li><a href="#">Tigi</a></li>
              <li><a href="#">Loreal Professionnel</a></li>
              <li><a href="#">Wella Professional</a></li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <div class="footer-block-category">
            <p>Категории</p>
            <ul class="footer-item-category">
              <li><a href="#">Шампунь</a></li>
              <li><a href="#">Масло для волос</a></li>
              <li><a href="#">Кондиционер</a></li>
              <li><a href="#">Флюиды для кончиков</a></li>
              <li><a href="#">Краски для бровей и ресниц</a></li>
              <li><a href="#">Без аммиачные краски для волос</a></li>
              <li><a href="#">Аммиачные краски для волос</a></li>
              <li><a href="#">Сыворотки для волос</a></li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <div class="footer-social">
            <p><a href="tel:+0997608149">0 99 760 81 49</a></p>

            <div class="block-social">
              <div class="">
                <a href="#"><img src="img/facebook.svg" alt="facebook"></a>
              </div>
              <div class="">
                <a href="#"><img src="img/instagram.svg" alt="instagram"></a>
              </div>
              <div class="">
                <a href="#"><img src="img/viber.svg" alt="viber"></a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div> -->
    <!-- /.container -->
  </footer>

  <script src="js/jquery-3.3.1.min.js"></script>

  <script src="js/slick.min.js"></script>
  <script src="js/main.js"></script>
</body>

</html>