# Scraping

스크래핑이란 무엇일까요?

크롤링이라고 들어보셨나요??? 크롤링은 스크래핑 기술의 한 부분입니다.

정확한 정의에 대한 부분은 추후 심화부분을 공부하고 만들게 되면 올리도록 하겠습니다.

그냥 웹서버에 request요청을 통해 받아오는 html을 가져와 데이터를 추출하는 것을 의미한다고만 간략하게 이해하시면 되겠습니다.

스크래핑은 정말 정말 쉽습니다. 단지 request 요청을 통해 받은 데이터를 html형태로 변환하여 서버 또는 자신의 클라이언트에서 가져와 원하는 데이터를 가져오면 됩니다. 

코드를 간략하게 볼까요?

```
request(
    {
    url : 'url주소 입력',
    encoding : null //charset모듈을 통해 인코딩속성을 다시 정의하기 위해 기본값을 null로 처리해준다고 합니다.
    }, function(err, res, body){
        const enc = charset(res.headers, body); 
//charset모듈 사용법 입니다. 서버에서 제공하는 header의 인코딩 정보를 확인하고 담습니다.

        const i_result = iconv.decode(body, enc); 
//불러온 웹페이지 html데이터를 해당 웹페이지의 encoding type에 맞게 변환시켜 줍니다.

        var $ = cheerio.load(i_result); //text형태의 html을 읽어드려 제이쿼리 형태로 이용할 수 있도록 만들어 줍니다.
        
        console.log($.text());
    }
)
```

위에서의 코드는 정말 기본입니다. 사실 웹개발자들에게는 너무나 익숙할 것입니다.

request요청 -> html 파일 읽어드림 -> encording설정 -> cheerio를 통한 html node 컨트롤

순서를 이렇게 흘러 갑니다. 

여기까지 기본적으로 몇가지 모듈을 통해 스크래핑 하는 방법을 알아보았습니다.

다음은 직접 데이터를 일일히 가져오는 게 아닌 자동화를 통해 Scraping하는 방법과 예제코드를 구현해보고 올리도록 하겠습니다. 

감사합니다.