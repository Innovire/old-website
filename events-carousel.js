import events from "./events.js";
const priority = ["high", "mediunm"];
const max_events = 6;

const filtered_events = events.filter((elem) => {
  return priority.includes(elem.priority);
});
let element = document.getElementById("events-carousel");
element.innerHTML = "";
for (let i = 0; i < Math.min(max_events, filtered_events.length); i++) {
  let child = document.createElement("div");
  let event = filtered_events[i];
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
