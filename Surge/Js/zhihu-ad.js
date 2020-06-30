const p1 = "/topstory/recommend?session";
const p2 = "/topstory/recommend?action_feed";
const p3 = "/search/top_search"
const p4 = "/v4/question"

const url = $request.url;
var body = $response.body;

if (url.indexOf(p1) != -1) {
body=JSON.parse(body)
body['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('ad')){
       body['data'].splice(index,1)
    }
})
body['data'].forEach((element, index)=>{
     if(element['extra']['type']=="promote"){
       body['data'].splice(index,1)
    }
})
body['data'].forEach((element, index)=>{
     if(element['type']=="market_card"){
       body['data'].splice(index,1)
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(p2) != -1) {
body=JSON.parse(body)
body['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('adjson')){
       body['data'].splice(index,1)
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(p3) != -1) {
body=JSON.parse(body)
delete body['commercial_data']
body=JSON.stringify(body)
}

if (url.indexOf(p4) != -1) {
body=JSON.parse(body)
delete body['ad_info']
body=JSON.stringify(body)
}

$done({body})

/*
知乎广告去除
1.去除了主页推送中的广告部分
2.去除了搜索部分的“荐”
3.去除了回答页和评论区的广告
需搭配分流达到比较好的效果
频道：https://t.me/acacia233
MITM api.zhihu.com
http-response ^https?:\/\/api\.zhihu\.com\/(topstory\/recommend|search\/top_search|v4\/questions) requires-body=1,script-path=https://raw.githubusercontent.com/acacia233/SimpleRule/master/Surge/Js/zhihu-ad.js
*/
