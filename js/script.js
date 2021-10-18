const questionEl = document.getElementsByClassName("faq__question");
const answerEl = document.getElementsByClassName("faq__answer");

// aggiungere la proprietà height direttamente allo stile mel tag html
for (let i = 0; i < questionEl.length; i++) {
  const question = questionEl[i];
  let nextElement = questionEl[i].nextElementSibling;
  question.addEventListener("click", function () {
    if (nextElement.style.height === 0 + "px" || nextElement.clientHeight === 0) {
      nextElement.style.height = nextElement.scrollHeight + "px";
    } else {
      nextElement.style.height = 0;
    }
  });
}
