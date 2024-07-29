const images = [
  {
    "title": "Cat and Plum Blossoms",
    "author": "Hishida Shunso",
    "date": "1906",
    "additional_info": "Style: Nihonga\nGenre: animal painting",
    "src": "cat-and-plum-blossoms.jpg",
    "width": "0.8366666666666667",
    "height": "2"
  },
  {
    "title": "Portrait of Doctor Gachet",
    "author": "Vincent van Gogh",
    "date": "1890",
    "additional_info": "Style: Post-Impressionism\nGenre: portrait\nMedia: oil, canvas\nLocation: Musée d'Orsay, Paris, France, Private Collection\nDimensions: 57 x 68 cm",
    "src": "portrait-of-doctor-gachet.jpg",
    "width": "1.02",
    "height": "1.2"
  },
  {
    "title": "Marie and Her Mother in the Garden",
    "author": "Peder Severin Kroyer",
    "date": "1891",
    "additional_info": "Style: Impressionism\nGenre: genre painting",
    "src": "marie-and-her-mother-in-the-garden.jpg",
    "width": "1",
    "height": "1.2"
  },
  {
    "title": "The Piedigrotta feast",
    "author": "Vincenzo Migliaro",
    "date": "1895",
    "additional_info": "Original Title: La festa di Piedigrotta\nStyle: Realism, Impressionism\nGenre: genre painting\nMedia: oil, canvas\nDimensions: 240 x 160 cm",
    "src": "the-piedigrotta-feast.jpg",
    "width": "1",
    "height": "1.5"
  },
  {
    "title": "Portrait of Pasqua Maria",
    "author": "Ernest Hébert",
    "date": "1882",
    "additional_info": "Style: Romanticism\nTheme: In Italy\nGenre: portrait\nMedia: oil, canvas",
    "src": "portrait-of-pasqua-maria.jpg",
    "width": "1",
    "height": "1.775147928994083"
  },
  {
    "title": "Tobias and the Angel",
    "author": "Andrea del Verrocchio",
    "date": "c.1470 - c.1475",
    "additional_info": "Style: Early Renaissance\nGenre: religious painting\nMedia: tempera",
    "src": "tobias-and-the-angel.jpg",
    "width": "1",
    "height": "1.279317697228145"
  },
  {
    "title": "Trees and Pond",
    "author": "John Ruskin",
    "date": "1832",
    "additional_info": "Style: Romanticism\nGenre: landscape",
    "src": "trees-and-pond.jpg",
    "width": "1",
    "height": "1.318681318681319"
  },
  {
    "title": "The Angel of the Annunciation",
    "author": "Lorenzo Lotto",
    "date": "1527; Italy",
    "additional_info": "Style: High Renaissance\nGenre: religious painting\nMedia: oil, wood\nDimensions: 75 x 55 cm",
    "src": "the-angel-of-the-annunciation.jpg",
    "width": "1",
    "height": "1.342281879194631"
  },
  {
    "title": "The Play Scene in Hamlet",
    "author": "Edwin Austin Abbey",
    "date": "1897",
    "additional_info": "Style: Romanticism\nGenre: literary painting",
    "src": "the-play-scene-in-hamlet.jpg",
    "width": "1.599147121535181",
    "height": "1"
  },
  {
    "title": "Niagara",
    "author": "Frederic Edwin Church",
    "date": "1857",
    "additional_info": "Style: Romanticism\nGenre: landscape\nMedia: oil, canvas\nLocation: Olana State Historic Site, Greenport, NY, US",
    "src": "niagara.jpg",
    "width": "2.155172413793103",
    "height": "1"
  },
  {
    "title": "The soup of the poor",
    "author": "Albrecht Anker",
    "date": "1893",
    "additional_info": "Original Title: Die Armensuppe\nStyle: Realism\nGenre: genre painting",
    "src": "the-soup-of-the-poor.jpg",
    "width": "1.612903225806452",
    "height": "1"
  },
  {
    "title": "Chrysanthemums and Bamboos",
    "author": "Xu Wei",
    "date": "16th century",
    "additional_info": "Style: Ink and wash painting\nGenre: bird-and-flower painting",
    "src": "chrysanthemums-and-bamboos.jpg",
    "width": "1",
    "height": "2.090592334494774"
  },
  {
    "title": "Reading",
    "author": "Nicolae Vermont",
    "date": "1919",
    "additional_info": "Style: Impressionism, Realism\nGenre: genre painting",
    "src": "reading.jpg",
    "width": "1",
    "height": "1.279317697228145"
  },
  {
    "title": "Autumn in Bakony",
    "author": "Istvan Nagy",
    "date": "1927",
    "additional_info": "Style: Post-Impressionism\nGenre: landscape",
    "src": "autumn-in-bakony.jpg",
    "width": "1.311188811188811",
    "height": "1"
  },
  {
    "title": "Micoc and Tootac",
    "author": "John Russell",
    "date": "1769",
    "additional_info": "Style: Rococo\nGenre: portrait",
    "src": "micoc-and-tootac.jpg",
    "width": "1",
    "height": "1.239669421487603"
  },
  {
    "title": "March",
    "author": "Isaac Levitan",
    "date": "1895; Russian Federation",
    "additional_info": "Original Title: Март\nStyle: Realism\nGenre: landscape\nMedia: oil, canvas\nLocation: Tretyakov Gallery, Moscow, Russia\nDimensions: 60 x 75 cm",
    "src": "march.jpg",
    "width": "1.22",
    "height": "1"
  },
  {
    "title": "Baikō in the role of Ibara",
    "author": "Natori Shunsen",
    "date": "1915",
    "additional_info": "Style: Shin-hanga\nGenre: yakusha-e",
    "src": "baiko-in-the-role-of-ibara.jpg",
    "width": "1",
    "height": "1.591511936339523"
  },
  {
    "title": "View of Langelinie (untitled verso?)",
    "author": "Edvard Weie",
    "date": "c.1924",
    "additional_info": "Style: Post-Impressionism\nGenre: abstract\nMedia: oil",
    "src": "view-of-langelinie-untitled-verso.jpg",
    "width": "1.043333333333333",
    "height": "1"
  },
  {
    "title": "The Bacchanal of the Andrians",
    "author": "Titian",
    "date": "1523 - 1524",
    "additional_info": "Style: High Renaissance\nSeries: Mythological paintings (poesie) for Philip II (1553-1562)\nGenre: mythological painting\nMedia: oil, canvas\nLocation: Museo del Prado, Madrid, Spain\nDimensions: 175 x 193 cm",
    "src": "the-bacchanal-of-the-andrians.jpg",
    "width": "1.105",
    "height": "1"
  },
  {
    "title": "Still Life With Watermelons",
    "author": "Constantin Stahi",
    "date": "1912",
    "additional_info": "Style: Realism\nGenre: still life",
    "src": "still-life-with-watermelons.jpg",
    "width": "1.35623869801085",
    "height": "1"
  },
  {
    "title": "Self Portrait with a Palette",
    "author": "Edouard Manet",
    "date": "1879; Paris, France ",
    "additional_info": "Style: Impressionism\nGenre: self-portrait\nMedia: oil, canvas\nLocation: Steven A. Cohen Collection, Greenwich, CT, US\nDimensions: 83 x 67 cm",
    "src": "self-portrait-with-a-palette.jpg",
    "width": "1",
    "height": "1.221995926680244"
  }
];

