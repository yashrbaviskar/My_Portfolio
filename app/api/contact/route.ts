import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }
    
    const { data, error } = await supabase
      .from('contact_messages')
      .insert({
        name: body.name,
        email: body.email,
        message: body.message,
      })
      .select()
      .single()
    
    if (error) throw error
    
    return NextResponse.json(
      { message: 'Message sent successfully', data },
      { status: 201 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    )
  }
}

