var string = "";
let buttons = document.querySelectorAll(".button")
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e)=>{
        try{
        if (e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;


        }
      else  if (e.target.innerHTML=="C"){
            string=""
            document.querySelector('input').value=string;


        }
else {
    console.log(e.target)
string=string + e.target.innerHTML;
string=string 
document.querySelector('input').value=string;
}
        }catch(e){
        string=""
        }
    })
});
document.getElementsByClassName("button")[0].style.padding="17px"
document.getElementsByClassName("button")[1].style.padding="17px"
document.getElementsByClassName("button")[2].style.padding="17px"
document.getElementsByClassName("button")[3].style.padding="17px"