import { z } from 'zod'

export const productSchema = z.object({
  title: z.string().min(3, 'title is required').max(100),
  description: z.string().min(10, 'description is required').max(65535),
  price: z.number().min(1, 'price is required'),
  stock: z.number().int().min(0, 'stock is required'),
  imageUrl: z.string().url(),
  // category: z.string().min(3).max(50),
})

export const categorySchema = z.object({
  title: z.string().min(3, 'title is required').max(100),
  name: z.string().min(3, 'name is required').max(100),
})

export type Product = z.infer<typeof productSchema>
export type Category = z.infer<typeof categorySchema>
