import dynamic from "next/dynamic";

export default function SocialMedia({ details }) {
	// Create dynamic icon component
	const DynamicIcon = dynamic(() => import("./Icon"), {
		ssr: false,
	});

	// Return
	return (
		<div className='text-center md:text-right'>
			<h3 className='text-xl md:text-2xl font-bold'>{details.title}</h3>
			<div className='text-md md:text-lg mt-1 flex justify-center items-center gap-2'>
				<ul>
					{details.contactMethods.map((method, index) => (
						<li key={index}>
							<DynamicIcon icon={method.icon} />{" "}
							{method.openInNewTab ? (
								<a
									href={method.href}
									className='hover:text-accent2 transition'
									target='_blank'
								>
									{method.content}
								</a>
							) : (
								<a href={method.href} className='hover:text-accent2 transition'>
									{method.content}
								</a>
							)}
						</li>
					))}
				</ul>
			</div>
			<br />
			<div className='text-xl md:text-2xl flex justify-center md:justify-end items-center gap-2'>
				<ul>
					{details.socialMediaPlatforms.map((platform, index) => (
						<li key={index} className='inline pl-3 first:pl-0'>
							<a
								href={platform.link}
								className='hover:text-accent2 transition'
								target='_blank'
							>
								<DynamicIcon icon={"fa-brands fa-" + platform.icon} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
