import {ReactNode} from 'react';

type Props = {
	children: string | ReactNode;
}

const Warning = ({children}: Props) => {
	return (
		<p className='home__error-container'>{children}</p>
	);
};

export default Warning;
