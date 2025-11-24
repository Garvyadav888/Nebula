/** @format */

import React from 'react';
import { AlertCircle } from 'lucide-react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		if (import.meta.env.DEV) {
			console.error('Error caught by boundary:', error, errorInfo);
		}
		// In production, you might want to send this to an error tracking service
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-5'>
					<div className='text-center max-w-md'>
						<AlertCircle className='w-16 h-16 mx-auto mb-4 text-[#e77402]' />
						<h1 className='text-3xl font-bold mb-4'>Something went wrong</h1>
						<p className='text-gray-300 mb-6'>
							We're sorry, but something unexpected happened. Please try
							refreshing the page.
						</p>
						<button
							onClick={() => {
								window.location.reload();
							}}
							className='px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-300'>
							Refresh Page
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

