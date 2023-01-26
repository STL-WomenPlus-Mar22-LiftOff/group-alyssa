import { Trip } from "./trip";

export class User {
  //this file is supposed to mirror the data coming in on the backend
  //the info below is the fields we have for each user
  id: number = 0;
  username: string = "";
  email: string = "";
  password: string = "";
  verifyPassword: string = "";
  trip: Trip[];

}
