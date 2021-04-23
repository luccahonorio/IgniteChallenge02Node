/* eslint-disable prettier/prettier */
import { v4 as uuidV4 } from "uuid";

export class User {
  // Complete aqui
  id?: string;

  name: string;

  admin?: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    if (this.admin === undefined) {
      this.admin = false;
    }
  }
}