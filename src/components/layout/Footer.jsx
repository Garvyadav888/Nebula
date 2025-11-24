/** @format */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import {
	SITE_CONFIG,
	CONTACT_INFO,
	SOCIAL_LINKS,
} from '../../config/constants';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
	const footerRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			contentRef.current,
			{
				opacity: 0,
				y: 30,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: footerRef.current,
					start: 'top 90%',
					toggleActions: 'play none none none',
				},
			}
		);

		return () => {
			const triggers = ScrollTrigger.getAll();
			triggers.forEach((trigger) => {
				if (trigger.vars?.trigger === footerRef.current) {
					trigger.kill();
				}
			});
		};
	}, []);

	const currentYear = new Date().getFullYear();

	return (
		<footer
			ref={footerRef}
			className='border-t border-white/10 bg-white/5 backdrop-blur-md'>
			<div
				ref={contentRef}
				className='max-w-7xl mx-auto px-5 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
					{/* Brand */}
					<div>
						<h3 className='text-2xl font-bold mb-4 tracking-tight'>
							{SITE_CONFIG.name}
						</h3>
						<p className='text-gray-300 text-sm leading-relaxed'>
							{SITE_CONFIG.description}
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<a
									href='#hero'
									className='text-gray-300 hover:text-white transition-colors'
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('hero')?.scrollIntoView({
											behavior: 'smooth',
										});
									}}>
									Home
								</a>
							</li>
							<li>
								<a
									href='#about'
									className='text-gray-300 hover:text-white transition-colors'
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('about')?.scrollIntoView({
											behavior: 'smooth',
										});
									}}>
									About
								</a>
							</li>
							<li>
								<a
									href='#services'
									className='text-gray-300 hover:text-white transition-colors'
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('services')?.scrollIntoView({
											behavior: 'smooth',
										});
									}}>
									Services
								</a>
							</li>
							<li>
								<a
									href='#projects'
									className='text-gray-300 hover:text-white transition-colors'
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('projects')?.scrollIntoView({
											behavior: 'smooth',
										});
									}}>
									Projects
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='text-gray-300 hover:text-white transition-colors'
									onClick={(e) => {
										e.preventDefault();
										document.getElementById('contact')?.scrollIntoView({
											behavior: 'smooth',
										});
									}}>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h4 className='text-lg font-semibold text-white mb-4'>Connect</h4>
						<div className='flex gap-4'>
							<a
								href={SOCIAL_LINKS.github}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='GitHub Profile'
								className='p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10'>
								<Github className='w-5 h-5' />
							</a>
							<a
								href={SOCIAL_LINKS.linkedin}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn Profile'
								className='p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10'>
								<Linkedin className='w-5 h-5' />
							</a>
							<a
								href={SOCIAL_LINKS.twitter}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Twitter Profile'
								className='p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10'>
								<Twitter className='w-5 h-5' />
							</a>
							<a
								href={`mailto:${CONTACT_INFO.email}`}
								aria-label='Send Email'
								className='p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10'>
								<Mail className='w-5 h-5' />
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
					<p className='text-gray-400 text-sm'>
						© {currentYear} {SITE_CONFIG.name}. All rights reserved.
					</p>
					<p className='text-gray-400 text-sm flex items-center gap-1'>
						Made with <Heart className='w-4 h-4 text-[#e77402]' /> by{' '}
						{SITE_CONFIG.author}
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
