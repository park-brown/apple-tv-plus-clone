import { useState, useEffect } from 'react';

export const useScroll = () => {
	const [scrollY, setScrollY] = useState(0);
	function handleScroll() {
		setScrollY(window.pageYOffset);
	}
	useEffect(() => {
		function watchScroll() {
			window.addEventListener('scroll', handleScroll);
		}
		watchScroll();
		// Remove listener (like componentWillUnmount)
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollY;
};
