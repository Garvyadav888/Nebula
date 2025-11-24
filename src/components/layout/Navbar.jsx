/** @format */

import React, { useEffect, useRef, useState } from 'react';
import img from '../../assets/logo.png';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

function Navbar() {
	const nav = useRef(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		gsap.fromTo(
			nav.current,
			{
				y: -100,
				duration: 2,
				ease: 'power3.inOut',
			},
			{
				y: 0,
			}
		);
	}, []);

	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId)?.scrollIntoView({
			behavior: 'smooth',
		});
		setIsMobileMenuOpen(false);
	};

	const navLinks = [
		{ id: 'hero', label: 'HOME' },
		{ id: 'about', label: 'ABOUT' },
		{ id: 'services', label: 'SERVICES' },
		{ id: 'projects', label: 'PROJECTS' },
		{ id: 'contact', label: 'CONTACT' },
	];

	return (
		<>
			<nav
				ref={nav}
				className='w-[92%] h-[70px] mx-auto flex items-center justify-between px-6 
     border border-[#a6a6a65c] rounded-full 
     backdrop-blur-lg shadow-[0px_0px_20px_rgba(0,0,0,0.35)] relative z-50'>
				{/* Logo */}
				<img
					src={img}
					className='h-20 grayscale object-contain pl-2 hover:scale-105 transition-all duration-300'
					alt='Nebula'
					loading='eager'
					decoding='sync'
				/>

				{/* Desktop Links */}
				<div className='hidden md:flex gap-8 tracking-wider text-[#ECECEC] text-sm font-semibold'>
					{navLinks.map((link) => (
						<a
							key={link.id}
							className='hover:text-white transition cursor-pointer'
							href={`#${link.id}`}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection(link.id);
							}}>
							{link.label}
						</a>
					))}
				</div>

				{/* Desktop Login Button */}
				<button
					className='hidden md:block px-6 py-2 rounded-full bg-grey text-[13px] text-white 
        font-medium tracking-wide hover:bg-[#e5e5e5] hover:text-black
		 shadow-[0_0_5px_white] transition-all duration-200'>
					LOGIN
				</button>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className='md:hidden p-2 text-white hover:text-white/80 transition-colors'>
					{isMobileMenuOpen ? (
						<X className='w-6 h-6' />
					) : (
						<Menu className='w-6 h-6' />
					)}
				</button>
			</nav>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='fixed inset-0 z-40 md:hidden'>
					{/* Backdrop */}
					<div
						className='absolute inset-0 bg-black/50 backdrop-blur-sm'
						onClick={() => setIsMobileMenuOpen(false)}
					/>

					{/* Menu Content */}
					<div className='absolute top-20 left-[4%] right-[4%] bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-xl p-6 space-y-4'>
						{navLinks.map((link) => (
							<a
								key={link.id}
								href={`#${link.id}`}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(link.id);
								}}
								className='block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-center font-semibold tracking-wider'>
								{link.label}
							</a>
						))}
						<button
							className='w-full px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-200'>
							LOGIN
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default Navbar;
