import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createClient()
    
    // Example: Fetch data from Supabase
    // const { data, error } = await supabase.from('your_table').select('*')
    
    // if (error) throw error
    
    return NextResponse.json({ 
      message: 'API is working',
      // data 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const body = await request.json()
    
    // Example: Insert data into Supabase
    // const { data, error } = await supabase
    //   .from('your_table')
    //   .insert(body)
    //   .select()
    
    // if (error) throw error
    
    return NextResponse.json({ 
      message: 'Data created successfully',
      // data 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

