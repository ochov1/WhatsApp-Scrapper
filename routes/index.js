const whatsapp= require('../api/routes/whatsapp.route')

const routes = (app) =>{

app.use("/api/v1/whatsapp",whatsapp)

}

module.exports = routes;
