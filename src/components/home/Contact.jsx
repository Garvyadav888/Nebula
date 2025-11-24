/** @format */

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { CONTACT_INFO, SOCIAL_LINKS, EMAILJS_CONFIG } from '../../config/constants';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const formRef = useRef(null);
	const infoRef = useRef(null);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});

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

		// Animate form and info
		gsap.fromTo(
			[formRef.current, infoRef.current],
			{
				opacity: 0,
				x: (index) => (index === 0 ? -50 : 50),
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.8,
				ease: 'power3.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: formRef.current,
					start: 'top 85%',
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
					trigger.vars?.trigger === formRef.current
				) {
					trigger.kill();
				}
			});
		};
	}, []);

	const validateForm = () => {
		const newErrors = {};
		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}
		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		} else if (formData.message.trim().length < 10) {
			newErrors.message = 'Message must be at least 10 characters';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (!validateForm()) {
			toast.error('Please fix the errors in the form');
			return;
		}

		setIsSubmitting(true);

		try {
			// Check if EmailJS is configured
			if (
				EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' ||
				EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' ||
				EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY'
			) {
				// Fallback: Demo mode (for development)
				if (import.meta.env.DEV) {
					console.log('Form submitted:', formData);
				}
				toast.success('Message sent successfully! (Demo mode - configure EmailJS for production)');
			} else {
				// Send email using EmailJS
				await emailjs.send(
					EMAILJS_CONFIG.serviceId,
					EMAILJS_CONFIG.templateId,
					{
						from_name: formData.name,
						from_email: formData.email,
						message: formData.message,
					},
					EMAILJS_CONFIG.publicKey
				);
				toast.success('Message sent successfully!');
			}

			// Reset form
			setFormData({ name: '', email: '', message: '' });
			setErrors({});
		} catch (error) {
			if (import.meta.env.DEV) {
				console.error('Error sending email:', error);
			}
			toast.error('Failed to send message. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors({
				...errors,
				[name]: '',
			});
		}
	};

	return (
		<main className='text-white w-full max-w-7xl mx-auto py-20 px-5'>
			{/* Header */}
			<div className='text-center mb-16'>
				<h1
					ref={titleRef}
					className='text-5xl md:text-8xl font-bold tracking-tight mb-6'>
					GET IN{' '}
					<span className='text-black trp opacity-75 px-4 rounded-xl'>
						TOUCH
					</span>
				</h1>
				<p
					ref={descriptionRef}
					className='text-gray-100 text-xl md:text-2xl max-w-3xl mx-auto'>
					Have a project in mind? Let's collaborate and bring your ideas to
					life.
				</p>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
				{/* Contact Form */}
				<div ref={formRef}>
					<form
						onSubmit={handleSubmit}
						className='space-y-6'>
						<div>
							<Input
								type='text'
								name='name'
								placeholder='Your Name'
								value={formData.name}
								onChange={handleChange}
								required
								aria-invalid={errors.name ? 'true' : 'false'}
								aria-describedby={errors.name ? 'name-error' : undefined}
							/>
							{errors.name && (
								<p
									id='name-error'
									className='mt-2 text-sm text-red-400'>
									{errors.name}
								</p>
							)}
						</div>
						<div>
							<Input
								type='email'
								name='email'
								placeholder='Your Email'
								value={formData.email}
								onChange={handleChange}
								required
								aria-invalid={errors.email ? 'true' : 'false'}
								aria-describedby={errors.email ? 'email-error' : undefined}
							/>
							{errors.email && (
								<p
									id='email-error'
									className='mt-2 text-sm text-red-400'>
									{errors.email}
								</p>
							)}
						</div>
						<div>
							<Textarea
								name='message'
								placeholder='Your Message'
								value={formData.message}
								onChange={handleChange}
								required
								rows={6}
								aria-invalid={errors.message ? 'true' : 'false'}
								aria-describedby={errors.message ? 'message-error' : undefined}
							/>
							{errors.message && (
								<p
									id='message-error'
									className='mt-2 text-sm text-red-400'>
									{errors.message}
								</p>
							)}
						</div>
						<Button
							type='submit'
							disabled={isSubmitting}
							className='w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'>
							{isSubmitting ? (
								<>
									<Loader2 className='w-5 h-5 mr-2 animate-spin' />
									Sending...
								</>
							) : (
								<>
									<Send className='w-5 h-5 mr-2' />
									Send Message
								</>
							)}
						</Button>
					</form>
				</div>

				{/* Contact Info */}
				<div ref={infoRef} className='space-y-8'>
					{/* Contact Details */}
					<div className='bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300'>
						<div className='space-y-6'>
							<div className='flex items-start gap-4'>
								<div className='p-3 bg-white/10 rounded-lg'>
									<Mail className='w-6 h-6 text-white' />
								</div>
								<div>
									<h3 className='text-lg font-semibold mb-1'>Email</h3>
									<a
										href={`mailto:${CONTACT_INFO.email}`}
										className='text-gray-300 hover:text-white transition-colors'>
										{CONTACT_INFO.email}
									</a>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<div className='p-3 bg-white/10 rounded-lg'>
									<Phone className='w-6 h-6 text-white' />
								</div>
								<div>
									<h3 className='text-lg font-semibold mb-1'>Phone</h3>
									<a
										href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
										className='text-gray-300 hover:text-white transition-colors'>
										{CONTACT_INFO.phone}
									</a>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<div className='p-3 bg-white/10 rounded-lg'>
									<MapPin className='w-6 h-6 text-white' />
								</div>
								<div>
									<h3 className='text-lg font-semibold mb-1'>Location</h3>
									<p className='text-gray-300'>{CONTACT_INFO.location}</p>
								</div>
							</div>
						</div>
					</div>

					{/* Social Links */}
					<div className='bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300'>
						<h3 className='text-xl font-semibold mb-6'>Connect With Me</h3>
						<div className='flex gap-4'>
							<a
								href={SOCIAL_LINKS.github}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='GitHub Profile'
								className='p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10'>
								<Github className='w-6 h-6' />
							</a>
							<a
								href={SOCIAL_LINKS.linkedin}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn Profile'
								className='p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10'>
								<Linkedin className='w-6 h-6' />
							</a>
							<a
								href={SOCIAL_LINKS.twitter}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Twitter Profile'
								className='p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10'>
								<Twitter className='w-6 h-6' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Contact;

