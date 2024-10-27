import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { user_id, preferences } = await request.json();

  try {
    const apiResponse = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/recommendations`, { user_id, preferences });
    const response = apiResponse.data.recommendations;

    return NextResponse.json({ user_id, recommendations: response });
  } catch (error) {
    console.error('Error generating recommendations:', error);
    return NextResponse.json({ error: 'Unable to generate recommendations at this time.' }, { status: 500 });
  }
}