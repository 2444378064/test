<template>
  <div class="home">
    <div class="tc_02" v-if="pop">
      <div class="close2" @click="text02"></div>
      <div class="title">熳点客服在线常见问题解答：</div>
      <ul>
        <li>
          <h4 @click="getClassMoney('chatwin')">熳点毕业学生薪资多少？</h4>
          <a @click="getClassMoney('chatwin')" href="#">咨询</a>
        </li>
        <li>
          <h4 @click="getClassMoney('chatwin')">现报名有什么优惠活动？</h4>
          <a href="#" @click="getClassMoney('chatwin')">咨询</a>
        </li>
        <li>
          <h4 @click="getClassMoney('chatwin')">零基础可以学得会吗？</h4>
          <a href="#" @click="getClassMoney('chatwin')">咨询</a>
        </li>
        <li>
          <h4 @click="getClassMoney('chatwin')">金牌全科烘焙班要学多久？</h4>
          <a href="#" @click="getClassMoney('chatwin')">咨询</a>
        </li>
        <li>
          <h4 @click="getClassMoney('chatwin')">学面包好还是学蛋糕好？</h4>
          <a href="#" @click="getClassMoney('chatwin')">咨询</a>
        </li>
        <li>
          <h4 @click="getClassMoney('chatwin')">赠送的课程还有名额吗？</h4>
          <a href="#" @click="getClassMoney('chatwin')">咨询</a>
        </li>
      </ul>
    </div>
    <div class="section1 icon">
      <van-swipe
        class="my-swipe"
        :show-indicators="false"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item>
          <img src="../assets/images/1_1.jpg" alt="" />
          <span class="button" @click="getClassMoney('chatwin')">免费试学</span>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/1_2.jpg" alt="" />
          <span
            class="button"
            style="opacity: 0"
            @click="getClassMoney('chatwin')"
            >查看学费</span
          >
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="section2 icon">
      <img src="../assets/images/2.jpg" alt="" />
      <span class="button" @click="getClassMoney('chatwin')">了解学费</span>
    </div>
    <div class="section3 icon">
      <img src="../assets/images/3.jpg" alt="" />
      <input
        class="input"
        type="text"
        v-model="phone"
        onfocus="this.placeholder=''"
        placeholder="请输入手机号码"
        onblur="this.placeholder='请输入手机号码'"
        style="
          bottom: 0.8rem;
          border: 2px solid rgba(241, 77, 64, 0.8);
          border-radius: 10px;
          left: 0.71rem;
          width: 3.44rem;
          height: 0.71rem;
          line-height: 0.71rem;
        "
      />
      <span
        class="button"
        @click="btmClick"
        style="
          bottom: 0.8rem;
          left: auto;
          right: 0.58rem !important;
          width: 2.33rem;
          height: 0.71rem;
          line-height: 0.71rem;
        "
        >立即领取</span
      >
    </div>
    <div class="section4 icon">
      <img src="../assets/images/4.jpg" alt="" />
      <span
        class="button"
        style="left: 0.56rem; width: 3.08rem; height: 0.71rem"
        @click="getClassMoney('chatwin')"
        >更多学习课程</span
      >
      <span
        class="button"
        style="left: 3.85rem; width: 3.08rem; height: 0.71rem"
        @click="getClassMoney('chatwin')"
        >在线咨询</span
      >
    </div>
    <div class="section5 icon">
      <img src="../assets/images/5.jpg" alt="" />
      <span class="button" @click="getClassMoney('chatwin')">课程费用</span>
    </div>
    <div class="section6 icon">
      <img src="../assets/images/6.jpg" alt="" />
      <span class="button" style="left: 2.07rem; width: 3.37rem; height: 0.71rem; bottom: 0.78rem" @click="getClassMoney('chatwin')">在线咨询</span>
    </div>
    <div class="section7 icon">
      <img src="../assets/images/7.jpg" alt="" />
    </div>
    <div class="section8 icon">
      <img src="../assets/images/8.jpg" alt="" />
      <span class="button" @click="getClassMoney('chatwin')">咨询就业指导+创业支持</span>
    </div>
    <div class="section8 icon">
      <img src="../assets/images/8.jpg" alt="" />
      <span class="button" @click="getClassMoney('chatwin')">在线咨询</span>
    </div>
    <section class="section_bottom">
      <a href="tel:400-862-6660"
        ><p class="dhzixun"><i></i>电话咨询</p></a
      >
      <p class="lingqu" @click="getClick"><i></i>领取配方</p>
      <p class="zixun" @click="getClassMoney('chatwin')"><i></i>在线咨询</p>
    </section>
    <div class="form-box" v-if="flag">
      <p>免费领取</p>
      <div class="close" @click="closeClick">×</div>
      <input
        class="input"
        type="number"
        v-model="phone"
        onfocus="this.placeholder=''"
        placeholder="请输入手机号码"
        onblur="this.placeholder='请输入手机号码'"
        style="
          bottom: 2.1rem;
          left: calc(50% - 5.21rem / 2);
          width: 5.21rem;
          height: 0.71rem;
          line-height: 0.71rem;
        "
      />
      <input
        class="input"
        type="text"
        v-model="name"
        onfocus="this.placeholder=''"
        placeholder="请输入姓名"
        onblur="this.placeholder='请输入姓名'"
        style="
          bottom: 1.2rem;
          left: calc(50% - 5.21rem / 2);
          width: 5.21rem;
          height: 0.71rem;
          line-height: 0.71rem;
        "
      />
      <span class="button" @click="btmClick">免费领取</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { request } from "../network/device-requester";
