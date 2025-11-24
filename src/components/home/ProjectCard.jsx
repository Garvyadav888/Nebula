/** @format */

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = React.memo(function ProjectCard({
	title,
	description,
	image,
	techStack = [],
	liveLink,
	githubLink,
	index = 0,
}) {
	const cardRef = useRef(null);
	const imageRef = useRef(null);
	const contentRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (!cardRef.current) return;

		gsap.fromTo(
			cardRef.current,
			{
				opacity: 0,
				y: 40,
				scale: 0.9,
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.8,
				ease: 'power3.out',
				delay: index * 0.15,
				scrollTrigger: {
					trigger: cardRef.current,
					start: 'top 90%',

					toggleActions: 'play none none none',
				},
			}
		);

		return () => {
			if (cardRef.current) {
				const triggers = ScrollTrigger.getAll();
				triggers.forEach((trigger) => {
					if (trigger.vars?.trigger === cardRef.current) {
						trigger.kill();
					}
				});
			}
		};
	}, [index]);

	useEffect(() => {
		if (!imageRef.current || !contentRef.current) return;

		const timeline = gsap.timeline();

		if (isHovered) {
			timeline
				.to(imageRef.current, {
					scale: 1.1,
					duration: 0.6,
					ease: 'power2.out',
				})
				.to(
					contentRef.current,
					{
						y: -10,
						duration: 0.6,
						ease: 'power2.out',
					},
					'-=0.3'
				);
		} else {
			timeline
				.to(imageRef.current, {
					scale: 1,
					duration: 0.6,
					ease: 'power2.out',
				})
				.to(
					contentRef.current,
					{
						y: 0,
						duration: 0.6,
						ease: 'power2.out',
					},
					'-=0.3'
				);
		}

		return () => {
			timeline.kill();
		};
	}, [isHovered]);

	return (
		<div
			ref={cardRef}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5'>
			{/* Image Container */}
			<div className='relative h-40 md:h-80 overflow-hidden'>
				<div
					ref={imageRef}
					className='w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center'>
					{image ? (
						<img
							src={image}
							alt={title}
							className='w-full h-full object-cover'
							loading='lazy'
							decoding='async'
						/>
					) : (
						<div className='text-white/30 text-4xl font-bold'>
							{title.charAt(0)}
						</div>
					)}
				</div>
				{/* Overlay gradient on hover */}
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
			</div>

			{/* Content */}
			<div
				ref={contentRef}
				className='p-6 md:p-8'>
				{/* Title */}
				<h3 className='text-xl md:text-3xl font-bold text-white mb-3 tracking-tight'>
					{title}
				</h3>

				{/* Description */}
				<p className='text-gray-300 text-[10px] md:text-lg leading-relaxed font-light mb-6'>
					{description}
				</p>

				{/* Tech Stack */}
				{techStack.length > 0 && (
					<div className='flex flex-wrap gap-2 mb-6'>
						{techStack.map((tech, idx) => (
							<span
								key={idx}
								className='trp text-black px-3 py-1 rounded-sm text-sm font-semibold'>
								{tech}
							</span>
						))}
					</div>
				)}

				{/* Links */}
				<div className='flex items-center gap-4'>
					{liveLink && (
						<a
							href={liveLink}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10'>
							<ExternalLink className='w-4 h-4' />
							<span>Live Demo</span>
						</a>
					)}
					{githubLink && (
						<a
							href={githubLink}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10'>
							<Github className='w-4 h-4' />
							<span>Code</span>
						</a>
					)}
				</div>
			</div>

			{/* Decorative corner accent */}
			<div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e77402]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
		</div>
	);
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
