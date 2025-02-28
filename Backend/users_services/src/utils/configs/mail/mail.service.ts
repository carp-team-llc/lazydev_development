import { Resend } from "resend";

type MailParams = {
  to: string;
  subject: string;
  text?: string;
  html?: any;
}

const SendMailService = async ({
  to,
  subject,
  text,
  html
}: MailParams) => {
  try {
    const resend = new Resend(process.env.MAIL_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "noreply@calangthang.net",
      to: to,
      subject: subject,
      text: text,
      html: html,
    });

    if (error) {
      console.error(`Failed to send email to ${to}:`, error);
      return {
        statusCode: 500,
        message: "Failed to send email",
        data: null,
      }
    }

    return {
      statusCode: 200,
      message: "Email sent successfully",
      data,
    }
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
    return {
      statusCode: 500,
      message: "Failed to send email",
      data: null,
    }
  }
}

export default SendMailService;