const {text_pro,image_to_buffer} = require('./lib')
const axios = require('axios')

class TextPro {
    constructor() {
        this.data_url = 'https://raw.githubusercontent.com/SL-CODE-LORDS/Text-Pro-Me/main/data/text_pro_url.json'
    }
    async get_url_list() {
        const res = await axios.get(this.data_url)
        return res.data.link
    }
    async image_to_buffer(direct_url) {
        return await image_to_buffer(direct_url)
    }
    async create({url,text=[],image_path}={}) {
        return await text_pro(url,text,image_path)
    }
    async one_text_create(url,text) {
        return await this.create({url,text})
    }
    async double_text_create(url,text_1,text_2) {
        return await this.create({url,text:[text_1,text_2]})
    }
    async image_text_create(url,text,image_path) {
        return await this.create({url,text,image_path})
    }
}

module.exports = TextPro