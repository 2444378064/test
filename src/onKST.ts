// onKST客服通讯
import { request } from "./network/device-requester";

// export function initKSTHead() {
//   let url = window.location.href;
//   let head = document.head;
//   if (url.indexOf("360") != -1) {
//     document.head.append(
//       '<script type="text/javascript" src="https://rytk20.kuaishang.cn/bs/ks.j?cI=906697&fI=126835&ism=1" charset="utf-8"></script>'
//     );
//   } else if (url.indexOf("sogou") != -1) {
//     document.head.append(
//       '<script type="text/javascript" src="https://rytk20.kuaishang.cn/bs/ks.j?cI=906697&fI=126836&ism=1" charset="utf-8"></script>'
//     );
//   } else if (url.indexOf("sgppzx") != -1) {
//     document.head.append(
//       '<script type="text/javascript" src="https://rytk20.kuaishang.cn/bs/ks.j?cI=906697&fI=126836&ism=1" charset="utf-8"></script>'
//     );
//   } else if (
//     (url.indexOf("baidu") != -1 && url.indexOf("XDBD") != -1) ||
//     (url.indexOf("baidu") != -1 && url.indexOf("DGBD") != -1)
//   ) {
//     document.head.append("");
//   } else {
//     console.log("11");
//     // appendJQCDN("https://rytk20.kuaishang.cn/bs/ks.j?cI=906697&fI=118348&ism=1");
//     head.innerHTML = `${head.innerHTML}<script type="text/javascript" src="https://rytk20.kuaishang.cn/bs/ks.j?cI=906697&fI=118348&ism=1" charset="utf-8"></script>`;
//   }
// }
function appendJQCDN(src: any) {
  var head = document.head || document.getElementsByTagName("head")[0];
  if (src.indexOf("js") == -1) {
    //css
    var style = document.createElement("style");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", src);
    head.appendChild(style);
  } else {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute("src", src);
    head.appendChild(script);
  }
}
export function onKST(text: any, isMobile: any) {
  let url = window.location.href;
  first = false;
  console.log(waite);
  clearInterval(waite);
  let ksturl = "";
  let head = document.head;
  if (url.indexOf("360") != -1) {
    document.head.append(
      '<script type="text/javascript" src="https://rytk20.kuaishang.cn/bs/ks.j?cI=906697&fI=126835&ism=1" charset="utf-8"></script>'
    );
    ksturl =
      "https://rytk20.kuaishang.cn/bs/im.htm?cas=115942___906697&fi=126835&ism=1";
  } else if (url.indexOf("sogou") != -1) {
    document.head.append(
      '<script type="text/javascript" src="https://rytk20.kuaishang.cn/bs/ks.j?cI=906697&fI=126836&ism=1" charset="utf-8"></script>'
    );
    ksturl =
      "https://rytk20.kuaishang.cn/bs/im.htm?cas=115942___906697&fi=126836&ism=1";
  } else if (url.indexOf("sgppzx") != -1) {
    document.head.append(
      '<script type="text/javascript" src="https://rytk20.kuaishang.cn/bs/ks.j?cI=906697&fI=126836&ism=1" charset="utf-8"></script>'
    );
    ksturl =
      "https://rytk20.kuaishang.cn/bs/im.htm?cas=115942___906697&fi=126836&ism=1";
  } else if (
    (url.indexOf("baidu") != -1 && url.indexOf("XDBD") != -1) ||
    (url.indexOf("baidu") != -1 && url.indexOf("DGBD") != -1)
  ) {
    document.head.append("");
    ksturl =
      "https://rytk20.kuaishang.cn/bs/im.htm?cas=115942___906697&fi=118348&ism=1";
    console.log("不触发");
  } else {
    // console.log("11");
    // head.innerHTML=`${head.innerHTML}<script type="text/javascript" src="https://rytk20.kuaishang.cn/bs/ks.j?cI=906697&fI=118348&ism=1" charset="utf-8"></script>`
    // console.log("1111")
    appendJQCDN("https://rytk20.kuaishang.cn/bs/ks.j?cI=906697&fI=118348&ism=1");
    ksturl =
      "https://rytk20.kuaishang.cn/bs/im.htm?cas=115942___906697&fi=118348&ism=1";
  }

  let click_id = "";
  if (url.indexOf("shenma") !== -1) {
    click_id = "";
    if (url.indexOf("clickid=") !== -1) {
      click_id = url.substring(url.indexOf("clickid=") + 8, url.length);
      console.log(click_id);
    }
    let param = new FormData();
    param.append("type", "13");
    param.append("click_id", click_id);
    request({
      url: "http://hb.mdbake.com/index.php?m=guestbook&c=md&a=smadd",
      method: "post",
      data: param,
      headers: {
        "content-type": "application/json",
      },
    });
  }
  //请替换成"生成代码 - 链接地址" 中的链接地址,不要去其他地方复制
  let ksChatLink = ksturl;
  eval(
    (function(p: any, a: any, c: any, k: any, e: any, r: any) {
      e = function(c: any) {
        return (
          (c < a ? "" : e(parseInt(`${c / a}`))) +
          ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        );
      };
      if (!"".replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [
          function(e: string) {
            return r[e];
          },
        ];
        e = function() {
          return "\\w+";
        };
        c = 1;
      }
      while (c--)
        if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      return p;
    })(
      "h Q(a,b){3(!a)9 J;9 z D(\"(^|&)\"+b+\"=([^&]*)(&|$)\",\"i\").16(a)}h G(a,b){4 c=a.j('?');3(c==-1)9'';a=a.14(c+1,a.y);4 d=z D(\"(^|&)\"+b+\"=([^&]*)(&|$)\",\"i\");4 r=a.K(d);3(r!=L)9 O(r[2]);9''}3(12&&5.j('l=1')==-1){3(5.j('?')==-1){5+='?l=1'}6{5+='&l=1'}}4 7,A=5;4 v=5.11(\"?\");v.17(\"\");3(q P!='R'&&P==w){7=w}6 3(Q(v[1],'l')){7=J}6{7=w}h t(){4 a='';u{4 b=G(5,'X');3(b){4 c='';4 d=k.V.K(z D('(^| )'+b+'U'+b+'=([^;]*)(;|$)'));3(d!=L){c=O(d[2])}3(c){a+='&Z='+c}}}o(e){}4 f=\"\";u{3(N.k.n.y>0){f=N.k.n}}o(e){f=k.n}3(!f||f.y==0){f=k.n}a+='&S='+C(m.B.x);3(f)a+='&T='+C(f);3(s)a+='&H='+C(s);3(5.j('?')==-1){a='?'+a.W(1)}5+=a;3(!7){m.B.x=5}6{4 g=m.Y(5,'M');3(g){u{g.10()}o(e){}}6{m.B.x=5}}}3(q 8!='R'){4 p={};3(s)p['H']=s;3(7)p['13']='M';u{3(q 8.F=='h'){3(7&&A.j('15')==-1&&!8.E){8.E=A}8.F(p)}6 3(q 8.I=='h'){8.I(p)}6{t()}}o(e){t()}}6{t()}",
      62,
      70,
      "|||if|var|ksChatLink|else|openNewChatWin|KS|return||||||||function||indexOf|document|ism|window|referrer|catch||typeof||text|ksOpenLink|try|localArr|true|href|length|new|_ksChatLink|location|encodeURIComponent|RegExp|customUrl|openChatWin|getQueryString|sText|openChatLink|false|match|null|_blank|opener|unescape|ksUserDefinedOpenNewChatWin|checkQueryString|undefined|dp|ref|_KS_|cookie|substring|cas|open|vi|focus|split|isMobile|oTarget|substr|kuaishang|test|push".split(
        "|"
      ),
      0,
      {}
    )
  );
}
var first = true;
var waite: any = null;
function debounce(fn: any, delay: any) {
  // 客服弹窗防抖
  let timer: any = null;
  return () => {
    // if(timer){

    // }
    if (first) {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
      console.log("第一次");
    } else {
      console.log("不是第一次");
    }
    if (!first) {
      clearInterval(waite);
      waite = setInterval(onKST, 10000);
    }
  };
}

window.onscroll = debounce(onKST, 3000);
