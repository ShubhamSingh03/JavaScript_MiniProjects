const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function createFaq() {
  faqData.forEach(element => {
    // creating elements
    const faqDivContainer = document.createElement("div");
    const faqHeader = document.createElement("div");
    const faqAnswer = document.createElement("p");
    const showBtn = document.createElement("button");
    const faqHeading = document.createElement("h3");

    // setting class attributes
    faqDivContainer.className = "faq";
    faqHeader.className = "faq_header";
    faqAnswer.className = "hidden";
    showBtn.className = "show_btn";

    /* appending faqDivContainer in accordianBody && faqheader, faqanswer, showBtn
    inside faqDivContainer  and faqHeading in faqHeader Div*/
    accordianBody.append(faqDivContainer);
    faqDivContainer.append(faqHeader);
    faqDivContainer.append(faqAnswer);
    faqDivContainer.append(showBtn);
    faqHeader.append(faqHeading);

    // setting headingText & answerText
    const headingText = document.createTextNode(element.question);
    faqHeading.append(headingText);
    showBtn.textContent = "+";
    const answerText = document.createTextNode(element.answer);
    faqAnswer.append(answerText)
  })
}
createFaq();

function showFaq() {
const showButton = document.querySelectorAll(".show_btn");
const answer = document.querySelectorAll("p");
for (let i = 0; i < showButton.length; i++) {
  showButton[i].addEventListener("click", () => {
      for (let j = 0; j < answer.length; j++) {
          if (i == j) {
              answer[j].classList.toggle("hidden")
          } 
      }
  });
}
}
showFaq();

function btnStatusUpdate() {
}


