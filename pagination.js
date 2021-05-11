import events from "./events.js";
let list_items = events;
// let list_items = [
//   "Item 1",
//   "Item 2",
//   "Item 3",
//   "Item 4",
//   "Item 5",
//   "Item 6",
//   "Item 7",
//   "Item 8",
//   "Item 9",
//   "Item 10",
// ];

const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 6;

const DisplayList = (items, wrapper, rows_per_page, page) => {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);
  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];
    let item_element = document.createElement("div");
    item_element.classList.add("col-xl-4");
    item_element.classList.add("col-lg-6");
    item_element.classList.add("col-md-6");
    item_element.classList.add("mb--40");
    item_element.innerHTML = `
    <div class=\"blog-card\">
      <div class=\"blog-card_texts\">
        <span class=\"post-date\">${item.date}</span>
        <h3 class=\"post-title\">
          ${item.name}
        </h3>
        <p>${item.description}</p>
        <a href=\"${item.pathToFile}\" class=\"link-to-more\">Learn More</a>
      </div>
    </div>
`;
    wrapper.appendChild(item_element);
  }
};

const SetupPagination = (items, wrapper, rows_per_page) => {
  wrapper.innerHTML = "";
  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
};

const PaginationButton = (page, items) => {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) {
    button.classList.add("active");
  }
  button.addEventListener("click", () => {
    current_page = page;
    DisplayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector("button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
    window.scrollTo(0, 0);
  });
  return button;
};
DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);
