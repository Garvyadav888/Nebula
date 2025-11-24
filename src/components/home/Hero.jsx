/** @format */
import React, { useEffect, useRef, useState } from 'react';
import SplitText from '../SplitText';
import TextType from '../TextType';
import gsap from 'gsap';

function Hero() {
	const textbox = useRef(null);
	const tring = useRef(null);
	useEffect(() => {
		gsap.fromTo(
			textbox.current,
			{
				y: 200,
				duration: 0.7,
				ease: 'sine.inOut',
			},
			{
				y: 0,
			}
		);
		gsap.fromTo(
			tring.current,
			{
				y: 200,
				duration: 0.7,
				ease: 'sine.inOut',
				delay: 0.4,
			},
			{
				y: 0,
			}
		);
	}, []);
	const [rotate, setrotate] = useState(false);
	useEffect(() => {
		const interval = setInterval(() => {
			setrotate(true);
			return clearInterval(interval);
		}, 500);
	}, []);
	return (
		<div
			ref={textbox}
			className='mx-auto mt-2   py-10 md:mb-15 px-8 h-[calc(90vh-6rem)] w-[90%] max-w-[1280px] 
     flex flex-col justify-center items-center
     '>
			<h1 className='text-6xl text-white md:text-9xl pb-5 flex flex-wrap gap-2 justify-center items-center font-bold leading-tight tracking-tight '>
				<SplitText
					text='CRAFTING '
					delay={50}
					duration={0.6}
					ease='power3.out'
					splitType='chars'
					from={{ opacity: 0, y: 10 }}
					to={{ opacity: 1, y: 0 }}
					threshold={0.1}
				/>{' '}
				<SplitText
					ref={tring}
					text=' CODE'
					delay={200}
					className={`text-black  trp text-5xl md:text-[140px] mx-2 p-5 rounded-4xl ${
						rotate && `rotate-[-12deg] transition-transform duration-200`
					}`}
				/>
				<SplitText
					text='WITH PURPOSE'
					delay={250}
					duration={0.6}
					ease='power3.out'
					splitType='chars'
					from={{ opacity: 0, y: 10 }}
					to={{ opacity: 1, y: 0 }}
					threshold={0.1}
				/>
			</h1>
		</div>
	);
}

export default Hero;
