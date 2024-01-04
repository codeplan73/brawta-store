import { NextRequest, NextResponse } from 'next/server'
import { categorySchema } from '@/app/productSchema'
import prisma from '@/prisma/client'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { title, name } = body

  const validation = categorySchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  try {
    const newCategory = await prisma.category.create({
      data: {
        title,
        name,
      },
    })
    return NextResponse.json(newCategory, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Category Error', error },
      { status: 500 }
    )
  }
}