import { onKST } from "../onKST";
@Component
export default class Home extends Vue {
  private phone: string = "";
  private name: string = "";
  private mobile!: any;
  private channelplatform: string = "";
  private url: string = "";
  private client: string = "";
  private click_id: string = "";
  private remark: string = "";
  private conversionUrl: string = "";
  private qd_name: string = "";
  private success_url: string = "";
  private flag: boolean = false;
  private pop: boolean = false;
  created() {
    this.conversion();
  }
  getClassMoney(param: string) {
    onKST(param, false);
  }
  btmClick() {
    this.shenma();
    this.nameData();
  }
  getNowFormatDate() {
    // 获取当前时间
    let date = new Date();
    let seperator1 = "-";
    let seperator2 = ":";
    let month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let currentdate =
      date.getFullYear() +
      seperator1 +
      month +
      seperator1 +
      strDate +
      " " +
      hours +
      seperator2 +
      minutes +
      seperator2 +
      seconds;
    return currentdate;
  }
  // 获取设备
  shenma() {
    this.client = "";
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|ipad)/i)) {
      this.client = "移动端";
    } else {
      this.client = "pc";
    }
    this.click_id = ""; // 神马回传，click_id初始化
    this.url = window.location.href;
    this.channelplatform = "";
    if (this.url.indexOf("360") !== -1) {
      // 渠道平台判断
      this.channelplatform = "360推广";
    } else if (this.url.indexOf("baidu") !== -1) {
      this.channelplatform = "百度推广";
    } else if (this.url.indexOf("shenma") !== -1) {
      this.channelplatform = "神马推广";
      if (this.url.indexOf("clickid=") !== -1) {
        // 神马回传
        let param = new FormData();
        this.click_id = this.url.substring(
          this.url.indexOf("clickid=") + 8,
          this.url.length
        ); // 截取click_id
        param.append("type", "5");
        param.append("click_id", this.click_id);
        this.facilityRequest(param);
      }
      console.log(this.click_id);
    } else if (this.url.indexOf("sogou") !== -1) {
      this.channelplatform = "搜狗推广";
    } else if (this.url.indexOf("toutiao") !== -1) {
      this.channelplatform = "头条推广";
    } else if (this.url.indexOf("zhidao") !== -1) {
      this.channelplatform = "知道合伙人";
    } else if (this.url.indexOf("sgppzx") !== -1) {
      this.channelplatform = "搜狗品牌甄选";
    } else if (this.url.indexOf("ucxxl") !== -1) {
      this.channelplatform = "UC信息流";
    }
  }
  // 获取姓名号码
  nameData() {
    /*这段cookie暂时没用，删除不可预料*/
    // let getSec = (str: any) => {
    //   let str1 = str.substr(0, str.length - 1); //时间数值
    //   let str2 = str.substr(str.length - 1, 1); //时间单位
    //   if (str2 == 's') {
    //     return str1 * 1000;
    //   } else if (str2 == 'm') {
    //     return str1 * 60 * 1000;
    //   } else if (str2 == 'h') {
    //     return str1 * 60 * 60 * 1000;
    //   } else if (str2 == 'd') {
    //     return str1 * 24 * 60 * 60 * 1000;
    //   }
    // };
    // let addCookie = (name: any, value: any, time: any) => {
    //   let strSec = getSec(time);
    //   let exp = new Date();
    //   exp.setTime(exp.getTime() + strSec * 1);
    //   //设置cookie的名称、值、失效时间
    //   document.cookie = name + '=' + value + ';expires=' + exp.toGMTString();
    // };
    // //获取cookie
    // let getCookie = (name: any) => {
    //   //获取当前所有cookie
    //   let strCookies = document.cookie;
    //   //截取变成cookie数组
    //   let array = strCookies.split(';');
    //   //循环每个cookie
    //   for (let i = 0; i < array.length; i++) {
    //     //将cookie截取成两部分
    //     let item = array[i].split('=');
    //     //判断cookie的name 是否相等
    //     if (item[0] == name) {
    //       return item[1];
    //     }
    //   }
    //   return null;
    // };
    this.mobile = /^1[3,4,5,8,9,6,7]\d{9}$/;
    // 自动填充号码记录cookle、个别页面使用、删除不可预料
    let cookie_key = this.name;
    let cookie_val = this.phone;
    let cookie_time = "30d";
    // addCookie(escape(cookie_key), cookie_val, cookie_time);
    // console.log(addCookie(cookie_key, cookie_val, cookie_time));
    // let result = getCookie(cookie_key);
    // if (result !== null) {
    //   console.log('存在cookie:' + cookie_key);
    // } else {
    //   console.log('不存在cookie: + cookie_key');
    // }

    if (this.phone === "" || !this.mobile.test(this.phone)) {
      alert("请正确输入您的手机号码！");
      this.phone = "";
      this.name = "";
      return false;
    } else {
      if (this.name === undefined) {
        this.name = this.phone;
      }
      this.getData();
    }
    // 这跟下面的有矛盾了
    // if (this.name === '') {
    //   alert('请完善信息');
    //   $('.form-box-button').removeAttr('disabled');
    //   return false;
    // }
  }

  // 浏览记录，用于计算转化率
  conversion() {
    this.conversionUrl = window.location.href;
    console.log(this.conversionUrl);
    if (this.conversionUrl.indexOf("360") !== -1) {
      this.qd_name = "360推广";
    } else if (this.conversionUrl.indexOf("baidu") !== -1) {
      this.qd_name = "百度推广";
    } else if (this.conversionUrl.indexOf("sogou") !== -1) {
      this.qd_name = "搜狗推广";
    } else if (this.conversionUrl.indexOf("shenma") !== -1) {
      this.qd_name = "神马推广";
    } else if (this.conversionUrl.indexOf("zhidao") !== -1) {
      this.qd_name = "知道合伙人";
    } else if (this.conversionUrl.indexOf("sgppzx") !== -1) {
      this.qd_name = "搜狗品牌甄选";
    } else {
      this.qd_name = "未知";
    }
    // 提取网页名字
    let i = this.conversionUrl.lastIndexOf("/");
    let str = this.conversionUrl.substr(
      this.conversionUrl.lastIndexOf("/", i - 1)
    );
    let str2 = str.substr(0, str.lastIndexOf("/", i - 1));
    this.conversionUrl = str2.substr(1);
    this.conversionRequest();
  }

  // 获取数据
  getData() {
    let param = new FormData();
    let channel = "后台留言";
    let remark = "/学习时间:7天 / 学习目的:个人兴趣";
    param.append("mobile", this.phone);
    param.append("name", this.name);
    param.append("channel", channel);
    param.append("channelplatform", this.channelplatform);
    param.append("url", this.url);
    param.append("client", this.client);
    param.append("registdate", this.getNowFormatDate());
    param.append("click_id", this.click_id);
    param.append("remark", remark);
    this.dataRequest(param);
  }

  // 浏览记录，用于计算转化率的请求
  conversionRequest() {
    request({
      url: "/index.php?m=guestbook&c=md&a=add",
      method: "get",
      params: {
        qd_name: this.qd_name,
        url: this.conversionUrl,
        primary_url: window.location.href,
      },
    }).then((res) => {
      if (res) {
        console.log("url记录成功");
      } else {
        console.log("url记录失败");
      }
    });
  }
  facilityRequest(param: any) {
    request({
      url: "/index.php?m=guestbook&c=md&a=smadd",
      method: "post",
      data: param,
      headers: {
        "content-type": "application/json",
      },
    });
  }
  // 表单请求，发送电话姓名
  dataRequest(param: any) {
    request({
      url: "/index.php?m=guestbook&c=ceshi&a=mfstbs",
      method: "post",
      data: param,
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      if (res) {
        // 转化率统计
        this.qd_name = "";
        this.success_url = window.location.href;
        if (this.success_url.indexOf("?") !== -1) {
          this.success_url = this.success_url.substring(
            0,
            this.success_url.indexOf("?")
          );
        }
        console.log(this.success_url);
        if (this.success_url.indexOf("360") !== -1) {
          this.qd_name = "360推广";
        } else if (this.success_url.indexOf("baidu") !== -1) {
          this.qd_name = "百度推广";
        } else if (this.success_url.indexOf("sogou") !== -1) {
          this.qd_name = "搜狗推广";
        } else if (this.success_url.indexOf("sgppzx") !== -1) {
          this.qd_name = "搜狗品牌甄选";
        } else if (this.success_url.indexOf("shenma") !== -1) {
          this.qd_name = "神马推广";
        } else if (this.success_url.indexOf("zhidao") !== -1) {
          this.qd_name = "知道合伙人";
        } else if (this.success_url.indexOf("ucxxl") !== -1) {
          this.qd_name = "UC信息流";
        } else {
          this.qd_name = "未知";
        }
        let i = this.success_url.lastIndexOf("/");
        let str = this.success_url.substr(
          this.success_url.lastIndexOf("/", i - 1)
        );
        let str2 = str.substr(0, str.lastIndexOf("/", i - 1));
        this.success_url = str2.substr(1);
        this.successTable();
      }
    });
  }

  // 表单提交的转化率
  successTable() {
    let param = new FormData();
    param.append("qd_name", this.qd_name);
    param.append("url", this.success_url);
    param.append("area", "0");
    param.append("primary_url", window.location.href);
    request({
      url: "/index.php?m=guestbook&c=md&a=create",
      method: "post",
      data: param,
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      this.name = this.phone = "";
      if (res) {
        alert("提交成功，我们尽快给您答复");
        this.getClassMoney("chatwin");
        console.log("提交表单转化成功");
      } else {
        console.log("提交表单转化成功");
      }
    });
  }

  getClick() {
    this.flag = true;
  }
  closeClick() {
    this.flag = false;
  }
  text(e: any) {
    this.pop = !this.pop;
  }
  text02(e: any) {
    this.pop = false;
    e.stopPropagation();
    setInterval(() => {
      this.pop = true;
    }, 20000);
  }
}
</script>
<style lang="less" scoped>
.home {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #e4f0ee;
  font-weight: bold;
  .icon {
    position: relative;
    img {
      display: block;
      width: 100%;
    }
  }
  .van-swipe-item {
    position: relative;
  }
  .input {
    position: absolute;
    z-index: 2;
    display: block;
    background: #fff;
    cursor: pointer;
    border-radius: 0.05rem;
    border: 1px solid #a0b372;
    font-size: 0.375rem;
    text-align: center;
    color: #7f7f7f;
  }
  .button {
    position: absolute;
    z-index: 2;
    display: block;
    background: #ffff0f;
    cursor: pointer;
    border-radius: 5px;
    bottom: 0.39rem;
    left: calc(50% - 5.21rem / 2);
    font-size: 0.375rem;
    width: 5.21rem;
    height: 0.71rem;
    line-height: 0.71rem;
    text-align: center;
    color: #a40013;
  }
}
</style>
<style lang="less" scoped>
.home {
  margin-bottom: 2rem;
}
.section_bottom {
  width: 100%;
  padding-top: 0.2rem;
  height: 1.39rem;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background: #fff;
}
.section_bottom p {
  float: left;
  display: block;
  text-align: center;
  font-size: 0.278rem;
  color: #ff6069;
}
.section_bottom p:nth-child(1) {
  margin-left: 0.8rem;
}

