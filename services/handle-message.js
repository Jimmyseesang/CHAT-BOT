const config = require('../config/line')

exports.handleMessage = (event) => {
    let msg
    let msgText = event.message.text.toLowerCase().trim()
    if (msgText === "promotion") {
        msg = { type: "text", text: "มีโปรโมชั่น ราคา 1,500 บาท" }
    }
    else if (msgText === "555"){
        msg = {type: "text",text: "คนไทยใจดี"}
    }
    else if (msgText === "love"){
        msg = {
            "type": "sticker",
            "packageId": "789",
            "stickerId": "10859"
        }
    }
    else{
        msg = {type: "text",text: "ใช่ๆ"}
    }
    return config.client.replyMessage(event.replyToken, msg)
}