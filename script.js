const images = [
  {
    "title": "Cat and Plum Blossoms",
    "autor": "Hishida Shunso",
    "date": "1906",
    "src": "cat-and-plum-blossoms.jpg",
    "width": "0.8366666666666667",
    "height": "2"
  },
  {
    "title": "Portrait of Doctor Gachet",
    "autor": "Vincent van Gogh",
    "date": "1890",
    "src": "portrait-of-doctor-gachet.jpg",
    "width": "1.02",
    "height": "1.2"
  },
  {
    "title": "Marie and Her Mother in the Garden",
    "autor": "Peder Severin Kroyer",
    "date": "1891",
    "src": "marie-and-her-mother-in-the-garden.jpg",
    "width": "1",
    "height": "1.2"
  },
  {
    "title": "The Piedigrotta feast",
    "autor": "Vincenzo Migliaro",
    "date": "1895",
    "src": "the-piedigrotta-feast.jpg",
    "width": "1",
    "height": "1.5"
  },
  {
    "title": "Portrait of Pasqua Maria",
    "autor": "Ernest Hébert",
    "date": "1882",
    "src": "portrait-of-pasqua-maria.jpg",
    "width": "1",
    "height": "1.775147928994083"
  },
  {
    "title": "Tobias and the Angel",
    "autor": "Andrea del Verrocchio",
    "date": "c.1470 - c.1475",
    "src": "tobias-and-the-angel.jpg",
    "width": "1",
    "height": "1.279317697228145"
  },
  {
    "title": "Trees and Pond",
    "autor": "John Ruskin",
    "date": "1832",
    "src": "trees-and-pond.jpg",
    "width": "1",
    "height": "1.318681318681319"
  }
];

function drawImages() {
  document.getElementById("button").setAttribute("position", "0 0.38 -1.85")
  setTimeout(function() {
    document.getElementById("button").setAttribute("position", "0 0.4 -1.85")
  }, 200);


  // Known issue: Images are broken when function is being executed n time

  const n = images.length;
  let imagesToShow = [];

  while (imagesToShow.length < 4) {
    let randomIndex = Math.floor(Math.random() * n);
    if (!imagesToShow.includes(randomIndex)) {
      imagesToShow.push(randomIndex);
    }
  }

  for (let i = 0; i < 4; i++) {
    const image = images[imagesToShow[i]];
    const imageElement = document.getElementById(`img${i + 1}`);
    const titleElement = document.getElementById(`img${i + 1}title`);
    const authorElement = document.getElementById(`img${i + 1}author`);
    const dateElement = document.getElementById(`img${i + 1}date`);

    imageElement.setAttribute("src", "img/" + image.src);
    imageElement.setAttribute("width", image.width);
    imageElement.setAttribute("height", image.height);

    titleElement.setAttribute("value", image.title);
    authorElement.setAttribute("value", image.autor);
    dateElement.setAttribute("value", image.date);
  }
}