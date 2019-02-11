var request = require("request"); //웹서버에 request요청을 위한 모듈
var cheerio = require("cheerio"); //불러온 텍스트를 html형태로 load하여 제이쿼리 형태로 사용하게 만들어주는 모듈
var iconv = require("iconv-lite"); //문자코드를 변경해주는 모듈
var charset = require("charset"); //해당 사이트의 charset값을 알게 해주는 모듈
var v = require("voca"); //문자열 파싱을 위한 모듈인데 여기서는 사용하지 않았습니다.

request(
    {
    url : 'url주소 입력',
    encoding : null //charset모듈을 통해 인코딩속성을 다시 정의하기 위해 기본값을 null로 처리해준다고 합니다.
    }, function(err, res, body){
        const enc = charset(res.headers, body); //charset모듈 사용법 입니다. 서버에서 제공하는 header의 인코딩 정보를 확인하고 담습니다.
        const i_result = iconv.decode(body, enc); //불러온 웹페이지 html데이터를 해당 웹페이지의 encoding type에 맞게 변환시켜 줍니다.
        var $ = cheerio.load(i_result); //text형태의 html을 읽어드려 제이쿼리 형태로 이용할 수 있도록 만들어 줍니다.
        console.log($.text());
    }
)