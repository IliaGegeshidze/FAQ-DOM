const questions = document.querySelectorAll("#q1, #q2, #q3, #q4, #q5");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.querySelector("p");
    const arrow = question.querySelector("img");
    const title = question.querySelector("span");
    answer.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
    title.classList.toggle("font-bold");
    title.classList.toggle("text-black");
  });
});
