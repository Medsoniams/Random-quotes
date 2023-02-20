const getQuotes = async () => {
  const response = await fetch("api/quotes.json");
  const json = await response.json();
  return json;
}
const dataQuotes = await getQuotes();

const quoteText = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__author");
const reload = document.querySelector(".quotes__reload-btn");

const copyText = document.querySelector(".copy__quotes");
const copyBtn = document.querySelector(".quotes__copy-btn");
const copyDone = document.querySelector(".quotes__copy-btn_done");
const useQuotes = [];

const quotesRender = () => {
  const quotes = dataQuotes;
  const randomQuote = Math.floor(Math.random() * quotes.length);
  console.log(randomQuote)
  if (!useQuotes.includes(randomQuote)) {
    useQuotes.push(randomQuote);
    quoteText.innerText = quotes[randomQuote].quoteText;
    quoteAuthor.innerText = quotes[randomQuote].quoteAuthor;
  } else if (useQuotes.length === quotes.length) {
    useQuotes.length = 0;
    quotesRender();
  } else {
    quotesRender();
  }
};

const delClass = () => {
  copyDone.classList.remove("active");
};

const copyQuotes = () => {
  copyDone.classList.add("active");
  navigator.clipboard.writeText(copyText.innerHTML);
  setTimeout(delClass, 1000);
};

copyBtn.addEventListener("click", copyQuotes);
reload.addEventListener("click", quotesRender);

quotesRender();