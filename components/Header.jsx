export default function Header({ details }) {
	return (
		<div className='text-gray-200 flex flex-row px-20 py-10 text-center justify-center items-center w-screen'>
			<h1 className='text-5xl md:text-6xl font-bold'>
				{details.bigTitle}
				<br />
				<span className='inline relative text-4xl md:text-5xl font-normal italic mt-10 bg-right-bottom after:absolute after:w-full after:bg-sky-700 after:left-3 after:h-5 after:-z-[1] after:-bottom-1 md:after:bottom-0'>
					{details.smallTitle}
				</span>
			</h1>
		</div>
	);
}
