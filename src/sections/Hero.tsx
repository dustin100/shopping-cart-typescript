import Button from '../component/Button';

const Hero = (): JSX.Element => {
	const callToAction = (): void => {
		console.log('I am a call to action button');
	};

	return (
		<section>
			<div className='hero-image'>
				<div className='hero-text wrapper'>
					<h1>Some header content here</h1>
					<p>Some sub text here</p>
					<Button
						fn={callToAction}
						buttonText='Click Me'
						buttonClass='btn primary'
						isDisabled={false}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
