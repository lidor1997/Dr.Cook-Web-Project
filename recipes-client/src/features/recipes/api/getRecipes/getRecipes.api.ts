import { axios } from "../../../../services/axios";
import { RecipeType } from "../../models";

export type GetRecipesResponse = RecipeType[];

export async function getRecipes(): Promise<GetRecipesResponse> {
  const response = await axios.get<GetRecipesResponse>(`/recipes`);

  return response.data;
}