function drawImages() {
  document.getElementById("button").setAttribute("position", "0 0.38 -2.1")
  setTimeout(function() {
    document.getElementById("button").setAttribute("position", "0 0.4 -2.1")
  }, 200);

  const n = images.length;
  let imagesToShow = [];

  while (imagesToShow.length < 4) {
    let randomIndex = Math.floor(Math.random() * n);
    if (!imagesToShow.includes(randomIndex)) {
      imagesToShow.push(randomIndex);
    }
  }

  for (let i = 1; i <= 4; i++) {

    moreInfoClose(i);

    const image = images[imagesToShow[i - 1]];
    let imageElement = document.getElementById("img" + i);
    imageElement.parentNode.removeChild(imageElement);

    let newImageElement = document.createElement("a-image");
    newImageElement.setAttribute("id", "img" + i);

    if (i == 1) {
      newImageElement.setAttribute("position", "-3.5 2 -8.9");
    } else if (i == 2) {
      newImageElement.setAttribute("position", "-1 2 -8.9");
    } else if (i == 3) {
      newImageElement.setAttribute("position", "1.5 2 -8.9");
    } else if (i == 4) {
      newImageElement.setAttribute("position", "4 2 -8.9");
    }


    const titleElement = document.getElementById("img" + i + "title");
    const authorElement = document.getElementById("img" + i + "author");
    const dateElement = document.getElementById("img" + i + "date");

    newImageElement.setAttribute("src", "img/" + image.src);
    newImageElement.setAttribute("width", image.width);
    newImageElement.setAttribute("height", image.height);
    newImageElement.setAttribute("onclick", "moreInfo(" + i + ")")

    titleElement.setAttribute("value", image.title);
    authorElement.setAttribute("value", image.author);
    dateElement.setAttribute("value", image.date);

    document.querySelector('a-scene').appendChild(newImageElement);
  }
}

