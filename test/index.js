(async function test() {
    var fs = require('fs')
    var TextPro = require('..')
    var text_pro = new TextPro()

    var image1 = await text_pro.one_text_create('https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html','sl code lords')
    console.log(image1)
    var img1_buf = await text_pro.image_to_buffer(image1.url)
    fs.writeFileSync('./'+image1.file_name,img1_buf)

    var image2 = await text_pro.double_text_create('https://textpro.me/generate-a-free-logo-in-pornhub-style-online-977.html','Ravindu','Manoj')
    console.log(image2)
    var img2_buf = await text_pro.image_to_buffer(image2.url)
    fs.writeFileSync('./'+image2.file_name,img2_buf)
})()