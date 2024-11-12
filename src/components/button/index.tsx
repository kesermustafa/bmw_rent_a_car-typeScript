interface Props {
	title: string;
	type?: 'submit' | 'reset' | 'button';
	designs?: string;
	disabled?: boolean;
	icon?: string;
	handleClick?: () => void;
}

const Button = ({ title, type, designs, disabled, icon, handleClick }: Props) => {
	return (
		<button
			onClick={handleClick}
			disabled={disabled}
			className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 transition ${designs} `}
			type={type}
			aria-label={"open model"}
		>
			<span className='flex-1'>{title}</span>
			
			{icon && <img src={icon} className='size-6' alt="right-arrow"/>}
			
		</button>
	);
};

export default Button;