class WhatsappController {

    static async sendConfirmation(req, res) {

        const {tel} = req.params
        browser.then(async result => {

            await result.page.close();
            const newPage = await result.browser.newPage();
            await newPage.goto("https://api.whatsapp.com/send?phone="+tel);

        })
        return await res.status(200).json({tel})
    }

}

module.exports = WhatsappController;