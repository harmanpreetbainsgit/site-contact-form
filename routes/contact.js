const express = require('express');
const { body, validationResult } = require('express-validator');
const sendMail = require('../utils/mailer');

const router = express.Router();

router.post(
    '/',
    [
        body('name').trim().notEmpty().withMessage('Full name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('phone')
            .matches(/^[6-9]\d{9}$/)
            .withMessage('Enter a valid 10-digit mobile number'),
        body('location').trim().notEmpty().withMessage('Location is required'),
        body('message').trim().notEmpty().withMessage('Message cannot be empty'),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(422).json({
                    success: false,
                    errors: errors.array(),
                });
            }

            await sendMail(req.body);

            return res.status(200).json({
                success: true,
                message: 'Message sent successfully!',
            });
        } catch (err) {
            console.error('MAIL ERROR:', err);

            return res.status(500).json({
                success: false,
                message: 'Failed to send email',
            });
        }
    },
);

module.exports = router;
