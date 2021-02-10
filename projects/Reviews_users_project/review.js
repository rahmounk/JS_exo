// Initilisation des données nécéssaires
const reviews = [
   {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
         "https://www.servicesalapersonne.net/public/img/medium/woman46301311920jpg_5ffda0c8bc3f5.jpg",
      text:
         "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
   },
   {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
         "https://static6.depositphotos.com/1003989/647/i/600/depositphotos_6470969-stock-photo-portrait-of-yong-woman.jpg",
      text:
         "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
   },
   {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
         "https://static7.depositphotos.com/1000998/743/i/600/depositphotos_7439782-stock-photo-man-in-grey-suit-watching.jpg",
      text:
         "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
   },
   {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
         "http://idata.over-blog.com/1/89/64/16//RuizPieds1.jpg",
      text:
         "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
   },
   {
      id: 5,
      name: "Doge Kun",
      job: "THE BIG BOSS",
      img:
         "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa687b9c-717a-48b5-9b4c-0eee62eedd6d/db0f2pt-315919ea-6009-4100-bf44-44013e8550fa.jpg/v1/fill/w_400,h_600,q_75,strp/doge_in_coat__by_yiziapizza_db0f2pt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MDAiLCJwYXRoIjoiXC9mXC9hYTY4N2I5Yy03MTdhLTQ4YjUtOWI0Yy0wZWVlNjJlZWRkNmRcL2RiMGYycHQtMzE1OTE5ZWEtNjAwOS00MTAwLWJmNDQtNDQwMTNlODU1MGZhLmpwZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5OZZiU45bdB6LO-orFnszGFUU5n6sBcukotkHQLCHaM",
      text:
         "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
   },
   {
      id: 6,
      name: "Cat Kun",
      job: "the timid",
      img:
         "https://i1.wp.com/tsl.news/wp-content/uploads/2020/02/Garnett-the-Cat.jpg?resize=400%2C600&ssl=1",
      text:
         "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
   },
   {
      id: 7,
      name: "Mikasa Ackerman",
      job: "Bataillon d'éxploration",
      img:
         "https://i.pinimg.com/originals/4d/ee/1c/4dee1ce1c31a04eff44ebb103e507af0.jpg",
      text:
         "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
   },
   {
      id: 8,
      name: "Alexa",
      job: "RH",
      img:
         "https://cdn.videokvid.com/cover/ove-like-a-person.png",
      text:
         "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
   },
   {
      id: 9,
      name: "Meliodas",
      job: "nanatsu",
      img:
         "https://i.pinimg.com/474x/ae/24/af/ae24af4a32a7ec1a18dceaada5d29dcb.jpg",
      text:
         "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
   },
];

//!Initialisation des sélecteurs
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");
const imageContainer = document.querySelector("#person-img");

const author = document.querySelector("#author");
const job = document.querySelector(".job");
const comment = document.querySelector("#comment");

//!Setup la review de départ
let currentReview = 0;

//!Création d'un EVENT qui se lance au chargement du DOM
window.addEventListener("DOMContentLoaded", () => {
   const review = reviews[currentReview]; // création d'une variable qui pointe vers l'index des reviews

   showPerson(currentReview);
});

//!Utilisation de SETTERS pour remplacer les valeurs HTML avec celles des objets dans reviews.
function showPerson(person) {
   const review = reviews[person];
   console.log(review);
   imageContainer.src = review.img;
   author.innerText = review.name;
   job.innerText = review.job;
   comment.innerText = review.text;
}

//!Création d'un nouvel EVENT click bouton précédent
prevBtn.addEventListener("click", () => {
   currentReview--; // décrémentation de currentReview pour afficher l'index précédent

   
   if (currentReview < 0) { // Création d'un condition qui vérifie qu'on n'est pas à la fin de l'array on veut qu'il soit au minimum a 0.
      currentReview = reviews.length - 1;
   }
   showPerson(currentReview); //***Affiche la review en fonction de l'index
});

// !creation d'un nouvel EVENT bouton suivant
nextBtn.addEventListener("click", () => {
   currentReview++;
   if (currentReview > reviews.length - 1) { // création d'une condition qui vérifie que l'incrémentation n'a pas fait dépasser l'index currentReview de la taille de l'array.
      currentReview = 0; // si currentReview fait dépasser la taille de l'array. On remplace sa valeur par 0 pour retourner au début de l'array.
   }
   showPerson(currentReview); //***Affiche la review en fonction de l'index
});

//!création d'une variable qui va contenir un nombre aléatoire entre 0 et la taille max de l'array
randomBtn.addEventListener("click", () => {
   newReview = Math.floor(Math.random() * reviews.length); //récupération d'une valeur aléatoire avec math random

   
   while (currentReview === newReview) { // création d'une BOUCLE qui vérifie que tant que le nouveau nombre aléatoire contenu dans la variable est égale à l'ancien nombre.
      newReview = Math.floor(Math.random() * reviews.length); //Alors on choisit un nouveau nombre aléatoire
   }
   currentReview = newReview;
   showPerson(currentReview); //***Affiche la review en fonction de l'index
});
