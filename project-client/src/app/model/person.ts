export class Person {
    // tslint:disable-next-line: variable-name
    id: number;
    name: string;
    gender: string;
    email: string;
    dateBorn: Date;
    naturalness: string;
    nationality: string;
    cpf: string;
    dateRegister: Date;
    dateRegisterUpdate: Date;

    public constructor(init?: Partial<Person>) {
        Object.assign(this, init);
    }
}
