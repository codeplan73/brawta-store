import { z } from 'zod'

export const productSchema = z.object({
  slug: z.string().min(1, 'slug is required').max(255),
  title: z.string().min(1, 'title is required').max(255),
  description: z.string().min(1, 'description is required').max(65535),
})
