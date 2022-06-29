const {Router} = require("express")
const WhatsappController= require("../controllers/whatsapp");

const whatsappRoute = Router();

whatsappRoute.route("/:tel")
    .post(WhatsappController.sendConfirmation)
module.exports = whatsappRoute;