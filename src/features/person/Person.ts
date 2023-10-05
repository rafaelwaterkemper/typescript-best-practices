import { inject } from "../decorators/injector";
import { TPerson, PersonService } from "./types";
import './configure.injection';

class Base {
  public born!: string;
  constructor(born: string) {
    Object.assign(this, { born });
  }
}

export class Person extends Base {
  public readonly firstName!: string;
  private lastName!: string;
  public age?: number;

  @inject("magento")
  private PersonService!: PersonService;

  @inject("shop", "PersonService")
  private ShopPersonService!: PersonService;

  constructor(personDto: TPerson) {
    super(personDto.born);
    Object.assign(this, personDto);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getPersonId() {
    return this.PersonService.getPersonId();
  }

  getPersonShopId() {
    return this.ShopPersonService.getPersonId();
  }
}
