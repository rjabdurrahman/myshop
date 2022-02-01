import expressValidator from 'express-validator';
const { check } = expressValidator;
import checkFieldErr from '../Middlewares/fieldError.js';

const validator = [
    check('id')
        .notEmpty().withMessage('ID is required!')
        .isNumeric().withMessage('ID must be a number!')
    ,
    check('name')
        .notEmpty().withMessage('Name is required!')
    ,
    check('phone')
        .notEmpty().withMessage('ID is required!')
        .isMobilePhone().withMessage('Invalid Phone Number!')
    ,
    check('email')
        .notEmpty().withMessage('ID is required!')
        .isEmail().withMessage('Invalid email format!')
    ,
    check('address')
        .notEmpty().withMessage('ID is required!')
    ,
    checkFieldErr
]

export default validator;