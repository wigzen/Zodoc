// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute("aria-expanded");

//   for (let i = 0; i < items.length; i++) {
//     items[i].setAttribute("aria-expanded", "false");
//   }

//   if (itemToggle == "false") {
//     this.setAttribute("aria-expanded", "true");
//     // api call
//   }
// }
// items.forEach((item) => item.addEventListener("click", toggleAccordion));
const textSubmit = document.getElementById("textSubmit");
const textDiv = document.getElementsByClassName("accordion")[0];
const form = document.getElementById("suggestedForm");
const inputText = document.getElementById("textArea");
const avatatBtn = document.getElementById('avatar__img')
let apiResponse = ["good", "average", "bad"];

let textArray

textSubmit.addEventListener("click", () => {
  
  let copy = inputText.value;
  textArray = copy.split(".");

  textArray.forEach((element) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("accordion-item");
    // console.log(userDiv);
    userDiv.innerHTML = `
    <button 
    id="accordion-button" aria-expanded="false" class="title-wrapper"  data-loaded="false">
    <span class="accordion-title"
    ><p class="accordion-title-match">
    ${element}
    </p>
    <div class="scores">
 12
    </div>
    </span>
    
    <span class="icon" aria-hidden="true"></span>
    </button>
    <div class="accordion-content">
    <ul class="accordion-content--list">
    </ul>
    </div>
    `;

    textDiv.appendChild(userDiv);
  });
});


function secondToggleAccordion(target) {
  const name =target.querySelector(".accordion-title-match").innerText
  console.log(name)
    if (target.getAttribute("aria-expanded") != "true") {
      // console.log(target.getAttribute("aria-expanded"));
      const isloaded = target.getAttribute("data-loaded");
      target.setAttribute("aria-expanded", true);
    
  
      const content = target.parentNode.children[1].children[0];
      console.log(content);
      if (isloaded == "false") {
        apiResponse.forEach((element) => {
          // console.log(temp);
  
          content.insertAdjacentHTML(
            "beforeend",
            `
    <li class="flex">
    <label
      >${element}</label
    >
    <div class="flex">
      <div class="scores">
10
      </div>
      <input type="radio" value="${element}" name="${name}" />
    </div>
  </li>
    `
          );
        });
        target.setAttribute("data-loaded", "true");
      }
    } else {

      target.setAttribute("aria-expanded", false);
    }
  }
  
  
textDiv.addEventListener("click", (e) => {
  let target = e.target;

  while (target != this) {
    if (target.tagName == "BUTTON") {
      secondToggleAccordion(target);
      //   toggleAccordion()
      return;
    }
    target = target.parentNode;
  }
});


form.addEventListener('submit',(e)=>{
  console.log(form.children)
  e.preventDefault()
  let data = new FormData(form)
  let res = Object.fromEntries(data)
  let temp = Object.keys(res)
  temp.forEach((key)=>{
let index =textArray.indexOf(key)
console.log(index)
textArray[index] = res[key]
  })
  console.log(textArray)
})

avatatBtn.addEventListener('click',()=>{
 const menu  = document.querySelector('.avatar__menu')
  menu.classList.toggle("open")

})