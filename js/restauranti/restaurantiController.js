const MODEL = Symbol('RestaurantiModel');
const VIEW = Symbol('RestaurantiView');
const LOAD_MODEL_OBJECT = Symbol('Load Manager Objects');

class RestaurantiController {
    constructor(model, view, app) {
        this[MODEL] = model;
        this[VIEW] = view;

        this.onInit();     
        
        this[VIEW].bindInit(this.handleInit); // Enlaza el handler con la vista
        this[VIEW].bindRestaurant(this.handleRestaurantFoot);
        this[VIEW].bindCategory(this.handleCategoryFoot);
        this[VIEW].bindAllergen(this.handleAllergenFoot);
        this[VIEW].bindMenu(this.handleMenuFoot);
        this[VIEW].bindCategoryLinks(this.handleCategoryClick);
        this[VIEW].bindCategoryNav(this.handleCategoryClick);
        this[VIEW].bindAllergenNav(this.handleAllergenClick);
        this[VIEW].bindMenuNav(this.handleMenuClick);
        this[VIEW].bindRestaurantNav(this.handleRestaurantClick);
    }

    onInit = () => {
        this[VIEW].showCategories();
    }

    handleInit = () => {
        this.onInit();
    }
   
    handleCategoryClick = (categoryName) => {
        try {
            let foundCategory = null;

            for (const categoryObj of this[MODEL].categories) {
                const category = categoryObj.category;
                if (category.name === categoryName) {
                    foundCategory = category;
                    break;
                }
            }
    
            if (foundCategory) {
                const dishesInCategory = this[MODEL].getDishesInCategory(foundCategory);
                const dishesArray = Array.from(dishesInCategory);

                const allergens = this.getAlergenosDePlatos(dishesArray);
                
                this[VIEW].showDishes(dishesArray, categoryName, allergens);
            } else {
                console.error('La categoría no fue encontrada:', categoryName);
            }
        } catch (error) {
            console.error('Error al obtener los platos de la categoría:', error);
        }
    }

    handleAllergenClick = (allergenName) => {
        try {
            let foundAllergen = null;

            for (const allergenObj of this[MODEL].allergens) {
                const allergen = allergenObj.allergen;
                if (allergen.name === allergenName) {
                    foundAllergen = allergen;
                    break;
                }
            }
    
            if (foundAllergen) {
                const dishesWithAllergen = this[MODEL].getDishesWithAllergen(foundAllergen);
                const dishesArray = Array.from(dishesWithAllergen);

                const allergens = this.getAlergenosDePlatos(dishesArray);
                
                this[VIEW].showDishes(dishesArray, allergenName, allergens);
            } else {
                console.error('El alergeno no fue encontrado:', allergenName);
            }
        } catch (error) {
            console.error('Error al obtener los platos con alergenos:', error);
        }
    }

    handleMenuClick = (menuName) => {
        try {
            let foundMenu = null;

            for (const menuObj of this[MODEL].menus) {
                const menu = menuObj.menu;
                if (menu.name === menuName) {
                    foundMenu = menu;
                    break;
                }
            }
    
            if (foundMenu) {
                const dishesInMenu = this[MODEL].getDishesInMenu(foundMenu);
                const dishesArray = Array.from(dishesInMenu);

                const allergens = this.getAlergenosDePlatos(dishesArray);
                
                this[VIEW].showDishes(dishesArray, menuName, allergens);
            } else {
                console.error('El menu no fue encontrado:', menuName);
            }
        } catch (error) {
            console.error('Error al obtener los platos del menu:', error);
        }
    }

    handleRestaurantClick = (restaurantName) => {
        try {
            let foundRestaurant = null;

            for (const restaurantObj of this[MODEL].restaurants) {
                const restaurant = restaurantObj.restaurant;
                if (restaurant.name === restaurantName) {
                    foundRestaurant = restaurant;
                    break;
                }
            }
            
            this[VIEW].showRestauranti(foundRestaurant);
        } catch (error) {
            console.error('Error al obtener los restaurantes:', error);
        }
    }

    handleRestaurantFoot = () => {
        const restaurantsIterator = this[MODEL].restaurants;
        const restaurants = Array.from(restaurantsIterator);
        this[VIEW].showRestaurants(restaurants);
    }

    handleCategoryFoot = () => {
        const categoriesIterator = this[MODEL].categories;
        const categories = Array.from(categoriesIterator);
        this[VIEW].showCategoriesFoot(categories);
    } 

