const express = require('express')
const router = express.Router()

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body
  // In a production app you'd validate and persist this.
  console.log('Contact received:', req.body)
  res.json({ success: true, message: 'Contact form received' })
})

router.post('/subscribe', (req, res) => {
  const { email } = req.body
  console.log('Subscribe:', email)
  res.json({ success: true, message: 'Subscribed successfully' })
})

module.exports = router