import Markdown from 'react-markdown';

export default function RecentUpdate({ details }) {
  const date = details.date.split('-');
  const properDate = `${date[1]}/${date[2]}/${date[0]}`;

  return (
    <div className='text-center md:text-left px-4 py-3'>
      <h3 className='text-xl md:text-2xl font-bold'>
        {details.important ? (
          <>
            <span className='gray__gradient font-normal'>[ IMPORTANT ]</span>
            <br />
          </>
        ) : (
          ''
        )}
        {details.title}
      </h3>
      <Markdown className='text-lg md:text-xl mt-1 border-gray-500 rounded-l-sm max-w-3xl md:px-3 md:border-l-4'>
        {details.update}
      </Markdown>
      <br />
      <p className='text-md md:text-lg'>
        {details.author}, {details.authorTitle}
        <br />
        <em>Last update: {properDate}</em>
      </p>
    </div>
  );
}
