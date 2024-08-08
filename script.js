function showRecipe(dessert) {
    const recipeDetails = document.getElementById('recipe-details');
    const recipeTitle = document.getElementById('recipe-title');
    const recipeDescription = document.getElementById('recipe-description');

    let title = '';
    let description = '';

    switch(dessert) {
        case 'chocolate-cake':
            title = 'Chocolate Cake Recipe';
            description = 'Ingredients: Flour, Cocoa powder, Sugar, Eggs, Butter, Baking powder, Milk, Vanilla extract. Instructions: Mix dry ingredients, cream butter and sugar, add eggs and vanilla, combine with dry ingredients, bake at 350°F for 30-35 minutes.';
            break;
        case 'strawberry-cheesecake':
            title = 'Strawberry Cheesecake Recipe';
            description = 'Ingredients: Cream cheese, Sugar, Eggs, Sour cream, Strawberries, Graham crackers, Butter. Instructions: Prepare crust, mix filling ingredients, pour over crust, bake at 325°F for 60 minutes, chill before serving.';
            break;
        case 'tiramisu':
            title = 'Tiramisu Recipe';
            description = 'Ingredients: Mascarpone cheese, Eggs, Sugar, Coffee, Ladyfingers, Cocoa powder. Instructions: Mix mascarpone with egg yolks and sugar, layer ladyfingers dipped in coffee, top with mascarpone mixture, chill, dust with cocoa powder before serving.';
            break;
        case 'macarons':
            title = 'Macarons Recipe';
            description = 'Ingredients: Almond flour, Powdered sugar, Egg whites, Granulated sugar, Food coloring. Instructions: Beat egg whites until stiff peaks, fold in almond flour and powdered sugar, pipe onto baking sheet, bake at 300°F for 15-20 minutes, let cool before filling.';
            break;
        case 'strawberry-pie':
            title = 'Strawberry Pie Recipe';
            description = 'Ingredients: Fresh strawberries, Sugar, Cornstarch, Lemon juice, Pie crust. Instructions: Prepare filling, pour into pie crust, bake at 375°F for 45-50 minutes, let cool before serving.';
            break;
        case 'chocolate-mousse':
            title = 'Chocolate Mousse Recipe';
            description = 'Ingredients: Dark chocolate, Eggs, Sugar, Heavy cream. Instructions: Melt chocolate, mix with egg yolks and sugar, fold in whipped cream, chill before serving.';
            break;
        default:
            title = 'Recipe Details';
            description = 'Click on a dessert to see the recipe.';
            break;
    }

    recipeTitle.textContent = title;
    recipeDescription.textContent = description;
}
