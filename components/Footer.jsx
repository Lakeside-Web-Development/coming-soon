import { useState, useEffect } from "react";
import RecentUpdate from "./RecentUpdate";
import ContactUs from "./ContactUs";

export default function Footer({ details }) {
	const [windowSize, setWindowSize] = useState([1920, 1080]);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize([window.innerWidth, window.innerHeight]);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const width = windowSize[0];

	return (
		<div className='text-gray-200 flex flex-col items-center gap-10 px-4 md:gap-40 justify-center mt-10 md:flex md:flex-row'>
			<RecentUpdate details={details.footerContent[0]} />
			{width <= 768 && (
				<div className='h-0.5 rounded-sm w-40 bg-gray-200'></div>
			)}
			<ContactUs details={details.footerContent[1]} />
		</div>
	);
}
