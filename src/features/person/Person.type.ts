export type TBase = {
    born: string;
}

export type TPerson = {
    firstName: string;
    lastName: string;
    age: number;
} & TBase;