import { useEffect, useState } from "react";
import { getRecipes } from "../../api";
import { RecipeType } from "../../models";
import { RecipeCard } from "./RecipeCard";
import { Search } from "./Search";

export const RecipesView = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const getRecipesData = async () => {
      try {
        const recipesResponse = await getRecipes();
        setRecipes(recipesResponse);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipesData();
  }, []);

  const categories = (() => {
    const categoriesArray: string[] = [];
    recipes.forEach((recipe) => {
      if (categoriesArray.indexOf(recipe.category) === -1) {
        categoriesArray.push(recipe.category);
      }
    });
    return categoriesArray;
  })();

  // Filter recipes based on search value and selected category
  const filteredRecipes = recipes.filter((recipe) => {
    if (selectedCategory && recipe.category !== selectedCategory) {
      return false;
    }

    if (
      searchValue &&
      !recipe.name.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="max-w-[1000px] m-auto sm:px-6 h-100 pb-10">
      <div className="h-25 w-full pt-8">
        {/* <!-- use the imported font for h1--> */}
        <h1 className="sm:w-f text-center text-3xl font-pacifico light:text-[#202124] dark:text-white pt-5">
          Our Recommended Recipes
        </h1>
      </div>

      <Search
        categories={categories}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {filteredRecipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};
