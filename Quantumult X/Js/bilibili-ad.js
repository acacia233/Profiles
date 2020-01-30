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
