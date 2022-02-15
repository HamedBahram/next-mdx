import Link from 'next/link'
import DateFormatter from '../notes/DateFormatter'

const NotePreview = ({ note }) => {
  const { slug, meta } = note
  const { title, excerpt, author, date } = meta
  return (
    <li
      key={slug}
      className='flex-1 p-4 shadow dark:shadow-zinc-600 rounded-md'
    >
      <Link href={`/notes/${slug}`}>
        <a>
          <h3 className='text-xl font-medium mb-3'>{title}</h3>
          <p className='font-light mb-3'>{excerpt}</p>
          <p className='mb-0'>{author.name}</p>
          <DateFormatter
            dateString={date}
            className='text-sm font-light text-zinc-400'
          />
        </a>
      </Link>
    </li>
  )
}

export default NotePreview
