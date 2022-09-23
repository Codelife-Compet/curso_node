/* eslint-disable n/handle-callback-err */
exports.home =(req,res)=>{
res.render("home");
}
exports.about =(req,res)=>{
res.render("about");
}
exports.cookieSort =(req,res)=>{
res.render("cookieSort");
}
exports.notFound = (err , req , res , next)=>{
res.status(404);
res.render("404");
}
exports.serverError =(err,req,res,next)=>{
res.status(500);
res.render("500");
}