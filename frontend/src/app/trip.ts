import { User } from "./user";

export class Trip {
  id: number = 0;
  tripName: string = "";
  startingLocation: string = "";
  endingLocation: string = "";
  // user_id: string;
  user: User = {id: "", username: "", email: "", pwHash: "", verifyPassword: ""};
}
