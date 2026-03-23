const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");

/* ================= CONTACT US ================= */
router.post("/contact-us", async (req, res) => {
  try {
    const { fullname, companyname, phone, emailId, subject, message, agree } = req.body;

    if (!agree) return res.status(400).json({ msg: "Terms not accepted" });

    const html = `
      <h2>Contact Us Lead</h2>
      <p><b>Name:</b> ${fullname}</p>
      <p><b>Company:</b> ${companyname}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${emailId}</p>
      <p><b>Subject:</b> ${subject}</p>
      <p><b>Message:</b> ${message}</p>
    `;

    await sendEmail("New Contact Lead", html);
    res.json({ msg: "Contact form submitted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= RESIDENTIAL ================= */
router.post("/residential", async (req, res) => {
  try {
    const { fullname, pincode, whatsappnumber, bill, agree } = req.body;

    if (!agree) return res.status(400).json({ msg: "Terms not accepted" });

    const html = `
      <h2>Residential Lead</h2>
      <p><b>Name:</b> ${fullname}</p>
      <p><b>Pincode:</b> ${pincode}</p>
      <p><b>WhatsApp:</b> ${whatsappnumber}</p>
      <p><b>Monthly Bill:</b> ${bill}</p>
    `;

    await sendEmail("Residential Lead", html);
    res.json({ msg: "Residential form submitted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= HOUSING SOCIETY ================= */
router.post("/housingsociety", async (req, res) => {
  try {
    const {
      fullname,
      societyName,
      pincode,
      whatsapp,
      bill,
      designation,
      agmStatus,
      agree
    } = req.body;

    if (!agree) return res.status(400).json({ msg: "Terms not accepted" });

    const html = `
      <h2>Housing Society Lead</h2>
      <p><b>Name:</b> ${fullname}</p>
      <p><b>Society:</b> ${societyName}</p>
      <p><b>Pincode:</b> ${pincode}</p>
      <p><b>WhatsApp:</b> ${whatsapp}</p>
      <p><b>Bill:</b> ${bill}</p>
      <p><b>Designation:</b> ${designation}</p>
      <p><b>AGM Status:</b> ${agmStatus}</p>
    `;

    await sendEmail("Housing Society Lead", html);
    res.json({ msg: "Housing society form submitted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= COMMERCIAL ================= */
router.post("/commercial", async (req, res) => {
  try {
    const { fullname, companyName, city, whatsapp, bill, agree } = req.body;

    if (!agree) return res.status(400).json({ msg: "Terms not accepted" });

    const html = `
      <h2>Commercial Lead</h2>
      <p><b>Name:</b> ${fullname}</p>
      <p><b>Company:</b> ${companyName}</p>
      <p><b>City:</b> ${city}</p>
      <p><b>WhatsApp:</b> ${whatsapp}</p>
      <p><b>Bill:</b> ${bill}</p>
    `;

    await sendEmail("Commercial Lead", html);
    res.json({ msg: "Commercial form submitted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;