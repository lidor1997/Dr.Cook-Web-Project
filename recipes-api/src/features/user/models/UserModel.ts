import { model, Schema } from 'mongoose';

import { UserType } from './UserType';

const UserSchema = new Schema<UserType>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [50, 'Name cannot exceed 50 characters'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      trim: true,
      minlength: [2, 'Username must be at least 2 characters long'],
      maxlength: [50, 'Username cannot exceed 50 characters'],
    },
    password: {
      type: String,
      required: [true, 'User password is required'],
    },
  },
  { timestamps: true },
);

const modelName = 'User';

export const User = model<UserType>(modelName, UserSchema);
