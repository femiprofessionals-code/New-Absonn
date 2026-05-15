import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

const REQUIRED_FIELDS = [
  'organization_name',
  'contact_name',
  'contact_title',
  'email',
  'org_type',
  'annual_budget',
  'current_finance_team',
  'services_interested',
  'biggest_challenges',
  'primary_driver',
  'ideal_timeline',
]

export async function POST(request: Request) {
  try {
    const body = await request.json()

    for (const f of REQUIRED_FIELDS) {
      const v = body[f]
      if (v === undefined || v === null || v === '' || (Array.isArray(v) && v.length === 0)) {
        return NextResponse.json({ error: `Missing required field: ${f}` }, { status: 400 })
      }
    }

    const userAgent = request.headers.get('user-agent') || null
    const ipAddress =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      null

    const payload = {
      organization_name: body.organization_name,
      contact_name: body.contact_name,
      contact_title: body.contact_title,
      email: body.email,
      phone: body.phone || null,
      org_type: body.org_type,
      annual_budget: body.annual_budget,
      employee_count: body.employee_count || null,
      current_finance_team: body.current_finance_team,
      current_systems: body.current_systems || null,
      services_interested: body.services_interested,
      biggest_challenges: body.biggest_challenges,
      primary_driver: body.primary_driver,
      ideal_timeline: body.ideal_timeline,
      preferred_contact_time: body.preferred_contact_time || null,
      additional_notes: body.additional_notes || null,
      ip_address: ipAddress,
      user_agent: userAgent,
    }

    const supabase = getSupabase()
    const { data, error } = await supabase.from('consultation_requests').insert([payload]).select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to submit consultation request' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data: data?.[0] })
  } catch (err) {
    console.error('Consultation error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}