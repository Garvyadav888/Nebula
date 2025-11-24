/** @format */

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					'flex min-h-[120px] w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 backdrop-blur-md transition-all duration-300 resize-none',
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
Textarea.displayName = 'Textarea';

export { Textarea };

