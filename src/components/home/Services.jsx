/** @format */

import React, { useRef, useEffect, useState, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
	SiReact,
	SiNodedotjs,
	SiMongodb,
	SiExpress,
	SiJavascript,
	SiTypescript,
	SiTailwindcss,
	SiGit,
	SiFirebase,
	SiPostgresql,
	SiNextdotjs,
	SiVuedotjs,
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const skills = [
	{ id: 1, icon: SiReact, color: '#61DAFB' },
	{ id: 2, icon: SiNodedotjs, color: '#339933' },
	{ id: 3, icon: SiMongodb, color: '#47A248' },
	{ id: 4, icon: SiExpress, color: '#000000' },
	{ id: 5, icon: SiJavascript, color: '#F7DF1E' },
	{ id: 6, icon: SiTypescript, color: '#3178C6' },
	{ id: 7, icon: SiTailwindcss, color: '#06B6D4' },
	{ id: 8, icon: SiGit, color: '#F05032' },
	{ id: 9, icon: SiFirebase, color: '#FFCA28' },
	{ id: 10, icon: SiPostgresql, color: '#4169E1' },
	{ id: 11, icon: SiNextdotjs, color: '#000000' },
	{ id: 12, icon: SiVuedotjs, color: '#4FC08D' },
];

const Services = memo(function Services() {
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const containerRef = useRef(null);
	const skillsRef = useRef([]);
	const [hoveredSkill, setHoveredSkill] = useState(null);

	useEffect(() => {
		// Animate title
		gsap.fromTo(
			titleRef.current,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: titleRef.current,
					start: 'top 90%',
					toggleActions: 'play none none none',
				},
			}
		);

		// Animate description
		gsap.fromTo(
			descriptionRef.current,
			{
				opacity: 0,
				y: 30,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				delay: 0.2,
				scrollTrigger: {
					trigger: descriptionRef.current,
					start: 'top 90%',
					toggleActions: 'play none none none',
				},
			}
		);

		// Animate skill icons with stagger
		const items = skillsRef.current.filter(Boolean);
		if (items.length > 0) {
			gsap.fromTo(
				items,
				{
					opacity: 0,
					scale: 0,
					rotation: -180,
				},
				{
					opacity: 1,
					scale: 1,
					rotation: 0,
					duration: 0.8,
					ease: 'back.out(1.7)',
					stagger: 0.1,
					scrollTrigger: {
						trigger: containerRef.current,
						start: 'top 80%',
						toggleActions: 'play none none none',
					},
				}
			);
		}

		return () => {
			const triggers = ScrollTrigger.getAll();
			triggers.forEach((trigger) => {
				if (
					trigger.vars?.trigger === titleRef.current ||
					trigger.vars?.trigger === descriptionRef.current ||
					trigger.vars?.trigger === containerRef.current
				) {
					trigger.kill();
				}
			});
		};
	}, []);

	useEffect(() => {
		// Animate hovered skill
		if (hoveredSkill !== null && skillsRef.current[hoveredSkill]) {
			gsap.to(skillsRef.current[hoveredSkill], {
				scale: 1.2,
				rotation: 360,
				duration: 0.6,
				ease: 'power2.out',
			});
		} else if (hoveredSkill === null) {
			// Reset all skills
			skillsRef.current.forEach((ref, index) => {
				if (ref) {
					gsap.to(ref, {
						scale: 1,
						rotation: 0,
						duration: 0.4,
						ease: 'power2.out',
					});
				}
			});
		}
	}, [hoveredSkill]);

	return (
		<main className='text-white w-full max-w-7xl mx-auto py-20 px-5'>
			{/* Header */}
			<div className='text-center mb-16'>
				<h1
					ref={titleRef}
					className='text-5xl md:text-8xl font-bold tracking-tight mb-6'>
					MY{' '}
					<span className='text-black trp opacity-75 px-4 rounded-xl'>
						SKILLS
					</span>
				</h1>
				<p
					ref={descriptionRef}
					className='text-gray-100 text-xl md:text-2xl max-w-3xl mx-auto'>
					Technologies and tools I work with to build amazing digital
					experiences.
				</p>
			</div>

			{/* Skills Grid */}
			<div
				ref={containerRef}
				className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 max-w-5xl mx-auto'>
				{skills.map((skill, index) => {
					const IconComponent = skill.icon;
					return (
						<div
							key={skill.id}
							ref={(el) => (skillsRef.current[index] = el)}
							onMouseEnter={() => setHoveredSkill(index)}
							onMouseLeave={() => setHoveredSkill(null)}
							className='group relative cursor-pointer'>
							{/* Glassmorphism Card */}
							<div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5 flex items-center justify-center aspect-square'>
								{/* Icon */}
								<IconComponent
									className='w-12 h-12 md:w-16 md:h-16 transition-all duration-300'
									style={{
										color: hoveredSkill === index ? skill.color : '#ffffff',
										filter:
											hoveredSkill === index
												? `drop-shadow(0 0 20px ${skill.color})`
												: 'none',
									}}
								/>

								{/* Hover Glow Effect */}
								<div
									className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
									style={{
										background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
									}}
								/>

								{/* Animated Border on Hover */}
								<div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300' />

								{/* Floating Particles Effect */}
								{Array.from({ length: 3 }).map((_, i) => (
									<div
										key={i}
										className='absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
										style={{
											background: skill.color,
											top: `${20 + i * 30}%`,
											left: `${20 + i * 30}%`,
											animation: `float 2s ease-in-out infinite ${i * 0.3}s`,
										}}
									/>
								))}
							</div>
						</div>
					);
				})}
			</div>

			{/* CSS for floating animation */}
			<style>{`
				@keyframes float {
					0%, 100% {
						transform: translateY(0) translateX(0);
						opacity: 0.8;
					}
					50% {
						transform: translateY(-10px) translateX(5px);
						opacity: 1;
					}
				}
			`}</style>
		</main>
	);
});

Services.displayName = 'Services';

export default Services;
