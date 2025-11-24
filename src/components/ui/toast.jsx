/** @format */

import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
	return (
		<Toaster
			position='top-center'
			toastOptions={{
				duration: 4000,
				style: {
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(10px)',
					border: '1px solid rgba(255, 255, 255, 0.2)',
					color: '#fff',
					padding: '16px',
					borderRadius: '12px',
				},
				success: {
					iconTheme: {
						primary: '#e77402',
						secondary: '#fff',
					},
				},
				error: {
					iconTheme: {
						primary: '#ef4444',
						secondary: '#fff',
					},
				},
			}}
		/>
	);
}

