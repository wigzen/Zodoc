const textSubmit = document.getElementById("textSubmit");
const textDiv = document.getElementsByClassName("accordion")[0];
const form = document.getElementById("suggestedForm");
const inputText = document.getElementById("textArea");
const avatatBtn = document.getElementById("avatar__img");
const final__form =document.getElementById('final__form')
const apiResponse = ["It's not wewewewewe writers who can benefit from this free online tool", " If you're a programmer who's working on a project where blocks of text are neeeeeeeeeeeeeeded, this tool can be a great way to get that", "It's a good way to test your programming and that the tool being created is working welllllll"];
const improve = document.getElementById("improve")
const textDump = document.getElementsByClassName("textDump")[0]
const template = document.getElementById('template')
const textContianer =  template.content.cloneNode(true)


console.log(textContianer)
let textArray =[];
textSubmit.addEventListener("click", (e) => {
  // console.log(textDiv)
  e.preventDefault();
  let copy = inputText.value;
  textArray = copy.split(".");

  textArray.forEach((element) => {
    if(element.length>0){

    const userDiv = document.createElement("div");
    
    userDiv.classList.add("accordion-item");
    // console.log(userDiv);
// textContianer.querySelector(".title").textContent= element
// console.log(textContianer)

    userDiv.append(textContianer)
    userDiv.innerHTML = `
    <div class="item">
      <p class="title">${element}</p>
      <div class="scores">
        <div class="score">10</div>
        <div  class="score" >15</div>
        </div>
        <input type="checkbox" value="${element}" name="${element}" />

    </div>
    `;

    textDiv.appendChild(userDiv);}
  });


});
// Second Toggle Start
function secondToggleAccordion(target) {
  const name = target.querySelector(".accordion-title-match").innerText;
  console.log(name);
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
      <!---input type="radio" value="${element}" name="${name}" -/--->
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
// Second Toggle ENDS
// textDiv.addEventListener("click", (e) => {
//   let target = e.target;

//   while (target != this) {
//     if (target.tagName == "BUTTON") {
//       // secondToggleAccordion(target);
//       //   toggleAccordion()
//       return;
//     }
//     target = target.parentNode;
//   }
// });





form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let res = Object.fromEntries(data);
  let temp = Object.keys(res);



  temp.forEach((key,idx) => {
    temp[idx] = apiResponse[idx] ??temp[idx]
    const resText = document.createElement('div')
    resText.innerHTML = `
    <div class="item">
    <p class="title">${apiResponse[idx]}</p>
    <div class="scores">
      <div class="score">10</div>
      <div  class="score" >15</div>
      </div>
      <input type="checkbox" value="${key}" name="${key}" />

  </div>
    `;
    textDump.append(resText)
    console.log(key)
    let index = textArray.indexOf(key);
    console.log(index);
    textArray[index] = res[key];
  });
  // console.log(textArray);
let newParagraph =""


for(let i =0 ; i<textArray.length;i++){
  newParagraph = newParagraph+ temp[i]?? textArray[i]
}
  final__form.innerHTML =`
  <textarea name="" id="verifybox" cols="30" rows="10" placeholder="Write or Paste" class="textarea" disabled   >
  ${newParagraph}
  </textarea>
  <button class="btn btn--green" id="verifyBtn">Submit</button>
  
  `

});




avatatBtn.addEventListener("click", () => {
  const menu = document.querySelector(".avatar__menu");
  menu.classList.toggle("open");
});


