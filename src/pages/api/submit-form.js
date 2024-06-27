import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      collectiontName,
      collectionAddress,
      collectionPostCode,
      collectionNumber,
      deliveryName,
      deliveryAddress,
      deliveryPostcode,
      deliveryNumber,
      bookingDate,
      bookingTime,
      contactEmail,
      quote,
      message,
    } = req.body;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "onecloudmediauk1@gmail.com",
        pass: "huhngfiutxhtijpm",
      },
    });

    // Email options
    const mailOptions = {
      from: "onecloudmediauk1@gmail.com",
      to: "Motorcyclecourierlondon@outlook.com",
      subject: "MOTOR CYCLE FORM SUBMISSION",
      text: `Collection Details:\nName: ${collectiontName}\nNumber: ${collectionNumber}\nAddress: ${collectionAddress}\nPostcode: ${collectionPostCode}\nDelivery Details:\nName: ${deliveryName}\nNumber: ${deliveryNumber}\nAddress: ${deliveryAddress}\nPostcode: ${deliveryPostcode}\nBooking Details:\nBooking Date: ${bookingDate}\nBooking Time: ${bookingTime}\nContact Email: ${contactEmail}\nQuote: ${quote}\nMessage: ${message}
      `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
