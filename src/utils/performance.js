/** @format */

/**
 * Debounce function for performance optimization
 */
export function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

/**
 * Throttle function for performance optimization
 */
export function throttle(func, limit) {
	let inThrottle;
	return function executedFunction(...args) {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}

/**
 * Check if code is running in development mode
 */
export const isDev = import.meta.env.DEV;

