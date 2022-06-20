export interface IPerson {
    id: number;
    name: string;
    surname: string;
    birthdate: string;
    image: string;
    father_id: number;
    mother_id: number;
    sisters: number[];
    brothers: number[];
    children: number[];
}