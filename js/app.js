//! Hero paragraph typewriter effect
const heroParagraphText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni mollitia sunt nam, inventore est possimus debitis harum soluta unde neque, delectus assumenda? Animi, tenetur enim, deserunt asperiores architecto fugit earum maiores rerum eos autem alias commodi quisquam mollitia. Consequuntur, mollitia dolor quos nobis error iste optio veritatis facilis neque necessitatibus.`;
const typingSpeed = 10;
const heroParagraph = document.querySelector("main p");
let i = 0;

function typeWriter() {
   if (i < heroParagraphText.length) {
      heroParagraph.innerHTML += heroParagraphText.charAt(i);
      i++;
      setTimeout(typeWriter, typingSpeed);
   }
}

typeWriter();
