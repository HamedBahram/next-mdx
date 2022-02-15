import React from 'react'

const NoteBody = ({ content }) => {
  return (
    <article className='prose max-w-none prose-pre:!p-0 dark:prose-invert'>
      {content}
    </article>
  )
}

export default NoteBody
