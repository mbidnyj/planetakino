export default function(req, res){
  const body = JSON.parse(req.body)
  console.log(body)
  
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey("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")

  const title = body.title
  const format = body.format
  const date = body.date
  const price = body.price
  const place = body.place
  const email = body.email
  const name = body.name
  const html = `<h1>Have a nice film!</h1><div><p><strong>Film:</strong> <br/> ${title}</p><p><strong>Format:</strong> <br/> ${format}</p><p><strong>Price:</strong> <br/> ${price}</p><p><strong>Date:</strong> <br/> ${date}</p><p><strong>Place:</strong> <br/> ${place}</p></div>`


  const msg = {
    to: email,
    from: 'planetakino2022@gmail.com',
    subject: 'Ticket for film',
    text: 'Ticket for film',
    html: html
  }

  sgMail
    .send(msg)
    .catch((error) => {
      console.error(error)
    })

  res.status(200).json({text:"ok"})
}

