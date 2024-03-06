"use strict";

function testRestaurant(){

    // Test clase Dish
    let d1 = new Dish('p1', 'Plato1', ['ing1', 'ing2'], '/fotos/p1.jpg');
	testDish();

    function testDish(){
        try{
            console.log("Plato 1: " + d1.toString());
            let d2 = new Dish('p2', 'Plato2', ['ing2', 'ing1'], '/fotos/p2.jpg');
            console.log("Plato 2: " + d2.toString());
            let d3 = new Dish('', 'Plato3', ['ing3', 'ing2'], '/fotos/p3.jpg');
            console.log("Plato 3: " + d3.toString());
        }catch(error){
            console.log("Error: " + error.toString());
        }
    }

    // Test clase category
    let cat1 = new Category('cat1', 'categoria1');
    testCategory();

    function testCategory(){
        try{
            console.log("Category 1: " + cat1.toString());
            let cat2 = new Category('cat2', 'Categoria2');
            console.log("Category 2: " + cat2.toString());
            let cat3 = new Category('', 'Categoria3');
            console.log("Category 3: " + cat3.toString());
        }catch(error){
            console.log("Error: " + error.toString());
        }
    }

    // Test clase Allergen
    let a1 = new Allergen('A1', 'Alergeno1');
    testAllergen(); 
    
    function testAllergen(){
        try{
            console.log("Alergeno 1: " + a1.toString());
            let a2 = new Allergen('A2', 'Alergeno2');
            console.log("Alergeno 2: " + a2.toString());
            let a3 = new Allergen('', 'Alergeno 3');
            console.log("Alergeno 3: " + a3.toString());
        }catch(error){
            console.log("Error: " + error.toString());
        }
    }

    // Test clase Menu
    let m1 = new Menu('m1', 'Menu1');
    testMenu(); 
   
    function testMenu(){
        try{
            console.log("Menu 1: " + m1.toString());
            let m2 = new Menu('m2', 'Menu 2');
            console.log("Menu 2: " + m2.toString());
            let m3 = new Menu('', 'Menu 3');
            console.log("Menu 3: " + m3.toString());
        }catch(error){
            console.log("Error: " + error.toString());
        }         
    }

    // Test clase Coordinate
    let c1 = new Coordinate(44.4444, -33.1130);
    testCoordinate(); 
    
    function testCoordinate(){
        try {
		console.log("Coordenadas c1: " + c1.toString());
		let c2 = new Coordinate(-900000,580111);
		console.log("Coordenadas c2: " + c2.toString());
        let c3 = new Coordinate(0,0);
		console.log("Coordenadas c3: " + c3.toString());
		} catch(error) {
			console.log("Error: " + error.toString());
		}		
	}
        
    
    // Test clase Restaurant
    let r1 = new Restaurant('r1', 'Retaurante1', new Coordinate(40.7128, -74.0060));
    testRestaurant(); 
    
    function testRestaurant(){
        try {
            console.log("Restaurante 1: " + r1.toString());
            let r2 = new Restaurant('r2', 'restaurante 2', c1);
            console.log("Restaurante 2: " + r2.toString());
            let r3 = new Restaurant();
            console.log("Restaurante 3: " + r3.toString());
            } catch(error) {
                console.log("Error: " + error.toString());
            }
    }
    
    function mostrarDishes(dishes) {
        console.log("Platos: ");
        for (let dis of dishes) {
          console.log("Plato: " + dis.toString());
        }
    }

    function mostrarCategories(categories){
		console.log("Categorías: ");
		for (let cat of categories){
			console.log("Categoría: " + cat.category.toString());
		} 		
	}

    function mostrarAllergens(allergens) {
        console.log("Alergenos: ");
        for (let all of allergens) {
          console.log("Alergeno: " + all.allergen.toString());
        }
    }

    function mostrarMenus(menus) {
        console.log("Menus: ");
        for (let me of menus) {
          console.log("Menu: " + me.menu.toString());
        }
    }    

    function mostrarRestaurants(restaurants) {
        console.log("Restaurantes: ");
        for (let res of restaurants) {
          console.log("Restaurante: " + res.restaurant.toString());
        }
    }    

    function mostrarCategoryDish(){
		for (let cat of manager.categories){
			console.log (cat.category.toString());
            mostrarDishes(manager.getDishesInCategory(cat.category));	
		}
	}
    
    function mostrarAllergenDish(){
		for (let all of manager.allergens){
			console.log (all.allergen.toString());
            mostrarDishes(manager.getDishesWithAllergen(all.allergen));	
		}
	}
    
    function mostrarDishesInMenus() {
        for (let men of manager.menus) {
            console.log(men.menu.toString());
            mostrarDishes(manager.getDishesInMenu(men.menu));

            }
        }
               
	let manager = RestaurantsManager.getInstance();
	manager.name = "Restauranti";
	// Instancia RestaurantsManager
	console.log ("Instancia Restauranti: " + manager.name);
    // Intentamos poner el nombre vacio
    try{
        manager.name = "";
    } catch(error) {
        console.log("Error: " + error.toString());
    }

    // Inicio de test para las funciones del manager
    // Añade nuevos platos 
    let d2 = new Dish('p2', 'Plato2', ['ing2', 'ing1'], '/fotos/p2.jpg');
    let d3 = new Dish('p3', 'Plato3', ['ing3', 'ing2'], '/fotos/p3.jpg');
    let d4 = new Dish('p4', 'Plato4', ['ing4', 'ing3'], '/fotos/p4.jpg');
    // Añade los platos al manager
    manager.addDish(d1);
    manager.addDish(d2);
    manager.addDish(d3);
    manager.addDish(d4); 
    // Muestra las platos
    mostrarDishes(manager.dishes);
    // Intentamos añadir una plato que ya existe
    try{
        manager.addDish(d1);
    } catch(error) {
        console.log("Error: " + error.toString());
    }
    // Borra el plato d2
    manager.removeDish(d2);
    mostrarDishes(manager.dishes);

    let cat2 = new Category('cat2', 'Categoria2');
    let cat3 = new Category('cat3', 'Categoria3');
    let cat4 = new Category('cat4', 'Categoria4');

    manager.addCategory(cat1);
    manager.addCategory(cat2);
    manager.addCategory(cat3);
    manager.addCategory(cat4); 

    mostrarCategories(manager.categories);

    try{
        manager.addCategory(cat1);
    } catch(error) {
        console.log("Error: " + error.toString());
    }
    
    manager.removeCategory(cat2);
    mostrarCategories(manager.categories);

    let a2 = new Allergen('A2', 'Alergeno2');
    let a3 = new Allergen('A3', 'Alergeno3');
    let a4 = new Allergen('A4', 'Alergeno4');

    manager.addAllergen(a1);
    manager.addAllergen(a2);
    manager.addAllergen(a3);
    manager.addAllergen(a4);

    mostrarAllergens(manager.allergens);

    try{
        manager.addAllergen(a1);
    } catch(error) {
        console.log("Error: " + error.toString());
    }
    
    manager.removeAllergen(a2);
    mostrarAllergens(manager.allergens);    

    let m2 = new Menu('m2', 'Menu2');
    let m3 = new Menu('m3', 'Menu3');
    let m4 = new Menu('m4', 'Menu4');

    manager.addMenu(m1);
    manager.addMenu(m2);
    manager.addMenu(m3);
    manager.addMenu(m4);

    mostrarMenus(manager.menus);

    try{
        manager.addMenu(m1);
    } catch(error) {
        console.log("Error: " + error.toString());
    }
    
    manager.removeMenu(m2);
    mostrarMenus(manager.menus);    

    // Crea las coordenadas para pasarselas a los restaurantes
    let c2 = new Coordinate(-900000,580111);
    let c3 = new Coordinate(23456666, 6662235);

    let r2 = new Restaurant('r2', 'restaurante 2', c1);
    let r3 = new Restaurant('r3', 'restaurante 3', c2);
    let r4 = new Restaurant('r4', 'restaurante 4', c3);

    manager.addRestaurant(r1);
    manager.addRestaurant(r2);
    manager.addRestaurant(r3);
    manager.addRestaurant(r4);

    mostrarRestaurants(manager.restaurants);

    try{
        manager.addRestaurant(r1);
    } catch(error) {
        console.log("Error: " + error.toString());
    }
    
    manager.removeRestaurant(r2);
    mostrarRestaurants(manager.restaurants); 
    // Intentamos borrar otra vez el mismo restaurante
    try{
        manager.removeRestaurant(r2);
    } catch(error) {
        console.log("Error: " + error.toString());
    }

    let d5 = new Dish('p5', 'Plato5', ['ing5', 'ing4'], '/fotos/p5.jpg');
    let d6 = new Dish('p6', 'Plato6', ['ing6', 'ing5'], '/fotos/p6.jpg');
    let d7 = new Dish('p7', 'Plato7', ['ing7', 'ing1'], '/fotos/p7.jpg');

    manager.assignCategoryToDish(cat1, d1, d3);
    manager.assignCategoryToDish(cat3, d4);
    manager.assignCategoryToDish(cat4, d5, d6, d7);

    // NO FUNCIONA ASIGNA DOS VECES LA MISMA CATEGORIA
    try {
        manager.assignCategoryToDish(cat1, d1);
    } catch (error) {
        console.error('Error assigning categories to dishes:', error.toString());
    }
    mostrarCategoryDish();

    manager.deassignCategoryToDish(cat1, d1, d3);
    //manager.deassignCategoryToDish(cat4, d5);
    mostrarCategoryDish();

    let a5 = new Allergen('A5', 'Alergeno5');
    let a6 = new Allergen('A6', 'Alergeno6');

    manager.assignAllergenToDish(a1, d1, d3);
    manager.assignAllergenToDish(a3, d3);   
    manager.assignAllergenToDish(a4, d4);
    manager.assignAllergenToDish(a5, d5);
    manager.assignAllergenToDish(a6, d1, d5, d6);
    mostrarAllergenDish();

    manager.deassignAllergenToDish(a1, d3); // ESTE LO BORRA BIEN
    manager.deassignAllergenToDish(a6, d1, d6); // NO BORRA D6
    mostrarAllergenDish();
    
    let m5 = new Menu('m5', 'Menu5');

    manager.assignDishToMenu(m1, d1, d3, d4);
    manager.assignDishToMenu(m3, d4, d5, d6); 
    manager.assignDishToMenu(m5, d6, d7); 
    mostrarDishesInMenus();

    manager.deassignDishToMenu(m1, d1, d3, d4);
    mostrarDishesInMenus();
    manager.changeDishesPositionsInMenu(m3, d4, d5); // ESTE NO FUNIONA
    //mostrarDishesInMenus();

    try{
        const dishes = manager.findDish(d1);
        // Muestra los platos en la consola
        for (const dish of dishes) {
            console.log("El plato 1 es: ", dish.toString());
        }
    }catch(error){
        console.log("Error: " + error.toString());
    } 
 
    try { // NO DEVUELVE EL PLATO QUE EXISTE LANZA UN ERROR
        let newDishCopied = manager.createDish("p1", "platoNuevo1", ["ing1", "ing2"], "/fotos/p1.jpg");
        let newDish = manager.createDish("p8", "platoNuevo8", ["ing1", "ing2"], "/fotos/p8.jpg");
        if (newDish) {
            console.log("Nuevo plato creado:", newDish);
        } else {
            console.log("El plato ya existe en el manager.");
        }
    } catch (error) {
        console.error("Error al crear el plato:", error);
    }
    
    try {
        let nuevaCategoria = manager.createCategory('c5', 'Categoria5');
        //let cat1 = manager.createCategory('cat1', 'Categoria1'); // DEVUELVE ERROR
        console.log("Nueva categoria: ", nuevaCategoria);
    } catch (error) {
        console.error("Error al crear la categoria:", error);
    }
    mostrarCategories(manager.categories);

    const category = cat4; // Reemplaza 'cat4' con la categoría deseada
    const condition = (dish) => dish.category === category;    
    for (let dish of manager.categoryCondition(category, condition)) {
        console.log(dish.toString());
    }

    const conditionD = (dish) => dish.name.includes('1');

    // Obtén el generador y úsalo en un bucle for...of
    const resultGenerator = manager.getDishesWithCondition(conditionD);

    // Iteración sobre los resultados del generador
    for (const dish of resultGenerator) {
        console.log(dish.toString());
    }

    for (let dish of manager.getDishesWithCondition((a) => (a.name === "p7"))){
        console.log(dish.toString());
    }

    console.log("*****findDishes*****");
    for(let dish of manager.findDishes((a) => (a instanceof Dish))){
        console.log(dish.toString());
    }

    console.log("*****FilterFunction ingredients*****");
    for(let dish of manager.findDishes((a) => (a.name === "p8"))){
        console.log(dish);
    }
    

}

    testRestaurant();
