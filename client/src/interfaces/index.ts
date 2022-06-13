interface IPerson {
	id: number;
	name: string;
	surname: string;
	birthdate: string;
	image: string;
	fatherID: number;
	motherID: number;
	sistersIDs: number[];
	brothersIDs: number[];
	childrenIds: number[];
}

interface IUserSubmitForm {
	name: string;
	surname: string;
	birthdate: string;
	image: Blob | undefined;
	fatherID: number;
	motherID: number;
	sistersIDs: number[] | string;
	brothersIDs: number[] | string;
	childrenIds: number[] | string;
}

interface ISelectValues {
	value: number;
	label: string;
}

export type { IPerson, IUserSubmitForm, ISelectValues };
