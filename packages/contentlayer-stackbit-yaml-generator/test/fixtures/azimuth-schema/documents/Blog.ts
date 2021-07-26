import { defineDocument } from 'contentlayer/source-local/schema'

import { SEO } from '../objects/SEO'
import { urlFromFilePath } from '../utils'

export const Blog = defineDocument(() => ({
  name: 'Blog',
  filePathPattern: `pages/blog.md`,
  isSingleton: true,
  fields: {
    title: {
      type: 'string',
      label: 'Title',
      description: 'The title of the page',
      required: true,
    },
    seo: {
      type: 'object',
      object: SEO,
    },
  },
  computedFields: {
    url_path: {
      type: 'string',
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and post page would be "posts/new-post/"',
      resolve: urlFromFilePath,
    },
  },
}))