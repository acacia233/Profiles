let body = $response.body
body=JSON.parse(body)
body['pro']=true
body['proEndDate']="2099-10-10T03:27:34.000+0000"
body=JSON.stringify(body)
$done({body}) 

/*
滴答清单本地解锁VIP
频道：https://t.me/acacia233
MITM ticktick.com dida365.com
http-response ^https?:\/\/(dida365|ticktick)\.com\/api\/v2\/user\/status requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/acacia233/Profiles/master/Surge/Js/ticktick.js,script-update-interval=-1
*/
