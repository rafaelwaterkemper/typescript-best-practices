import * as personDto from "./features/person";
import { Person } from "./features/person/Person";

const data =
  '{"firstName":"Rafael","lastName":"Waterkemper","age":27, "born": "nova Veneza"}';

const rafa: Person = personDto.fromJson(data);
console.log(rafa.getFullName());
console.log(rafa.getPersonId());
