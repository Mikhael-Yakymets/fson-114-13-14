//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const bodyEl = document.querySelector('body');
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
// bodyEl.after(divContainerEl);
// bodyEl.before(divContainerEl);
// bodyEl.append(divContainerEl);
// bodyEl.prepend(divContainerEl);

buttonEl.addEventListener('click', () => {
  const divEl = document.querySelector('.number-container');
  if (divEl) {
    divEl.parentNode.removeChild(divEl);
  }

  const divContainerEl = document.createElement('div');

  divContainerEl.classList.add('number-container');
  //   console.log(divContainerEl);
  //   const boxes = 100;
  const randomNumber = () => Math.floor(Math.random() * inputEl.value) + 1;
  //   const fragment = document.createDocumentFragment();

  for (let i = 0; i < inputEl.value; i++) {
    //   console.log(i);

    const div = document.createElement('div');
    div.classList.add('number');
    div.textContent = randomNumber();

    if (div.textContent % 2 === 0) {
      div.classList.add('even');
    } else {
      div.classList.add('odd');
    }

    divContainerEl.appendChild(div);
    // fragment.appendChild(div);
  }

  buttonEl.after(divContainerEl);
  //   buttonEl.after(fragment);
  inputEl.value = '';
});

//TODO:=========task-02=================
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },

  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];

// Приклад елементу списку
{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}
const watchedFilms = ['film_2', 'film_4', 'film_5'];

const filmsListEl = document.querySelector('.film-list');

const createMarkup = arr =>
  arr
    .map(
      film =>
        `<li id="${film.id}">
     <img src="${film.imgUrl}" alt="${film.title}" />
     <p>${film.title}</p>
</li>`
    )
    .join('');

filmsListEl.innerHTML = createMarkup(films);
// filmsListEl.insertAdjacentHTML('beforeend', createMarkup(films));
watchedFilms.forEach(id => {
  const film = filmsListEl.querySelector(`#${id}`);
  if (film) {
    film.style.opacity = 0.5;
  }
});

const btnEl = document.querySelector(".open-modal")

btnEl.addEventListener("click", () => {
  const instance = basicLightbox.create(`
    <img src="https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg" width="800" height="600">
  `)

  instance.show()
})

filmsListEl.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(`
    <img src="${event.target.src}" width="800" height="600">
  `, {
    onShow: () => {
      document.addEventListener('keydown', onEscClick )
    }, 
    onClose: () => {
      document.removeEventListener('keydown', onEscClick )
    }
  })

  modal.show()
  function onEscClick(event) { 
    console.log(event.code);
    if (event.code === 'Escape') { 
      modal.close()
      console.log('object is closet');

    }
  }
})


