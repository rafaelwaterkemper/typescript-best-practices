import { TPerson } from "./Person.type";

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

  constructor(personDto: TPerson) {
    super(personDto.born);
    Object.assign(this, personDto);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
