const questionEl = document.getElementsByClassName("faq__question");
const answerEl = document.getElementsByClassName("faq__answer");

// aggiungere la proprietà height direttamente allo stile mel tag html
for (let i = 0; i < questionEl.length; i++) {
  const element = questionEl[i];
  element.addEventListener("click", function () {
    return element.nextElementSibling.classList.toggle("hide");
  });
}
