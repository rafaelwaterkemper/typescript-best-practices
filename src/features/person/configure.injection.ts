import { FlyWay } from "../decorators/injector";
import { PersonServiceImpl } from "./service";

FlyWay.addImpl("PersonService", new PersonServiceImpl());
