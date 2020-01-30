const p1 = "/x/v2/feed/index"
const p2 = "/x/resource/show/tab"
const p3 = "/x/v2/view"
const p4 = "/x/v2/search/square"

const url = $request.url
var body = $response.body

if (url.indexOf(p1) != -1) {
body=JSON.parse(body)
body['data']['items'].forEach((element, index)=> {
   if(element.hasOwnProperty('ad_info')|| element.hasOwnProperty('banner_item')){ 
         body['data']['items'].splice(index,1)  
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(p2) != -1) {
body=JSON.parse(body)
body['data']['tab'].forEach((element, index) => {
   if(element['pos']>5){
          body['data']['tab'].splice(index,1)
    }
})
body['data']['bottom'].forEach((element, index)=> {
    if(element['pos']==4){      
       body['data']['bottom'].splice(index,1)  
    }
})
body['data']['top'].forEach((element, index) => {
   if(element['tab_id']=="游戏中心Top"){
          body['data']['top'].splice(index,1)
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(p3) != -1) {
body=JSON.parse(body)
body['data']['relates'].forEach((element, index)=> {
   if(element['is_ad']=="true"){ 
         body['data']['relates'].splice(index,1)  
    }
   if(element['goto']!="av"){ 
         body['data']['relates'].splice(index,1)  
    }
})
delete body['data']['cms']
body=JSON.stringify(body)
}

if (url.indexOf(p4) != -1) {
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
   if(element['type']=="trending"){ 
         body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
}

$done({body})

/*
哔哩哔哩广告去除
1.去除掉顶栏的游戏中心
2.去除底栏的会员购
3.去除除了五项主要分类以外的分类
4.去除首页中的广告
5.去除视频页下方的非视频类推荐
6.去除了搜索中的热搜
需要搭配分流达到比较好的效果
频道：https://t.me/acacia233
MITM app.bilibili.com
http-response ^https?:\/\/app\.bilibili\.com\/x\/(v2\/feed\/index|resource\/show\/tab\?access|v2\/view\?access_key|v2\/search\/square) requires-body=1,script-path=https://raw.githubusercontent.com/acacia233/SimpleRule/master/Surge/Js/bilibili-ad.js
*/