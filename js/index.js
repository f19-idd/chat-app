const user = {
   id: 456,
   name: 'Charles Babbage',
   img: 'img/456.jpg'
}

const message = [
   {
      id: 1,
      from: {
         id: 123,
         name: 'Ada Lovelace',
         img: 'img/123.jpg'
      },
      time: {
         date: 1,
         month: 8,
         year: 1843,
         hour: 14,
         minute: 59
      },
      text: `You should check out this little script I just wrote. 😂 lol`
   }
]

document.getElementById(`btnOthers`).addEventListener('click', event => {
   document.getElementById(`others`).classList.toggle('open');
 });

function getMessageAsHtml(message) {
   return `<article class="message">
   <img src="${message.img}" alt="Avatar 1">
   <p class="from-me, from-them">${message.text}</p>
   </article>`
}

function renderConversation(arr) {
   document.getElementById('messages').innerHTML = arr.map(getMessageAsHtml).join('');
}

renderConversation(messages)