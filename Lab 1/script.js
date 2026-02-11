const form=document.querySelector("form")
const eventCards=document.querySelector(".cards")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(eventtitle.value)
    console.log(eventdate.value)
    console.log(category.value)
    console.log(description.value)

    let titlee=eventtitle.value
    let datee=eventdate.value
    let cate=category.value
    let desc=description.value

    const card=document.createElement("div")

    card.classList.add("card")
    
    card.innerHTML=`
    <h3>${titlee}</h3>
    <p>📅${datee}</p>
    <button>${cate}</button>
    <p>${desc}</p>
    <div class="dlt">x</div>
    `
    
    eventCards.appendChild(card)
    const dlt=card.querySelector('.dlt')
    dlt.addEventListener('click',()=>{
        card.remove()

    })


})


document.addEventListener('keydown',(e)=>{
    console.log(e.key)
    pressedKey.textContent = e.key;  // for user

})


document.querySelector('.clear').addEventListener('click',()=>{
    document.querySelectorAll('.card').forEach((card)=>{
        card.remove()
    })
    
})

const sampleBtn = document.querySelector(".sample");
const cardsContainer = document.querySelector(".cards");

const sampleEvents = [
  {
    title: "AI Workshop",
    date: "2026-02-20",
    category: "Workshop",
    description: "Hands-on session on Machine Learning."
  },
  {
    title: "Tech Meetup",
    date: "2026-02-25",
    category: "MeetUp",
    description: "Networking with developers."
  }
];


sampleBtn.addEventListener("click", () => {
  sampleEvents.forEach(event => {
    addCard(event);
  });
});



function addCard(event) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${event.title}</h3>
    <p> ${event.date}</p>
    <button> ${event.category}</button>
    <p>${event.description}</p>
    <div class="dlt">x</div>
  `;
  eventCards.appendChild(card)
    const dlt=card.querySelector('.dlt')
    dlt.addEventListener('click',()=>{
        card.remove()

    })


  cardsContainer.appendChild(card);
}



