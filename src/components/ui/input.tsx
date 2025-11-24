/** @format */

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex h-12 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-gray-400 backdrop-blur-md transition-all duration-300',
					'focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 focus:bg-white/10',
					'disabled:cursor-not-allowed disabled:opacity-50',
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = 'Input';

export { Input };

