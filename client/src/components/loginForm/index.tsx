import * as React from 'react';
import * as Yup from 'yup';


const schema = Yup.object({
	username: Yup.string().required('обязательное поле'),
	password: Yup.string().required('обязательное поле'),
});

export default function LoginForm () {

	return (
		<>
			login form
		</>
	)
}
