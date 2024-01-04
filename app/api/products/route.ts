import { NextRequest, NextResponse } from 'next/server'
import { productSchema } from '@/app/productSchema'
import prisma from '@/prisma/client'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { title, slug, description } = body

  const validation = productSchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  try {
    // Use the correct type for the 'product' model from the Prisma client
    const newProduct = await prisma.product.create({
      data: {
        title,
        slug,
        description,
      },
    })
    return NextResponse.json(newProduct, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Post Error', error }, { status: 500 })
  }
}
