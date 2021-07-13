import images from "./js/event-images.js";
const events = images; // array of objects
const priority = ["high", "medium", "low"]; // this isn't really needed here
const max_events = 1000; // we don't need a limit so we can just set it to a really high number

// To Brian:
// If you look at conference-2021, you will see a div element with id="image-carousel".
// This is basically storing that element in a variable so we can do stuff with it later on.
let indexElement = document.getElementById("image-carousel");

const filtered_events = events.filter((elem) => {
  return priority.includes(elem.priority);
});

const indexCarousel = (events, max_events, element) => {
  element.innerHTML = ""; // clearing out the html inside of the element.
  for (let i = 0; i < Math.min(max_events, events.length); i++) {
    // for loop. It will stop at either the limit or the number of events
    let child = document.createElement("div"); // creating a div element, pretty self explanatory
    let event = events[i]; // grabbing the selected event from the events list
    child.classList.add("single-slide"); // adding classname to the element
    child.innerHTML = `<div class=\"testimonial-card\" style="border: none">
    <img src="image/png/2021-summit-images/${event.filename}" alt="" style="border-radius: 10px"/>

    </div>`;
    element.appendChild(child); // inserting the div we created earlier into the events carousel element.
  }
};

if (indexElement) {
  indexCarousel(filtered_events, max_events, indexElement);
}
