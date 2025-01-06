import { axios } from "../../../../services/axios";
import { RecipeType } from "../../models";

export type GetRecipeResponse = RecipeType;

export async function getRecipe({
  id,
}: {
  id: string;
}): Promise<GetRecipeResponse> {
  const response = await axios.get<GetRecipeResponse>(`/recipes/${id}`);

  return response.data;
}
