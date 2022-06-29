const express = require('express');
const path = require('path');
const puppeteer = require('puppeteer');
const page = require("./api/setup/connection")
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes/index');
const app = express();


const resolution = {
   x : 640,
   y : 480,
}

const args = [
   '--disable-gpu',
   `--window-size=${ resolution.x },${ resolution.y }`,
   '--no-sandbox',
]

const browser = async () =>{
   const browser = await puppeteer.launch({headless: false, args});
   const  iPhone = await puppeteer.devices['iPhone 6'];
   const page= await browser.newPage();
   await page.emulate(iPhone);
   await page.goto("https://web.whatsapp.com/");
   return {browser,page};
}

global.browser = browser();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
routes(app)

module.exports = app;

