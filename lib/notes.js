import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const notesDirectory = path.join(process.cwd(), 'pages', 'notes')

export const getNoteBySlug = slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(notesDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const { data, content } = matter(fileContent)
  const stats = readingTime(content)
  const note = {
    slug: realSlug,
    meta: { ...data, readTime: stats?.text },
    content,
  }
  return note
}

export const getAllNotes = () => {
  const files = fs.readdirSync(notesDirectory)
  const slugs = files.filter(file => /\.mdx$/.test(file))
  const notes = slugs.map(slug => getNoteBySlug(slug))
  return notes.sort(
    (noteA, noteB) => new Date(noteB.meta.date) - new Date(noteA.meta.date)
  )
}

export const getAllSlugs = () => {
  const files = fs.readdirSync(notesDirectory)
  return files.map(file => file.replace(/\.mdx$/, ''))
}

export const getReadTime = slug => {
  const note = getNoteBySlug(slug)
  return note.meta.readTime
}
