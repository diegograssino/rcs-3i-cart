const PRODUCTS = [
  {
    id: 'product1',
    name: 'CR90 corvette',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_credits: '3500000',
    image: '../img/cr90corvette.jpg',
  },
  {
    id: 'product2',
    name: 'Star Destroyer',
    manufacturer: 'Kuat Drive Yards',
    cost_in_credits: '150000000',
    image: '../img/stardestroyer.jpg',
  },
  {
    id: 'product3',
    name: 'Sentinel-class landing craft',
    manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
    cost_in_credits: '240000',
    image: '../img/sentinel.jpg',
  },
];

// 1: Controlamos los id necesarios e inicilizamos todo
const catalogue = document.getElementById('catalogue');
const cart = document.getElementById('cart');
const cartContent = [];

// 2: Inyectamos el código HTML en el catalogo
PRODUCTS.forEach(p => {
  // Creamos las cards

  const card = document.createElement('div');
  card.className = 'col';
  // <div class="card">
  //   <img src="..." class="card-img-top" alt="...">
  //   <div class="card-body">
  //     <h5 class="card-title">Card title</h5>
  //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //   </div>
  // </div>
  card.innerHTML = `<div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">${p.name} </h5>
			<p class="card-text">${p.manufacturer}</p>
    </div>
		<div class="card-footer bg-white border-0">
		  Price: ${p.cost_in_credits}
		</div>
    <div class="card-footer">
    	<button id="${p.id}" class="btn btn-success">Buy</button>
		</div>
  </div>`;
  catalogue.appendChild(card);

  const button = document.getElementById(p.id).addEventListener('click', () => buy(p));
});

// 3: Hacemos función de buy

function buy(product) {
  product.q = 1;
  cartContent.push(product);
  console.log(cartContent);
}
