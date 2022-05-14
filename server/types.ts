export interface IPerson {
    id: number;
    name: string;
    surname: string;
    birthdate: string;
    image: string;
    fatherId: number;
    motherId: number;
    sistersIds: number[];
    brothersIds: number[];
    childrenIds: number[];
}