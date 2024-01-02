import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method Not Allowed' });
  }
  const body = await req.json();
     
  try {
    // Parse JSON-encoded data from the request body
    const { name, email, msg } = body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'skrishan111213@gmail.com',
        pass: 'hifq zxlg yiws osak',
      },
    });

    // Define email options
    const mailOptions = {
      from: 'skrishan111213@gmail.com',
      to: 'krishankantsen.bhumca22@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Error sending email' });
  }
}
