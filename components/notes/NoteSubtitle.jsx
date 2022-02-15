import Avatar from './Avatar'
import NoteMeta from './NoteMeta'

const NoteSubtitle = ({ author, date, readTime }) => {
  return (
    <div className='flex items-center mb-6 text-sm font-light text-zinc-400'>
      <Avatar name={author.name} src={author.image} />
      <NoteMeta author={author} date={date} readTime={readTime} />
    </div>
  )
}

export default NoteSubtitle
