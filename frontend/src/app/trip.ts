import { User } from "./user";

export class Trip {
  id: number;
  tripName: string;
  startingLocation: string;
  endingLocation: string;
  // user_id: string;
  user: User = {id: "", username: "", email: "", pwHash: "", verifyPassword: ""};
}
