import { model, Schema } from 'mongoose';
import { iUsers } from '../interfaces/usersInterface';

const usersSchema = new Schema<iUsers>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(v);
        },
        message: function (props) {
          return `${props.value} is not valid email`;
        },
      },
    },
    isRegistered: { type: Boolean, required: true },
  },
  {
    versionKey: false,
  }
);

export const Users = model('Users', usersSchema);
