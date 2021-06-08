import { useState, useEffect, useLayoutEffect } from 'react';

// Hook
export function useDimensions(targetRef) {
	const getDimensions = () => {
		return {
			height: targetRef.current ? targetRef.current.clientHeight : 0
		};
	};
	const [dimensions, setDimensions] = useState(getDimensions);
	const handleResize = () => {
		setDimensions(getDimensions());
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useLayoutEffect(() => {
		handleResize();
	}, []);
	return dimensions;
}
