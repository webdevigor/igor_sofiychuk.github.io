
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shopForHair`
--

-- --------------------------------------------------------

--
-- Структура таблицы `goods`
--

CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cost` double DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `volume` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `producer` varchar(100) DEFAULT NULL,
  `availability` int(3) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `goods`
--

INSERT INTO `goods` (`id`, `name`, `cost`, `category`, `description`, `volume`, `brand`, `producer`, `availability`, `img`) VALUES
(1, 'Шампунь питательный', 301, 'Шампунь', 'Мягкий шампунь на основе кератина обладает высоким увлажняющим и кондиционирующим эффектом . Придает волосам  послушность , блеск и объем. Шампунь имеет лёгкий аромат цитрусовых.', '250мл', 'RevlonProfessional', 'Испания', 10, 'img/revlon-professional-200ml.jpg'),
(2, 'Шампунь для густых волос', 423, 'Шампунь', 'Шампунь  преображает сухие волосы, придает им гладкость, яркость и блеск. Обеспечивает максимальную защиту в сохранение цвета  окрашенных волос.', '250мл', 'RevlonProfessional', 'Испания', 10, 'img/Revlon-Revlon-250ml.jpg'),
(3, 'Кондиционер для темных волос', 290, 'Кондиционер', 'Кондиционер для темных волос придаёт волосам больше массы, при этом не утяжеляет их. Волосы остаются легкими и подвижными. Волосы после использования кондиционера приобретают больше гладкости и блеска. Имеет приятный парфюмированный аромат.', '250мл', 'MadesCosmetics', 'Нидерландах', 12, 'img/mades-cosmetics.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
