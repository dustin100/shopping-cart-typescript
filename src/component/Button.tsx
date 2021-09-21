interface AppProps {
	buttonText: string;
	fn: Function;
	buttonClass?: string;
	isDisabled?: boolean;
	aria?: string;
}

const Button = ({
	buttonText,
	fn,
	buttonClass,
	isDisabled = false,
	aria,
}: AppProps): JSX.Element => {
	return (
		<button
			className={buttonClass}
			onClick={() => fn()}
			disabled={isDisabled}
			aria-label={aria}>
			{buttonText}
		</button>
	);
};

export default Button;
