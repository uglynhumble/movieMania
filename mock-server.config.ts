/** @type {import('mock-config-server').MockServerConfig} */
const mockServerConfig = {
  rest: {
    baseUrl: '/api',
    configs: [
      {
        path: '/movies',
        method: 'get',
        routes: [
          {
            data: {
              docs: [
                {
                  id: 6091305,
                  name: 'Махараджа',
                  alternativeName: 'Maharaja',
                  enName: null,
                  type: 'movie',
                  typeNumber: 1,
                  year: 2024,
                  description:
                    'Барбер жаждет мести после ограбления его дома, уклончиво сообщая полиции, что его «Лакшми» похищена, но не уточнив, что это - человек или предмет.',
                  shortDescription: null,
                  status: null,
                  rating: {
                    kp: 0,
                    imdb: 8.6,
                    filmCritics: 7.7,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  votes: {
                    kp: 66,
                    imdb: 40494,
                    filmCritics: 6,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  movieLength: 141,
                  totalSeriesLength: null,
                  seriesLength: null,
                  ratingMpaa: null,
                  ageRating: null,
                  poster: {
                    url: 'https://image.openmoviedb.com/kinopoisk-images/10671298/c3bbb880-1618-4b05-8394-e887cba2e416/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-images/10671298/c3bbb880-1618-4b05-8394-e887cba2e416/x1000',
                  },
                  genres: [
                    {
                      name: 'боевик',
                    },
                    {
                      name: 'триллер',
                    },
                    {
                      name: 'драма',
                    },
                    {
                      name: 'криминал',
                    },
                  ],
                  countries: [
                    {
                      name: 'Индия',
                    },
                  ],
                  top10: null,
                  top250: null,
                  isSeries: false,
                  ticketsOnSale: false,
                },
                {
                  id: 6103893,
                  name: 'Стройка BRAER',
                  alternativeName: null,
                  type: 'tv-series',
                  typeNumber: 2,
                  year: 2024,
                  description:
                    'Семья врачей решает обновить загородный участок и заменить 300 кв. м. тротуарной плитки. В ходе работ обнаруживается отсутствие ливневой системы, что разрушает основание дома. На помощь приходит строительная бригада, которая демонтирует старую брусчатку, прокладывает новую систему отведения дождевой воды и укладывает новую тротуарную плитку.',
                  shortDescription:
                    'Как поменять плитку, сделать ливневку и обновить дизайн участка? Пошаговая инструкция по созданию уюта',
                  status: 'completed',
                  rating: {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  votes: {
                    kp: 10,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  movieLength: null,
                  totalSeriesLength: null,
                  seriesLength: 24,
                  ratingMpaa: null,
                  ageRating: 16,
                  poster: {
                    url: 'https://image.openmoviedb.com/kinopoisk-images/1898899/d0be9cd4-1154-455b-94ab-88315a0d921d/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-images/1898899/d0be9cd4-1154-455b-94ab-88315a0d921d/x1000',
                  },
                  backdrop: {
                    url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a000001915b5bd5c51433a9b7a3b07a0969/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a000001915b5bd5c51433a9b7a3b07a0969/x1000',
                  },
                  genres: [
                    {
                      name: 'документальный',
                    },
                    {
                      name: 'реальное ТВ',
                    },
                  ],
                  countries: [
                    {
                      name: 'Россия',
                    },
                  ],
                  releaseYears: [
                    {
                      start: 2024,
                      end: 2024,
                    },
                  ],
                  top10: null,
                  top250: null,
                  isSeries: true,
                  ticketsOnSale: false,
                },
                {
                  id: 6021258,
                  name: 'Тень Пустоты',
                  alternativeName: 'Xu wu bian jing',
                  type: 'animated-series',
                  typeNumber: 5,
                  year: 2024,
                  description:
                    'Мир поглощает катастрофа под названием Пустота, и рубеж обороны держит Зона Песков и Песчаный Город. Однажды секретная организация «Тени» прибывает в этот город, преследуя Царя драконов — Алую Тень.',
                  shortDescription:
                    'Чтобы спасти мир, люди объединяются против монстров из небытия. Смесь экшена и сай-фая с ноткой романтики',
                  status: 'completed',
                  rating: {
                    kp: 7.358,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: null,
                  },
                  votes: {
                    kp: 287,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  movieLength: null,
                  totalSeriesLength: null,
                  seriesLength: 21,
                  ratingMpaa: null,
                  ageRating: 18,
                  poster: {
                    url: 'https://image.openmoviedb.com/kinopoisk-images/10592371/e1a0f2ba-52e3-43a6-b444-92347cfae187/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-images/10592371/e1a0f2ba-52e3-43a6-b444-92347cfae187/x1000',
                  },
                  backdrop: {
                    url: 'https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a00000191518c6b328be4f11d3d4c7465ec/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a00000191518c6b328be4f11d3d4c7465ec/x1000',
                  },
                  genres: [
                    {
                      name: 'мультфильм',
                    },
                    {
                      name: 'фэнтези',
                    },
                    {
                      name: 'боевик',
                    },
                  ],
                  countries: [
                    {
                      name: 'Китай',
                    },
                  ],
                  releaseYears: [
                    {
                      start: 2024,
                      end: 2024,
                    },
                  ],
                  top10: null,
                  top250: null,
                  isSeries: true,
                  ticketsOnSale: false,
                },
                {
                  id: 6103709,
                  name: 'Блогеры на каникулах',
                  alternativeName: null,
                  type: 'tv-series',
                  typeNumber: 2,
                  year: 2024,
                  description:
                    'Популярные дети-инфлюенсеры отправляются, чтобы отдохнуть на пляже и сойтись в схватке за звание самого крутого блогера.\nКаждый из них хотел снять самое лучшее видео и набрать как можно больше лайков, но мирное соперничество переросло в открытое противостояние. Лучшие друзья начали ссориться, плести интриги, и в итоге стали непримиримыми врагами.',
                  shortDescription:
                    'Кто создаст лучший контент во время отдыха на курорте? Жаркое соревнование с юными звездами соцсетей',
                  status: 'completed',
                  rating: {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  votes: {
                    kp: 587,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  movieLength: null,
                  totalSeriesLength: null,
                  seriesLength: 15,
                  ratingMpaa: null,
                  ageRating: 6,
                  poster: {
                    url: 'https://image.openmoviedb.com/kinopoisk-images/9784475/62de7912-47f4-48b3-92c3-a80aa2a7ce1e/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-images/9784475/62de7912-47f4-48b3-92c3-a80aa2a7ce1e/x1000',
                  },
                  backdrop: {
                    url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000019137ae1dcd3da4fad04927f03b29/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000019137ae1dcd3da4fad04927f03b29/x1000',
                  },
                  genres: [
                    {
                      name: 'детский',
                    },
                    {
                      name: 'комедия',
                    },
                    {
                      name: 'приключения',
                    },
                  ],
                  countries: [
                    {
                      name: 'Россия',
                    },
                  ],
                  releaseYears: [
                    {
                      start: 2024,
                      end: 2024,
                    },
                  ],
                  top10: null,
                  top250: null,
                  isSeries: true,
                  ticketsOnSale: false,
                },
                {
                  id: 6132200,
                  name: 'Игры без границ',
                  alternativeName: null,
                  type: 'tv-series',
                  typeNumber: 2,
                  year: 2024,
                  description:
                    'Пары спортсменов со всего мира соревнуются, чтобы защитить честь свой страны: Россия, Китай, Иран, Белоруссия, США, Узбекистан, Бразилия, Индия, Казахстан. Им предстоит пройти яркие, эпичные и масштабные испытания.',
                  shortDescription:
                    'Атлеты из разных стран соревнуются в силе, ловкости и смекалке. Спортивное шоу для фанатов «Титанов»\n',
                  status: 'completed',
                  rating: {
                    kp: 7.155,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: null,
                  },
                  votes: {
                    kp: 3396,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  movieLength: null,
                  totalSeriesLength: null,
                  seriesLength: 120,
                  ratingMpaa: null,
                  ageRating: 16,
                  poster: {
                    url: 'https://image.openmoviedb.com/kinopoisk-images/10592371/df90603d-c3c4-4e5f-a168-1993a2d11462/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-images/10592371/df90603d-c3c4-4e5f-a168-1993a2d11462/x1000',
                  },
                  backdrop: {
                    url: 'https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a0000019166b32f452a6e56085533303cb2/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a0000019166b32f452a6e56085533303cb2/x1000',
                  },
                  genres: [
                    {
                      name: 'реальное ТВ',
                    },
                    {
                      name: 'спорт',
                    },
                  ],
                  countries: [
                    {
                      name: 'Россия',
                    },
                  ],
                  releaseYears: [
                    {
                      start: 2024,
                      end: 2024,
                    },
                  ],
                  top10: null,
                  top250: null,
                  isSeries: true,
                  ticketsOnSale: false,
                },
                {
                  id: 6058297,
                  name: null,
                  alternativeName: 'Dexter: Resurrection',
                  type: 'tv-series',
                  typeNumber: 2,
                  year: null,
                  description: null,
                  shortDescription: null,
                  status: 'pre-production',
                  rating: {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  votes: {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  movieLength: null,
                  totalSeriesLength: null,
                  seriesLength: null,
                  ratingMpaa: null,
                  ageRating: null,
                  countries: [
                    {
                      name: 'США',
                    },
                  ],
                  releaseYears: [
                    {
                      start: null,
                      end: null,
                    },
                  ],
                  top10: null,
                  top250: null,
                  isSeries: true,
                  ticketsOnSale: false,
                },
                {
                  id: 6059310,
                  name: 'Я иду тебя искать 9',
                  alternativeName: null,
                  type: 'tv-series',
                  typeNumber: 2,
                  year: null,
                  description: null,
                  shortDescription: null,
                  status: null,
                  rating: {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  votes: {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  movieLength: null,
                  totalSeriesLength: null,
                  seriesLength: null,
                  ratingMpaa: null,
                  ageRating: null,
                  genres: [
                    {
                      name: 'детектив',
                    },
                    {
                      name: 'мелодрама',
                    },
                  ],
                  countries: [
                    {
                      name: 'Россия',
                    },
                  ],
                  releaseYears: [
                    {
                      start: null,
                      end: null,
                    },
                  ],
                  top10: null,
                  top250: null,
                  isSeries: true,
                  ticketsOnSale: false,
                },
                {
                  id: 6098817,
                  name: 'Тачкомания',
                  alternativeName: 'Car Issues with Tyler Hoover',
                  type: 'tv-series',
                  typeNumber: 2,
                  year: 2019,
                  description:
                    'Когда одержимый автомобилями Тайлер Гувер находит редкую машину по хорошей цене, он стремится заполучить ее, забывая о возможных последствиях. Но последствия не забывают о Тайлере.',
                  shortDescription: null,
                  status: null,
                  rating: {
                    kp: 0,
                    imdb: 7.2,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  votes: {
                    kp: 1,
                    imdb: 156,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  movieLength: null,
                  totalSeriesLength: null,
                  seriesLength: 30,
                  ratingMpaa: null,
                  ageRating: null,
                  poster: {
                    url: 'https://image.openmoviedb.com/kinopoisk-images/10835644/a321d7ca-296f-4d06-b6d2-66d3501a66cf/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-images/10835644/a321d7ca-296f-4d06-b6d2-66d3501a66cf/x1000',
                  },
                  genres: [
                    {
                      name: 'реальное ТВ',
                    },
                  ],
                  countries: [
                    {
                      name: 'США',
                    },
                  ],
                  releaseYears: [
                    {
                      start: 2019,
                      end: null,
                    },
                  ],
                  top10: null,
                  top250: null,
                  isSeries: true,
                  ticketsOnSale: false,
                },
                {
                  id: 6099853,
                  name: 'Газовый человек',
                  alternativeName: 'Gas Ningen',
                  type: 'tv-series',
                  typeNumber: 2,
                  year: null,
                  description: null,
                  shortDescription: null,
                  status: 'pre-production',
                  rating: {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  votes: {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  movieLength: null,
                  totalSeriesLength: null,
                  seriesLength: null,
                  ratingMpaa: null,
                  ageRating: null,
                  genres: [
                    {
                      name: 'фантастика',
                    },
                    {
                      name: 'триллер',
                    },
                    {
                      name: 'драма',
                    },
                    {
                      name: 'мелодрама',
                    },
                  ],
                  countries: [
                    {
                      name: 'Япония',
                    },
                    {
                      name: 'Корея Южная',
                    },
                  ],
                  releaseYears: [
                    {
                      start: null,
                      end: null,
                    },
                  ],
                  top10: null,
                  top250: null,
                  isSeries: true,
                  ticketsOnSale: false,
                },
                {
                  id: 6120804,
                  name: 'ЧиЧи ПингПинг. Песенки',
                  alternativeName: 'Nursery Rhymes',
                  type: 'animated-series',
                  typeNumber: 5,
                  year: 2021,
                  description: 'ЧиЧи и ПингПинг с друзьями поют и танцуют.',
                  shortDescription:
                    'Друзья знакомятся с пингвинами, китами и медведями. Задорные обучающие песни о животных',
                  status: 'completed',
                  rating: {
                    kp: 0,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  votes: {
                    kp: 18,
                    imdb: 0,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: 0,
                  },
                  movieLength: null,
                  totalSeriesLength: null,
                  seriesLength: 2,
                  ratingMpaa: null,
                  ageRating: 0,
                  poster: {
                    url: 'https://image.openmoviedb.com/kinopoisk-images/4716873/05f25f16-25dc-4315-a100-f48277272f3e/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-images/4716873/05f25f16-25dc-4315-a100-f48277272f3e/x1000',
                  },
                  backdrop: {
                    url: 'https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a000001915ae15a6e856f63cb01f4040c9b/orig',
                    previewUrl:
                      'https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a000001915ae15a6e856f63cb01f4040c9b/x1000',
                  },
                  genres: [
                    {
                      name: 'мультфильм',
                    },
                    {
                      name: 'детский',
                    },
                    {
                      name: 'музыка',
                    },
                  ],
                  countries: [
                    {
                      name: 'Корея Южная',
                    },
                  ],
                  releaseYears: [
                    {
                      start: 2021,
                      end: 2022,
                    },
                  ],
                  top10: null,
                  top250: null,
                  isSeries: true,
                  ticketsOnSale: false,
                },
              ],
              total: 1059508,
              limit: 10,
              page: 1,
              pages: 105951,
            },
          },
        ],
      },
      {
        path: '/movie/:movieId',
        method: 'get',
        routes: [
          {
            data: {
              id: 4664634,
              alternativeName: 'Oppenheimer',
              collections: [],
              countries: [
                {
                  name: 'США',
                },
                {
                  name: 'Великобритания',
                },
              ],
              createdAt: '2022-01-26T13:22:51.993Z',
              description:
                'История жизни американского физика-теоретика Роберта Оппенгеймера, который во времена Второй мировой войны руководил Манхэттенским проектом — секретными разработками ядерного оружия.',
              enName: null,
              externalId: {
                imdb: 'tt15398776',
                tmdb: 872585,
                kpHD: null,
              },
              facts: [
                {
                  value:
                    'Для съёмок впервые в плёночных кинокамерах IMAX была использована чёрно-белая плёнка.',
                  type: 'FACT',
                  spoiler: false,
                },
                {
                  value:
                    'По словам <a href="/name/41477/" class="all">Кристофера Нолана</a>, мысль снять в главной роли <a href="/name/5005/" class="all">Киллиана Мерфи</a> пришла ему в голову, когда он рассматривал фотографию Оппенгеймера на обложке книги <a href="/name/5220147/" class="all">Кая Бёрда</a> и <a href="/name/6579708/" class="all">Мартина Шервина</a> &#171;Оппенгеймер: триумф и трагедия Американского Прометея&#187; (2005) , которая легла в основу сценария. Стараясь добиться большего сходства с прототипом, Мерфи сбросил вес и во время съёмок придерживался строгой диеты.',
                  type: 'FACT',
                  spoiler: false,
                },
                {
                  value:
                    '<a href="/name/6458/" class="all">Мэтт Дэймон</a> сделал перерыв в актёрской карьере ради жены, правда с условием, что перерыв закончится, если вдруг с предложением у себя сняться ему позвонит <a href="/name/41477/" class="all">Кристофер Нолан</a>. Нолан позвонил и предложил актёру роль <a href="/name/376559/" class="all">Лесли Гровса</a>.',
                  type: 'FACT',
                  spoiler: false,
                },
                {
                  value:
                    'Продюсер <a href="/name/21110/" class="all">Чарльз Ровен</a> предложил <a href="/name/41477/" class="all">Кристоферу Нолану</a> и продюсеру <a href="/name/41489/" class="all">Эмме Томас</a> идею фильма, рассказав о книге <a href="/name/5220147/" class="all">Бёрда</a> и <a href="/name/6579708/" class="all">Шервина</a> &#171;Оппенгеймер: триумф и трагедия Американского Прометея&#187;. Нолана это заинтересовало, и он попросил дать ему книгу почитать. Решиться же ему помог подарок актёра <a href="/name/544406/" class="all">Роберта Паттинсона</a> на вечеринке по случаю окончания работы над боевиком &#171;<a href="/film/1236063/" class="all">Довод</a>&#187;. Тогда Паттинсон подарил ему сборник речей Оппенгеймера.',
                  type: 'FACT',
                  spoiler: false,
                },
                {
                  value:
                    '<a href="/name/6458/" class="all">Мэтт Дэймон</a> получил сценарий, который был напечатан на красной бумаге и был написан от первого лица.',
                  type: 'FACT',
                  spoiler: false,
                },
                {
                  value:
                    'В кадрах испытания ядерной бомбы использовано сочетание реальных взрывов и компьютерных технологий. В реальных взрывах применяли смесь бензина, пропана, алюминия и магния &#8211; и макеты. Снимали на большой скорости с разных ракурсов, а затем изображения накладывали друг на друга, чтобы получить гриб ядерного взрыва.',
                  type: 'FACT',
                  spoiler: false,
                },
              ],
              genres: [
                {
                  name: 'биография',
                },
                {
                  name: 'драма',
                },
                {
                  name: 'история',
                },
              ],
              movieLength: 180,
              name: 'Оппенгеймер',
              persons: [
                {
                  id: 5005,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5005.jpg',
                  name: 'Киллиан Мерфи',
                  enName: 'Cillian Murphy',
                  description: 'J. Robert Oppenheimer',
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 227068,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_227068.jpg',
                  name: 'Эмили Блант',
                  enName: 'Emily Blunt',
                  description: 'Kitty Oppenheimer',
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 6458,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6458.jpg',
                  name: 'Мэтт Дэймон',
                  enName: 'Matt Damon',
                  description: 'Leslie Groves',
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 10096,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10096.jpg',
                  name: 'Роберт Дауни мл.',
                  enName: 'Robert Downey Jr.',
                  description: 'Lewis Strauss',
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 3435612,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3435612.jpg',
                  name: 'Флоренс Пью',
                  enName: 'Florence Pugh',
                  description: 'Jean Tatlock',
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 206,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_206.jpg',
                  name: 'Джош Хартнетт',
                  enName: 'Josh Hartnett',
                  description: 'Ernest Lawrence',
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 8890,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_8890.jpg',
                  name: 'Дэвид Крамхолц',
                  enName: 'David Krumholtz',
                  description: 'Isidor Rabi',
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 702326,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_702326.jpg',
                  name: 'Бенни Сэфди',
                  enName: 'Benny Safdie',
                  description: 'Edward Teller',
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 1217737,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1217737.jpg',
                  name: 'Олден Эренрайк',
                  enName: 'Alden Ehrenreich',
                  description: 'Senate Aide',
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 8886,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_8886.jpg',
                  name: 'Кеннет Брана',
                  enName: 'Kenneth Branagh',
                  description: 'Niels Bohr',
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 1795101,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1795101.jpg',
                  name: 'Людвиг Горанссон',
                  enName: 'Ludwig Göransson',
                  description: null,
                  profession: 'композиторы',
                  enProfession: 'composer',
                },
                {
                  id: 2002125,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2002125.jpg',
                  name: 'Рут Де Йонг',
                  enName: 'Ruth De Jong',
                  description: null,
                  profession: 'художники',
                  enProfession: 'designer',
                },
                {
                  id: 10131597,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10131597.jpg',
                  name: 'Джейк Кавалло',
                  enName: 'Jake Cavallo',
                  description: null,
                  profession: 'художники',
                  enProfession: 'designer',
                },
                {
                  id: 4277712,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4277712.jpg',
                  name: 'Саманта Инглендер',
                  enName: 'Samantha Englender',
                  description: null,
                  profession: 'художники',
                  enProfession: 'designer',
                },
                {
                  id: 2003395,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2003395.jpg',
                  name: 'Энтони Д. Парилло',
                  enName: 'Anthony D. Parrillo',
                  description: null,
                  profession: 'художники',
                  enProfession: 'designer',
                },
                {
                  id: 157166,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_157166.jpg',
                  name: 'Эллен Мирожник',
                  enName: 'Ellen Mirojnick',
                  description: null,
                  profession: 'художники',
                  enProfession: 'designer',
                },
                {
                  id: 1987873,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1987873.jpg',
                  name: 'Клер Кауфман',
                  enName: 'Claire Kaufman',
                  description: null,
                  profession: 'художники',
                  enProfession: 'designer',
                },
                {
                  id: 2017722,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2017722.jpg',
                  name: 'Адам Уиллис',
                  enName: 'Adam Willis',
                  description: null,
                  profession: 'художники',
                  enProfession: 'designer',
                },
                {
                  id: 41477,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_41477.jpg',
                  name: 'Кристофер Нолан',
                  enName: 'Christopher Nolan',
                  description: null,
                  profession: 'режиссеры',
                  enProfession: 'director',
                },
                {
                  id: 2449829,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2449829.jpg',
                  name: 'Дженнифер Лэйм',
                  enName: 'Jennifer Lame',
                  description: null,
                  profession: 'монтажеры',
                  enProfession: 'editor',
                },
                {
                  id: 758887,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_758887.jpg',
                  name: 'Хойте Ван Хойтема',
                  enName: 'Hoyte Van Hoytema',
                  description: null,
                  profession: 'операторы',
                  enProfession: 'operator',
                },
                {
                  id: 51141,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_51141.jpg',
                  name: 'Томас Хэйслип',
                  enName: 'Thomas Hayslip',
                  description: null,
                  profession: 'продюсеры',
                  enProfession: 'producer',
                },
                {
                  id: 3671064,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3671064.jpg',
                  name: 'Хелен Медрано',
                  enName: 'Helen Medrano',
                  description: null,
                  profession: 'продюсеры',
                  enProfession: 'producer',
                },
                {
                  id: 41477,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_41477.jpg',
                  name: 'Кристофер Нолан',
                  enName: 'Christopher Nolan',
                  description: null,
                  profession: 'продюсеры',
                  enProfession: 'producer',
                },
                {
                  id: 21110,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_21110.jpg',
                  name: 'Чарльз Ровен',
                  enName: 'Charles Roven',
                  description: null,
                  profession: 'продюсеры',
                  enProfession: 'producer',
                },
                {
                  id: 6039981,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6039981.jpg',
                  name: 'Станислав Шапкин',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6326775,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6326775.jpg',
                  name: 'Катя Хейфец',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6867588,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867588.jpg',
                  name: 'Григорий Лайков',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6867596,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867596.jpg',
                  name: 'Георгий Вардиашвили',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6867726,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867726.jpg',
                  name: 'София Габелия',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 41477,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_41477.jpg',
                  name: 'Кристофер Нолан',
                  enName: 'Christopher Nolan',
                  description: null,
                  profession: 'сценаристы',
                  enProfession: 'writer',
                },
                {
                  id: 5220147,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5220147.jpg',
                  name: 'Кай Бёрд',
                  enName: 'Kai Bird',
                  description: null,
                  profession: 'сценаристы',
                  enProfession: 'writer',
                },
                {
                  id: 6579708,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6579708.jpg',
                  name: 'Мартин Шервин',
                  enName: 'Martin Sherwin',
                  description: null,
                  profession: 'сценаристы',
                  enProfession: 'writer',
                },
                {
                  id: 1538746,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1538746.jpg',
                  name: 'Дэйн ДеХаан',
                  enName: 'Dane DeHaan',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 12928,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_12928.jpg',
                  name: 'Джейсон Кларк',
                  enName: 'Jason Clarke',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 3905,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3905.jpg',
                  name: 'Тони Голдуин',
                  enName: 'Tony Goldwyn',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 969004,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_969004.jpg',
                  name: 'Мэйкон Блэр',
                  enName: 'Macon Blair',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 1534520,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1534520.jpg',
                  name: 'Давид Дастмалчян',
                  enName: 'David Dastmalchian',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 4,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4.jpg',
                  name: 'Кейси Аффлек',
                  enName: 'Casey Affleck',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 1084238,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1084238.jpg',
                  name: 'Джефферсон Холл',
                  enName: 'Jefferson Hall',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 2256640,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2256640.jpg',
                  name: 'Дилан Арнольд',
                  enName: 'Dylan Arnold',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 1455344,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1455344.jpg',
                  name: 'Эмма Дюмон',
                  enName: 'Emma Dumont',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 6650,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6650.jpg',
                  name: 'Гари Олдман',
                  enName: 'Gary Oldman',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 510294,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_510294.jpg',
                  name: 'Мате Хауман',
                  enName: 'Máté Haumann',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 1089891,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1089891.jpg',
                  name: 'Рами Малек',
                  enName: 'Rami Malek',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 1347,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1347.jpg',
                  name: 'Маттиас Швайгхёфер',
                  enName: 'Matthias Schweighöfer',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 53295,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_53295.jpg',
                  name: 'Джеймс Д’Арси',
                  enName: "James D'Arcy",
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 3127870,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3127870.jpg',
                  name: 'Том Дженкинс',
                  enName: 'Tom Jenkins',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 11066,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_11066.jpg',
                  name: 'Мэттью Модайн',
                  enName: 'Matthew Modine',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 45018,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_45018.jpg',
                  name: 'Луиза Ломбард',
                  enName: 'Louise Lombard',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 4975,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4975.jpg',
                  name: 'Том Конти',
                  enName: 'Tom Conti',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 58720,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_58720.jpg',
                  name: 'Скотт Граймз',
                  enName: 'Scott Grimes',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 271392,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_271392.jpg',
                  name: 'Густаф Скарсгард',
                  enName: 'Gustaf Skarsgård',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 7231,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7231.jpg',
                  name: 'Майкл Ангарано',
                  enName: 'Michael Angarano',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 2427716,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2427716.jpg',
                  name: 'Джек Куэйд',
                  enName: 'Jack Quaid',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 15869,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_15869.jpg',
                  name: 'Джош Пек',
                  enName: 'Josh Peck',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 732186,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_732186.jpg',
                  name: 'Оливия Тирлби',
                  enName: 'Olivia Thirlby',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 84386,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_84386.jpg',
                  name: 'Курт Кохлер',
                  enName: 'Kurt Koehler',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 172465,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_172465.jpg',
                  name: 'Джон Гоуэнс',
                  enName: 'John Gowans',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 37699,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_37699.jpg',
                  name: 'Гарри Гронер',
                  enName: 'Harry Groener',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 21497,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_21497.jpg',
                  name: 'Грегори Джбара',
                  enName: 'Gregory Jbara',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 37772,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_37772.jpg',
                  name: 'Тед Кинг',
                  enName: 'Ted King',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 14970,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_14970.jpg',
                  name: 'Тим ДиКей',
                  enName: 'Tim DeKay',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 111432,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_111432.jpg',
                  name: 'Стивен Гоуска',
                  enName: 'Steven Houska',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 3781096,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3781096.jpg',
                  name: null,
                  enName: 'Petrie Willink',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 726205,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_726205.jpg',
                  name: 'Алекс Вулф',
                  enName: 'Alex Wolff',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 38287,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_38287.jpg',
                  name: 'Джош Цуккерман',
                  enName: 'Josh Zuckerman',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 4115737,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4115737.jpg',
                  name: 'Рори Кин',
                  enName: 'Rory Keane',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 14268,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_14268.jpg',
                  name: 'Сэди Стрэттон',
                  enName: 'Sadie Stratton',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 3400440,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3400440.jpg',
                  name: 'Брит Кайл',
                  enName: 'Britt Kyle',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 1076128,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1076128.jpg',
                  name: 'Гай Бернет',
                  enName: 'Guy Burnet',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 3776842,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3776842.jpg',
                  name: 'Майкл Эндрю Бэйкер',
                  enName: 'Michael Andrew Baker',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 40459,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_40459.jpg',
                  name: 'Джефф Хефнер',
                  enName: 'Jeff Hephner',
                  description: null,
                  profession: 'актеры',
                  enProfession: 'actor',
                },
                {
                  id: 1627453,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1627453.jpg',
                  name: 'Дмитрий Тихонов',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 7145257,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7145257.jpg',
                  name: 'Игорь Попов',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 5628417,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5628417.jpg',
                  name: 'Владимир Новосардов',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6313119,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6313119.jpg',
                  name: 'Антон Кобылко',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6903927,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6903927.jpg',
                  name: 'Никита Веремеев',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 7027545,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7027545.jpg',
                  name: 'Никита Дворянченко',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 3054219,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3054219.jpg',
                  name: 'Андрей Бибиков',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 1599046,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1599046.jpg',
                  name: 'Владимир Малюгин',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 7145245,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7145245.jpg',
                  name: 'Дэниел Брэндон',
                  enName: 'Daniel Brandon',
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 7174023,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174023.jpg',
                  name: 'Даниил Постников',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6563466,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6563466.jpg',
                  name: 'Максим Некрасов',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 7174032,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174032.jpg',
                  name: 'Владимир Кузнецов',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 7174015,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174015.jpg',
                  name: 'Дмитрий Нацвлишвили',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6867591,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867591.jpg',
                  name: 'Изабелла Богданова',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 700367,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_700367.jpg',
                  name: 'Александр Жданович',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6867595,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867595.jpg',
                  name: 'Бека Медзмариашвили',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 7174016,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174016.jpg',
                  name: 'Арчил Бараташвили',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6867736,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867736.jpg',
                  name: 'Александра Филатова',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6867601,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867601.jpg',
                  name: 'Олег Мчедлишвили',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 5444514,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5444514.jpg',
                  name: 'Михаил Гавашели',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 5739790,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5739790.jpg',
                  name: 'Алексей Ефремов',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6496097,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6496097.jpg',
                  name: 'Настя Федько',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6867590,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867590.jpg',
                  name: 'Леван Гочелашвили',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 1169906,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1169906.jpg',
                  name: 'Сергей Шведков',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 5000407,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5000407.jpg',
                  name: 'Артур Шувалов',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 7145246,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7145246.jpg',
                  name: 'Михаил Селищев',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6960546,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6960546.jpg',
                  name: 'Давид Котов-Оганесян',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6867731,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867731.jpg',
                  name: 'Дмитрий Спорышев',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 4729376,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4729376.jpg',
                  name: 'Илья Коваленко',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 7116733,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7116733.jpg',
                  name: 'Егор Богданов',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 7174033,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7174033.jpg',
                  name: 'Роман Исаков',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 6867589,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6867589.jpg',
                  name: 'Савва Самодуров',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 5628426,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5628426.jpg',
                  name: 'Серго Кения',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
                {
                  id: 317891,
                  photo:
                    'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_317891.jpg',
                  name: 'Валерий Харютченко',
                  enName: null,
                  description: null,
                  profession: 'актеры дубляжа',
                  enProfession: 'voice_actor',
                },
              ],
              poster: {
                url: 'https://image.openmoviedb.com/kinopoisk-images/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/orig',
                previewUrl:
                  'https://image.openmoviedb.com/kinopoisk-images/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/x1000',
              },
              productionCompanies: [],
              rating: {
                kp: 8.145,
                imdb: 8.3,
                filmCritics: 8.6,
                russianFilmCritics: 42.8571,
                await: null,
              },
              ratingMpaa: 'r',
              seasonsInfo: [],
              sequelsAndPrequels: [],
              shortDescription: null,
              similarMovies: [
                {
                  id: 635772,
                  name: 'Игра в имитацию',
                  alternativeName: 'The Imitation Game',
                  enName: null,
                  type: 'movie',
                  poster: {
                    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/49359d7b-8aa8-408f-bf07-407d49f439a0/orig',
                    previewUrl:
                      'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/49359d7b-8aa8-408f-bf07-407d49f439a0/x1000',
                  },
                  rating: {
                    kp: 7.632,
                    imdb: 8,
                    filmCritics: 7.7,
                    russianFilmCritics: 60,
                    await: null,
                  },
                  year: 2014,
                },
                {
                  id: 530,
                  name: 'Игры разума',
                  alternativeName: 'A Beautiful Mind',
                  enName: null,
                  type: 'movie',
                  poster: {
                    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/80f21137-eebb-4cdc-8124-96c68c07c2a8/orig',
                    previewUrl:
                      'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/80f21137-eebb-4cdc-8124-96c68c07c2a8/x1000',
                  },
                  rating: {
                    kp: 8.544,
                    imdb: 8.2,
                    filmCritics: 7.2,
                    russianFilmCritics: 80,
                    await: null,
                  },
                  year: 2001,
                },
                {
                  id: 334,
                  name: 'Доктор Стрейнджлав, или Как я научился не волноваться и полюбил атомную бомбу',
                  alternativeName:
                    'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
                  enName: null,
                  type: 'movie',
                  poster: {
                    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/500c65bf-b631-44c5-b218-40d6ce5240be/orig',
                    previewUrl:
                      'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/500c65bf-b631-44c5-b218-40d6ce5240be/x1000',
                  },
                  rating: {
                    kp: 8.024,
                    imdb: 8.4,
                    filmCritics: 9.1,
                    russianFilmCritics: 0,
                    await: null,
                  },
                  year: 1963,
                },
                {
                  id: 45961,
                  name: 'Выбор цели',
                  alternativeName: null,
                  enName: null,
                  type: 'movie',
                  poster: {
                    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/1edd016b-a16d-4f8d-ad75-f4c82edb1efd/orig',
                    previewUrl:
                      'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/1edd016b-a16d-4f8d-ad75-f4c82edb1efd/x1000',
                  },
                  rating: {
                    kp: 6.422,
                    imdb: 6.6,
                    filmCritics: 0,
                    russianFilmCritics: 0,
                    await: null,
                  },
                  year: 1975,
                },
                {
                  id: 478052,
                  name: 'Барби',
                  alternativeName: 'Barbie',
                  enName: null,
                  type: 'movie',
                  poster: {
                    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f0ae94af-050a-433b-a2a9-d6c96d644fd8/orig',
                    previewUrl:
                      'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f0ae94af-050a-433b-a2a9-d6c96d644fd8/x1000',
                  },
                  rating: {
                    kp: 6.596,
                    imdb: 6.9,
                    filmCritics: 8,
                    russianFilmCritics: 83.3333,
                    await: null,
                  },
                  year: 2023,
                },
                {
                  id: 9428,
                  name: 'Создатели тени',
                  alternativeName: 'Fat Man and Little Boy',
                  enName: null,
                  type: 'movie',
                  poster: {
                    url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/666181e2-7fae-414c-bfd4-30a2148b3468/orig',
                    previewUrl:
                      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/666181e2-7fae-414c-bfd4-30a2148b3468/x1000',
                  },
                  rating: {
                    kp: 6.474,
                    imdb: 6.5,
                    filmCritics: 5,
                    russianFilmCritics: 0,
                    await: null,
                  },
                  year: 1989,
                },
              ],
              slogan: null,
              spokenLanguages: [],
              status: null,
              technology: {
                hasImax: false,
                has3D: false,
              },
              ticketsOnSale: false,
              type: 'movie',
              typeNumber: 1,
              updatedAt: '2024-09-04T20:37:44.931Z',
              votes: {
                kp: 240626,
                imdb: 764509,
                filmCritics: 508,
                russianFilmCritics: 7,
                await: 0,
              },
              year: 2023,
              premiere: {
                world: '2023-07-19T00:00:00.000Z',
                bluray: null,
                cinema: null,
                digital: null,
                dvd: null,
                russia: null,
              },
              imagesInfo: {
                framesCount: 0,
              },
              budget: {
                value: 100000000,
                currency: '$',
              },
              fees: {
                world: {
                  value: 975134850,
                  currency: '$',
                },
                usa: {
                  value: 329862540,
                  currency: '$',
                },
              },
              ageRating: null,
              backdrop: {
                url: null,
                previewUrl: null,
              },
              logo: {
                url: 'https://imagetmdb.com/t/p/original/b07VisHvZb0WzUpA8VB77wfMXwg.png',
              },
              watchability: {
                items: [],
              },
              top10: null,
              top250: 87,
              isSeries: false,
              seriesLength: null,
              totalSeriesLength: null,
              deletedAt: null,
              lists: [
                'top250',
                'top500',
                'popular-films',
                'box-usa-all-time',
                'box-world-not-usa',
                'box-total',
                'oscar-best-film',
                'oscar-best-film-nominees',
                'oscar-directing',
                'oscar-cinematography',
                'oscar-music-original-score',
                'golden-globe-best-motion-picture-drama',
                'bafta-best-film',
              ],
              networks: null,
              videos: {
                trailers: [
                  {
                    url: 'https://www.youtube.com/embed/mDu95JPujwU',
                    name: 'трейлер',
                    site: 'youtube',
                    type: 'TRAILER',
                  },
                  {
                    url: 'https://www.youtube.com/embed/mDu95JPujwU',
                    name: 'трейлер',
                    site: 'youtube',
                    type: 'TRAILER',
                  },
                  {
                    url: 'https://www.youtube.com/embed/uYPbbksJxIg',
                    name: 'New Trailer',
                    site: 'youtube',
                    type: 'TRAILER',
                  },
                  {
                    url: 'https://www.youtube.com/embed/bK6ldnjE3Y0',
                    name: 'Official Trailer',
                    site: 'youtube',
                    type: 'TRAILER',
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
};

export default mockServerConfig;
