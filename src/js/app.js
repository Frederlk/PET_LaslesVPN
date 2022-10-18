import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();

// Модуль работы со спойлерами
flsFunctions.spollers();

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import "./files/sliders.js";

/* Динамический адаптив */
import "./libs/dynamic_adapt.js";
