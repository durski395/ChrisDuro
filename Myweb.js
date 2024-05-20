function changeImg(){

 let img2 = document.getElementById("img2");
// img2.src ='https://i.pinimg.com/originals/a8/ca/1e/a8ca1e9b8dd8eb15b6877a6d0029e24c.gif'

if (img2.src === 'https://pbs.twimg.com/media/Ce7yPRJW4AEIlwW?format=jpg&name=medium'){

  img2.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHFteHU4aWh6dXMzeGt4NmJtYzE0dHlwb3c3bXNrdTMxMThzenAyNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BpGWitbFZflfSUYuZ9/200.webp';
 img2.style.left = '66%';
 img2.alt ="Lets do this!!"
} else {  
     img2.src = 'https://pbs.twimg.com/media/Ce7yPRJW4AEIlwW?format=jpg&name=medium';
     img2.style.left = '58%';
}
}


function Next(){

     let img6 = document.getElementById("img6");

    if (img6.src === 'https://www.yeastar.com/wp-content/uploads/2021/11/call-center-phone-system-576x443.png'){
    
      img6.src = 'https://suretygroup.com/api/image/getimage_name/contractor-construction-2/';
      img6.style.maxWidth = "14%";
      document.querySelector("#comp1").innerHTML = "CORRTECH";
      document.querySelector("#work1").innerHTML = "Field Engineer";
      document.querySelector("#wyear1").innerHTML = "January 2023 - August 2023";
      document.querySelector("#comp2").innerHTML = "| ALCI";
      document.querySelector("#work2").innerHTML = "| Site Engineer";
      document.querySelector("#wyear2").innerHTML = "| August 2023 - October 2023";
      img6.style.left = '42%';
     img6.alt ="Field Engineer logo";
    } else {  
         img6.src = 'https://www.yeastar.com/wp-content/uploads/2021/11/call-center-phone-system-576x443.png';
         img6.style.maxWidth = "12%" 
         document.querySelector("#comp1").innerHTML = "Qualfon";
         document.querySelector("#work1").innerHTML = "Customer Service Representative";
         document.querySelector("#wyear1").innerHTML = "April 2021 - May 2022";
         document.querySelector("#comp2").innerHTML = "";
         document.querySelector("#work2").innerHTML = "";
         document.querySelector("#wyear2").innerHTML = "";

    }
    }
//     <h1 id="exp">WORK EXPERIENCES</h1>
//         <p id="comp1">Qualfon</p>
//         <p id="work1">Customer Service Representative</p>
//         <p id="wyear1">April 2021 - May 2022</p>
//         <button id="button" onclick="Next()">Next</button>    
