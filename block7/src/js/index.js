import '../scss/style.scss'

const descriptionText = document.querySelector('.description__text');
const descriptionShowAll = document.querySelector('.description__btn');

const brandsList = document.querySelector('.brands__list');
const brandItemTemplate = document.querySelector('.brand-template').content;
const newBrandTemplate = brandItemTemplate.querySelector('.brands__item');
const brandShowAll = document.querySelector('.brands__btn');
const brandShowAllText = brandShowAll.querySelector('.show-all-btn__text');
const brandShowAllIcon = brandShowAll.querySelector('.show-all-btn__icon');

const menuButton = document.querySelector('.header__burger-button');
const menuButtonIcon = menuButton.querySelector('.burger-icon');

const main = document.querySelector('.main');
const header = document.querySelector('.header')
const asideMenu = document.querySelector('.aside-menu');
const headerActions = document.querySelector('.header__actions');

const feedbackButtons = document.querySelectorAll('.contact-button2');
const asideFeedback = document.querySelector('.aside-feedback');
const closeFeedback = asideFeedback.querySelector('.aside-feedback__close-button');
const firstFeedbackInput = asideFeedback.querySelector('.aside-feedback__input');

const asideRecall = document.querySelector('.aside-recall');
const recallButtons = document.querySelectorAll('.contact-button1');
const closeRecall = asideRecall.querySelector('.aside-recall__close-button');
const firstRecallInput = asideRecall.querySelector('.aside-recall__input');


const tecTypeList = document.querySelector('.tec-types__list');
const tecTypeItemTemplate = document.querySelector('.tec-type-template').content;
const newTypeTemplate = tecTypeItemTemplate.querySelector('.tec-types__item');
const tecTypeShowAll = document.querySelector('.tec-types__btn');
const tecTypeShowAllText = tecTypeShowAll.querySelector('.show-all-btn__text');
const tecTypeShowAllIcon = tecTypeShowAll.querySelector('.show-all-btn__icon');

const priceList = document.querySelector('.price__list');
const priceItemTemplate = document.querySelector('.price-item-template').content;
const newPriceTemplate = priceItemTemplate.querySelector('.price__item');

const showDescriptionText = function () {
    descriptionText.classList.toggle('description__text--extended');
}

descriptionShowAll.addEventListener('click', showDescriptionText)

const brands = [
    './img/brands/Apple.png',
    './img/brands/Aser.png',
    './img/brands/Bosch.png',
    './img/brands/HP.png',
    './img/brands/Lenovo.png',
    './img/brands/Sony.png',
    './img/brands/Sumsung.png',
    './img/brands/Sumsung.png',
    './img/brands/Sumsung.png',
    './img/brands/Sumsung.png',
    './img/brands/ViewSonic.png'
];

const showBrands = function () {
    brandsList.classList.toggle('brands__list--extended');
    if (brandsList.classList.contains('brands__list--extended')) {
        brandShowAllText.textContent = 'Скрыть';
        brandShowAllIcon.src = './img/icons/double_up.svg';
    } else {
        brandShowAllText.textContent = 'Показать все';
        brandShowAllIcon.src = './img/icons/double_down.svg';
    }
}

brandShowAll.addEventListener('click', showBrands);

for (let link of brands) {
    let brand = newBrandTemplate.cloneNode(true);
    const brandImage = brand.querySelector('.brands__image');

    brandImage.src = link;
    brandsList.appendChild(brand);
}

const toggleMenu = function () {
    menuButtonIcon.classList.toggle('burger-icon--active');
    document.body.classList.toggle('body--lock');
    asideMenu.classList.toggle('aside-menu--active');
    main.classList.toggle('main--blured');
    headerActions.classList.toggle('header__actions--blured');
}

menuButton.addEventListener('click', toggleMenu);

const openFeedback = function () {
    if (main.classList.contains('main--blured')) {
        asideMenu.classList.remove('aside-menu--active');
        menuButtonIcon.classList.remove('burger-icon--active');
        asideFeedback.classList.add('aside-feedback--active');
        headerActions.classList.remove('header__actions--blured');
        header.classList.add('header--blured');
    } else {
        main.classList.add('main--blured');
        document.body.classList.add('body--lock');
        header.classList.add('header--blured');

        if (mediaQueryDesktop.matches) {
            asideMenu.classList.add('aside-menu--blured');
        }
        asideFeedback.classList.add('aside-feedback--active');
        firstFeedbackInput.focus();
    }
}

const openRecall = function () {
    if (main.classList.contains('main--blured')) {
        asideMenu.classList.remove('aside-menu--active');
        menuButtonIcon.classList.remove('burger-icon--active');
        asideFeedback.classList.add('aside-feedback--active');
        headerActions.classList.remove('header__actions--blured');
        header.classList.add('header--blured');
    } else {
        main.classList.add('main--blured');
        document.body.classList.add('body--lock');
        header.classList.add('header--blured');

        if (mediaQueryDesktop.matches) {
            asideMenu.classList.add('aside-menu--blured');
        }
        asideRecall.classList.add('aside-recall--active');
        firstRecallInput.focus();
    }
}

