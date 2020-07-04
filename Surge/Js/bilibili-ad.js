const p1 = "/x/v2/feed/index?access_key"
const p2 = "/x/resource/show/tab?access_key"
const p3 = "/x/v2/view?access_key"
const p4 = "/x/v2/search/square"
const p5 = "/x/v2/account/mine?access_key"

const url = $request.url;
var body = $response.body;

if (url.indexOf(p1) != -1) {
body=JSON.parse(body)
body['data']['items'].forEach((element, index)=> {
   if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')){
         body['data']['items'].splice(index,1)
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(p2) != -1) {
body=JSON.parse(body)
body['data']['tab'] = [
  {
    "id": 39,
    "tab_id": "直播tab",
    "name": "直播",
    "uri": "bilibili://live/home",
    "pos": 1
  },
  {
    "id": 40,
    "tab_id": "推荐tab",
    "default_selected": 1,
    "name": "推荐",
    "uri": "bilibili://pegasus/promo",
    "pos": 2
  },
  {
    "id": 41,
    "tab_id": "热门tab",
    "name": "热门",
    "uri": "bilibili://pegasus/hottopic",
    "pos": 3
  },
  {
    "id": 42,
    "tab_id": "追番Tab",
    "name": "追番",
    "uri": "bilibili://pgc/home",
    "pos": 4
  },
  {
    "id": 151,
    "tab_id": "影视tab",
    "name": "影视",
    "uri": "bilibili://pgc/cinema-tab",
    "pos": 5
  }
],
body['data']['top'] = [
  {
    "id": 176,
    "icon": "http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",
    "tab_id": "消息Top",
    "name": "消息",
    "uri": "bilibili://link/im_home",
    "pos": 1
  }
],
body['data']['bottom'] = [
  {
    "uri": "bilibili://main/home/",
    "tab_id": "首页Bottom",
    "pos": 1,
    "id": 177,
    "icon_selected": "http://i0.hdslb.com/bfs/archive/e5106aa688dc729e7f0eafcbb80317feb54a43bd.png",
    "icon": "http://i0.hdslb.com/bfs/archive/63d7ee88d471786c1af45af86e8cb7f607edf91b.png",
    "name": "首页"
  },
  {
    "uri": "bilibili://pegasus/channel/",
    "tab_id": "频道Bottom",
    "pos": 2,
    "id": 178,
    "icon_selected": "http://i0.hdslb.com/bfs/archive/79d29e6ac3b6e52652881b050e63988e2038130f.png",
    "icon": "http://i0.hdslb.com/bfs/archive/9c453a54eb83f5140cd098bf2e8ed8a599edc7fe.png",
    "name": "频道"
  },
  {
    "uri": "bilibili://following/home/",
    "tab_id": "动态Bottom",
    "pos": 3,
    "id": 179,
    "icon_selected": "http://i0.hdslb.com/bfs/archive/25b658e1f6b6da57eecba328556101dbdcb4b53f.png",
    "icon": "http://i0.hdslb.com/bfs/archive/86dfbe5fa32f11a8588b9ae0fccb77d3c27cedf6.png",
    "name": "动态"
  },
  {
    "uri": "bilibili://user_center/",
    "tab_id": "我的Bottom",
    "pos": 5,
    "id": 181,
    "icon_selected": "http://i0.hdslb.com/bfs/archive/a54a8009116cb896e64ef14dcf50e5cade401e00.png",
    "icon": "http://i0.hdslb.com/bfs/archive/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png",
    "name": "我的"
  }
]
body=JSON.stringify(body)
}

if (url.indexOf(p3) != -1) {
body=JSON.parse(body)
if(!body['data'].hasOwnProperty('owner_ext')){
  body['data']['relates'].forEach((element, index)=> {
     if(element.hasOwnProperty('is_ad')||element['goto']!="av"){
        body['data']['relates'].splice(index,1)
      }
  })
}
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

if (url.indexOf(p5) != -1) {
body=JSON.parse(body)
body['data']['sections_v2'] = [
    {
      "items": [
        {
          "id": 397,
          "title": "历史记录",
          "icon": "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png",
          "uri": "bilibili://user_center/history"
        },
        {
          "id": 398,
          "title": "我的收藏",
          "icon": "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png",
          "uri": "bilibili://user_center/favourite"
        },
        {
            "id": 396,
            "title": "离线缓存",
            "icon": "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png",
            "uri": "bilibili://user_center/download"
        },
        {
          "id": 399,
          "title": "稍后再看",
          "icon": "http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
          "need_login": 1,
          "uri": "bilibili://user_center/watch_later"
        }
      ],
      "style": 1,
      "button": {
      }
    },
    {
      "button": {
        "icon": "http://i0.hdslb.com/bfs/archive/205f47675eaaca7912111e0e9b1ac94cb985901f.png",
        "style": 1,
        "url": "bilibili://uper/user_center/archive_selection",
        "text": "发布"
      },
      "style": 1,
      "title": "创作中心",
      "up_title": "创作中心",
      "type": 1,
      "items": [
        {
          "need_login": 1,
          "display": 1,
          "id": 171,
          "title": "创作首页",
          "global_red_dot": 1,
          "uri": "bilibili://uper/homevc",
          "icon": "http://i0.hdslb.com/bfs/archive/d3aad2d07538d2d43805f1fa14a412d7a45cc861.png"
        },
        {
          "need_login": 1,
          "display": 1,
          "id": 216,
          "title": "创作学院",
          "global_red_dot": 1,
          "uri": "https://member.bilibili.com/college?navhide=1",
          "icon": "http://i0.hdslb.com/bfs/archive/5b46a16b3f0d01ab401af071f0da3abdf35a384f.png"
        },
        {
          "need_login": 1,
          "display": 1,
          "id": 298,
          "title": "创作日历",
          "global_red_dot": 1,
          "uri": "https://member.bilibili.com/studio/gabriel/creator-calendar/today?navhide=1",
          "icon": "http://i0.hdslb.com/bfs/archive/ccb3a0f38ed0ea72a773741c5d82b11ceb8ce3f0.png"
        },
        {
          "need_login": 1,
          "display": 1,
          "id": 174,
          "title": "热门活动",
          "global_red_dot": 1,
          "uri": "https://www.bilibili.com/blackboard/x/activity-tougao-h5/all",
          "icon": "http://i0.hdslb.com/bfs/archive/7f4fa86d99bf3814bf10f8ee5d6c8c9db6e931c8.png"
        }
      ]
    },
    {
      "title": "推荐服务",
      "items": [
        {
          "id": 400,
          "title": "我的课程",
          "icon": "http://i0.hdslb.com/bfs/archive/aa3a13c287e4d54a62b75917dd9970a3cde472e1.png",
          "uri": "https://m.bilibili.com/cheese/mine?navhide=1"
        },
        {
          "id": 401,
          "title": "看视频免流量",
          "icon": "http://i0.hdslb.com/bfs/archive/393dd15a4f0a149e016cd81b55bd8bd6fe40882c.png",
          "uri": "bilibili://user_center/free_traffic"
        },
        {
          "id": 402,
          "title": "个性装扮",
          "icon": "http://i0.hdslb.com/bfs/archive/0bcad10661b50f583969b5a188c12e5f0731628c.png",
          "mng_resource": {
            "icon_id": 28,
            "icon": "http://i0.hdslb.com/bfs/archive/8bcd6831b026edeced186a0fb0a1cbf9f9f2f4e0.png"
          },
          "uri": "https://www.bilibili.com/h5/mall/home?navhide=1&from=myservice"
        },
        {
          "id": 403,
          "title": "游戏中心",
          "icon": "http://i0.hdslb.com/bfs/archive/873e3c16783fe660b111c02ebc4c50279cb5db57.png",
          "uri": "bilibili://game_center/user?sourceFrom=100003"
        },
        {
          "id": 404,
          "title": "我的钱包",
          "icon": "http://i0.hdslb.com/bfs/archive/f416634e361824e74a855332b6ff14e2e7c2e082.png",
          "uri": "bilibili://bilipay/mine_wallet"
        },
        {
          "id": 405,
          "title": "会员购中心",
          "icon": "http://i0.hdslb.com/bfs/archive/19c794f01def1a267b894be84427d6a8f67081a9.png",
          "uri": "bilibili://mall/mine?msource=mine"
        },
        {
          "id": 406,
          "title": "直播中心",
          "icon": "http://i0.hdslb.com/bfs/archive/1db5791746a0112890b77a0236baf263d71ecb27.png",
          "uri": "bilibili://user_center/live_center"
        },
        {
          "id": 514,
          "title": "反馈论坛",
          "icon": "http://i0.hdslb.com/bfs/archive/551a39b7539e64d3b15775295c4b2e13e5513b43.png",
          "need_login": 1,
          "uri": "bilibili://following/activity_group_landing/7?page_id=262&tab_module_id=19"
        }
      ],
      "style": 1,
      "button": {
      }
    },
    {
      "title": "更多服务",
      "items": [
        {
          "id": 407,
          "title": "联系客服",
          "icon": "http://i0.hdslb.com/bfs/archive/7ca840cf1d887a45ee1ef441ab57845bf26ef5fa.png",
          "uri": "bilibili://user_center/feedback"
        },
        {
          "id": 410,
          "title": "设置",
          "icon": "http://i0.hdslb.com/bfs/archive/e932404f2ee62e075a772920019e9fbdb4b5656a.png",
          "uri": "bilibili://user_center/setting"
        }
      ],
      "style": 2,
      "button": {
      }
    }
  ],
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
