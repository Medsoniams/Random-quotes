const quotes = [
  {
    id: 1,
    quoteText: "Щастя не можна купити, але його можна заслужити",
    quoteAuthor: "Ольга Кобилянська",
  },
  {
    id: 2,
    quoteText: "Людина володіє тим, що вона любить",
    quoteAuthor: "Іван Франко",
  },
  {
    id: 3,
    quoteText:
      "Щоб бути вільним, треба бути сильним, а щоб бути сильним, треба вірити в себе.",
    quoteAuthor: "Ліна Костенко",
  },
  {
    id: 4,
    quoteText:
      "Життя - це найбільший дар, і ми повинні пам'ятати, що кожен момент - це дивовижний дарунок.",
    quoteAuthor: "Іван Франко",
  },
  {
    id: 5,
    quoteText:
      "Досягти успіху можна тільки за умови, що маєш сильний характер і вмієш битися за свої ідеали.",
    quoteAuthor: "Тарас Шевченко",
  },
  {
    id: 6,
    quoteText:
      "Коли серце знаходить себе у зламаних коханнях, воно стає подібним до змусеного птаха.",
    quoteAuthor: "Олесь Гончар",
  },
  {
    id: 7,
    quoteText:
      "Книга - це те, що може надихнути, змінити життя, допомогти зрозуміти світ і себе.",
    quoteAuthor: "Василь Сухомлинський",
  },
  {
    id: 8,
    quoteText:
      "Будь-яка робота може стати прекрасним твором мистецтва, якщо в ній вкладена любов і пристрасть.",
    quoteAuthor: "Марко Вовчок",
  },
  {
    id: 9,
    quoteText: "Справжня краса - це краса душі, а не зовнішності.",
    quoteAuthor: "Леся Українка",
  },
  {
    id: 10,
    quoteText:
      "Життя - це поєднання веселощів і печалей, перемог і поразок, але саме в цьому поєднанні ми можемо знайти сенс.",
    quoteAuthor: "Василь Стуc",
  },
  {
    id: 11,
    quoteText:
      "Любов - це єдиний дар, який можна дати безкоштовно, а отримати від нього можна неймовірно багато.",
    quoteAuthor: "Олександр Олесь",
  },
  {
    id: 12,
    quoteText:
      "Кожна людина має свій шлях і свою мету, і ніхто не може сказати, який саме шлях правильний.",
    quoteAuthor: "Іван Нечуй-Левицький",
  },
  {
    id: 13,
    quoteText: "Без поезії немає любові, без любові немає життя.",
    quoteAuthor: "Павло Тичина",
  },
];

const quoteText = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__author");
const reload = document.querySelector(".quotes__reload-btn");

const copyText = document.querySelector(".copy__quotes");
const copyBtn = document.querySelector(".quotes__copy-btn");
const copyDone = document.querySelector(".quotes__copy-btn_done");
let useQuotes = [];

const quotesRender = () => {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  if (!useQuotes.includes(randomQuote)) {
    useQuotes.push(randomQuote)
    quoteText.innerText = quotes[randomQuote].quoteText;
    quoteAuthor.innerText = quotes[randomQuote].quoteAuthor;
  } else if (useQuotes.length === quotes.length) {
    useQuotes = [];
    quotesRender()
  } else {
    quotesRender()
  }
};

const delClass = () => {
  copyDone.classList.remove("active");
}

const copyQuotes = () => {
  copyDone.classList.add("active");
  navigator.clipboard
    .writeText(copyText.innerHTML)
    .then(() => {
      console.log("Текст скопирован");
    })
    .catch((err) => {
      console.error(err);
    });
  setTimeout(delClass, 1000);
};



copyBtn.addEventListener("click", copyQuotes);
reload.addEventListener("click", quotesRender);

quotesRender();