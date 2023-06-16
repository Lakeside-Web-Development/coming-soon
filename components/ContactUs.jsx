import dynamic from "next/dynamic";
import { useState } from "react";

export default function SocialMedia({ details }) {
	// Create dynamic icon component
	const DynamicIcon = dynamic(() => import("./Icon"), {
		ssr: false,
	});

	// Phone number formatting
	const splitPhoneNumber = details.phoneNumber.split("-");
	const formattedPhoneNumber =
		"(" +
		splitPhoneNumber[0] +
		") " +
		splitPhoneNumber[1] +
		"-" +
		splitPhoneNumber[2];

	// Hover state
	const [hover, setHover] = useState(false);
	const onHover = () => {
		setHover(true);
	};
	const onLeave = () => {
		setHover(false);
	};

	// Return
	return (
		<div className='text-center md:text-right'>
			<h3 className='text-xl md:text-2xl font-bold'>{details.title}</h3>
			<div className='text-md md:text-lg mt-1 flex justify-center items-center gap-2'>
				<DynamicIcon icon='fa-solid fa-envelope' />
				<a
					href={"mailto:" + details.emailAddress}
					className='hover:text-sky-700 transition'
				>
					{details.emailAddress}
				</a>
			</div>
			<div className='text-md md:text-lg flex justify-center md:justify-end items-center gap-2'>
				<DynamicIcon icon='fa-solid fa-phone' />
				<a
					href={"tel:" + details.phoneNumber}
					className='hover:text-sky-700 transition'
				>
					{formattedPhoneNumber}
				</a>
			</div>
			<div className='text-xl md:text-2xl justify-center md:justify-end items-center gap-2'>
				<ul>
					{details.socialMediaPlatforms.map((platform, index) => (
						<li key={index} className='inline pl-3 first:pl-0'>
							<a href={platform.link} className='hover:text-sky-700 transition'>
								<DynamicIcon icon={"fa-brands fa-" + platform.icon} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
