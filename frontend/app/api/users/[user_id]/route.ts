import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request, { params }: { params: { user_id: string } }) {
  const { user_id } = params;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${user_id}/recommendations`);
    
    if (response.status !== 200) {
      return NextResponse.json({ error: `No recommendations found for user_id ${user_id}.` }, { status: 404 });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return NextResponse.json({ error: 'Unable to fetch recommendations at this time.' }, { status: 500 });
  }
}