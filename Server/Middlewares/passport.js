const passport=require('passport')
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
   
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretKey;
passport.initialize()
passport.use(new JwtStrategy(opts,async function(jwt_payload, done,err) {
    const volunteer=await Volunteer.findOne({_id: jwt_payload._id})
    const donate=await Donate.findOne({_id: jwt_payload._id})
    const charity=await Charity.findOne({_id: jwt_payload._id})
    err?done(err, false):volunteer?done(null, volunteer):donate?done(null, donate):charity?done(null,charity):done(null, false)
}

));

module.exports=isAuth=()=>
    passport.authenticate("jwt",{session:false})