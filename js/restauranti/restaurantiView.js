class RestaurantiView {
    constructor(){
        this.main = document.getElementsByTagName('main')[0];
        this.categories = document.getElementById('categories');
    }
    
    bindInit(handler) { 
        document.getElementById('logo').addEventListener('click', (event) => { 
            handler();
            this.clearMain();
            event.preventDefault();
            console.log(event.currentTarget);// Referencia al elemento que esta generando el evento          
        });       
    }

    bindCategoryLinks(handler) {
        document.getElementById('link-guisos').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.category);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });  
        document.getElementById('link-pasta').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.category);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });
        document.getElementById('link-postres').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.category);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });
    }

    bindCategoryNav(handler) {
        document.getElementById('link-guisos-nav').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.category);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });  
        document.getElementById('link-pasta-nav').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.category);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });
        document.getElementById('link-postres-nav').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.category);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });
    }

    bindRestaurantNav(handler) {
        document.getElementById('parkLink').addEventListener('click', (event) => {
            handler('Park Restauranti');
            event.preventDefault();
        });  
        document.getElementById('centralLink').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.restaurant);
            event.preventDefault();
        });  
        document.getElementById('squareLink').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.restaurant);
            event.preventDefault();
        });  
    }

    bindAllergenNav(handler) {
        document.getElementById('link-cereales-nav').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.allergen);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });  
        document.getElementById('link-frutos-nav').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.allergen);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });
        document.getElementById('link-lacteos-nav').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.allergen);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });
        document.getElementById('link-mariscos-nav').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.allergen);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });
    }

    bindMenuNav(handler) {
        document.getElementById('link-menu1-nav').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.menu);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });  
        document.getElementById('link-menu2-nav').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.menu);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });
        document.getElementById('link-menu3-nav').addEventListener('click', (event) => {
            handler(event.currentTarget.dataset.menu);   
            event.preventDefault();
            console.log(event.currentTarget);    
        });
    }

    bindRestaurant(handler) {
        document.getElementById('restaurant-foot').addEventListener('click', (event) => {
            handler();   
            event.preventDefault();
            console.log(event.currentTarget);    
        }); 
    }

    bindCategory(handler) {
        document.getElementById('category-foot').addEventListener('click', (event) => {
            handler();   
            event.preventDefault();
            console.log(event.currentTarget);    
        }); 
    }

    bindAllergen(handler) {
        document.getElementById('allergen-foot').addEventListener('click', (event) => {
            handler();   
            event.preventDefault();
            console.log(event.currentTarget);    
        }); 
    }
    
    bindMenu(handler) {
        document.getElementById('menu-foot').addEventListener('click', (event) => {
            handler();   
            event.preventDefault();
            console.log(event.currentTarget);    
        }); 
    }

    showCategories(){
        this.categories.replaceChildren();
        this.categories.insertAdjacentHTML('beforeend', `<div class="container mt-5">    
        <div class="row justify-content-center text-center">
            <div class="col-md-4 mb-4">
                <div class="card shadow">
                  <a href="#" id="link-guisos" data-category="Guisos"><img src="img/sopa-marisco.jpg" class="card-img-top img-categoria" alt="Sopa de marisco"></a>
                    <div class="card-body">
                        <h5 class="card-title">Guisos</h5>
                        <!-- Contenido adicional si es necesario -->
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card shadow">
                  <a href="#" id="link-pasta" data-category="Pasta"><img src="img/pasta.jpg" class="card-img-top img-categoria" alt="Pasta>"></a>
                    <div class="card-body">
                      <h5 class="card-title">Pasta</h5>
                        <!-- Contenido adicional si es necesario -->
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card shadow">
                  <a href="#" id="link-postres" data-category="Postres"><img src="img/postres.jpg" class="card-img-top img-categoria" alt="Postres"></a>
                    <div class="card-body">
                      <h5 class="card-title">Postres</h5>
                        <!-- Contenido adicional si es necesario -->
                    </div>
                </div>
            </div>
        </div>    
      </div> `);
    }

    showDishes(dishes, title, allergens) {
        const tableHTML = `
            <div class="titulo bg-dark bg-gradient text-white">
                <h3 class="">${title}</h3>
            </div>
            <table id="platos-table" class="table table-striped align-middle">
                <thead>
                    <tr>
                        <th>Plato</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Ingredientes</th>
                        <th>Alergenos</th>
                    </tr>
                </thead>
                <tbody>
                    ${dishes.map((dish, index) => `
                        <tr>
                            <td><img src="${dish.image}" alt="${dish.name}" style="max-width: 100px; max-height: 100px;"></td>
                            <td>${dish.name}</td>
                            <td>${dish.description}</td>
                            <td>${dish.ingredients.join(', ')}</td>
                            <td>${allergens[index]}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        this.main.replaceChildren();
        this.main.insertAdjacentHTML('afterbegin', tableHTML);
    }

    showRestauranti(restaurant) {         
        const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Localizacion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>${restaurant.name}</td>
                    <td>${restaurant.location}</td>
                </tr>
            </tbody>
        </table>
        `;
        this.main.replaceChildren();
        this.main.insertAdjacentHTML('afterbegin', tableHTML);  
    }

    showRestaurants(restaurants) {         
        const tableHTML = `
        <div class="titulo bg-dark bg-gradient text-white">
            <h3>Nuestros restaurantes</h3>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Localizacion</th>
                </tr>
            </thead>
            <tbody>
                ${restaurants.map(restaurantObj => `
                <tr>
                    <td>${restaurantObj.restaurant.name}</td>
                    <td>${restaurantObj.restaurant.location}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    this.main.replaceChildren();
    this.main.insertAdjacentHTML('afterbegin', tableHTML);  
    }

    showCategoriesFoot(categories) {
        const tableHTML = `
            <div class="titulo bg-dark bg-gradient text-white">
                <h3>Categorías</h3>
            </div>
            <table id="platos-table" class="table table-striped align-middle">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    ${categories.map(categoryObj => `
                        <tr>
                            <td>${categoryObj.category.name}</td>
                            <td>${categoryObj.category.description}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        this.main.replaceChildren();
        this.main.insertAdjacentHTML('afterbegin', tableHTML);
    }

    showAllergensFoot(allergens) {
        const tableHTML = `
            <div class="titulo bg-dark bg-gradient text-white">
                <h3>Alergenos</h3>
            </div>
            <table id="platos-table" class="table table-striped align-middle">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    ${allergens.map(allergenObj => `
                        <tr>
                            <td>${allergenObj.allergen.name}</td>
                            <td>${allergenObj.allergen.description}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        this.main.replaceChildren();
        this.main.insertAdjacentHTML('afterbegin', tableHTML);
    }

    showMenusFoot(menus) {
        const tableHTML = `
            <div class="titulo bg-dark bg-gradient text-white">
                <h3>Menus</h3>
            </div>
            <table id="platos-table" class="table table-striped align-middle">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    ${menus.map(menuObj => `
                        <tr>
                            <td>${menuObj.menu.name}</td>
                            <td>${menuObj.menu.description}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        this.main.replaceChildren();
        this.main.insertAdjacentHTML('afterbegin', tableHTML);
    }

    showPlatos(dish) {
        console.log(`Plato: ${dish.name}, Description: ${dish.description}`);
    }

    showCategory(category) {
        console.log(`Category: ${category.name}, Description: ${category.description}`);
    }

    showAllergen(allergen) {
        console.log(`Allergen: ${allergen.name}, Description: ${allergen.description}`);
    }

    showMenu(menu) {
        console.log(`Menu: ${menu.name}`);
    }

    showRestaurant(restaurant) {
        console.log(`Restaurant: ${restaurant.name}`);
    }  
    
    clearMain() {
        this.main.innerHTML = ''; // Borra todo el contenido del main
    }   
}

export default RestaurantiView;