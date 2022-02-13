import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})
