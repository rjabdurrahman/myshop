import expressValidatior from 'express-validator';
const { validationResult } = expressValidatior;

const errResult = validationResult.withDefaults({
    formatter: (error) => {
        return error.msg;
    }
})

export default errResult;