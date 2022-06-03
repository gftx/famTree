interface IProfile {
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

interface UserSubmitForm {
	name: string;
	surname: string;
	birthdate: string;
	image: Blob | undefined;
	fatherID: number;
	motherID: number;
	sistersIDs: number[];
	brothersIDs: number[];
	childrenIds: number[];
};


export type { IProfile, UserSubmitForm };
