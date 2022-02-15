import DateFormatter from './DateFormatter'

const NoteMeta = ({ author, date, readTime }) => {
  return (
    <div className='flex flex-col grow sm:flex-row sm:items-center sm:justify-between'>
      <div>
        <span>{author.name}</span> / <DateFormatter dateString={date} />
      </div>

      <div className='flex gap-1 items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#0178df'
          className='hidden sm:inline'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' />
          <path d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' />
        </svg>
        <span>{readTime} read</span>
        <span className='font-bold'> . </span>
        <span>12,000 views</span>
      </div>
    </div>
  )
}

export default NoteMeta
