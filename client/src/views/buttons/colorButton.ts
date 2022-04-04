import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({}) => ({
	color: '#22356F',
	backgroundColor: '#F9B640',
	'&:hover': {
		backgroundColor: '#F9B640',
	},
	margin: '15px',
}));

export { ColorButton };
