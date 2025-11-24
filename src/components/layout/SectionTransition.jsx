/** @format */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SectionTransition({ children, className = '', delay = 0 }) {
	const sectionRef = useRef(null);

	useEffect(() => {
		if (!sectionRef.current) return;

		gsap.fromTo(
			sectionRef.current,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power3.out',
				delay: delay,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 85%',
					toggleActions: 'play none none none',
				},
			}
		);

		return () => {
			if (sectionRef.current) {
				const triggers = ScrollTrigger.getAll();
				triggers.forEach((trigger) => {
					if (trigger.vars?.trigger === sectionRef.current) {
						trigger.kill();
					}
				});
			}
		};
	}, [delay]);

	return (
		<div ref={sectionRef} className={className}>
			{children}
		</div>
	);
}

export default SectionTransition;

