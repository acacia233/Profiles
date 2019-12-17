var body = $response.body;
var obj = JSON.parse(body);
obj['pro']=true
obj['proEndDate']="2050-05-05T05:55:55.000+0000"
body=JSON.stringify(obj)
$done({body}) 

/*
滴答清单本地解锁VIP
频道：https://t.me/acacia233
*/