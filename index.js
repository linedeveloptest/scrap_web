const request = require('request')
const cheerio = require('cheerio')

const url = 'https://tw.shop.com/'

var options = {
  url: "https://tw.shop.com/%E4%BB%8A%E5%91%A8%E5%A5%97%E6%9B%B8+%E8%A1%8C%E9%8A%B7%E9%9D%A0%E7%A4%BE%E7%BE%A4+%E8%A1%8C%E9%8A%B7%E6%8F%9B%E8%85%A6%E8%A2%8B-1436701386-p+.xhtml?tkr=180117021137",
  headers: {
    'User-Agent' : 'Chrome/35.0.1916.153' // optional headers
  }
};

request(options, (err, res, body) => {
  const $ = cheerio.load(body)
  var result = [];
  var values = $('input[id="prod-id"]').val();

  console.log(body);
  console.log(values);
})
