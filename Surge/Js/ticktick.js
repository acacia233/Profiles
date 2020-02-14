let body = $response.body
body=JSON.parse(body)
body['pro']=true
body['proEndDate']="2050-05-05T05:55:55.000+0000"
body=JSON.stringify(body)
$done({body})

/*
滴答清单本地解锁VIP
频道：https://t.me/acacia233
仅限老版本可用 新版本已经无法MITM
MITM ticktick.com dida365.com
http-response ^https?:\/\/(dida365|ticktick)\.com\/api\/v2\/user\/status requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/acacia233/SimpleRule/master/Surge/Js/ticktick.js,script-update-interval=-1
*/