    handleAllergenFoot = () => {
        const allergensIterator = this[MODEL].allergens;
        const allergens = Array.from(allergensIterator);
        this[VIEW].showAllergensFoot(allergens);
    }

    handleMenuFoot = () => {
        const menusIterator = this[MODEL].menus;
        const menus = Array.from(menusIterator);
        this[VIEW].showMenusFoot(menus);
    }

    getAlergenosDePlatos = (dishesArray) => {
        const allergens = [];
        for (const dish of dishesArray) {
            for (const allergenObj of this[MODEL].allergens) {
                const allergen = allergenObj.allergen;
                if (allergenObj.dishes.includes(dish)) {
                    allergens.push(allergen);
                }
            }
        }
        return allergens;
    }
    
    onLoad = (dishes, categories, allergens, menus, restaurants) => {
        // Añadir platos al modelo
       for (const dish of dishes) {
            this[MODEL].addDish(dish);
            this[VIEW].showPlatos(dish); // Muestra todos los platos
        }
    
        // Añadir categorías al modelo
       for (const category of categories) {
            this[MODEL].addCategory(category);
            this[VIEW].showCategory(category);
        }
   
        // Añadir alérgenos al modelo
        for (const allergen of allergens) {
            this[MODEL].addAllergen(allergen);
            this[VIEW].showAllergen(allergen);
        }
    
        // Añadir menús al modelo
        for (const menu of menus) {
            this[MODEL].addMenu(menu);
            this[VIEW].showMenu(menu);
        }
    
        // Añadir restaurantes al modelo
        for (const restaurant of restaurants) {
            this[MODEL].addRestaurant(restaurant);
            this[VIEW].showRestaurant(restaurant);
        }

        for (const dish of dishes) {
            if (dish.name === 'Guiso de alubias' || dish.name === 'Guiso de garbanzos' || dish.name === 'Sopa de gambas' || dish.name === 'Ajoblanco') {
                this[MODEL].assignCategoryToDish(categories[0], dish);
            } else if (dish.name === 'Mandu al vapor' || dish.name === 'Espagueti con mollejas' || dish.name === 'Macarrones con berengena' || dish.name === 'Lasagna') {
                this[MODEL].assignCategoryToDish(categories[1], dish);
            } else if (dish.name === 'Tarta de queso' || dish.name === 'Pastel de moca' || dish.name === 'Tiramisu' || dish.name === 'Soufle de chocolate') {
                this[MODEL].assignCategoryToDish(categories[2], dish);
            }        
        } 
        
        for (const dish of dishes) {
            if (dish.name === 'Macarrones con berengena' || dish.name === 'Lasagna' || dish.name === 'Soufle de chocolate' || dish.name === 'Pastel de moca') {
                this[MODEL].assignAllergenToDish(allergens[0], dish);
            }else if (dish.name === 'Ajoblanco' || dish.name === 'Lasagna' || dish.name === 'Tiramisu' || dish.name === 'Mandu al vapor') {
                this[MODEL].assignAllergenToDish(allergens[1], dish);
            }else if (dish.name === 'Tarta de queso' || dish.name === 'Lasagna' || dish.name === 'Soufle de chocolate' || dish.name === 'Pastel de moca') {
                this[MODEL].assignAllergenToDish(allergens[2], dish);
            }else if (dish.name === 'Sopa de gambas' || dish.name === 'Macarrones con berengena') {
                this[MODEL].assignAllergenToDish(allergens[3], dish);
            }
        }
        
        for (const dish of dishes) {
            if (dish.name === 'Guiso de alubias' || dish.name === 'Mandu al vapor' || dish.name === 'Pastel de moca') {
                this[MODEL].assignDishToMenu(menus[0], dish);
            }else if (dish.name === 'Sopa de gambas' || dish.name === 'Macarrones con berengena' || dish.name === 'Tiramisu') {
                this[MODEL].assignDishToMenu(menus[1], dish);
            }else if (dish.name === 'Guiso de garbanzos' || dish.name === 'Lasagna' || dish.name ==='Soufle de chocolate') {
                this[MODEL].assignDishToMenu(menus[2], dish);
            }
        }

        for (const categoryObj of this[MODEL].categories) {
            const category = categoryObj.category;
            const categoryDishes = categoryObj.dishes;
        
            console.log(`Platos en la categoría ${category.name}:`);
            
            for (const dish of categoryDishes) {
                console.log(dish.name);
            }
        }
    };      
}

export default RestaurantiController;
