

const page = async (browser,req,res,next) => {


    req.page= await  browser.newPage();
    next();


}

module.exports = page;