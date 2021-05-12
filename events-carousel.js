import events from "./events.js";
const priority = ["high", "mediunm"];
const max_events = 6;

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
    console.log(event);
    child.classList.add("single-slide");
    child.innerHTML = `<div class=\"testimonial-card\">
    <h3 class=\"name\">${event.name}</h3>
    <p class=\"review-text\">
      ${event.description}
    </p>
    <div class=\"card-footer\">
      <div class=\"customer-identity\">
        <!-- <h3 class=\"name\">Jonathan Taylor</h3> -->
        <!-- <p class=\"company\">CEO at Creativex</p> -->
        <a href=\"${event.pathToFile}\">Learn more</a>
      </div>
    </div>
  </div>`;
    element.appendChild(child);
  }
};

const getInvolvedCarousel = (events, max_events, element) => {
  element.innerHTML = "";
  for (let i = 0; i < Math.min(max_events, events.length); i++) {
    let child = document.createElement("div");
    let event = events[i];
    child.classList.add("single-slide");
    child.innerHTML = `<div class=\"testimonial-card\">
    <div class=\"testimonial-number-block\">
      <span class=\"number\">${i + 1}</span>
    </div>
    <div class=\"testmonial-texts\">
      <div class=\"testimonial-text-inner\">
        <span class=\"title-top\">${event.date}</span>
        <h2 class=\"testmonial-title\">
          ${event.name}
        </h2>
        <p>
          ${event.description}
        </p>
        <a href=${event.pathToFile} style="color:#5454d4;">Learn more</a>
      </div>
    </div>
  </div>`;
    element.appendChild(child);
  }
};

if (indexElement) {
  indexCarousel(filtered_events, max_events, indexElement);
}
if (getInvolvedElemennt) {
  getInvolvedCarousel(events, max_events, getInvolvedElemennt);
}
