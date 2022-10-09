interface IPerson {
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

interface IMainCard extends IPerson {
	persons: IPerson[]
	goToProfile: (val: string) => void
}

interface IUserSubmitForm {
	name: string;
	surname: string;
	birthdate: string;
	image: Blob | undefined;
	father_id: string;
	mother_id: string;
	sisters: string[] | string;
	brothers: string[] | string;
	children: string[] | string;
}

interface ISelectValues {
	value: number;
	label: string;
}

export type { IPerson, IUserSubmitForm, ISelectValues, IMainCard };
