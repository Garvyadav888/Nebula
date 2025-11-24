/** @format */
import React, { lazy, Suspense } from 'react';
import Beams from '../components/Beams';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import SectionTransition from '../components/layout/SectionTransition';

// Lazy load heavy components for better performance
const About = lazy(() => import('../components/home/About'));
const Project = lazy(() => import('../components/home/Project'));
const Services = lazy(() => import('../components/home/Services'));
const Contact = lazy(() => import('../components/home/Contact'));
const Footer = lazy(() => import('../components/layout/Footer'));

// Loading fallback component
const SectionLoader = () => (
	<div className='min-h-[400px] flex items-center justify-center'>
		<div className='w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin' />
	</div>
);
function Home() {
	return (
		<>
			<div className=' min-h-screen overflow-x-hidden relative w-full'>
				<div className='fixed inset-0 -z-10'>
					<Beams
						beamWidth={1.6}
						beamHeight={25}
						beamNumber={15}
						lightColor='#ffffff'
						speed={3}
						noiseIntensity={3.75}
						scale={0.2}
						rotation={90}
					/>
				</div>
				<div className='relative z-10 w-full mt-4'>
					<Navbar />
					<section
						id='hero'
						className='min-h-screen '>
						<Hero />
					</section>
					<SectionTransition className='py-20'>
						<section id='about'>
							<Suspense fallback={<SectionLoader />}>
								<About />
							</Suspense>
						</section>
					</SectionTransition>
					<SectionTransition
						className='py-20'
						delay={0.1}>
						<section id='services'>
							<Suspense fallback={<SectionLoader />}>
								<Services />
							</Suspense>
						</section>
					</SectionTransition>
					<SectionTransition
						className='py-20'
						delay={0.2}>
						<section id='projects'>
							<Suspense fallback={<SectionLoader />}>
								<Project />
							</Suspense>
						</section>
					</SectionTransition>
					<SectionTransition
						className='py-20'
						delay={0.3}>
						<section id='contact'>
							<Suspense fallback={<SectionLoader />}>
								<Contact />
							</Suspense>
						</section>
					</SectionTransition>
					<Suspense fallback={<SectionLoader />}>
						<Footer />
					</Suspense>
				</div>
			</div>
		</>
	);
}

export default Home;

// <div className='relative w-full min-h-screen overflow-x-hidden'>
// 			{/* Background Beams */}
// 			<div className='fixed inset-0 -z-10 pointer-events-none'>
// 				<Beams
// 					beamWidth={1.6}
// 					beamHeight={25}
// 					beamNumber={15}
// 					lightColor='#ffffff'
// 					speed={3}
// 					noiseIntensity={3.75}
// 					scale={0.2}
// 					rotation={90}
// 				/>
// 			</div>

// 			{/* Foreground content */}
// 			<div className='relative z-10 w-full mt-4'>
// 				<Navbar />

// 				{/* Hero takes (almost) full screen height */}
// 				<section className='min-h-[calc(100vh-5rem)] flex items-center'>
// 					<Hero />
// 				</section>

// 				{/* About below hero with nice spacing */}
// 				<section
// 					id='about'
// 					className='py-24'>
// 					<About />
// 				</section>
// 			</div>
// 		</div>
