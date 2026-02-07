import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createClient()
    
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('proficiency', { ascending: false })
    
    if (error) throw error
    
    return NextResponse.json({ data })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch skills' },
      { status: 500 }
    )
  }
}