document.addEventListener('click', (evt) => {
    const isMenuTarget = evt.target.contains(asideMenu);
    if (isMenuTarget) {
        menuButtonIcon.classList.remove('burger-icon--active');
        document.body.classList.remove('body--lock');
        asideMenu.classList.remove('aside-menu--active');
        main.classList.remove('main--blured');
        headerActions.classList.remove('header__actions--blured');
    }

    const clickFeedback = evt.target.contains(asideFeedback);
    if (clickFeedback) {
        if (mediaQueryDesktop.matches) {
            asideMenu.classList.remove('aside-menu--blured');
        }
        header.classList.remove('header--blured');
        document.body.classList.remove('body--lock');
        main.classList.remove('main--blured');
        asideFeedback.classList.remove('aside-feedback--active');
    }

    const clickFeedbackButton = evt.target.classList.contains('contact-button2');
    if (clickFeedbackButton) {
        openFeedback();
    }

    const clickRecallButton = evt.target.classList.contains('contact-button1');
    if (clickRecallButton) {
        openRecall();
    }
})

const mediaQueryDesktop = window.matchMedia("(min-width: 1366px)");

const toggleAside = function () {
    if (mediaQueryDesktop.matches) {
        asideMenu.classList.toggle('aside-menu--blured');
    }
    header.classList.toggle('header--blured');
    document.body.classList.toggle('body--lock');
    main.classList.toggle('main--blured');
}

const closeFeedbackAside = function () {
    toggleAside();
    asideFeedback.classList.toggle('aside-feedback--active');
}

closeFeedback.addEventListener('click', closeFeedbackAside);

const closeRecallAside = function () {
    toggleAside();
    asideRecall.classList.toggle('aside-recall--active');
}

closeRecall.addEventListener('click', closeRecallAside);

document.addEventListener('click', (evt) => {
    const clickRecall = evt.target.contains(asideFeedback);
    if (clickRecall) {
        if (mediaQueryDesktop.matches) {
            asideMenu.classList.remove('aside-menu--blured');
        }
        header.classList.remove('header--blured');
        document.body.classList.remove('body--lock');
        main.classList.remove('main--blured');
        asideRecall.classList.remove('aside-recall--active');
    }
})

const tecTypes = [
    'Ремонт ноутбуков',
    'Ремонт планшетов',
    'Ремонт ПК',
    'Ремонт мониторов',
    'Ремонт мониторов',
    'Ремонт мониторов',
    'Ремонт мониторов',
];

for (let text of tecTypes) {
    let tecType = newTypeTemplate.cloneNode(true);
    const tecTypeText = tecType.querySelector('.tec-types__text');

    tecTypeText.textContent = text;
    tecTypeList.appendChild(tecType);
}

const showTecTypes = function () {
    tecTypeList.classList.toggle('tec-types__list--extended');
    if (tecTypeList.classList.contains('tec-types__list--extended')) {
        tecTypeShowAllText.textContent = 'Скрыть';
        tecTypeShowAllIcon.src = './img/icons/double_up.svg';
    } else {
        tecTypeShowAllText.textContent = 'Показать все';
        tecTypeShowAllIcon.src = './img/icons/double_down.svg';
    }
}

tecTypeShowAll.addEventListener('click', showTecTypes)

const prices = [
    {
        pName: 'Диагностика',
        cost: 'Бесплатно',
        time: '30 мин'
    },
    {
        pName: 'Замена дисплея',
        cost: '1 000 ₽',
        time: '30-120 мин'
    },
    {
        pName: 'Замена полифонического динамика',
        cost: '1 000 ₽',
        time: '30-120 мин'
    },
    {
        pName: 'Тестирование с выдачей технического заключения',
        cost: '1 000 ₽',
        time: '30-120 мин'
    },
    {
        pName: 'Замена программного обеспечения',
        cost: '1 000 ₽',
        time: '30-120 мин'
    },
];

for (let price of prices) {
    let priceItem = newPriceTemplate.cloneNode(true);

    const priceName = priceItem.querySelector('.price__item-name');
    const priceCost = priceItem.querySelector('.price__item-cost');
    const priceTerm = priceItem.querySelector('.price__item-term');

    priceName.textContent = price.pName;
    priceCost.textContent = price.cost;
    priceTerm.textContent = price.time;

    priceList.appendChild(priceItem);
}

const swiperMediaQuery = window.matchMedia("(min-width: 768px)");
let swiperBrands;
let swiperTecType;
let swiperPrice;

let swiperSwitch = function () {
    if (!swiperMediaQuery.matches) {

        swiperBrands = new Swiper('.brands .swiper', {
            direction: 'horizontal',
            spaceBetween: 16,
            slidesPerView: "auto",

            pagination: {
                el: '.brands .swiper-pagination',
            },
        });

        swiperTecType = new Swiper('.tec-types .swiper', {
            direction: 'horizontal',
            spaceBetween: 16,
            slidesPerView: "auto",

            pagination: {
                el: '.tec-types .swiper-pagination',
            },
        });

        swiperPrice = new Swiper('.price .swiper', {
            direction: 'horizontal',
            spaceBetween: 16,
            slidesPerView: "auto",

            pagination: {
                el: '.price .swiper-pagination',
            },
        });
    } else if (swiperBrands || swiperTecType || swiperPrice) {
        swiperBrands.destroy();
        swiperTecType.destroy();
        swiperPrice.destroy();
    }
}

swiperSwitch();
window.addEventListener("resize", swiperSwitch);
