import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2025-04-11',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