function moreInfo(imageElementIndex) {
  var src = document.getElementById("img" + imageElementIndex).getAttribute("src");

  if (src == "") {
    return;
  }

  // Remove "img/" part from src variable
  src = src.substring(4);

  const image = images.find(img => img.src === src);

  // If camera's distance to object is less than 3.5
  const camera = document.querySelector('a-camera');
  const object = document.getElementById("img" + imageElementIndex);
  const distance = camera.object3D.position.distanceTo(object.object3D.position);

  let moreInfoOpen = object.getAttribute("moreInfo");
  if (moreInfo && moreInfo == "open") {
    return;
  }

  if (!image.additional_info || image.additional_info == "") {
    return;
  }

  // if (distance < 3.5) {

  object.setAttribute("moreInfo", "open")

  let moreInfoElement = document.createElement("a-plane");
  let moreInfoText = document.createElement("a-text");
  let moreInfoCloseText = document.createElement("a-text");

  moreInfoElement.setAttribute("id", "moreInfoElement" + imageElementIndex);
  moreInfoText.setAttribute("id", "moreInfoText" + imageElementIndex);
  moreInfoCloseText.setAttribute("id", "moreInfoCloseText" + imageElementIndex);
  let objectPosition = object.object3D.position;
  moreInfoElement.setAttribute("position", `${objectPosition.x} ${objectPosition.y} ${objectPosition.z + 0.1}`);
  moreInfoText.setAttribute("position", `${objectPosition.x - 0.9} ${objectPosition.y + 1.2} ${objectPosition.z + 0.13}`);
  moreInfoCloseText.setAttribute("position", `${objectPosition.x - 0.9} ${objectPosition.y - 1.2} ${objectPosition.z + 0.13}`);
  moreInfoElement.setAttribute("width", "2");
  moreInfoElement.setAttribute("height", "3");
  moreInfoElement.setAttribute("color", "black");

  moreInfoText.setAttribute("value", image.additional_info);
  moreInfoText.setAttribute("width", "2");

  moreInfoCloseText.setAttribute("value", "Click to close");
  moreInfoCloseText.setAttribute("color", "red")

  document.querySelector('a-scene').appendChild(moreInfoElement);
  document.querySelector('a-scene').appendChild(moreInfoText);
  document.querySelector('a-scene').appendChild(moreInfoCloseText);

  moreInfoElement.setAttribute("onclick", "moreInfoClose(" + imageElementIndex + ")")
  // }
}

function moreInfoClose(imageElementIndex) {
  var moreInfoElement = document.getElementById("moreInfoElement" + imageElementIndex);
  var moreInfoText = document.getElementById("moreInfoText" + imageElementIndex);
  var moreInfoCloseText = document.getElementById("moreInfoCloseText" + imageElementIndex);

  if (!moreInfoElement || !moreInfoText || !moreInfoCloseText) {
    return;
  }

  moreInfoElement.parentNode.removeChild(moreInfoElement);
  moreInfoText.parentNode.removeChild(moreInfoText);
  moreInfoCloseText.parentNode.removeChild(moreInfoCloseText);

  moreInfoElement.removeAttribute("moreInfo");
}