const {check,validationResult}=require("express-validator")

exports.registerCheck=()=>[
    check('email','this field is required').notEmpty().isEmail().withMessage('Must be a valid email'),
    check("phone","this field is required").notEmpty().isMobilePhone().withMessage('Must be a valid phone Number'),
    check("FullName","this field is required").notEmpty(),
    check("password","this field is required").notEmpty().isLength({min:8}).withMessage('password must have at least 8 characters'),
    check("postalCode","this field is required").notEmpty().withMessage('please enter a valid PostalCode')
]
exports.validLogin =()=> [
    check('email','this field is required').notEmpty().isEmail().withMessage('Must be a valid email'),
    check('password', 'this field is required').notEmpty(),
    check('password').isLength({
        min: 8
    }).withMessage('Password must contain at least 8 characters')
]


exports.validator=(req,res,next)=>{
 const errors=validationResult(req)
    if(!errors.isEmpty())
    {return res.status(400).send({errors:errors.array()})}
    next()
}