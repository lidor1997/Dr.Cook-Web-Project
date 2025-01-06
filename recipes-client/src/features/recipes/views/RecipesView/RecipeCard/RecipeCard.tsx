import { useNavigate } from "react-router-dom";
import { RecipeType } from "../../../models";

type RecipeCardProps = {
  recipe: RecipeType;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();

  const handleNavigateToRecipe = () => {
    navigate(`/recipes/${recipe._id}`);
  };

  return (
    <div className="flex justify-center pt-4 sm:pt-6 md:pt-10">
      <div className="dark:bg-[#2A3236] dark:border-white flex flex-col sm:flex-row w-full border border-amber-800 rounded bg-[#FFF6E0] shadow-xl">
        {/* Image Container */}
        <img
          className="w-full lg:h-[250px] sm:w-[200px] h-[340px] sm:h-[100%] object-cover"
          src={recipe.image}
          alt={recipe.name}
        />

        {/* Content Container */}
        <div className="flex flex-col w-full p-4 sm:p-6">
          <h2 className="dark:text-white text-lg sm:text-xl font-bold text-center">
            {recipe.name}
          </h2>
          <p className="dark:text-white text-gray-700 mt-2 text-base sm:text-lg mb-3 sm:mb-5 font-ptSerif">
            {recipe.description}
          </p>

          {/* Icons and Info */}
          <div className="space-y-2 sm:space-y-3">
            <span className="flex items-center">
              <img
                className="dark:hidden lg:h-10 lg:w-12 md:h-10 md:w-12 h-8 sm:pl-5 sm:h-10 w-8 sm:w-12 pl-2 sm:pb-3"
                src="/images/DarkClock.png"
                alt="DarkClock"
              />
              <img
                className="hidden dark:block lg:h-10 lg:w-12 md:h-10 md:w-12 h-8 sm:pl-5 sm:h-10 w-8 sm:w-12 pl-2 sm:pb-3"
                src="/images/LightClock.png"
                alt="LightClock"
              />
              <span className="dark:text-white ml-2 sm:ml-4 text-base sm:text-lg font-bold">
                {recipe.cookTime}
              </span>
            </span>
          </div>

          {/* Button Container */}
          <div className="w-full mt-4 sm:mt-auto sm:h-16 relative">
            <button
              id={recipe._id}
              data-recipe={recipe._id}
              onClick={handleNavigateToRecipe}
              className="dark:bg-gray-900 dark:text-white dark:border-white w-full sm:w-40 h-10 rounded-full border border-amber-800 text-amber-800 bg-gray-100 sm:absolute sm:bottom-5 sm:right-5"
            >
              To The Full Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
