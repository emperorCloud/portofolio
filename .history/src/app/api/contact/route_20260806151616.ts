import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  
  // Ici tu peux envoyer un email, sauvegarder dans une DB, etc.
  console.log({ name, email, message });
  
  return NextResponse.json({ success: true });
}