import Link from 'next/link';

export default function err404() {
  return (
    <div className='font-inter text-gray-200 mt-[20vh] flex flex-col justify-center items-center'>
      <h1 className='font-bold text-9xl'>404</h1>
      <h2 className='italic text-2xl'>
        Sorry, there was an error finding that page.
      </h2>
      <p className='mt-5 text-xl underline'>
        <Link href='/'>Go back</Link>
      </p>
    </div>
  );
}
