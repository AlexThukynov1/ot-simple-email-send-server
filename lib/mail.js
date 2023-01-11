import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'emailsendfrom@gmail.com',
		pass: 'password generate on google'
	},
	tls: 587,
}, {
	from: 'boiler test <chinim.boiler.service@gmail.com>'
});

const sendEmail = (message) => {
    smtpTransport.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        smtpTransport.close();
    });
}

export default sendEmail;