import { FlyWay as FlyWeight } from "../decorators/injector";
import { MagentoPersonServiceImpl } from "./service.magento";
import { ShopPersonServiceImpl } from "./service.shop";

FlyWeight.addImpl("PersonService", new MagentoPersonServiceImpl(), "magento");
FlyWeight.addImpl("PersonService", new ShopPersonServiceImpl(), "shop");