const productList = {
  products: [
    {
      title: 'A pillow',
      imageUrl:
        'https://www.mattressclarity.com/wp-content/uploads/2017/11/Brooklinen-mid-plush-down-pillow-review-side.jpg',
      price: 19.99,
      description: 'A soft pillow!',
    },
    {
      title: 'A carpet',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNrInfTR2UwrPvYTUmOl0-bbarGsyT5ZHrg&usqp=CAU',
      price: 89.99,
      description: 'A carpet which you might like - or not.',
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${prod.imageUrl}" alt="${prod.title}" >
            <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>/$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
          </div>
          `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
