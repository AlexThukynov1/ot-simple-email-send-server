import express  from "express";
import cors from "cors"

import sendEmail from "./lib/mail.js";

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.post('/',  (req ,res) => {
	const message = {
		to: 'emailsendto@gmail.com',
		subject: `Заявка №${req.body.id}`,
		text: `
			Заявка №${req.body.id},
			Им'я: ${req.body.userName}, 
        	Телефон: ${req.body.phone},
        	Повідомлення: ${req.body.description},
        `,
	};
	sendEmail(message);
	res.send(`Hi, ${req.body.userName} ${req.body.id} ${req.body.phone} ${req.body.description}!`);
})

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))