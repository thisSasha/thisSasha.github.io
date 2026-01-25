export type ProjectCardType = {
  title: string;
  description: string;
  type: string;
  using: string[];
  img?: string;
  filters?: string[];
  links?: { [key: string]: string };
};
export type ProjectsType = ProjectCardType[];

export const projects: ProjectsType = [
  {
    "img": "/projects/tanon/preview.png",
    "title": "Т-Анон",
    "description": "Телеграм-бот для отправки анонимных сообщений с раличными фичами. В данный момент бот неактивен, так как нет сервера",
    "type": "Пет-проект",
    "using": ["devicon-python-plain", "fab fa-telegram"],
    "filters": ["Python", "Telegram", "Aiogram"],
    "links": { "Ссылка на бота": "https://t.me/t_anonim_bot" }
  },
  {
    "img": "/projects/tfm/preview.png",
    "title": "TFM File Manager",
    "description": "Быстрый файловый менеджер для использования в консоли. На данный момент не закончен",
    "type": "Пет-проект",
    "filters": ["Rust"],
    "using": ["devicon-rust-plain"],
  },
  {
    "img": "/projects/energypark_copy/preview.png",
    "title": "Energy Park",
    "description": "Полная копия дизайна и контента с сайта на ванильном js",
    "type": "Заказ (Копия сайта)",
    "using": ["devicon-javascript-plain"],
    "filters": ["Vanilla JS", "JavaScript", "Vanilla CSS"],
    "links": { "Копия": "https://energypark-copy.onrender.com/", "Оригинал": "https://energy-park.co.uk" }
  },
  {
    "img": "/projects/finnal/preview.png",
    "title": "Fin-nal",
    "description": "Сайт-лендинг для компании ООО 'Финансы и налоги'",
    "type": "Заказ (Лендинг)",
    "using": ["devicon-javascript-plain", "devicon-tailwindcss-plain"],
    "filters": ["Vanilla JS", "JavaScript", "Tailwind CSS"],
    "links": { "Сайт": "https://fin-nal.by" }
  },
  {
    "img": "/projects/response_tgbot/preview.png",
    "title": "Отклик на вакансию",
    "description": "Создание простого телеграм-бота. Функции: Админы могут создавать посты в различных тгк с кнопкой 'Откликнуться', а пользователи могут отправлять свои заявки",
    "type": "Заказ (Тг-бот)",
    "using": ["devicon-python-plain"],
    "filters": ["Python", "Telegram", "Aiogram"],
    "links": { "Github": "https://github.com/thisSasha/response-tg-bot" }
  },
  {
    "img": "/projects/fxfortrader/preview.png",
    "title": "FX For Trader",
    "description": "'Повтори вот этот сайт по вот этому макету но сделай по-своему' - Примерно такое было ТЗ",
    "type": "Заказ (Новый сайт)",
    "using": ["devicon-javascript-plain"],
    "filters": ["Vanilla JS", "JavaScript", "Vanilla CSS"],
    "links": { "Ссылка на сайт": "https://thisSasha.github.io/fx-for-trader" }
  },
  {
    "img": "/projects/trustwallet_copy/preview.png",
    "title": "Trust wallet (Копия)",
    "description": "Полная копия страницы расширения и стартовой страницы (По требованию заказчика, пришлось переделать расширение в статичны сайт)",
    "type": "Заказ (Копия сайта)",
    "using": ["devicon-javascript-plain"],
    "filters": ["Vanilla JS", "Extension", "Vanilla CSS", "JavaScript"],
    "links": { "Github": "https://github.com/thisSasha/trust-wallet_copy" }
  },
  {
    "img": "/projects/atom_copy/preview.png",
    "title": "Atom Mobility (Копия)",
    "description": "Копия дизайна и контента",
    "type": "Заказ (Копия сайта)",
    "using": ["devicon-javascript-plain", "devicon-tailwindcss-plain"],
    "filters": ["Vanilla JS", "Tailwind CSS", "JavaScript"],
    "links": { "Github": "https://github.com/thisSasha/atom_copy/" }
  },
  {
    "img": "/projects/practice_copy/preview.png",
    "title": "Practice Ink (Копия)",
    "description": "Копия дизайна и контента",
    "type": "Заказ (Копия сайта)",
    "using": ["devicon-javascript-plain"],
    "filters": ["Vanilla JS", "JavaScript"],
    "links": { "Github": "http://github.com/thisSasha/practice-ink_copy/" }
  },
  {
    "img": "/projects/credexa_copy/preview.png",
    "title": "Credexa (Копия)",
    "description": "Копия дизайна и контента",
    "type": "Заказ (Копия сайта)",
    "using": ["devicon-javascript-plain"],
    "filters": ["Vanilla JS", "Vanilla CSS", "JavaScript"],
    "links": { "Github": "https://github.com/thisSasha/credexa_copy" }
  },
  {
    "img": "/projects/trihologs_copy/preview.png",
    "title": "Trihologs (Копия с доработкой)",
    "description": "Скопировать сайт, но улучшить его дизайн",
    "type": "Заказ (Копия + доработка)",
    "using": ["devicon-javascript-plain"],
    "filters": ["Vanilla JS", "JavaScript", ""],
    "links": { "Github": "https://github.com/thisSasha/trihologs_copy", "Оригинальный сайт": "https://trihologs.lv/" }
  },
  {
    "img": "/projects/patriot_web/preview.png",
    "title": "Patriot",
    "description": "Вёрстка сайта по макету. Макет был основой, но кроме него присуствовал прототип, которому также нужно было следовать. Поэтому сайт отличается от макета",
    "type": "Заказ (Новый сайт)",
    "using": ["devicon-javascript-plain", "devicon-tailwindcss-plain"],
    "filters": ["Tailwind CSS", "Vanilla JS", "JavaScript"],
    "links": {
      "Сайт": "https://thissasha.github.io/patriot_web/",
      "Макет (Figma)": "https://www.figma.com/design/TddgqKLSGWQAAaiH5uBsOW/%D0%9C%D0%B5%D1%82%D0%B0%D0%BB--1-?node-id=9333-20464&p=f&t=slOtg4O4DTHeQ7hL-0",
    }
  },
  {
    "img": "/projects/spamai.jpg",
    "title": "Spam AI",
    "description": "Телеграм-бот, основанный на библиботеке g4f. Определяет тему сообщения(Обычное, политика, флуд и др.) и выполняет заданную админом команду",
    "type": "Пет-проект",
    "using": ["devicon-python-plain", "fab fa-telegram"],
    "filters": ["Python", "Telegram", "Aiogram"],
    "links": {}
  },
  {
    "img": "/projects/metaparser/preview.png",
    "title": "Meta Parser",
    "description": "Фронтенд и бэкенд сайта, который получает meta с указанного сайта, рисует дерево субстраниц и выводит всё красивыми картинками",
    "type": "Заказ (Новый сайт)",
    "using": ["devicon-python-plain", "devicon-javascript-plain"],
    "filters": ["Python", "Javascript", "Vanilla JS", "Vanilla CSS", "FastAPI"],
    "links": { "Сайт": "http://193.160.208.54:8000/" }
  },
  {
    "img": "/projects/math/preview.png",
    "title": "Math",
    "description": "Это мой телеграм-канал на тему математики. Это также мой проект, поэтому он здесь",
    "type": "Telegram-канал",
    "using": ["fab fa-telegram"],
    "filters": ["Telegram"],
    "links": { "Канал": "https://t.me/thisMath" }
  },
  {
    "img": "/projects/menunova/preview.png",
    "title": "Menu Nova",
    "description": "Проект для кафе и ресторанов. Онлайн меню и заказ, быстрая настройка под конкретный ресторан (Планирую переписать на Vue/React)",
    "type": "Пет-проект",
    "using": ["devicon-python-plain", "devicon-javascript-plain"],
    "filters": ["Python", "Javascript", "Vanilla JS", "Vanilla CSS"],
    "links": { "Github": "https://github.com/menuNova", "Главная страница": "https://menuNova.github.io/index" }
  },
  {
    "img": "/projects/coffurejockey/preview.png",
    "title": "Coiffure Jockey",
    "description": "ТЗ: Дан Wordpress шаблон и старый сайт. Задача в стиле шаблона перенести весь контент с сайта",
    "type": "Заказ (Копия + доработка)",
    "using": ["devicon-tailwindcss-plain", "devicon-javascript-plain"],
    "filters": ["Javascript", "Vanilla JS", "Tailwind CSS"],
    "links": { "Github": "https://github.com/thisSasha/coiffurejockey" }
  },
  {
    "img": "/projects/medexpo/preview.png",
    "title": "Medexpo",
    "description": "Копия сайта для переноса с Wordpress",
    "type": "Заказ (Копия)",
    "using": ["devicon-tailwindcss-plain", "devicon-javascript-plain"],
    "filters": ["Javascript", "Vanilla JS", "Tailwind CSS"],
    "links": { "Github": "https://github.com/thisSasha/medexpo_copy" }
  },
  {
    "img": "/projects/sparkline/preview.png",
    "title": "Sparkline",
    "description": "Вёрстка по макету .png",
    "type": "Заказ (Новый сайт)",
    "using": ["devicon-tailwindcss-plain", "devicon-javascript-plain"],
    "filters": ["Javascript", "Vanilla JS", "Tailwind CSS"],
    "links": {
      "Сайт": "https://thisSasha.github.io/sparkline",
      "Макет": "/projects/sparkline/layout.png"
    }
  },
  {
    "img": "/projects/digiqole_copy/preview.png",
    "title": "Digiqole Newspaper",
    "description": "Вёрстка wp шаблона",
    "type": "Заказ (Копия сайта)",
    "using": ["devicon-tailwindcss-plain", "devicon-javascript-plain"],
    "filters": ["Javascript", "Vanilla JS", "Tailwind CSS"],
    "links": {
      "Сайт": "https://github.com/thisSasha/digiqole-newspaper_copy",
    }
  },
  {
    "img": "/projects/rubenhair/preview.png",
    "title": "Rubenhair Copy",
    "description": "Копия с Wordpress на html",
    "type": "Заказ (Копия сайта)",
    "using": ["devicon-tailwindcss-plain", "devicon-javascript-plain"],
    "filters": ["Javascript", "Vanilla JS", "Tailwind CSS"],
    "links": { 
      "Сайт": "https://github.com/thisSasha/rubenhair_copy",
      "Оригинал": "https://rubenhair.eu"  
     }
  },
]