const button=document.querySelector(".change");
const body=document.body;
const headLine=document.querySelector(".head-line");

button.addEventListener("click",(e)=>{

    // console.log(e.target);

    const random=generateRandomNumber();

    // console.log(random);

    body.style.backgroundColor=random;

    headLine.textContent=random;

})

function generateRandomNumber(){

    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);

    const randomColor=`rgb(${red},${green},${blue})`;

    return randomColor;
}