.section_bottom .dhzixun i {
  background: url("../assets/images/phone.jpg") 0 0 no-repeat;
  background-size: 100%;
  width: 0.69rem;
  height: 0.69rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.05rem;
}
.section_bottom .lingqu {
  margin: 0 1.3rem;
}
.section_bottom .lingqu i {
  background: url("../assets/images/lingqu.jpg") 0 0 no-repeat;
  background-size: 100%;
  width: 0.69rem;
  height: 0.69rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.05rem;
}
.section_bottom .zixun i {
  background: url("../assets/images/lt.jpg") 0 0 no-repeat;
  background-size: 100%;
  width: 0.69rem;
  height: 0.69rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.05rem;
}
.form-box {
  position: fixed;
  z-index: 99;
  width: 100%;
  background: #ffffff;
  bottom: 0;
  height: 4rem;
  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #fff;
  }
  .button {
    background: #ea4a48;
    color: #fff;
  }
  .input {
    background: #ea4a48;
    color: #fff;
  }
  p {
    position: absolute;
    font-size: 0.375rem;
    z-index: 99;
    width: 100%;
    top: 0.3rem;
    color: black;
    text-align: center;
    margin: 0 auto;
  }
  .close {
    color: black;
    font-size: 0.375rem;
    z-index: 100;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
  }
}
</style>

