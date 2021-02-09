// Initialisation de nos sélecteurs
const randomColor = document.querySelector('#color-button');
const bgColor = document.querySelector('body');
const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

randomColor.addEventListener('click', (e) => {
    const colorPicked = [];
    for(let i = 0; i<6; i++){
        let pickColor = hexArray[Math.floor(Math.random()*hexArray.length)];
        console.log(pickColor);
        colorPicked.push(pickColor);
        console.log(colorPicked);
    }

    const colorHex = colorPicked.join('');
    console.log(colorHex);
    bgColor.style.background = `#${colorHex}`;
});
