import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
// help mdx-js/mdx compiler understand front matter
import remarkFrontmatter from 'remark-frontmatter'
import rehypeHighlight from 'rehype-highlight'
// convert images to JS imports
// import { remarkMdxImages } from 'remark-mdx-images'

// embdeing 3rd party content at compile time
import fauxRemarkEmbedder from '@remark-embedder/core'
import fauxOembedTransformer from '@remark-embedder/transformer-oembed'
const remarkEmbedder = fauxRemarkEmbedder.default
const oembedTransformer = fauxOembedTransformer.default

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      [remarkEmbedder, { transformers: [oembedTransformer] }],
    ],
    rehypePlugins: [rehypeHighlight],
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})
