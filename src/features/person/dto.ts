import { Person } from "./Person";

export const fromJson = (json: string): Person => {
  return new Person({ ...JSON.parse(json)});
};

export const toJson = (person: Person): string => {
  return JSON.stringify(person);
};