const MOCKED_DATA = [
  {
    name: 'CR90 corvette',
    model: 'CR90 corvette',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_credits: '3500000',
    length: '150',
    max_atmosphering_speed: '950',
    crew: '30-165',
    passengers: '600',
    cargo_capacity: '3000000',
    consumables: '1 year',
    hyperdrive_rating: '2.0',
    MGLT: '60',
    starship_class: 'corvette',
    pilots: [],
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    created: '2014-12-10T14:20:33.369000Z',
    edited: '2014-12-20T21:23:49.867000Z',
    url: 'https://swapi.dev/api/starships/2/',
    image: '../img/cr90corvette.jpg',
  },
  {
    name: 'Star Destroyer',
    model: 'Imperial I-class Star Destroyer',
    manufacturer: 'Kuat Drive Yards',
    cost_in_credits: '150000000',
    length: '1,600',
    max_atmosphering_speed: '975',
    crew: '47,060',
    passengers: 'n/a',
    cargo_capacity: '36000000',
    consumables: '2 years',
    hyperdrive_rating: '2.0',
    MGLT: '60',
    starship_class: 'Star Destroyer',
    pilots: [],
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
    ],
    created: '2014-12-10T15:08:19.848000Z',
    edited: '2014-12-20T21:23:49.870000Z',
    url: 'https://swapi.dev/api/starships/3/',
    image: '../img/stardestroyer.jpg',
  },
  {
    name: 'Sentinel-class landing craft',
    model: 'Sentinel-class landing craft',
    manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
    cost_in_credits: '240000',
    length: '38',
    max_atmosphering_speed: '1000',
    crew: '5',
    passengers: '75',
    cargo_capacity: '180000',
    consumables: '1 month',
    hyperdrive_rating: '1.0',
    MGLT: '70',
    starship_class: 'landing craft',
    pilots: [],
    films: ['https://swapi.dev/api/films/1/'],
    created: '2014-12-10T15:48:00.586000Z',
    edited: '2014-12-20T21:23:49.873000Z',
    url: 'https://swapi.dev/api/starships/5/',
    image: '../img/sentinel.jpg',
  },
];

// console.log(MOCKED_DATA);

// <div class="card">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//   </div>
// </div>

// Controlo el id catalogue para llenarlo con cards

function createCard(data, containerId, needsButton) {
  let cardContainer = document.getElementById(containerId);

  data.map(d => {
    // Creación de card de boostrap con JS
    let card = document.createElement('div');
    card.className = 'col';

    let cardContent = document.createElement('div');
    card.className = 'card h-100 my-0 rounded-0';

    let cardImg = document.createElement('img');
    cardImg.className = 'card-img-top';
    cardImg.src = d.image;
    cardImg.height = '100';
    cardImg.width = '100';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerHTML = d.name;

    let cardPassengers = document.createElement('p');
    cardPassengers.className = 'card-text';
    cardPassengers.innerHTML = `Passengers: ${d.passengers}`;

    let cardCargo = document.createElement('p');
    cardCargo.className = 'card-text';
    cardCargo.innerHTML = `Cargo Capacity: ${d.cargo_capacity}`;

    let cardPrice = document.createElement('p');
    cardPrice.className = 'card-text';
    cardPrice.innerHTML = `Cost in Credits: ${d.cost_in_credits}`;

    let cardButton = document.createElement('button');
    cardButton.className = 'btn btn-success';
    cardButton.type = 'button';
    cardButton.innerHTML = 'Buy';
    cardButton.onclick = function () {
      cart.push(d);
      createCard([d], 'cart', false);
    };

    cardBody.appendChild(cardImg);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardPassengers);
    cardBody.appendChild(cardCargo);
    cardBody.appendChild(cardPrice);
    needsButton && cardBody.appendChild(cardButton);
    cardContent.appendChild(cardBody);
    card.appendChild(cardContent);

    cardContainer.appendChild(card);
  });
}

let cart = [];

createCard(MOCKED_DATA, 'catalogue', true);
