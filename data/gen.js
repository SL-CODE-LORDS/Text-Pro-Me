(async function gen() {
    var axios = require('axios')
    var cheerio = require('cheerio')
    var fs = require('fs')
    var _link = []
    var data = {
        status: true,
        code_author: { name: 'Ravindu Manoj', github: 'ravindu01manoj' },
        link: []
    }
    var get_data = async (url) => {
        try {
            var res = await axios.get(url)
            const $ = cheerio.load(res.data);
            var output = {}
            if ($('#text-1').attr("name")) output.double_text = true
            if ($('#image-0').attr("name")) output.need_image = true
            return output
        } catch (error) {
            return {}
        }
    }
    var urls = []
    for (let index = 1; index < 10; index++) {
        var _dt;
        try {
            var _dt = await axios.get('https://textpro.me/home-p' + index)
        } catch {
            break;
        }
        var $ = cheerio.load(_dt.data)
        $('.row > div > div.div-effect.effect-box').find('a').each((colIndex, colElement) => {
            try {
                var title = $(colElement).find('div.title-effect-home').text().trim()
                if (title) {
                    var url = 'https://textpro.me' + $(colElement).attr('href')
                    _link.push({ url, title })
                }
            } catch { }
        });
        for (const i of _link) {
            if (!urls.includes(i.url)) {
                urls.push(i.url)
                var dat = await get_data(i.url)
                data.link.push({ ...i, ...dat })
            }
        }
    }
    fs.writeFileSync('text_pro_url.json', JSON.stringify(data, null, 4))
})()