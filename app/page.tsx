export default function Home() {
	return (
		<div className='grid h-full w-full grid-cols-1 grid-rows-1 place-items-center'>
			<div className='col-span-1 text-center'>
				<h1 className='text-2xl text-white lg:text-3xl'>Al-Amin Firdows</h1>

				<div className='mt-4 text-zinc-400'>
					<ul className='inline-flex space-x-6'>
						<li>PHP Coder</li>
						<li>Laravel Developer</li>
						<li>Problem Solver</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

