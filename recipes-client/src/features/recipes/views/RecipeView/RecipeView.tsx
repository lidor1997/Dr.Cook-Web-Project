import React, { useEffect, useState } from "react";
import { RecipeType } from "../../models";
import { getRecipe } from "../../api";
import { useLocation } from "react-router-dom";
import { routes } from "../../../../routes";

export const RecipeView = () => {
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  const { pathname } = useLocation();

  useEffect(() => {
    const recipeId = pathname.split(routes.recipes.recipes)[1];

    const getRecipeData = async () => {
      try {
        const recipeResponse = await getRecipe({ id: recipeId });
        setRecipe(recipeResponse);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipeData();
  }, [pathname]);

  const handleRating = (rating: number) => {
    setRating(rating);
  };

  if (!recipe) return null;

  return (
    <div>
      <div className="container mx-auto px-4 py-4 sm:py-8 max-w-4xl">
        {/* <!-- Recipe Header --> */}
        <div className="mb-6 text-center">
          <h1 className="dark:text-white text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-amber-800">
            {recipe.name}
          </h1>
          <p className="dark:text-white text-base sm:text-lg mb-4 px-2">
            {recipe.description}
          </p>

          {/* <!-- Time and Servings Info --> */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <img
                className="dark:hidden h-5 sm:h-6 w-9 sm:w-11 pl-3 sm:pl-5"
                src="/images/DarkClock.png"
                alt="DarkClock"
              />
              <img
                className="hidden dark:block h-5 sm:h-6 w-9 sm:w-11 pl-3 sm:pl-5"
                src="/images/LightClock.png"
                alt="LightClock"
              />
              <span className="dark:text-white text-sm">
                Cook time: {recipe.cookTime}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="dark:hidden h-5 sm:h-6 w-9 sm:w-11 pl-3 sm:pl-5"
                src="/images/WhiteServing.png"
                alt="White Serving"
              />
              <img
                className="hidden dark:block h-5 sm:h-6 w-9 sm:w-11 pl-3 sm:pl-5"
                src="/images/BlackServing.png"
                alt="Black Serving"
              />
              <span className="dark:text-white text-sm">
                Servings: {recipe.servings}
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="dark:text-white text-sm">
              By{" "}
              <span className="dark:text-slate-400 text-amber-800">
                {recipe.by}
              </span>
            </span>
            <span className="dark:text-slate-400 ml-2 text-amber-800">
              ★ {recipe.rating}
            </span>
          </div>
        </div>

        {/* <!-- Recipe Image and nutrients --> */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-start sm:space-x-6 space-y-4 sm:space-y-0">
          <div className="w-full sm:w-2/3">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="dark:bg-[#2A3236] bg-[#FFF6E0] border border-amber-800 dark:border-white p-4 sm:p-6 rounded-lg w-full sm:w-1/3">
            <h2 className="dark:text-slate-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-800">
              Nutrition
            </h2>
            <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg">
              <li className="dark:text-white">
                <strong className="dark:text-white">Calories: </strong>
                {recipe.nutrients.calories}
              </li>
              <li className="dark:text-white">
                <strong className="dark:text-white">Protein: </strong>
                {recipe.nutrients.protein}g
              </li>
              <li className="dark:text-white">
                <strong className="dark:text-white">Fat: </strong>
                {recipe.nutrients.fat}g
              </li>
              <li className="dark:text-white">
                <strong className="dark:text-white">Carbs: </strong>
                {recipe.nutrients.carbs}g
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Ingredients --> */}
        <div className="dark:bg-[#2A3236] bg-[#FFF6E0] border border-amber-800 dark:border-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
          <h2 className="dark:text-slate-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-800">
            Ingredients
          </h2>
          <ul className="dark:text-white space-y-2">
            {recipe.ingredients.map((ing) => (
              <li
                key={ing.name + ing.value}
                className="flex text-base sm:text-lg justify-between"
              >
                <span>{ing.name}</span>
                <span>{ing.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- Instructions --> */}
        <div className="dark:bg-[#2A3236] bg-[#FFF6E0] border border-amber-800 dark:border-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
          <h2 className="dark:text-slate-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-800">
            Instructions
          </h2>
          <ol className="dark:text-white space-y-3 sm:space-y-4">
            {recipe.instructions.map((inst, index) => (
              <li
                key={inst + index}
                className="flex gap-3 sm:gap-4 text-base sm:text-lg"
              >
                <span className="dark:text-slate-400 font-bold text-amber-800">
                  {index + 1}.
                </span>
                <span>{inst}</span>
              </li>
            ))}
          </ol>
        </div>
        {/* <!-- User Rating --> */}
        <div className="p-4 sm:p-6 text-center">
          <h2 className="dark:text-slate-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-800">
            Rate this Recipe
          </h2>
          <div className="flex justify-center items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="dark:text-white text-2xl sm:text-3xl cursor-pointer"
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        {/* <!-- save space to display the user the rating he voted for the recipe --> */}
        {rating && (
          <div
            id="rating-feedback"
            className="dark:text-white text-amber-800 text-lg sm:text-xl font-bold text-center mb-4 sm:mb-5"
          >
            Thank you for rating {rating} stars!
          </div>
        )}
      </div>
    </div>
  );
};
