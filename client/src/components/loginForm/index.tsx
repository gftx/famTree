import * as React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MAIN_URL } from '../../api';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const schema = Yup.object({
	username: Yup.string().required('обязательное поле'),
	password: Yup.string().required('обязательное поле'),
});

export default function LoginForm(props: any) {
	const { setIsLogin } = props;
	const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
		useFormik({
			initialValues: { username: '', email: '', password: '' },
			validationSchema: schema,
			onSubmit: values => {
				console.log('form send', loginFn(values));
			},
		});

	const loginFn = async (values: any) => {
		const res = await axios({
			method: 'POST',
			url: MAIN_URL + '/login',
			data: values,
		});
		console.log('login res', res);
		if (res.data.token) {
			localStorage.setItem('token', res.data.token);
			setIsLogin(true);
		}
	};

	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component='h1' variant='h5'>
					Вход в личный кабинет
				</Typography>
				<Box
					component='form'
					onSubmit={handleSubmit}
					sx={{
						mt: 1,
						width: '100%',
					}}
				>
					<TextField
						margin='normal'
						required
						fullWidth
						id='username'
						label='Введите имя пользователя'
						name='username'
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.username && errors.username && (
						<Typography component='p' variant='body1' color='red'>
							{errors.username}
						</Typography>
					)}
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Введите пароль'
						type='password'
						id='password'
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.password && errors.password && (
						<Typography component='p' variant='body1' color='red'>
							{errors.password}
						</Typography>
					)}
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Войти
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
