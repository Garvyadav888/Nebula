/** @format */

import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Custom hook for ScrollTrigger cleanup
 * Ensures proper cleanup of ScrollTrigger instances
 */
export function useScrollTriggerCleanup(triggerRef) {
	useEffect(() => {
		return () => {
			if (triggerRef.current) {
				const triggers = ScrollTrigger.getAll();
				triggers.forEach((trigger) => {
					if (trigger.vars?.trigger === triggerRef.current) {
						trigger.kill();
					}
				});
			}
		};
	}, [triggerRef]);
}

