import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Here you would typically connect to your backend DB (e.g. MongoDB, Postgres)
    // or send an email via Resend/SendGrid/Nodemailer.
    // For now, we simulate a successful API response logic.
    
    console.log("Received contact submission:", body);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
