<template>
  <div class="preorder-div">
    <div class="first-block">
      <img alt="" class="bg-css" src="@/assets/images/preorder/bg-preorder1.png" />
      <div class="header-block">
        <div class="menu-child-block">
          <div class="hide-block"></div>
          <div class="logo-block">
            <img alt="Project logo" class="logo-css" src="@/assets/images/mainlogo.png" />
            <!-- <span class="logo-text">米茲塔爾</span> -->
          </div>
          <div class="right-block">
            <img class="head-css1" src="@/assets/images/preorder/head1.png" @click="routetoFront()"  />
            <img class="head-css1" src="@/assets/images/preorder/head2.png" />
            <img class="head-css1" src="@/assets/images/preorder/head3.png" />
            <img class="head-css1" src="@/assets/images/preorder/head4.png" />
            <img class="head-css1" src="@/assets/images/preorder/head5.png" />
          </div>
        </div>
      </div>
      <div class="center-block">
        <span class="text-center">這裡的背景想撥放影片</span>
      </div>
      <div class="bottom-block">
        <div class="inner-bblock">
          <div class="b-leftblock">
            <img alt="" class="leftbg" src="@/assets/images/preorder/left1.png" />
            <img alt="" class="leftover" src="@/assets/images/playstore.png" />
          </div>
          <div class="b-centerblock">
            <p class="bottom-txt1">介紹廣告文字</p>
            <p class="bottom-txt2">即刻預約</p>
          </div>
          <div class="b-rightblock">
            <img alt="" class="leftbg" src="@/assets/images/preorder/right1.png" />
            <img alt="" class="leftover" src="@/assets/images/appstore.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="black-block"></div>
    <div class="second-block">
      <img alt="" class="thirdbg-css" src="@/assets/images/preorder/bg-preorder2.png" />
      <div class="overlap-info">
        <div class="title-info">
          <div class="larrowcss"></div>
          <span class="title-text">事前預約</span>
          <div class="rarrowcss"></div>
        </div>
        <div class="title-info">
          <div class="polygonimgcss"></div>
        </div>
      </div>
    </div>
    <div class="black-block"></div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    
  },
  methods: {
    routetoFront() {
      this.$router.push('/');
    }
  },
  setup() {
    
  },
});
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .preorder-div {
    .first-block {
      position: relative;
      min-height: 100vh;
      max-height: 100vh;
      .bg-css {
        width: 100%;
        margin-bottom: -7px;
      }
      .header-block {
        position: absolute;
        top: 2rem;
        width: 100%;

        position: fixed;
        z-index: 10;
        .menu-child-block {
          display: flex;
          width: 90%;
          max-width: 1920px;
          height: 79px;
          line-height: 79px;
          margin: 0 auto;
          justify-content: center;
          .hide-block{
            width: 33%;
          }
          .logo-block {
            width: 33%;
            display: flex;
            justify-content: center;
            .logo-css {
              width: 444px;
              height: 198px;
              filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.25));
              margin: 0 1rem;
            }
            // .logo-text {
            //   display: flex;
            //   align-items: center;
            //   justify-content: center;
            //   text-align: center;
            //   letter-spacing: 1.5em;
            //   color: #F9DB84;
            //   text-shadow: 0px 4px 4px rgba(23, 31, 47, 0.1);
            //   line-height: 1;
            // }
          }
          .right-block {
            width: 33%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .head-css1 {
              width: 74px;
              height: 74px;
              margin-left: 1rem;
              cursor: pointer;
            }
          }
        }
      }
      .center-block {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .text-center {
          font-weight: 400;
          font-size: 20px;
          color: #FFF;
        }
      }
      .bottom-block {
        position: absolute;
        bottom: 4rem;
        width: 100%;
        .inner-bblock {
          position: relative;
          display: flex;
          justify-content: center;
          .b-leftblock, .b-rightblock {
            position: relative;
            .leftbg {
              width: 499px;
              width: 450px;
              margin-bottom: -7px;
            }
            .leftover {
              position: absolute;
              width: 244px;
              height: 71px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          .b-leftblock {
            margin-right: 1.5rem;
          }
          .b-rightblock {
            margin-left: 1.5rem;
          }
          .b-centerblock {
            position: absolute;
            left: 50%;
            top: -70%;
            transform: translate(-50%, -50%);
            text-align: center;
            .bottom-txt1 {
              font-weight: 500;
              font-size: 32px;
              color: #FFF;
              margin-bottom: 1.5rem;
            }
            .bottom-txt2 {
              font-weight: 800;
              font-size: 36px;
              color: #5BEBFF;
              text-shadow: 0px 2px 4px rgba(91, 234, 254, 0.85);
            }
          }
        }
      }
    }
    .first-block:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      // background: linear-gradient(180deg, rgba(0, 0, 0, 0), black);

      background: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(70, 70, 70, 0) 100%);
      transform: rotate(-180deg);
    }
    .black-block {
      height: 50px;
      background: #000;
    }
    .second-block {
      position: relative;
      .thirdbg-css {
        width: 100%;
        margin-bottom: -7px;
      }
      .overlap-info {
        position: absolute;
        top: 0px;
        top: 35px;
        width: 100%;
        .title-info {
          display: flex;
          align-items: center;
          justify-content: center;
          .leftarrowimg {
            width: 35px;
            box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.85);
    
            visibility: hidden;
            animation-name: secRightoL;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-fill-mode: forwards; // hidden to visible
          }
          .rightarrowimg {
            width: 35px;
            box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.85);
            transform: rotate(180deg);
    
            visibility: hidden;
            animation-name: secLToRight;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-fill-mode: forwards; // hidden to visible
          }
          .larrowcss {
            clip-path: polygon(0 50%, 78% 0, 100% 50%, 78% 99%);
            height: 20px;
            width: 35px;
            background: #FFF;

            visibility: hidden;
            animation-name: secLToRight;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-fill-mode: forwards; // hidden to visible
          }
          @keyframes secRightoL {
            0% {
              visibility: hidden;
              transform: translateX(100px);
            }
            100% {
              visibility: visible;
              transform: translateX(0px);
            }
          }
          .rarrowcss {
            clip-path: polygon(0 50%, 22% 0, 100% 50%, 22% 99%);
            height: 20px;
            width: 35px;
            background: #FFF;

            visibility: hidden;
            animation-name: secRightoL;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-fill-mode: forwards; // hidden to visible
          }
          @keyframes secLToRight {
            0% {
              visibility: hidden;
              transform: translateX(-100px);
            }
            100% {
              visibility: visible;
              transform: translateX(0px);
            }
          }
          .polygonimgcss {
            background: #FFFFFF;
            width: 736px;
            width: 40%;
            
            height: 11px;
            clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 50%);

            // clip-path: polygon(50% 48%, 100% 49%, 51% 51%, 0 49%);

            animation-name: largeToSmall;
            animation-duration: 1s;
            animation-iteration-count: 1;
            animation-direction: alternate-reverse; 
          }
          @keyframes largeToSmall {
            0% {
              width: 40%;
            }
            10% {
              width: 38%;
            }
            20% {
              width: 40%;
            }
            30% {
              width: 38%;
            }
            40% {
              width: 40%;
            }
            50% {
              width: 38%;
            }
            60% {
              width: 40%;
            }
            70% {
              width: 38%;
            }
            80% {
              width: 40%;
            }
            90% {
              width: 38%;
            }
            100% {
              width: 40%;
            }
          }
          .title-text {
            font-weight: 600;
            font-size: 48px;
            color: #FFF;
            margin: 0 1rem;
          }
        }
      }
      
    }
    .second-block:after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      height: 100%;
      // background: linear-gradient(180deg, rgba(0, 0, 0, 0), black);

      // background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgbe(64,64,64,0) 10%, rgba(64,64,64,0) 90%, rgba(0, 0, 0, 0) 100%);

      // background: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%);
      // transform: rotate(-180deg);

      background: 
        linear-gradient(
            to bottom, 
            rgba(0, 0, 0, 0.95) 0%, 
            rgba(64,64,64,0) 10%, 
            rgba(64,64,64,0) 90%, 
            rgba(0, 0, 0, 0.95) 100%
        );
    }
    
  }
}
</style>
