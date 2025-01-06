export interface RecipeType {
  _id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  cookTime: number;
  servings: number;
  by: string;
  rating: number;
  nutrients: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  ingredients: { name: string; value: string }[];
  instructions: string[];
}
