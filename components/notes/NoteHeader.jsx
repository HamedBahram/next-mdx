import NoteTitle from './NoteTitle'
import CoverImage from './CoverImage'
import NoteSubtitle from './NoteSubtitle'

const NoteHeader = ({ meta }) => {
  const { title, coverImage, author, date, readTime = '8 min' } = meta

  return (
    <>
      <NoteTitle>{title}</NoteTitle>
      <NoteSubtitle author={author} date={date} readTime={readTime} />
      {coverImage && (
        <CoverImage title={title} src={coverImage} width={600} height={300} />
      )}
    </>
  )
}

export default NoteHeader
