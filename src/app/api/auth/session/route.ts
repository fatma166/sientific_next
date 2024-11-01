// login 

import { NextResponse, NextRequest } from 'next/server';
import { login } from '@/services/api/auth/auth.api';
import { cookies } from "next/headers";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { token } = await request.json();
    if (token) {
      cookies().set('token', token, { httpOnly: true, expires: new Date(Date.now() + 60 * 60 * 24 * 1000) });
    } else {
      cookies().set('token', '', { httpOnly: true, expires: new Date(Date.now()) });
      cookies().delete('token');
    }
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(error);
  }
}