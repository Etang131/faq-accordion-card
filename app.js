const questions = document.querySelectorAll(".faqQuestion");

const faqQuestion = document.querySelectorAll(".faqQuestion");
const faqAnswer = document.querySelectorAll(".faqAnswer");
const hr = document.querySelectorAll("hr");

//Can't get the forEach statement to get the right index
questions.forEach((question) => {
  question.addEventListener("click", (showAnswer) => {
    if (question.classList.contains("active")) {
      console.log("Cows are in the park");
      faqQuestion.classList.remove("active");
      faqAnswer.classList.remove("active");
      // faqQuestion::after.classList.remove("active"); not sure how to type this one
      hr.classList.remove("active");
    } else {
      console.log("cows are not in the park");
      faqQuestion(showAnswer).classList.add("active");
      faqAnswer[0].classList.add("active");
      // faqQuestion::after.classList.add("active"); not sure how to type this one
      hr.classList.add("active");
    }
  });
});

//Make .faqQuestion bold = 700
//Make .faqAnswer
//   height: 100px;
//   margin-top: 10px;

//Make hr
// margin: 45px 5% 0.75rem 5%;

//Make faqQuestion::after
// roate 180 deg
