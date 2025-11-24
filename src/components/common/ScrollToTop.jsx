/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';

function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	const buttonRef = useRef(null);

	useEffect(() => {
		let ticking = false;
		const toggleVisibility = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (window.pageYOffset > 300) {
						setIsVisible(true);
					} else {
						setIsVisible(false);
					}
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', toggleVisibility, { passive: true });

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	useEffect(() => {
		if (isVisible && buttonRef.current) {
			gsap.fromTo(
				buttonRef.current,
				{
					opacity: 0,
					scale: 0,
				},
				{
					opacity: 1,
					scale: 1,
					duration: 0.3,
					ease: 'power2.out',
				}
			);
		} else if (!isVisible && buttonRef.current) {
			gsap.to(buttonRef.current, {
				opacity: 0,
				scale: 0,
				duration: 0.3,
				ease: 'power2.in',
			});
		}
	}, [isVisible]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	if (!isVisible) return null;

	return (
		<button
			ref={buttonRef}
			onClick={scrollToTop}
			className='fixed bottom-8 right-8 z-50 p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10'
			aria-label='Scroll to top'>
			<ArrowUp className='w-6 h-6 text-white' />
		</button>
	);
}

export default ScrollToTop;

