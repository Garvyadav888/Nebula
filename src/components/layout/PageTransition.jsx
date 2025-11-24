/** @format */

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import logo from '../../assets/logo.png';

function PageTransition({ children }) {
	const overlayRef = useRef(null);
	const contentRef = useRef(null);
	const logoRef = useRef(null);
	const percentageRef = useRef(null);
	const [loadingPercentage, setLoadingPercentage] = useState(0);

	useEffect(() => {
		// Create timeline for page entrance
		const tl = gsap.timeline();

		// Initial state - overlay covers the screen
		gsap.set(overlayRef.current, {
			scaleX: 0,
			transformOrigin: 'left center',
		});

		// Animate logo
		gsap.fromTo(
			logoRef.current,
			{
				opacity: 0,
				scale: 0.5,
				y: -20,
			},
			{
				opacity: 1,
				scale: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
			}
		);

		// Animate percentage
		gsap.fromTo(
			percentageRef.current,
			{
				opacity: 0,
				y: 10,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: 'power3.out',
				delay: 0.3,
			}
		);

		// Animate loading percentage from 0 to 100
		const percentageTween = gsap.to(
			{},
			{
				duration: 1.8,
				ease: 'power2.out',
				onUpdate: function () {
					const progress = Math.min(Math.round(this.progress() * 100), 100);
					setLoadingPercentage(progress);
				},
				onComplete: function () {
					// When loading completes, scale the logo
					gsap.to(logoRef.current, {
						scale: 1.3,
						duration: 0.4,
						ease: 'power2.out',
						onComplete: function () {
							gsap.to(logoRef.current, {
								scale: 1,
								duration: 0.3,
								ease: 'power2.in',
								onComplete: function () {
									// Fade out logo and percentage
									gsap.to([logoRef.current, percentageRef.current], {
										opacity: 0,
										scale: 0.8,
										duration: 0.4,
										ease: 'power2.in',
										onComplete: function () {
											// Hide overlay and show content
											gsap.to(overlayRef.current, {
												scaleX: 0,
												transformOrigin: 'right center',
												duration: 0.8,
												ease: 'power3.inOut',
												onComplete: function () {
													// Ensure overlay is hidden and doesn't block interactions
													if (overlayRef.current) {
														overlayRef.current.style.display = 'none';
														overlayRef.current.style.pointerEvents = 'none';
													}
												},
											});
											// Fade in content
											gsap.fromTo(
												contentRef.current,
												{
													opacity: 0,
													y: 30,
												},
												{
													opacity: 1,
													y: 0,
													duration: 1,
													ease: 'power3.out',
												}
											);
										},
									});
								},
							});
						},
					});
				},
			}
		);

		// Initial overlay animation
		tl.to(overlayRef.current, {
			scaleX: 1,
			duration: 0.2,
			ease: 'power3.inOut',
		});

		// Cleanup
		return () => {
			if (overlayRef.current) {
				gsap.killTweensOf(overlayRef.current);
			}
			if (contentRef.current) {
				gsap.killTweensOf(contentRef.current);
			}
			if (logoRef.current) {
				gsap.killTweensOf(logoRef.current);
			}
			if (percentageRef.current) {
				gsap.killTweensOf(percentageRef.current);
			}
			percentageTween.kill();
		};
	}, []);

	return (
		<>
			{/* Transition Overlay */}
			<div
				ref={overlayRef}
				className='fixed inset-0 z-[9999] flex flex-col items-center justify-center'
				style={{ pointerEvents: 'auto' }}>
				{/* Background Gradient */}
				<div
					className='absolute inset-0'
					style={{
						background:
							'linear-gradient(135deg, rgba(231, 116, 2, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)',
					}}
				/>

				{/* Logo */}
				<div
					ref={logoRef}
					className='relative z-10 flex flex-col items-center justify-center'>
					<img
						src={logo}
						alt='Nebula Logo'
						className='h-24 md:h-32 w-auto object-contain grayscale brightness-0 invert'
					/>
				</div>

				{/* Loading Percentage */}
				<div
					ref={percentageRef}
					className='relative z-10 mt-8 flex flex-col items-center'>
					<div className='text-4xl md:text-6xl font-bold text-white tracking-tight'>
						{loadingPercentage}%
					</div>
					{/* Loading Bar */}
					<div className='mt-4 w-64 md:w-80 h-1 bg-white/20 rounded-full overflow-hidden'>
						<div
							className='h-full bg-white rounded-full transition-all duration-300 ease-out'
							style={{
								width: `${loadingPercentage}%`,
							}}
						/>
					</div>
				</div>
			</div>

			{/* Page Content */}
			<div
				ref={contentRef}
				className='relative'>
				{children}
			</div>
		</>
	);
}

export default PageTransition;
