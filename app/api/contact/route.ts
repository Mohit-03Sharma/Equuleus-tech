import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, inquiry, message } = body

    // Here you can:
    // 1. Send email using SendGrid, Resend, or similar service
    // 2. Save to database
    // 3. Send to CRM system

    // For now, just log the submission
    console.log("Contact form submission:", body)

    // Example: Send email notification
    // await sendEmail({
    //   to: 'info@equuleustechnologies.com',
    //   subject: `New ${inquiry} inquiry from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Inquiry Type:</strong> ${inquiry}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `
    // })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again." }, { status: 500 })
  }
}
