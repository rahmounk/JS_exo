// Initialisation de nos sélecteurs
// const randomColor = document.querySelector('#colorButton');
// const bgColor = document.querySelector('body');
// const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// randomColor.addEventListener('click', (e) => {
//     const colorPicked = [];
//     for(let i = 0; i<6; i++){
//         let pickColor = hexArray[Math.floor(Math.random()*hexArray.length)];
//         console.log(pickColor);
//         colorPicked.push(pickColor);
//         console.log(colorPicked);
//     }

//     const colorHex = colorPicked.join('');
//     console.log(colorHex);
//     bgColor.style.background = `#${colorHex}`;
// });



//***Solution 2


const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    // ajout de l'inner HTML avec le hashtag + la valeur de la const randomColor
    document.body.style.backgroundColor = "#" + randomColor;

    // ligne à reverifier
    colorInput.innerHTML = "#" + randomColor;
  }
  
  colorButton.addEventListener("click", setBg);
  setBg();
