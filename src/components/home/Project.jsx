/** @format */

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

// Dummy project data
const projectsData = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description:
			'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with modern technologies for scalability and performance.',
		image: null, // Will show first letter as placeholder
		techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
		liveLink: 'https://example.com',
		githubLink: 'https://github.com/example/ecommerce',
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Designed for productivity and seamless user experience.',
		image: null,
		techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
		liveLink: 'https://example.com',
		githubLink: 'https://github.com/example/taskmanager',
	},
	{
		id: 3,
		title: 'Social Media Dashboard',
		description:
			'An analytics dashboard for social media management with data visualization, scheduling capabilities, and comprehensive reporting tools. Helps businesses track and optimize their social presence.',
		image: null,
		techStack: ['Next.js', 'PostgreSQL', 'Chart.js', 'Prisma'],
		liveLink: 'https://example.com',
		githubLink: 'https://github.com/example/social-dashboard',
	},
	{
		id: 4,
		title: 'Weather Forecast App',
		description:
			'A beautiful weather application with location-based forecasts, interactive maps, and detailed meteorological data. Features smooth animations and an elegant user interface.',
		image: null,
		techStack: ['React', 'OpenWeather API', 'GSAP', 'CSS3'],
		liveLink: 'https://example.com',
		githubLink: 'https://github.com/example/weather-app',
	},
	{
		id: 5,
		title: 'Fitness Tracker',
		description:
			'A comprehensive fitness tracking application with workout planning, progress monitoring, and nutrition tracking. Includes charts and statistics to help users achieve their fitness goals.',
		image: null,
		techStack: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
		liveLink: 'https://example.com',
		githubLink: 'https://github.com/example/fitness-tracker',
	},
	{
		id: 6,
		title: 'Music Streaming Platform',
		description:
			'A modern music streaming platform with playlist management, audio visualization, and social sharing features. Built with focus on audio quality and user experience.',
		image: null,
		techStack: ['Vue.js', 'Node.js', 'AWS S3', 'Web Audio API'],
		liveLink: 'https://example.com',
		githubLink: 'https://github.com/example/music-stream',
	},
];

function Project() {
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
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
					start: 'top 80%',
					toggleActions: 'play none none none',
				},
			}
		);

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

	return (
		<main className='text-white w-full max-w-7xl mx-auto py-20 px-5'>
			{/* Header */}
			<div className='text-center mb-16'>
				<h1
					ref={titleRef}
					className='text-5xl md:text-8xl font-bold tracking-tight mb-6'>
					MY{' '}
					<span className='text-black trp opacity-75 px-4 rounded-xl'>
						PROJECTS
					</span>
				</h1>
				<p
					ref={descriptionRef}
					className='text-gray-100 text-xl md:text-2xl max-w-3xl mx-auto'>
					A collection of projects showcasing my skills in web development,
					design, and problem-solving.
				</p>
			</div>

			<div
				ref={containerRef}
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
				{projectsData.map((project, index) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						image={project.image}
						techStack={project.techStack}
						liveLink={project.liveLink}
						githubLink={project.githubLink}
						index={index}
					/>
				))}
			</div>
		</main>
	);
}

export default Project;
