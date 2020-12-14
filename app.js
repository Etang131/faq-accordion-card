const questions = document.querySelectorAll(".faqQuestion");

const faqQuestion = document.querySelectorAll(".faqQuestion");
const faqAnswer = document.querySelectorAll(".faqAnswer");
const hr = document.querySelectorAll("hr");

questions.forEach((question, i) => {
  question.addEventListener("click", (showAnswer) => {
    if (question.classList.contains("active")) {
      faqQuestion[i].classList.remove("active");
      faqAnswer[i].classList.remove("active");
      hr[i].classList.remove("active");
    } else {
      faqQuestion[i].classList.add("active");
      faqAnswer[i].classList.add("active");
      hr[i].classList.add("active");
    }
  });
});

// Very Important note on Pesuedo elements check css as well

// https://stackoverflow.com/questions/21032481/change-the-style-of-before-and-after-pseudo-elements

//Make .faqQuestion bold = 700
//Make .faqAnswer
//   height: 100px;
//   margin-top: 10px;

//Make hr
// margin: 45px 5% 0.75rem 5%;

//Make faqQuestion::after
// roate 180 deg
