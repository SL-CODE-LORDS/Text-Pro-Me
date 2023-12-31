<p align="center">
  <a href="https://www.npmjs.com/package/@sl-code-lords/text-pro-me" rel="noopener">
 <img height=70px src="https://textpro.me/images/logo/logo.png" alt="SL Code LORDS"></a>
</p>
<h2 align="center">Text-Pro-Me</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/SL-CODE-LORDS/Text-Pro-Me.svg)](https://github.com/SL-CODE-LORDS/Text-Pro-Me/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/SL-CODE-LORDS/Text-Pro-Me.svg)](https://github.com/SL-CODE-LORDS/Text-Pro-Me/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> full scrap - [text pro](https://textpro.me)
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Source](#source)
- [Donation](#donation)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

full scrap - [text pro](https://textpro.me)

## 👨‍💻 Download Source Code <a name = "about"></a>

you can download full source code without encryption
[Download Source](https://www.buymeacoffee.com/ravindu01manoj/e/155200)

## 💕 Donation <a name = "donation"></a>

<a href="https://www.buymeacoffee.com/ravindu01manoj"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="60"></a>

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Installing


```sh
yarn add @sl-code-lords/text-pro-me
```

or

```sh
npm i @sl-code-lords/text-pro-me
```

## 🎈 Usage <a name="usage"></a>

```ts
var fs = require('fs')
var TextPro = require('@sl-code-lords/text-pro-me')

var text_pro = new TextPro()

```
## get Text Pro Url List
```ts
var links = await text_pro.get_url_list()
console.log(links)
```
```ts
[
    {
            "url": "https://textpro.me/create-harry-potter-text-effect-online-1025.html",
            "title": "Create Harry Potter text effect online"
        },
        {
            "url": "https://textpro.me/create-artistic-black-and-white-status-and-quote-with-your-photos-1021.html",
            "title": "Create artistic black and white status and quote with your photos",
            "need_image": true
        },
        {
            "url": "https://textpro.me/write-text-on-foggy-window-online-free-1015.html",
            "title": "Write text on foggy window online free"
        },
        {
            "url": "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
            "title": "Create neon devil wings text effect online free"
        },
        {
            "url": "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
            "title": "Create a cool graffiti text on the wall",
            "double_text": true
        },
    ...70 more items
]
```

## create only one text image
```ts
var image1 = await text_pro.one_text_create(
    'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html',
    'sl code lords'
    )
var img1_buf = await text_pro.image_to_buffer(image1.url)
fs.writeFileSync('./'+image1.file_name,img1_buf)
```

## create double text image
```ts
var image2 = await text_pro.double_text_create(
    'https://textpro.me/generate-a-free-logo-in-pornhub-style-online-977.html',
    'Ravindu',
    'Manoj'
    )
var img2_buf = await text_pro.image_to_buffer(image2.url)
fs.writeFileSync('./'+image2.file_name,img2_buf)
```

## ✍️ Authors <a name = "authors"></a>

- [@ravindu01manoj](https://github.com/ravindu01manoj) Project Author

See also the list of [contributors](https://github.com/SL-CODE-LORDS/Text-Pro-Me/contributors) who participated in this project.