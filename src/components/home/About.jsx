/** @format */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './../ui/accordion';
import React, { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function About() {
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const accordionContainerRef = useRef(null);
	const accordionItemsRef = useRef([]);

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
					start: 'top 80%',
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

		// Animate accordion items with stagger
		const items = accordionItemsRef.current.filter(Boolean);
		if (items.length > 0) {
			gsap.fromTo(
				items,
				{
					opacity: 0,
					y: 60,
					scale: 0.95,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.8,
					ease: 'power3.out',
					stagger: 0.15,
					scrollTrigger: {
						trigger: accordionContainerRef.current,
						start: 'top 75%',
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
					trigger.vars?.trigger === accordionContainerRef.current
				) {
					trigger.kill();
				}
			});
		};
	}, []);

	return (
		<main className=' text-white w-full max-w-5xl mx-auto '>
			<h1
				ref={titleRef}
				className='text-5xl md:text-8xl font-bold text-center tracking-tight'>
				ABOUT{' '}
				<span className='text-black trp opacity-75 px-4 rounded-xl'> ME</span>
			</h1>

			<p
				ref={descriptionRef}
				className='text-gray-100 text-center mt-10 text-2xl max-w-2xl mx-auto'>
				I'm Garv Yadav — a passionate MERN stack developer crafting clean,
				interactive, and human-centered digital experiences.
			</p>

			<div
				ref={accordionContainerRef}
				className='mt-10'>
				<Accordion
					collapsible
					className='space-y-5'>
					{/* Who I Am */}
					<div ref={(el) => (accordionItemsRef.current[0] = el)}>
						<AccordionItem
							value='item-1'
							className='bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5'>
							<AccordionTrigger className='text-3xl md:text-4xl font-semibold px-6 py-5 tracking-tight'>
								Who I Am
							</AccordionTrigger>

							<AccordionContent className='text-gray-300 px-7 pb-6 text-lg md:text-xl leading-relaxed font-light'>
								I'm Garv Yadav — a developer who enjoys building products that
								feel natural to use. I specialize in web development using the{' '}
								<span className='trp text-black px-2 py-1 rounded-sm text-sm font-semibold'>
									MERN
								</span>{' '}
								stack and I love turning creative concepts into production-ready
								solutions. My approach blends{' '}
								<span className='trp text-black px-2 py-1 rounded-sm text-sm font-semibold'>
									{' '}
									modern
								</span>{' '}
								aesthetics with performance, creating experiences that are
								intuitive and visually engaging.
							</AccordionContent>
						</AccordionItem>
					</div>

					{/* What I Do */}
					<div ref={(el) => (accordionItemsRef.current[1] = el)}>
						<AccordionItem
							value='item-2'
							className='bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5'>
							<AccordionTrigger className='text-3xl md:text-4xl font-semibold px-6 py-5 tracking-tight'>
								What I Do
							</AccordionTrigger>

							<AccordionContent className='text-gray-300 px-7 pb-6 text-lg md:text-xl leading-relaxed font-light'>
								I craft responsive front-ends, scalable back-ends, and
								interactive user interfaces. From concept to deployment, I focus
								on:
								<ul className='mt-4 space-y-2 text-left list-none'>
									<li className='flex items-center gap-2'>
										<span className='h-2 w-2 bg-[#e77402] rounded-full'></span>
										building smooth user interfaces
									</li>
									<li className='flex items-center gap-2'>
										<span className='h-2 w-2 bg-[#e77402] rounded-full'></span>
										clean & maintainable code architecture
									</li>
									<li className='flex items-center gap-2'>
										<span className='h-2 w-2 bg-[#e77402] rounded-full'></span>
										seamless database & API communication
									</li>
									<li className='flex items-center gap-2'>
										<span className='h-2 w-2 bg-[#e77402] rounded-full'></span>
										micro-animations & fluid interactions using GSAP
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</div>

					{/* Philosophy */}
					<div ref={(el) => (accordionItemsRef.current[2] = el)}>
						<AccordionItem
							value='item-4'
							className='bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5'>
							<AccordionTrigger className='text-3xl md:text-4xl font-semibold px-6 py-5 tracking-tight'>
								My Philosophy
							</AccordionTrigger>

							<AccordionContent className='text-gray-300 px-7 pb-6 text-2xl leading-relaxed font-light italic'>
								"{' '}
								<span className='trp text-black px-3 font-semibold rounded-sm '>
									Code
								</span>{' '}
								should be clean. UI should be intuitive.{' '}
								<span className='trp text-black px-3 font-semibold rounded-sm '>
									Performance
								</span>{' '}
								should be seamless.{' '}
								<span className='trp text-black px-3 font-semibold rounded-sm '>
									Experience
								</span>{' '}
								should feel effortless."
							</AccordionContent>
						</AccordionItem>
					</div>

					{/* Open To */}
					<div ref={(el) => (accordionItemsRef.current[3] = el)}>
						<AccordionItem
							value='item-5'
							className='bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5'>
							<AccordionTrigger className='text-3xl md:text-4xl font-semibold px-6 py-5 tracking-tight text-center'>
								Open To
							</AccordionTrigger>

							<AccordionContent className='text-gray-300 px-7 pb-6 text-lg md:text-xl leading-relaxed font-light'>
								I'm open to{' '}
								<span className='trp text-black px-2   cursor-pointer transition-transform duration-100 py-1 rounded-sm text-sm font-semibold'>
									freelance
								</span>{' '}
								projects, collaborations, internships, and{' '}
								<span className='trp text-black px-2 py-1 rounded-sm text-sm font-semibold'>
									jobs
								</span>{' '}
								especially those that challenge problem-solving, and
								forward-thinking engineering.
							</AccordionContent>
						</AccordionItem>
					</div>
				</Accordion>
			</div>
		</main>
	);
}

export default About;
