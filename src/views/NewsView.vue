<template>
  <div class="news-div">
    <div class="first-block">
      <img alt="" class="firstbgimg-css" src="@/assets/images/news/bg.png" />
      <img alt="" class="firstmbgimg-css" src="@/assets/images/news/bgnews.png" />
      <div class="overonbg-block ">
        <div class="header-firblock">
          <div class="menu-child-block">
            <RouterLink to="/">
              <span class="menu-text" >MYSTAL官網</span>
            </RouterLink>
            <RouterLink to="/preorder">
              <span class="menu-text">事前預約</span>
            </RouterLink>
            <div class="logo-block">
              <img alt="Project logo" class="logo-css" src="@/assets/images/mainlogo.png" width="125" height="125" />
              <span class="logo-text">米茲塔爾</span>
            </div>
            <RouterLink to="/news">
              <span class="menu-text">新聞</span>
            </RouterLink>
            <span class="menu-text" @click="gotoNewPage('gamePoint')">儲值購點</span>
          </div>
          <div class="m-header">
            <div class="logo-block">
              <img class="logo-css" src="@/assets/images/mainlogo.png" width="125" height="125" />
              <p class="logo-text">米茲塔爾</p>
            </div>
          </div>
        </div>
        <div class="header-secchild">
          <div class="row-head-block">
            <div class="each-div fade-in-text4">
              <img alt="Project logo" class="youtube-css" src="@/assets/images/youtube-icon.png" />
              <span class="youtube-text">Youtube</span>
            </div>
            <div class="each-div fade-in-text3">
              <img alt="Project logo" class="discord-css" src="@/assets/images/discord-icon1.png" />
              <span class="youtube-text">Discord</span>
            </div>
            <div class="each-div fade-in-text2">
              <img alt="Project logo" class="facebook-css" src="@/assets/images/facebook-icon.png" />
              <span class="youtube-text">Facebook</span>
            </div>
          </div>
          <div class="each-sec-div fade-in-text5">
            <img alt="Project logo" class="message-css" src="@/assets/images/message-icon.png" />
            <span class="each-sec-text">前往論壇</span>
            <img alt="Project logo" class="rectangle-css" src="@/assets/images/rectangle-icon.png" />
          </div>
        </div>
      </div>
      <div class="menu-block" @click="gotoFrontPage()">
        <img class="menu-css" src="@/assets/images/mobile/btn_menu.png" />
      </div>
      <div class="overonbg-block1">
        <div class="overlap1">
        </div>
        <div class="overlap2">
          <img alt="" class="playstore-css" src="@/assets/images/playstore.png" />
          <img alt="" class="appstore-css" src="@/assets/images/appstore.png" />
        </div>
        <div class="overlap3">
          <img alt="" class="messenger-css" src="@/assets/images/messenger.png" />
        </div>
      </div>
      <div class="m-overblock">
        <div class="m-innerover">
          <div class="overlap2">
            <img class="playstore-css" src="@/assets/images/playstore.png" />
            <img class="appstore-css" src="@/assets/images/appstore.png" />
          </div>
        </div>
      </div>
      <div class="open-menu" v-if="showMenu">
        <div class="each-item">
          <p class="menu-item">MYSTAL官網</p>
          <p class="menu-item">事前預約</p>
          <p class="menu-item" @click="gotoPage('news')">新聞</p>
          <p class="menu-item">儲值購點</p>
        </div>
        <div class="each-media">
          <div class="left-media">
            <div class="m-fac-div">
              <img class="m-facebook" src="@/assets/images/facebook-icon.png" />
            </div>
            <div class="m-fac-div">
              <img class="m-youtube" src="@/assets/images/youtube-icon.png" />
            </div>
            <div class="m-fac-div">
              <img class="m-discord" src="@/assets/images/discord-icon1.png" />
            </div>
          </div>
          <div class="right-media">
            <div class="m-rig-div">
              <img class="m-msg" src="@/assets/images/message-icon.png" />
              <p class="msg-text">官方論壇</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-block">
      <div class="inner-block">
        <div class="left-flower">
          <img class="crystal-css" src="@/assets/images/news/crystalel.png" />
        </div>
        <div class="middel-div">
          <div v-for="i in 5" :key="i" class="secoeach" @click="selectItem(i)" :class="selectedActive == i ? 'active-act' : 'noactive-act'">
            <div class="shawdow-wrap">
              <div class="larrowcss"></div>
            </div>
            <span class="title-text" v-if="i == 1">綜合</span>
            <span class="title-text" v-if="i == 2">新聞</span>
            <span class="title-text" v-if="i == 3">公告</span>
            <span class="title-text" v-if="i == 4">活動</span>
            <span class="title-text" v-if="i == 5">資料</span>
            <div class="shawdow-wrap">
              <div class="rarrowcss"></div>
            </div>
          </div>
          <!-- <div class="secoeach noactive-act">
            <div class="shawdow-wrap">
              <div class="larrowcss"></div>
            </div>
            <span class="title-text">事前預約</span>
            <div class="shawdow-wrap">
              <div class="rarrowcss"></div>
            </div>
          </div>
          <div class="secoeach noactive-act">
            <div class="shawdow-wrap">
              <div class="larrowcss"></div>
            </div>
            <span class="title-text">事前預約</span>
            <div class="shawdow-wrap">
              <div class="rarrowcss"></div>
            </div>
          </div>
          <div class="secoeach noactive-act">
            <div class="shawdow-wrap">
              <div class="larrowcss"></div>
            </div>
            <span class="title-text">事前預約</span>
            <div class="shawdow-wrap">
              <div class="rarrowcss"></div>
            </div>
          </div>
          <div class="secoeach noactive-act">
            <div class="shawdow-wrap">
              <div class="larrowcss"></div>
            </div>
            <span class="title-text">事前預約</span>
            <div class="shawdow-wrap">
              <div class="rarrowcss"></div>
            </div>
          </div> -->
        </div>
        <div class="right-flower">
          <img class="crystal-css" src="@/assets/images/news/crystaler.png" />
        </div>
      </div>
      <div class="block2">
        <hr class="hrcss">
      </div>
      <div class="block3">
        <div class="row1" v-if="selectedActive == 1 || selectedActive == 3">
          <p class="commontitle1 titlecolor1">【公告】</p>
          <p class="text-title2">主題內容主題內容主題內容主題內容主題內容主題內容</p>
          <p class="text-title3">1-18</p>
        </div>
        <div class="row1" v-if="selectedActive == 1 || selectedActive == 2">
          <p class="commontitle1 titlecolor2">【新聞】</p>
          <p class="text-title2">主題內容主題內容主題內容主題內容主題內容主題內容</p>
          <p class="text-title3">1-18</p>
        </div>
        <div class="row1" v-if="selectedActive == 1 || selectedActive == 4">
          <p class="commontitle1 titlecolor3">【活動】</p>
          <p class="text-title2">主題內容主題內容主題內容主題內容主題內容主題內容</p>
          <p class="text-title3">1-17</p>
        </div>
        <div class="row1" v-if="selectedActive == 1 || selectedActive == 5">
          <p class="commontitle1 titlecolor4">【資料】</p>
          <p class="text-title2">主題內容主題內容主題內容主題內容主題內容主題內容</p>
          <p class="text-title3">12-30</p>
        </div>
      </div>
      <div class="block4">
        <p class="btn-text">載入更多</p>
      </div>
    </div>
    <div class="footer-block">
      <div class="foot-left">
        <div class="foot-left-row1">
          <img alt="" class="studioimg" src="@/assets/images/studioimg.png" />
          <span class="studio-text">OOOO Studio </span>
        </div>
        <div>
          <span class="left-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nulla non est luctus fermentum. Integer ut iaculis nulla, vitae malesuada </span>
        </div>
      </div>
      <div class="foot-right">
        <div class="right-inner">
          <img alt="" class="dateimg" src="@/assets/images/dateimg.png" />
          <p class="right-content" align="justify">
            本遊戲分級為：輔12 <br>
            本遊戲內容涉及「不當言語」- 一般不雅但無不良隱喻 之言語，「性」-遊戲角色穿著凸顯性特徵之服飾或裝扮但不涉及性暗示。<br>
            依軟體分級辦法分類為輔12級，12歲以上之人始得使用，本遊戲部分內容需另行支付費用。<br>
            長時間進行遊戲，請注意休息，切勿沉迷遊戲。<br>
            本遊戲由OOOOO有限公司代理營運。<br>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      selectedActive: 1,
      showMenu: false,
      showMobile: false
    }
  },
  components: {
    
  },
  created() {
    if(this.isMobile()) {
    } else {
    }
  },
  mounted() {
    window.addEventListener('resize', this.isMobile);
  },
  watch: {
    showMenu: function (newVal, oldVal) {
      console.log("watch newVal=", newVal, "oldVal=", oldVal);
      this.fixedmenu();
    },
    showMobile: function(newVal, oldVal) {
      console.log("watch newVal=", newVal, "oldVal=", oldVal);
    }
  },
  methods: {
    gotoFrontPage() {
      // this.showMenu = !this.showMenu
      this.$router.push('/');
    },
    openMenu() {
      this.showMenu = !this.showMenu
    },
    gotoNewPage(val) {
      const routeData = this.$router.resolve({name: val});
      window.open(routeData.href, '_blank');
    },
    fixedmenu() {
      if(this.showMenu) {
        $('body').addClass("fixed-position");
      } else {
        $('body').removeClass("fixed-position");
      }
    },
    selectItem(val) {
      this.selectedActive = val
    },
    isMobile() {
      if( screen.width <= 768) {
        this.showMobile = true;
        return true;
      }
      else {
        this.showMobile = false
        return false;
      }
    },
  },
  setup() {
    
  },
});
</script>

