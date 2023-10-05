import { PersonService } from "./types";

export class MagentoPersonServiceImpl implements PersonService {
  getPersonId(): string {
    console.log(this)
    return "magento randomly id";
  }
}
