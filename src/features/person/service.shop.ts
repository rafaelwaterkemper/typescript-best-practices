import { PersonService } from "./types";

export class ShopPersonServiceImpl implements PersonService {
  getPersonId(): string {
    return "Shop randonly id";
  }
}
