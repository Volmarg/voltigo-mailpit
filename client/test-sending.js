'use strict'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const nodemailer = require('nodemailer')

async function main () {
    const { user, pass } = await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
                                                       host: '0.0.0.0',
                                                       port: 1025,
                                                       auth: { type: 'login', user, pass }
                                                   })

    // send mail with defined transport object
    const info = await transporter.sendMail({
                                                from: '\'Fred Foo 👻\' <foo@example.com>',
                                                to: 'test@test.com',
                                                auth: {
                                                    user: "admin",
                                                    pass: "admin"
                                                },
                                                subject: 'Hello ✔', // Subject line
                                                text: 'Hello world?', // plain text body
                                                html: '<b>Hello world?</b>' // html body
                                            })

    console.log('Message sent: %s', info.messageId)
}

main().catch(console.error)