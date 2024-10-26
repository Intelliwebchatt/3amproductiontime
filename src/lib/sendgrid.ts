import sgMail from '@sendgrid/mail'

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function sendEmail(data: {
  name: string
  email: string
  message: string
}) {
  const msg = {
    to: process.env.CONTACT_EMAIL,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: `New Contact Form Submission from ${data.name}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
    `,
    html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Message:</strong> ${data.message}</p>
    `
  }

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}
