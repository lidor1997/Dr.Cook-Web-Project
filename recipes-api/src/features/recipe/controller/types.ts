import { Request } from 'express';

import { RecipeType } from '../models';

export interface CreateRecipesRequestType extends Request {
  body: Omit<RecipeType, '_id'>[];
}

export interface GetRecipeRequestType extends Request {
  params: {
    id: string;
  };
}

export interface UpdateRecipeRequestType extends Request {
  params: {
    id: string;
  };
  body: Partial<Omit<RecipeType, '_id'>>;
}
