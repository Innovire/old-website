import images from "./js/event-images.js";
const events = images;
const priority = ["high", "medium", "low"];
const max_events = 1000;

let indexElement = document.getElementById("events-carousel");
let getInvolvedElemennt = document.getElementById("full-events-carousel");

const filtered_events = events.filter((elem) => {
  return priority.includes(elem.priority);
});

const indexCarousel = (events, max_events, element) => {
  element.innerHTML = "";
  for (let i = 0; i < Math.min(max_events, events.length); i++) {
    let child = document.createElement("div");
    let event = events[i];
    child.classList.add("single-slide");
    child.innerHTML = `<div class=\"testimonial-card\" style="border: none">
    <img src="image/png/2021-summit-images/${event.filename}" alt="" style="border-radius: 10px"/>

    </div>`;
    element.appendChild(child);
  }
};

if (indexElement) {
  indexCarousel(filtered_events, max_events, indexElement);
}
