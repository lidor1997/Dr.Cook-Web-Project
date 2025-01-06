import { model, Schema } from 'mongoose';

import { RecipeType } from './RecipeType';

const RecipeSchema = new Schema<RecipeType>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [50, 'Name cannot exceed 50 characters'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      minlength: [2, 'Category must be at least 2 characters long'],
      maxlength: [50, 'Category cannot exceed 50 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [1, 'Description must be at least 10 characters long'],
      maxlength: [200, 'Description cannot exceed 200 characters'],
    },
    cookTime: {
      type: Number,
      required: [true, 'Cook time is required'],
      min: [1, 'Cook time must be at least 1 minute'],
      max: [300, 'Cook time cannot exceed 300 minutes'],
    },
    servings: {
      type: Number,
      required: [true, 'Servings is required'],
      min: [1, 'Servings must be at least 1'],
      max: [20, 'Servings cannot exceed 20'],
    },
    by: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
      minlength: [2, 'Author must be at least 2 characters long'],
      maxlength: [50, 'Author cannot exceed 50 characters'],
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, 'Rating must be at least 0'],
      max: [5, 'Rating cannot exceed 5'],
    },
    nutrients: {
      calories: {
        type: Number,
        required: [true, 'Calories is required'],
        min: [0, 'Calories cannot be negative'],
        max: [5000, 'Calories cannot exceed 5000'],
      },
      protein: {
        type: Number,
        required: [true, 'Protein is required'],
        min: [0, 'Protein cannot be negative'],
        max: [500, 'Protein cannot exceed 500'],
      },
      fat: {
        type: Number,
        required: [true, 'Fat is required'],
        min: [0, 'Fat cannot be negative'],
        max: [500, 'Fat cannot exceed 500'],
      },
      carbs: {
        type: Number,
        required: [true, 'Carbs is required'],
        min: [0, 'Carbs cannot be negative'],
        max: [500, 'Carbs cannot exceed 500'],
      },
    },
    ingredients: [
      {
        name: {
          type: String,
          required: [true, 'Ingredient name is required'],
          trim: true,
          minlength: [2, 'Ingredient name must be at least 2 characters long'],
          maxlength: [50, 'Ingredient name cannot exceed 50 characters'],
        },
        value: {
          type: String,
          required: [true, 'Ingredient value is required'],
          trim: true,
          minlength: [1, 'Ingredient value must be at least 1 character long'],
          maxlength: [50, 'Ingredient value cannot exceed 50 characters'],
        },
      },
    ],
    instructions: [
      {
        type: String,
        required: [true, 'Instruction is required'],
        trim: true,
        minlength: [1, 'Instruction must be at least 1 character long'],
        maxlength: [200, 'Instruction cannot exceed 200 characters'],
      },
    ],
  },
  { timestamps: true },
);

const modelName = 'Recipe';

export const Recipe = model<RecipeType>(modelName, RecipeSchema);