<style lang="less" scoped>
.tc_02 {
  width: 5rem;
  height: 6rem;
  position: fixed;
  top: 0;
  bottom: 0;
  color: black;
  background: #fff;
  z-index: 999;
  left: 0;
  right: 0;
  margin: auto auto;
  border-radius: 0.15rem;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.1);
  opacity: 1;
  transition: opacity 1.5s;
}

.tc_02.act {
  opacity: 1;
  z-index: 9999;
}
.tc_02.act .close2 {
  background: url("../assets/images/close.png") 0 0 no-repeat;
  // background-size: 100%;
  background-size: 0.25rem;
  width: 0.38rem;
  height: 0.38rem;
  position: absolute;
  right: -0.1rem;
  top: -0.1rem;
  cursor: pointer;
}
.tc_02 .close2 {
  background: url("../assets/images/close.png") 0 0 no-repeat;
  background-size: 100%;
  // background-size: 0.25rem;
  width: 0.38rem;
  height: 0.38rem;
  position: absolute;
  right: -0.1rem;
  top: -0.1rem;
  cursor: pointer;
}

.tc_02 .title {
  height: 0.81rem;
  width: 5rem;
  text-align: center;
  line-height: 0.81rem;
  font-size: 0.21rem;
  background: #e63c3d url("../assets/images/wh.png") 0 0 no-repeat;
  background-size: 0.25rem;
  font-weight: bold;
  color: #fff;
  background-position: 0.6rem 0.28rem;
  border-radius: 0.15rem 0 0 0;
}
.tc_02 ul {
  width: 3.75rem;
  height: 5rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.1rem;
}
.tc_02 ul li {
  line-height: 0.8rem;
  font-size: 0.24rem;
  height: 0.8rem;
  border-bottom: 1px solid #e9e9e9;
}
.tc_02 ul li h4 {
  font-weight: normal;
  float: left;
  cursor: pointer;
}
.tc_02 ul li a {
  float: right;
  position: relative;
  background: url("../assets/images/xinxi.png") 0 0 no-repeat;
  padding-right: 0.33rem;
  background-size: 0.25rem;
  background-position: 0.5rem 0.3rem;
}
.tc_02 ul li a::before {
  content: "";
  width: 0.01rem;
  height: 0.26rem;
  background: #e9e9e9;
  position: absolute;
  left: -0.12rem;
  top: 50%;
  margin-top: -0.13rem;
}
</style>
