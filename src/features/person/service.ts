import { PersonService } from "./types";

export class PersonServiceImpl implements PersonService {
  getPersonId(): string {
    console.log(this)
    return "randomlyid";
  }
}
