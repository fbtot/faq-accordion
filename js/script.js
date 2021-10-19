const questionEl = document.getElementsByClassName("faq__question");
const answerEl = document.getElementsByClassName("faq__answer");

for (let i = 0; i < questionEl.length; i++) {
  const question = questionEl[i];
  let nextElement = questionEl[i].nextElementSibling;
  question.addEventListener("click", function () {
    if (nextElement.style.height === 0 + "px" || nextElement.offsetHeight === 1) {
      console.log(nextElement.offsetHeight);
      nextElement.style.height = nextElement.scrollHeight + "px";
    } else {
      nextElement.style.height = 0;
    }
    nextElement.classList.toggle("active");
    question.classList.toggle("active");
  });
}
