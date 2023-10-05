const flyway: Map<string, Object> = new Map();

export class FlyWeight {
  static addImpl(name: string, instance: Object, qualifier: string = "") {
    console.log("Adding impl " + name + instance);
    flyway.set(name.concat(...["-", qualifier]), instance);
  }

  static getImpl(name: string, qualifier: string = ""): Object | undefined {
    console.log(`Retrieving data from ${name.concat(...["-", qualifier])}`);
    return flyway.get(name.concat(...["-", qualifier]));
  }
}

export function inject(qualifier?: any, service?: string) {
  console.log(`qualifier is ${qualifier}`);

  return function (target: any, propertyKey: string) {
    if (service) {
      target[propertyKey] = FlyWeight.getImpl(service, qualifier);
      return;
    }

    target[propertyKey] = FlyWeight.getImpl(propertyKey, qualifier);
  };
}
