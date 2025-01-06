import { Router } from 'express';

import { createRecipes, getRecipe, getRecipes, updateRecipe } from '../controller';

const recipeRouter = Router();

recipeRouter.get('/', getRecipes);
recipeRouter.get('/:id', getRecipe);
recipeRouter.post('/', createRecipes);
recipeRouter.patch('/:id', updateRecipe);

export { recipeRouter };