<style lang="scss" scoped>
// @media (min-width: 1024px) {
  .news-div {
    .open-menu {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        z-index: 10;
        max-height: 100vh;
        min-height: 100vh;
        position: absolute;
        width: 100%;
        position: fixed;
        top: 0;
        background: rgba(15, 23, 29, 0.75);
        backdrop-filter: blur(5px);
        .each-item {
          text-align: center;
          top: 100px;
          .menu-item {
            font-weight: 900;
            font-size: 24px;
            text-shadow: 0px 0px 18px #FFEDC9;
            padding-bottom: 2rem;
            color: #FFF;
          }
        }
        .each-media {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin: 10rem 2rem 0;
          .left-media {
            text-align: center;
            .m-fac-div {
              margin-top: 1.5rem;
              .m-facebook {
                width: 33px;
                height: 33px;
              }
              .m-youtube {
                width: 36px;
                height: 25px;
              }
              .m-discord {
                width: 41px;
                height: 31px;
                display: block;
              }
            }
          }
          .right-media {
            text-align: center;
            .m-rig-div {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .m-msg {
                width: 46px;
                height: 46px;
                display: block;
              }
              .msg-text {
                font-weight: 900;
                font-size: 16px;
                text-shadow: 0px 0px 18px #FFEDC9;
              }
            }
          }
        }
      }
    }
    .first-block {
      position: relative;
      .firstbgimg-css {
        width: 100%;
        margin-bottom: -7px;
        display: block;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      .firstmbgimg-css {
        display: none;
        @media screen and (max-width: 768px) {
          width: 100%;
          display: block;
        }
      }
      .overonbg-block {
        position: absolute;
        top: 0;
        width: 100%;

        position: fixed;
        z-index: 10;
      }
      .menu-block {
        display: none;
        @media screen and (max-width: 768px) {
          display: block;
          position: fixed;
          top: 2rem;
          right: 1.3rem;
          z-index: 11;
          .menu-css {
            width: 64px;
            display: block;
          }
        }
      }
      
      .overonbg-block1 {
        position: absolute;
        bottom: 2rem;
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 0 2rem;
        
        @media screen and (max-width: 768px) {
          display: none;
        }
        .overlap1 {
          width: 32%;
          visibility: hidden;
        }
        .overlap2 {
          width: 32%;
          display: flex;

          visibility: hidden;
          animation-name: bottomToTop;
          animation-duration: 1s;
          animation-timing-function: linear;
          animation-delay: 2s;
          animation-fill-mode: forwards; // hidden to visible
          .playstore-css {
            width: 293.9px;
            height: 85.27px;
            margin-right: 1rem;
          }
          .appstore-css {
            width: 293.9px;
            height: 85.27px;
          }
        }
        @keyframes bottomToTop {
          0% {
            visibility: hidden;
            transform: translateY(200px);
          }
          100% {
            visibility: visible;
            transform: translateY(0px);
          }
        }
        .overlap3 {
          width: 32%;
          visibility: hidden;
        }
      }
      .m-overblock {
        display: none;
        @media screen and (max-width: 768px) {
          display: block;
          position: absolute;
          bottom: 2.5rem;
          width: 100%;
          .overlap1 {
            visibility: hidden;
            animation-name: mleftToRight;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-delay: 2s;
            animation-fill-mode: forwards; // hidden to visible

            padding: 0 10% 9% 9%;
          }
          @keyframes mleftToRight {
            0% {
              visibility: hidden;
              transform: translateX(-50px);
            }
            100% {
              visibility: visible;
              transform: translateX(0px);
            }
          }
          .m-innerover {
            display: flex;
            .overlap2 {
              display: flex;
              justify-content: space-evenly;

              visibility: hidden;
              animation-name: bottomToTop;
              animation-duration: 1s;
              animation-timing-function: linear;
              animation-delay: 2s;
              animation-fill-mode: forwards; // hidden to visible
              .playstore-css {
                width: 37%;
              }
              .appstore-css {
                width: 37%;
              }
            }
          }
        }
      }
      .header-firblock {
        background: rgba(23, 30, 44, 0.55);
        backdrop-filter: blur(8.5px);
        -webkit-animation: top 2s;
        @media screen and (max-width: 768px) {
          background: none;
          backdrop-filter: none;
          -webkit-animation: none;
        }
        .menu-child-block {
          display: flex;
          width: 80%;
          max-width: 1920px;
          height: 79px;
          line-height: 79px;
          margin: 0 auto;
          justify-content: center;
          @media screen and (max-width: 768px) {
            display: none;
          }
          .menu-text {
            font-weight: 900;
            font-size: 24px;
            color: #FFF;
            text-shadow: 0px 0px 18px #FFEDC9;
            margin: 0 1rem;
          }
          .logo-block {
            display: flex;
            flex-direction: column;
            .logo-css {
              width: 292px;
              height: 130px;
              filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.25));
              margin: 0 1rem;
            }
            .logo-text {
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              letter-spacing: 1.5em;
              color: #F9DB84;
              text-shadow: 0px 4px 4px rgba(23, 31, 47, 0.1);
              line-height: 1;
            }
          }
        }
        .m-header {
          display: none;
          @media screen and (max-width: 768px) {
            display: block;
            position: relative;
            width: 100%;
            .logo-block {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              padding-top: 2rem;
              .logo-css {
                width: 185px;
                height: 83px;
                filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.25));
                margin: 0 1rem;
              }
              .logo-text {
                letter-spacing: 1.5em;
                margin-left: 1.5em;
                color: #F9DB84;
                text-shadow: 0px 4px 4px rgba(23, 31, 47, 0.1);
                line-height: 1;
                margin-top: -10px;
              }
            }
          }
        }
      }
      .header-secchild {
        display: flex;
        flex-direction: column;
        align-items: end;

        @media screen and (max-width: 768px) {
          display: none;
        }
        .row-head-block {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          
          margin-right: 10px;
          width: 283px;
          .each-div {
            background: rgba(80, 96, 112, 0.5);
            border: 2px solid #FFFFFF;
            backdrop-filter: blur(7.5px);

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 10px 1rem;
            position: relative;
            width: 87px;
            .youtube-css {
              width: 33px;
              height: 23px;
            }
            .discord-css {
              width: 38px;
              height: 38px;
            }
            .facebook-css {
              width: 30px;
              height: 29px;
            }
            .icon-text {
              position: absolute;
              bottom: 10px;
            }
            .youtube-text {
              font-weight: 600;
              font-size: 14px;
              color: #FFF;
            }
          }
          
          // 4
          .fade-in-text4 {
            animation: fadeIn1 4s;
            -webkit-animation: fadeIn1 4s;
            -moz-animation: fadeIn1 4s;
            -o-animation: fadeIn1 4s;
            -ms-animation: fadeIn1 4s;
          }
          .fade-in-text3 {
            animation: fadeIn1 2s;
            -webkit-animation: fadeIn1 2s;
            -moz-animation: fadeIn1 2s;
            -o-animation: fadeIn1 2s;
            -ms-animation: fadeIn1 2s;
          }
          .fade-in-text2 {
            animation: fadeIn1 1s;
            -webkit-animation: fadeIn1 1s;
            -moz-animation: fadeIn1 1s;
            -o-animation: fadeIn1 1s;
            -ms-animation: fadeIn1 1s;
          }
          @keyframes fadeIn1 {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          @-moz-keyframes fadeIn1 {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          @-webkit-keyframes fadeIn1 {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          @-o-keyframes fadeIn1 {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          @-ms-keyframes fadeIn1 {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        }
        .each-sec-div {
          background: rgba(80, 96, 112, 0.5);
          border: 2px solid #FFFFFF;
          backdrop-filter: blur(7.5px);

          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 1.5rem;
          position: relative;
          width: 283px;
          margin-top: 5px;
          margin-right: 10px;

          visibility: hidden;
          animation-name: rightToLeft1;
          animation-duration: 0.3s;
          animation-timing-function: linear;
          animation-delay: 0.3s;
          animation-fill-mode: forwards; // hidden to visible
          
          .message-css {
            width: 31px;
            height: 31px;
          }
          .rectangle-css {
            width: 35px;
            height: 25px;
          }
          .each-sec-text {
            font-weight: 600;
            font-size: 20px;
            color: #FFF;
            text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.8);
          }
        }
        @keyframes rightToLeft1 {
          0% {
            visibility: hidden;
            transform: translateX(10px);
          }
          100% {
            visibility: visible;
            transform: translateX(0px);
          }
        }
      }

      .first-title-text {
        font-weight: 800;
        font-size: 64px;
        color: #FFFFFF;
        text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.88);
      }
      .first-content-text {
        font-weight: 800;
        font-size: 32px;
        color: #FFFFFF;
        text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.88);
        line-height: 1.3;
      }
    }
    .first-block:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;

      background: linear-gradient(180deg, #20237B 0%, rgba(147, 152, 255, 0) 60.24%);
      transform: rotate(-180deg);
    }
    .second-block {
      background: #181b61;
      padding-top: 3rem;
      .inner-block {
        display: flex;
        justify-content: center;
        @media screen and (max-width: 768px) {
          overflow: auto;
          justify-content: flex-start;

          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .left-flower {
          display: flex;
          align-items: center;
          margin-right: 2rem;
          @media screen and (max-width: 768px) {
            margin-right: unset;
            padding: 0 1rem;
          }
        }
        .right-flower {
          display: flex;
          align-items: center;
          margin-left: 2rem;
          @media screen and (max-width: 768px) {
            margin-left: unset;
            padding: 0 1rem;
          }
        }
        .crystal-css {
          width: 52px;
          height: 62px;
          filter: drop-shadow(0px 0px 12px #5BEBFF);
          @media screen and (max-width: 768px) {
            width: 27px;
            height: 32px;
          }
        }
        .middel-div {
          display: flex;
          justify-content: space-between;
          width: 75%;
          @media screen and (max-width: 768px) {
            width: unset;
          }
          .active-act {
            border: 4px solid #5BEBFF;
            margin-right: 4px;
            @media screen and (max-width: 768px) {
              background: rgba(23, 47, 172, 0.65);
              border: 2px solid #5BEBFF;
              border-radius: 12px;
            }
            .shawdow-wrap {
              filter: drop-shadow(0px 0px 10px rgb(235, 243, 235));
              .larrowcss {
                clip-path: polygon(0 50%, 78% 0, 100% 50%, 78% 99%);
                width: 35px;
                height: 20px;
                background: #5BEBFF;
                box-shadow: 0px 0px 20px rgba(91, 235, 255, 0.85);
                @media screen and (max-width: 768px) {
                  width: 15px;
                  height: 12px;
                }
              }
              .rarrowcss {
                clip-path: polygon(0 50%, 22% 0, 100% 50%, 22% 99%);
                height: 20px;
                width: 35px;
                background: #5BEBFF;
                box-shadow: 0px 0px 20px rgba(91, 235, 255, 0.85);
                @media screen and (max-width: 768px) {
                  width: 15px;
                  height: 12px;
                }
              }
            }
            .title-text {
              font-weight: 500;
              font-size: 1.6vw;
              color: #5BEBFF;
              text-shadow: 0px 0px 12px rgba(91, 235, 255, 0.8);
              margin: 0 20px;
              @media screen and (max-width: 768px) {
                margin: 0 10px;
                font-size: 1rem;
              }
            }
          }
          .noactive-act {
            border: 4px solid #181b61;
            .shawdow-wrap {
              filter: drop-shadow(0px 0px 10px rgb(235, 243, 235));
              .larrowcss {
                width: 35px;
                height: 20px;
                clip-path: polygon(0 50%, 78% 0, 100% 50%, 78% 99%);
                background: #FFF;
                @media screen and (max-width: 768px) {
                  width: 15px;
                  height: 12px;
                }
              }
              .rarrowcss {
                width: 35px;
                height: 20px;
                clip-path: polygon(0 50%, 22% 0, 100% 50%, 22% 99%);
                background: #FFF;
                @media screen and (max-width: 768px) {
                  width: 15px;
                  height: 12px;
                }
              }
            }
            .title-text {
              font-weight: 500;
              font-size: 1.6vw;
              color: #FFFFFF;
              text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.8);
              margin: 0 20px;
              @media screen and (max-width: 768px) {
                margin: 0 10px;
                font-size: 1rem;
              }
            }
          }
          .secoeach {
            display: flex;
            align-items: center;
            justify-content: center;
            
            background: rgba(23, 47, 172, 0.65);
            background: #172792;
            border-radius: 12px; 
            padding: 10px 2rem;
            // margin-right: 4px;

            cursor: pointer; 
            width: 19%;
            @media screen and (max-width: 768px) {
              padding: 5px 10px;
              width: 125px;
            }
          }
        }
      }
      @media screen and (max-width: 768px) {
        .inner-block::-webkit-scrollbar {
          display: none;
        }
      }
      .block2 {
        // border: 2px solid #FFFFFF;
        box-shadow: 0px 0px -12px rgba(255, 255, 255, 0.75);
        position: relative;
        height: 42px;
        width: 75%;
        margin: 3rem auto 0;
        @media screen and (max-width: 768px) {
          height: 54.2px;
          width: 100%;
        }
        .hrcss {
          height: 3px;
          background: #FFF;
        }
      }
      .block2:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 42px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);
        // transform: rotate(-180deg);
        @media screen and (max-width: 768px) {
          height: 54.2px;
        }
      }
      .block3 {
        width: 75%;
        margin: auto;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
        .row1 {
          display: flex;
          padding: 1.5rem 0;
          border-bottom: 3px dashed #2D31A3;
          @media screen and (max-width: 768px) {
            padding: 0 10px 2.4rem 0;
            border-bottom: none;
          }
          .commontitle1 {
            font-weight: 500;
            font-size: 24px;
            width: 15%;
            @media screen and (max-width: 768px) {
              font-size: 14px;
              width: 20%;
            }
          }
          .titlecolor1 {
            color: #44F4FF;
          }
          .titlecolor2 {
            color: #5EFF44;
          }
          .titlecolor3 {
            color: #FBFF44;
          }
          .titlecolor4 {
            color: #8465FE;
          }
          .text-title2, .text-title3 {
            font-weight: 500;
            font-size: 24px;
            color: #FFF;
            @media screen and (max-width: 768px) {
              font-size: 14px;
            }
          }
          .text-title3 {
            @media screen and (max-width: 768px) {
              color: #686A9E;
            }
          }
          .text-title2 {
            width: 75%;
            @media screen and (max-width: 768px) {
              width: 70%;
              white-space: nowrap; 
              overflow: hidden;
              text-overflow: ellipsis; 
            }
          }
          .text-title3 {
            width: 10%;
            text-align: right;
          }
        }
      }
      .block4 {
        width: 50%;
        margin: auto;
        padding: 5rem 0;
        display: flex;
        justify-content: center;
        @media screen and (max-width: 768px) {
          display: none;
        }
        .btn-text {
          font-weight: 500;
          font-size: 24px;
          color: #FFFFFF;
          text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.8);
          background: rgba(82, 202, 218, 0.75);
          border-radius: 12px;
          text-align: center;
          width: 210px;
          height: 45px;
          line-height: 45px;
          cursor: pointer;
        }
      }
    }
    .footer-block {
      background: #000;
      display: flex;
      justify-content: space-between;
      padding: 2rem 2rem 2rem 3rem;
      // position: fixed;
      // bottom: 0;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
        background: #171C25;
        border-top: 2px solid #444444;
      }
      .foot-left {
        width: 30%;
        text-align: center;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
        .foot-left-row1 {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          @media screen and (max-width: 768px) {
            flex-direction: column;
          }
        }
        .left-content {
          font-weight: 400;
          font-size: 18px;
          color: #FFF;
        }
      }
      .studioimg {
        width: 110px;
        height: 115.79px;
        @media screen and (max-width: 768px) {
          width: 74px;
          height: 78px;
        }
      }
      .studio-text {
        font-weight: 900;
        font-size: 40px;
        color: #FFF;
        margin-left: 2rem;
        @media screen and (max-width: 768px) {
          font-size: 24px;
          margin-left: 0;
          margin-top: 1rem;
        }
      }
      .foot-right {
        width: 60%;
        display: flex;
        align-items: flex-end;
        @media screen and (max-width: 768px) {
          width: 100%;
          padding: 2rem;
        }
        .right-inner {
          display: flex;
          align-items: flex-start;

          .dateimg {
            width: 72.39px;
            height: 76.84px;
            @media screen and (max-width: 768px) {
              width: 43px;
              height: 46px;
            }
          }
          .right-content {
            font-weight: 400;
            font-size: 16px;
            color: #FFF;
            margin-left: 1rem;
            line-height: 25px;
            @media screen and (max-width: 768px) {
              font-size: 12px;
              line-height: 18px;
            }
          }
          p.right-content:before {
            content: '';
            display: block;
            margin: -0.5em 0; /* 25px = 1em/font-size  25/25 = 1 . margin-top/bottom -3em = 6em */
          }
        }
      }
    }
  }
// }
</style>
