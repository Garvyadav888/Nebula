/** @format */

import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Home, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../config/constants';

function NotFound() {
	// const navigate = useNavigate();
	const containerRef = useRef(null);
	const titleRef = useRef(null);
	const textRef = useRef(null);
	const buttonRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			[titleRef.current, textRef.current, buttonRef.current],
			{
				opacity: 0,
				y: 30,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				stagger: 0.2,
			}
		);
	}, []);

	return (
		<div
			ref={containerRef}
			className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-5'>
			<div className='text-center max-w-2xl'>
				<h1
					ref={titleRef}
					className='text-9xl md:text-[12rem] font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
					404
				</h1>
				<p
					ref={textRef}
					className='text-2xl md:text-3xl font-semibold mb-4'>
					Page Not Found
				</p>
				<p
					ref={textRef}
					className='text-gray-400 text-lg mb-8'>
					The page you're looking for doesn't exist or has been moved.
				</p>
				<div
					ref={buttonRef}
					className='flex gap-4 justify-center'>
					<button
						onClick={() => (window.location.href = '/')}
						className='px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 flex items-center gap-2'>
						<Home className='w-5 h-5' />
						Go Home
					</button>
					<button
						onClick={() => window.history.back()}
						className='px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 flex items-center gap-2'>
						<ArrowLeft className='w-5 h-5' />
						Go Back
					</button>
				</div>
			</div>
		</div>
	);
}

export default NotFound;

