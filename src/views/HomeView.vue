<template>
  <!-- <main>
    <TheWelcome />
  </main> -->
  <!-- <div class="player-container">
    <video-player class="firstbgimg-css"
      src="../../videos/lostark_intro.mp4"
      poster="@/assets/images/firstbg1.png"
      controls
      :loop="true"
      :autoplay="true"
      :muted="true"
      :playsinline="true"
    />
    <video-player
      src="https://landing.mangot5.com/template/lostark/event/landing/test99/media/lostark_intro.mp4"
      poster="@/assets/images/firstbg1.png"
      controls
      :loop="true"
      :autoplay="true"
    />
  </div> -->


  <div class="first-block" id="firstId">
    <!-- <img alt="" class="firstbgimg-css" src="@/assets/images/firstbg1.png" /> -->
    <!-- src="https://landing.mangot5.com/template/lostark/event/landing/test99/media/lostark_intro.mp4" -->
    <!-- <video-player class="firstbgimg-css"
      src="../../videos/lostark_intro.mp4"
      :poster="bgsecn"
      :loop="true"
      :autoplay="true"
      :muted="true"
      :playsinline="true"
      :fluid="true"
    /> -->
    <video-player class="firstbgimg-css"
      :src="bgvideo"
      :poster="bgsecn"
      :loop="true"
      :autoplay="true"
      :muted="true"
      :playsinline="true"
      :fluid="true"
    />
    
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
          <!-- <RouterLink to="/game-point">
            <span class="menu-text">儲值購點</span>
          </RouterLink> -->
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
          <!-- onclick="window.open('https://www.youtube.com/','_blank')" -->
          <div class="each-div fade-in-text4" @click="gotoNewPage('youtube')">
            <img alt="Project logo" class="youtube-css" src="@/assets/images/youtube-icon.png" />
            <span class="youtube-text">Youtube</span>
          </div>
          <div class="each-div fade-in-text3" @click="gotoNewPage('discord')">
            <img alt="Project logo" class="discord-css" src="@/assets/images/discord-icon1.png" />
            <span class="youtube-text">Discord</span>
          </div>
          <div class="each-div fade-in-text2" @click="gotoNewPage('facebook')">
            <img alt="Project logo" class="facebook-css" src="@/assets/images/facebook-icon.png" />
            <span class="youtube-text">Facebook</span>
          </div>
        </div>
        <div class="each-sec-div fade-in-text5">
          <img alt="Project logo" class="message-css" src="@/assets/images/message-icon2.png" @click="gotoPage('new-page')" />
          <span class="each-sec-text">前往論壇</span>
          <div class="shawdow-wrap">
            <div id="sectarget-l" class="rarrowcss"></div>
          </div>
          <!-- <img alt="Project logo" class="rectangle-css" src="@/assets/images/rectangle-icon.png" /> -->
        </div>
      </div>
    </div>
    <div class="menu-block" @click="openMenu()">
      <img class="menu-css" src="@/assets/images/mobile/btn_menu.png" />
    </div>
    <div class="overonbg-block1">
      <div class="overlap1">
        <p class="first-title-text">用求要馬開根物</p>
        <p class="first-content-text">
          清國者發紅、著層標常第年。
          小難費新學，部所法質，食童評開其要可乎樹底難花北位？地這今影，找想實商。風任靈果力因中。
        </p>
      </div>
      <div class="overlap2">
        <img @click="linktoPlaystore()" class="playstore-css" src="@/assets/images/playstore.png" />
        <img @click="linktoApplestore()" class="appstore-css" src="@/assets/images/appstore.png" />
      </div>
      <div class="overlap3">
        <img class="messenger-css" src="@/assets/images/messenger.png" />
      </div>
    </div>
    <div class="m-overblock">
      <div class="overlap1">
        <p class="first-title-text">用求要馬開根物</p>
        <p class="first-content-text">
          清國者發紅、著層標常第年。
          小難費新學，部所法質，食童評開其要可乎樹底難花北位？地這今影，找想實商。風任靈果力因中。
        </p>
      </div>
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
        <p class="menu-item">新聞</p>
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
  
  <div class="second-block" id="secondId">
    <img id="carobgId" class="carouselbg-css" src="@/assets/images/carousel-bg1.png" />
    <div class="overlap-info">
      <div class="title-info">
        <!-- <img id="sectarget-r" class="rightarrowimg" src="@/assets/images/left-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="sectarget-r" class="larrowcss"></div>
        </div>
        <span class="latest-infotext">最新情報</span>
        <!-- <img id="sectarget-l" class="leftarrowimg" src="@/assets/images/right-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="sectarget-l" class="rarrowcss"></div>
        </div>
      </div>

      <div class="title-info">
        <!-- <img alt="" class="polygonimg" src="@/assets/images/polygon.png" /> -->
        <div id="polyId2" class="polygonimgcss"></div>
      </div>
    </div>

    <!-- :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000" -->
    <!-- :autoplay="2000" :wrap-around="true" -->
    <Carousel >
      <template #slides="{ slidesCount }" >
        <Slide v-for="(image, index) in slides" :key="image.id">
          <!-- <img :src="image.src" class="caro-img" id="slideimgId" /> -->
          <!-- <img :src="'/src/assets/images/' + image.src" class="caro-img" :id="'slideimgId'+index" /> -->
          <img :src="image.src" class="caro-img" :id="'slideimgId'+index" />
          <!-- <button v-if="slidesCount > 1" @click="deleteImage(index)">x</button> -->
        </Slide>
      </template>

      <template #addons>
        <Navigation>
          <template #next>
            <img id="lcaroId" class="left-carocss" src="@/assets/images/carousel/caro-left.png" />
          </template>
          <template #prev>
            <img id="rcaroId" class="right-carocss" src="@/assets/images/carousel/caro-left.png" />
          </template>
        </Navigation>
        
        <Pagination />
      </template>
    </Carousel>
  </div>
  <hr class="hrcss" />
  <div class="third-block" id="thirdId">
    <img class="thirdbg-css" src="@/assets/images/third-bg.png" />
    <img class="m-bg3" src="@/assets/images/mobile/m-bg2.png" />
    <div class="overlap-info">
      <div class="title-info">
        <!-- <img id="thirdtarget-r" class="rightarrowimg" src="@/assets/images/left-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="thirdtarget-r" class="larrowcss"></div>
        </div>
        <span class="latest-infotext">故事劇情</span>
        <!-- <img id="thirdtarget-l" class="leftarrowimg" src="@/assets/images/right-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="thirdtarget-l" class="rarrowcss"></div>
        </div>
      </div>
      <div class="title-info">
        <div id="polyId3" class="polygonimgcss"></div>
      </div>
      <p class="third-block-content cssanimation mysequence3 leRotateYZoomIn" id="thirdContentId">有比地。隨早小個懷當是許被角就部人美人專；結禮不生斯，法起年不說面位動：題了得教人落情美病力信國覺，許動為部高地觀燈學層起人開意、者商之達期，情種處，自了面的於人何後畫還務只發沒施影三，整精來！死人告稱小現對報可怎十教男出時收音氣回魚取了中前變個；的太著進不。的我會華值職道陸，兒人新過，防土主素的野全道由式學象成力如。</p>
    </div>
  </div>
  <hr class="hrcss" />
  <div class="m-third" id="mthirdId">
    <img id="mcarobgId" class="mcaroselbg-css" src="@/assets/images/mobile/m-bg3.png" />
    <div class="overlap-info">
      <div class="title-info">
        <div class="shawdow-wrap">
          <div id="sectarget-r" class="larrowcss"></div>
        </div>
        <span class="latest-infotext">情報中心</span>
        <div class="shawdow-wrap">
          <div id="sectarget-l" class="rarrowcss"></div>
        </div>
      </div>

      <div class="title-info">
        <div id="polyId2" class="polygonimgcss"></div>
      </div>
    </div>
    
    <Carousel >
      <template #slides="{ slidesCount }" >
        <Slide v-for="(image, index) in mslidees" :key="image.id">
          <img :src="image.src" class="caro-img" :id="'mslideimgId'+index" />
        </Slide>
      </template>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
  <hr class="hrcss" />
  <div class="fourth-block" id="fourId">
    <img id="fourbgId" class="thirdbg-css" src="@/assets/images/fourth-bg.png" />
    <div class="overlap-info">
      <div class="title-info">
        <!-- <img id="fourtarget-r" class="rightarrowimg" src="@/assets/images/left-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="fourtarget-r" class="larrowcss"></div>
        </div>
        <span class="latest-infotext">角色職業</span>
        <!-- <img id="fourtarget-l" class="leftarrowimg" src="@/assets/images/right-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="fourtarget-l" class="rarrowcss"></div>
        </div>
      </div>
      <div class="title-info">
        <div id="polyId4" class="polygonimgcss"></div>
      </div>
      <div class="card-row">
        <div class="ani-cardrow" id="cardId">
          <!-- <div class="each-card" @click="routeTo('/character-info')">
            <div class="shawdow-wrap">
              <img alt="" class="card1-css" src="@/assets/images/not-active1.png" />
            </div>
          </div>
          <div class="each-card" @click="routeTo('/character-info')">
            <div class="shawdow-wrap">
              <img alt="" class="card1-css" src="@/assets/images/not-active2.png" />
            </div>
          </div>
          <RouterLink to="/character-info" class="each-card activecard">
            <img alt="" class="card1-css activeinner" src="@/assets/images/not-active2.png" />
            <div class="shawdow-wrap absoDiam topLdiamon">
              <div id="toplId" class="tlarrowcss"></div>
            </div>
            <div class="shawdow-wrap absoDiam topRdiamon">
              <div id="toprId" class="trarrowcss"></div>
            </div>
            <div class="shawdow-wrap absoDiam bottomLdiamon">
              <div id="bottomlId" class="blarrowcss"></div>
            </div>
            <div class="shawdow-wrap absoDiam bottomRdiamon">
              <div id="bottomlId" class="brarrowcss"></div>
            </div>
            <div id="childActId" class="child-act">
              <p class="txt1">職業名稱</p>
              <p class="txt2">-敘述敘述-</p>
            </div>
          </RouterLink>
          <div class="each-card" @click="routeTo('/character-info')">
            <div class="shawdow-wrap">
              <img alt="" class="card1-css" src="@/assets/images/not-active3.png" />
            </div>
          </div>
          <div class="each-card" @click="routeTo('/character-info')">
            <div class="shawdow-wrap">
              <img alt="" class="card1-css" src="@/assets/images/not-active4.png" />
            </div>
          </div> -->


          <!-- <div class="card-row">
            <div class="ani-cardrow" id="cardId">
              <div class="each-card" @click="routeTo('/character-info')">
                <div class="shawdow-wrap">
                  <img alt="" class="card1-css" src="@/assets/images/not-active1.png" />
                </div> -->
                <!-- <div class="shawdow-wrap absoDiam topLdiamon">
                  <div id="toplId" class="tlarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam topRdiamon">
                  <div id="toprId" class="trarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomLdiamon">
                  <div id="bottomlId" class="blarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomRdiamon">
                  <div id="bottomlId" class="brarrowcss"></div>
                </div> -->
              <!-- </div>
              <div class="each-card" @click="routeTo('/character-info')">
                <div class="shawdow-wrap">
                  <img alt="" class="card1-css" src="@/assets/images/not-active2.png" />
                </div> -->
                <!-- <div class="shawdow-wrap absoDiam topLdiamon">
                  <div id="toplId" class="tlarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam topRdiamon">
                  <div id="toprId" class="trarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomLdiamon">
                  <div id="bottomlId" class="blarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomRdiamon">
                  <div id="bottomlId" class="brarrowcss"></div>
                </div> -->
              <!-- </div>
              <RouterLink to="/character-info" class="each-card activecard">
                <img alt="" class="card1-css activeinner" src="@/assets/images/not-active2.png" />
                <div class="shawdow-wrap absoDiam topLdiamon">
                  <div id="toplId" class="tlarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam topRdiamon">
                  <div id="toprId" class="trarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomLdiamon">
                  <div id="bottomlId" class="blarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomRdiamon">
                  <div id="bottomlId" class="brarrowcss"></div>
                </div>
                <div id="childActId" class="child-act">
                  <p class="txt1">職業名稱</p>
                  <p class="txt2">-敘述敘述-</p>
                </div>
              </RouterLink> -->
              <!-- <div class="each-card" @click="routeTo('/character-info')">
                <div class="shawdow-wrap">
                  <img alt="" class="card1-css activeinner" src="@/assets/images/not-active2.png" /> -->
                  <!-- <img alt="" class="card1-css" src="@/assets/images/fourth-active-img.png" />
                  <img id="toplId" class="absoDiam topLdiamon" src="@/assets/images/tldiamond.png" />
                  <img id="toprId" class="absoDiam topRdiamon" src="@/assets/images/diamond.png" />
                  <img id="bottomlId" class="absoDiam bottomLdiamon" src="@/assets/images/bldiamond.png" />
                  <img id="bottomrId" class="absoDiam bottomRdiamon" src="@/assets/images/brdiamond.png" /> -->
                <!-- </div>
                <div class="shawdow-wrap absoDiam topLdiamon">
                  <div id="toplId" class="tlarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam topRdiamon">
                  <div id="toprId" class="trarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomLdiamon">
                  <div id="bottomlId" class="blarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomRdiamon">
                  <div id="bottomlId" class="brarrowcss"></div>
                </div>
                <div id="childActId" class="child-act">
                  <p class="txt1">職業名稱</p>
                  <p class="txt2">-敘述敘述-</p>
                </div>
              </div> -->
              <!-- <div class="each-card" @click="routeTo('/character-info')">
                <div class="shawdow-wrap">
                  <img alt="" class="card1-css" src="@/assets/images/not-active3.png" />
                </div> -->
                <!-- <div class="shawdow-wrap absoDiam topLdiamon">
                  <div id="toplId" class="tlarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam topRdiamon">
                  <div id="toprId" class="trarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomLdiamon">
                  <div id="bottomlId" class="blarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomRdiamon">
                  <div id="bottomlId" class="brarrowcss"></div>
                </div> -->
              <!-- </div>
              <div class="each-card" @click="routeTo('/character-info')">
                <div class="shawdow-wrap">
                  <img alt="" class="card1-css" src="@/assets/images/not-active4.png" />
                </div> -->
                <!-- <div class="shawdow-wrap absoDiam topLdiamon">
                  <div id="toplId" class="tlarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam topRdiamon">
                  <div id="toprId" class="trarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomLdiamon">
                  <div id="bottomlId" class="blarrowcss"></div>
                </div>
                <div class="shawdow-wrap absoDiam bottomRdiamon">
                  <div id="bottomlId" class="brarrowcss"></div>
                </div> -->
              <!-- </div>
            </div>
          </div> -->
          
          <div :class="current == i.id ? 'activecard' : ''" class="each-card" v-for="i in characterInfo" :key="i.id"  @click="routeTo('characterInfo', i.id)">
            <div v-if="current !== i.id" class="shawdow-wrap">
              <img :src="i.src" alt="" class="card1-css" />
            </div>
            <img v-if="current == i.id" class="card1-css activeinner" :src="i.src" />
            <div v-if="current == i.id" class="shawdow-wrap absoDiam topLdiamon">
              <div id="toplId" class="tlarrowcss"></div>
            </div>
            <div v-if="current == i.id" class="shawdow-wrap absoDiam topRdiamon">
              <div id="toprId" class="trarrowcss"></div>
            </div>
            <div v-if="current == i.id" class="shawdow-wrap absoDiam bottomLdiamon">
              <div id="bottomlId" class="blarrowcss"></div>
            </div>
            <div v-if="current == i.id" class="shawdow-wrap absoDiam bottomRdiamon">
              <div id="bottomlId" class="brarrowcss"></div>
            </div>
            <div v-if="current == i.id" id="childActId" class="child-act">
              <p class="txt1">職業名稱</p>
              <p class="txt2">-敘述敘述-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="hrcss" />
  <div class="five-block" id="fiveId">
    <img class="thirdbg-css" src="@/assets/images/block5-bg1.png" />
    <div class="overlap-info">
      <div class="title-info">
        <!-- <img id="fivetarget-l" class="rightarrowimg" src="@/assets/images/left-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="fivetarget-l" class="larrowcss"></div>
        </div>
        <span class="latest-infotext">遊戲特色</span>
        <!-- <img id="fivetarget-r" class="leftarrowimg" src="@/assets/images/right-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="fivetarget-r" class="rarrowcss"></div>
        </div>
      </div>
      <div class="title-info">
        <div id="polyId5" class="polygonimgcss"></div>
      </div>
      <p class="third-block-content cssanimation sequence5 leRotateYZoomIn" id="fiveContentId">
        死人告稱小現對報可怎十教男出時收音氣回魚取了中前變個；的太著進不。的我會華值職道陸，兒人新過，防土主素的野全道由式學象成力如。
      </p>
      <div class="five-videoblock" id="video5Id">
        <p class="b5-txt">防土主素的野全道由式學象成力如。</p>
        <!-- <div class="video-overlap">
          <img alt="" class="block5Video" src="@/assets/images/block5-video1.png" />
          <img alt="" class="play-css" src="@/assets/images/play-video.png" />
        </div> -->
        <div class="viideo-block">
          <video-player
            :src="bgvideo"
            :poster="v1Plaay"
            :muted="true"
            :playsinline="true"
            :loop="true"
            :fluid="true"
            class="video-player vjs-big-play-centered"
            playsinline
            controls
          />
        </div>
      </div>
      <div class="five-videoblock1" id="video5Id1">
        <p class="b5-txt">的太著進不。的我會值職道陸，兒人新過。</p>
        <!-- <div class="video-overlap">
          <img alt="" class="block5Video" src="@/assets/images/block5-video2.png" />
          <img alt="" class="play-css" src="@/assets/images/play-video.png" />
        </div> -->
        <div class="viideo-block">
          <video-player
            :src="bgvideo"
            :poster="v2Plaay"
            :muted="true"
            :playsinline="true"
            :loop="true"
            :fluid="true"
            class="video-player vjs-big-play-centered"
            playsinline
            controls
          />
        </div>
      </div>
    </div>
  </div>
  <hr class="hrcss" />
  <div class="six-block" id="sixId">
    <img alt="" class="carouselbg-css" src="@/assets/images/block6-bg1.png" />
    <div class="overlap-info">
      <div class="title-info">
        <!-- <img id="sixtarget-l" class="rightarrowimg" src="@/assets/images/left-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="sixtarget-l" class="larrowcss"></div>
        </div>
        <span class="latest-infotext">最新情報</span>
        <!-- <img id="sixtarget-r" class="leftarrowimg" src="@/assets/images/right-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="sixtarget-r" class="rarrowcss"></div>
        </div>
      </div>
      <div class="title-info">
        <div id="polyId6" class="polygonimgcss"></div>
      </div>
    </div>
    <Carousel >
      <template #slides="{ slidesCount }" >
        <Slide v-for="(image, index) in slidessec" :key="image.id">
          <!-- <img :src="image.src" class="caro-img" id="slideId6" /> -->
          <img :src="image.src" class="caro-img" :id="'slideId6'+index" />
          <!-- <img :src="getImageUrl(image.src)" class="caro-img" id="slideId6" /> -->
        </Slide>
      </template>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
  <hr class="hrcss" />
  <div class="seven-block" id="sevenId">
    <img alt="" class="thirdbg-css" src="@/assets/images/block7-bg1.png" />
    <div class="overlap-info">
      <div class="title-info">
        <!-- <img id="seventarget-l" class="rightarrowimg" src="@/assets/images/left-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="seventarget-l" class="larrowcss"></div>
        </div>
        <span class="latest-infotext">遊戲畫面展示</span>
        <!-- <img id="seventarget-r" class="leftarrowimg" src="@/assets/images/right-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="seventarget-r" class="rarrowcss"></div>
        </div>
      </div>
      <div class="title-info">
        <div id="polyId7" class="polygonimgcss"></div>
      </div>
      <div class="seven-img-block">
        <div class="imgs-inner7" id="inner7Id">
          <img alt="" class="seven-imgcss" src="@/assets/images/seven-img1.png" />
          <img alt="" class="seven-imgcss" src="@/assets/images/seven-img1.png" />
          <img alt="" class="seven-imgcss" src="@/assets/images/seven-img1.png" />
          <img alt="" class="seven-imgcss" src="@/assets/images/seven-img1.png" />
          <img alt="" class="seven-imgcss" src="@/assets/images/seven-img1.png" />
          <img alt="" class="seven-imgcss" src="@/assets/images/seven-img1.png" />
        </div>
      </div>
    </div>
  </div>
  <hr class="hrcss" />
  <div class="eight-block" id="eightId">
    <img alt="" class="thirdbg-css" src="@/assets/images/block8-bg.png" />
    <div class="overlap-info">
      <div class="title-info">
        <!-- <img id="eighttarget-l" class="rightarrowimg" src="@/assets/images/left-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="eighttarget-l" class="larrowcss"></div>
        </div>
        <span class="latest-infotext">加入社群</span>
        <!-- <img id="eighttarget-r" class="leftarrowimg" src="@/assets/images/right-arrow.png" /> -->
        <div class="shawdow-wrap">
          <div id="eighttarget-r" class="rarrowcss"></div>
        </div>
      </div>
      <div class="title-info">
        <div id="polyId8" class="polygonimgcss"></div>
      </div>
      <p class="eight-block-content cssanimation sequence8 leRotateYZoomIn">
        防土主素的野全道由式學象成力如。
      </p>
      <div class="row-head-block">
        <div class="each-div first8" id="eightId1">
          <img alt="Project logo" class="youtube-css" src="@/assets/images/youtube1-icon.png" />
          <span class="youtube-text">Youtube</span>
        </div>
        <div class="each-div second8" id="eightId2">
          <img alt="Project logo" class="discord-css" src="@/assets/images/discord1-icon.png" />
          <span class="youtube-text">Discord</span>
        </div>
        <div class="each-div third8" id="eightId3">
          <img alt="Project logo" class="facebook-css" src="@/assets/images/facebook1-icon.png" />
          <span class="youtube-text">Facebook</span>
        </div>
      </div>
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
  <!-- <Carousel >
    <template #slides="{ slidesCount }" >
      <Slide v-for="(image, index) in slides" :key="image.id">
        <img :src="image.src" />
      </Slide>
    </template>

    <template #addons>
      <Navigation>
        <template #next>
          <img alt="" class="left-carocss" src="@/assets/images/carousel/caro-left.png" />
        </template>
        <template #prev>
          <img alt="" class="right-carocss" src="@/assets/images/carousel/caro-left.png" />
        </template>
      </Navigation>
      
      <Pagination />
    </template>
  </Carousel> -->
</template>

<script setup>
  import { ref, onMounted, computed } from "vue";
  import { useSlideStore } from "../stores/slide";
  const store = useSlideStore();

  const slides = computed(() => {
    return store.getSlides;
  });
  const ssss = computed(() => {
    return store.slides;
  });
  onMounted(() => {
    console.log('heeeee')
    store.fetchSlides();
    // this.temphi();
  });

</script>
<script>
import { defineComponent, toRefs } from "vue";

import bgsecd from '@/assets/images/firstbg1.png'
import v1play from '@/assets/images/block5-video1.png'
import v2play from '@/assets/images/block5-video2.png'
import bgvideotemp from "@/assets/videos/lostark_intro.mp4"

import fsix1 from '@/assets/images/carousel/c1.png'
import fsix2 from '@/assets/images/carousel/c1.png'
import fsix3 from '@/assets/images/carousel/c1.png'
import fsix4 from '@/assets/images/carousel/c1.png'

import ssix1 from '@/assets/images/carousel/caro-sec.png'
import ssix2 from '@/assets/images/carousel/caro-sec.png'
import ssix3 from '@/assets/images/carousel/caro-sec.png'
import ssix4 from '@/assets/images/carousel/caro-sec.png'
import ssix5 from '@/assets/images/carousel/caro-sec.png'
import ssix6 from '@/assets/images/carousel/caro-sec.png'

import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

import { mapState, mapActions } from 'pinia'

import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: 'Home',
  data() {
    return {
      // slides: [
      //   { id: 1, title: 'Current', content: 'VueJS is a library' , src: fsix1},
      //   { id: 2, title: 'Project', content: 'Know the components' , src: fsix2},
      //   { id: 3, title: 'is', content: 'Know the components' , src: fsix3},
      //   { id: 4, title: 'Vue 3', content: 'Know the components' , src: fsix4}
      // ],
      // slides: null,
      // ssss: null,
      current: 3,
      mslidees: [
        { id: 1, title: 'Current', content: 'VueJS is a library' , src: fsix1},
        { id: 2, title: 'Project', content: 'Know the components' , src: fsix2},
        { id: 3, title: 'is', content: 'Know the components' , src: fsix3},
        { id: 4, title: 'Vue 3', content: 'Know the components' , src: fsix4}
      ],
      // '/src/assets/images/carousel/caro-sec.png'
      slidessec: [
        { id: 1, title: 'My', content: 'VueJS is a library' , src: ssix1},
        { id: 2, title: 'Current', content: 'Know the components' , src: ssix2},
        { id: 3, title: 'Project', content: 'Know the components' , src: ssix3},
        { id: 4, title: 'is', content: 'Know the components' , src: ssix4},
        { id: 5, title: 'Vue3', content: 'Know the components' , src: ssix5},
        { id: 6, title: '.', content: 'Know the components' , src: ssix6}
      ],
      bgsecn: bgsecd,
      v1Plaay: v1play,
      v2Plaay: v2play,
      bgvideo: bgvideotemp,

      firstBlockId: null,

      secondBlockId: null,
      secLeftel: null,
      secRightel: null,
      secPoly: null,
      lcaro: null,
      rcaro: null,
      carobg: null,
      slickImg: null,
      slickfirstArr: [],
      mslickArr: [],
      secondPagi: null,

      thirdBlockId: null,
      thirdLeftel: null,
      thirdRightel:null,
      thirdPoly:null,
      thirdAniTxt:null,

      fourBlockId: null,
      fourLeftel: null,
      fourRightel:null,
      fourPoly:null,
      fourbgData: null,
      fourcardData: null,
      toplData: null,
      toprData: null,
      bottomlData: null,
      bottomrData: null,
      bottomPartData: null,

      // textTop: null,
      // screenTop: null,
      // screenBottom: null,

      fiveBlockId: null,
      fiveLeftel: null, 
      fiveRightel: null,
      fivePoly: null,
      fiveAniTxt: null,
      videoData: null,
      videoData1: null,

      sixBlockId: null,
      sixLeftel: null, 
      sixRightel: null,
      sixPoly: null,
      slideData6: null,
      slicksecArr: [],
      sixPagi: null,

      sevenBlockId: null,
      sevenLeftel: null, 
      sevenRightel: null,
      sevenPoly: null,
      inner7Data: null,

      eightBlockId: null,
      eightLeftel: null, 
      eightRightel: null,
      eightPoly: null,
      id8Data1: null,
      id8Data2: null,
      id8Data3: null,

      sequ1: 0,
      sequ2: 0,
      sequ3: 0,

      oldScroll: 0,
      temp2: 0,
      temp3: 0,
      temp4: 0,
      temp5: 0,
      temp6: 0,
      temp7: 0,
      temp8: 0,

      tempm2: 0,
      tempm3: 0,
      tempm8: 0,

      downwardCount: 0,
      upwardCount: 0,

      showMenu: false,
      showMobile: false
    }
  },
  props: {
    images: Array,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  created() {
    // window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.queryScroll);
    // this.queryScroll();
    if(this.isMobile()) {
    } else {
    }

    this.fetchSlides();
    this.fetchCharacterInfo();
    this.fetchCarousel();
  },
  computed: {
    ...mapState(useSlideStore, {slides: 'getSlides', characterInfo: 'getCharaInfo', carouselInfo: 'getCarouselInfo'})
  },
  mounted() {
    console.log('mounted');
    // this.animateSequence8();
    this.temphi();
    this.dataCollect();

    window.addEventListener('resize', this.isMobile);
  },
  watch: {
    showMenu: function (newVal, oldVal) {
      console.log("watch showMenu newVal=", newVal, "oldVal=", oldVal);
      this.fixedmenu();
    },
    showMobile: function(newVal, oldVal) {
      console.log("watch showMenu newVal=", newVal, "oldVal=", oldVal);
    }
  },
  methods: {
    ...mapActions(useSlideStore, ['fetchSlides', 'fetchCharacterInfo', 'fetchCarousel']),
    linktoPlaystore() {
      window.open('https://play.google.com/store/apps', '_blank');
    },
    // 121809391821266
    // https://www.facebook.com/help/372393340104085/?helpref=uf_share
    linktoApplestore() {
      // window.open('https://www.apple.com/app-store/', '_blank');
      window.open('https://apps.apple.com/', '_blank');
    },
    gotoPage(val) {
      this.$router.push(val);
    },
    gotoNewPage(val) {
      if(val == 'facebook') {
        window.open('https://www.facebook.com/', '_blank');
        // window.open('https://www.facebook.com/strongerthangood/', '_blank');
      } else if(val == 'youtube') {
        window.open('https://www.youtube.com/', '_blank');
      } else {
        // const routeData = this.$router.resolve({name: val, query: {data: "someData"}});
        const routeData = this.$router.resolve({name: val});
        window.open(routeData.href, '_blank');
      } 
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
    routeTo(path, i) {
      this.$router.push({name: path, params: {id: i}})
    },
    fixedmenu() {
      if(this.showMenu) {
        $('body').addClass("fixed-position");
      } else {
        $('body').removeClass("fixed-position");
      }
    },
    openMenu() {
      this.showMenu = !this.showMenu
    },
    temphi() {
      // your instersectionobserver code here
      const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square1 = entry.target.querySelector('.carouselbg-css');
          const square2 = entry.target.querySelector('.larrowcss');
          const square3 = entry.target.querySelector('.rarrowcss');
          const square4 = entry.target.querySelector('.polygonimgcss');

          const square5 = entry.target.querySelector('.left-carocss');
          const square6 = entry.target.querySelector('.right-carocss');

          const square8 = entry.target.querySelector("#secondId .carousel__pagination");
            
          this.slickfirstArr = []
          for(let i=0; i< this.slides.length; i++) {
            this.slickfirstArr.push(document.getElementById('slideimgId'+i));
          }

          if (entry.isIntersecting) {
            square1.classList.add('caroAni1');
            square2.classList.add('rshowActive');
            square3.classList.add('lshowActive');
            square4.classList.add('polyActive');

            square5.classList.add('carolArrowAni');
            square6.classList.add('carorArrowAni');

            // square7.classList.add('slickAni2');
            for(let i=0; i<this.slides.length; i++) {
              this.slickfirstArr[i].classList.add('slickAni2');
            }

            square8.classList.add('pagiAni2');
            
            return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          square1.classList.remove('caroAni1');
          square2.classList.remove('rshowActive');
          square3.classList.remove('lshowActive');
          square4.classList.remove('polyActive');

          square5.classList.remove('carolArrowAni');
          square6.classList.remove('carorArrowAni');

          // square7.classList.remove('slickAni2');
          for(let i=0; i < this.slides.length; i++) {
            this.slickfirstArr[i].classList.remove('slickAni2');
          }
          square8.classList.remove('pagiAni2');
        });
      });
      observer2.observe(document.querySelector('.second-block'));

      const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square2 = entry.target.querySelector('.larrowcss');
          const square3 = entry.target.querySelector('.rarrowcss');
          const square4 = entry.target.querySelector('.polygonimgcss');

          if (entry.isIntersecting) {
            square2.classList.add('rshowActive');
            square3.classList.add('lshowActive');
            square4.classList.add('polyActive');

            if(this.sequ1 == 0) {
              this.sequ1++;
              var x = document.getElementsByClassName("mysequence3");
              for(var i = 0; i < x.length; i++) {
                var $this = x[i];
                var str = '有比地。隨早小個懷當是許被角就部人美人專；結禮不生斯，法起年不說面位動：題了得教人落情美病力信國覺，許動為部高地觀燈學層起人開意、者商之達期，情種處，自了面的於人何後畫還務只發沒施影三，整精來！死人告稱小現對報可怎十教男出時收音氣回魚取了中前變個；的太著進不。的我會華值職道陸，兒人新過，防土主素的野全道由式學象成力如。';
                $this.innerHTML = str;
              }
              this.animateSequence3();
            }

          return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          square2.classList.remove('rshowActive');
          square3.classList.remove('lshowActive');
          square4.classList.remove('polyActive');

          this.sequ1 = 0
          var x = document.getElementsByClassName("mysequence3");
          for(var i = 0; i < x.length; i++) {
            var $this = x[i];
            var str = '有比地。隨早小個懷當是許被角就部人美人專；結禮不生斯，法起年不說面位動：題了得教人落情美病力信國覺，許動為部高地觀燈學層起人開意、者商之達期，情種處，自了面的於人何後畫還務只發沒施影三，整精來！死人告稱小現對報可怎十教男出時收音氣回魚取了中前變個；的太著進不。的我會華值職道陸，兒人新過，防土主素的野全道由式學象成力如。';
            $this.innerHTML = str;
          }

        });
      });
      observer3.observe(document.querySelector('.third-block'));

      const observer4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square2 = entry.target.querySelector('.larrowcss');
          const square3 = entry.target.querySelector('.rarrowcss');
          const square4 = entry.target.querySelector('.polygonimgcss');

          const square5 = entry.target.querySelector('.card-row');
          const square6 = entry.target.querySelector('.topLdiamon');
          const square7 = entry.target.querySelector('.topRdiamon');
          const square8 = entry.target.querySelector('.bottomLdiamon');
          const square9 = entry.target.querySelector('.bottomRdiamon');
          const square10 = entry.target.querySelector('.child-act');

          const square11 = entry.target.querySelector('.thirdbg-css');
          // const square8 = entry.target.querySelector("#secondId .carousel__pagination");
          if (entry.isIntersecting) {
            square2.classList.add('rshowActive');
            square3.classList.add('lshowActive');
            square4.classList.add('polyActive');

            square5.classList.add('cardAni');
            square6.classList.add('toplAni');
            square7.classList.add('toprAni');
            square8.classList.add('bottomlAni');
            square9.classList.add('bottomrAni');
            square10.classList.add('childActAni');

            square11.classList.add('fourAni');
          return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          square2.classList.remove('rshowActive');
          square3.classList.remove('lshowActive');
          square4.classList.remove('polyActive');

          square5.classList.remove('cardAni');
          square6.classList.remove('toplAni');
          square7.classList.remove('toprAni');
          square8.classList.remove('bottomlAni');
          square9.classList.remove('bottomrAni');
          square10.classList.remove('childActAni');

          square11.classList.remove('fourAni');
        });
      });
      observer4.observe(document.querySelector('.fourth-block'));

      const observer5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square2 = entry.target.querySelector('.larrowcss');
          const square3 = entry.target.querySelector('.rarrowcss');
          const square4 = entry.target.querySelector('.polygonimgcss');

          const square5 = entry.target.querySelector('.five-videoblock');
          const square6 = entry.target.querySelector('.five-videoblock1');
          const square7 = entry.target.querySelector('.thirdbg-css');

          if (entry.isIntersecting) {
            square2.classList.add('rshowActive');
            square3.classList.add('lshowActive');
            square4.classList.add('polyActive');

            square5.classList.add('videoBlock');
            square6.classList.add('videoBlock1');
            square7.classList.add('fiveAni');

            if(this.sequ2 == 0) {
              this.sequ2++;
              var x = document.getElementsByClassName("sequence5");
              for(var i = 0; i < x.length; i++) {
                var $this = x[i];
                var str = '死人告稱小現對報可怎十教男出時收音氣回魚取了中前變個；的太著進不。的我會華值職道陸，兒人新過，防土主素的野全道由式學象成力如。';
                $this.innerHTML = str;
              }
              this.animateSequence5();
            }

          return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          square2.classList.remove('rshowActive');
          square3.classList.remove('lshowActive');
          square4.classList.remove('polyActive');

          square5.classList.remove('videoBlock');
          square6.classList.remove('videoBlock1');
          square7.classList.remove('fiveAni');

          this.sequ2 = 0
          var x = document.getElementsByClassName("sequence5");
          for(var i = 0; i < x.length; i++) {
            var $this = x[i];
            var str = '死人告稱小現對報可怎十教男出時收音氣回魚取了中前變個；的太著進不。的我會華值職道陸，兒人新過，防土主素的野全道由式學象成力如。';
            $this.innerHTML = str;
          }

        });
      });
      observer5.observe(document.querySelector('.five-block'));


      const observer6 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square2 = entry.target.querySelector('.larrowcss');
          const square3 = entry.target.querySelector('.rarrowcss');
          const square4 = entry.target.querySelector('.polygonimgcss');

          const square5 = entry.target.querySelector("#sixId .carousel__pagination");

          this.slicksecArr = []
          for(let i=0; i< this.slidessec.length; i++) {
            this.slicksecArr.push(document.getElementById('slideId6'+i));
          }


          if (entry.isIntersecting) {
            square2.classList.add('rshowActive');
            square3.classList.add('lshowActive');
            square4.classList.add('polyActive');

            square5.classList.add('pagiAni6');

            for(let i=0; i<this.slides.length; i++) {
              this.slicksecArr[i].classList.add('slickAni6');
            }


          return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          square2.classList.remove('rshowActive');
          square3.classList.remove('lshowActive');
          square4.classList.remove('polyActive');

          square5.classList.remove('pagiAni6');

          for(let i=0; i < this.slidessec.length; i++) {
            this.slicksecArr[i].classList.remove('slickAni6');
          }

        });
      });
      observer6.observe(document.querySelector('.six-block'));


      const observer7 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square2 = entry.target.querySelector('.larrowcss');
          const square3 = entry.target.querySelector('.rarrowcss');
          const square4 = entry.target.querySelector('.polygonimgcss');

          const square5 = entry.target.querySelector('.imgs-inner7');
          if (entry.isIntersecting) {
            square2.classList.add('rshowActive');
            square3.classList.add('lshowActive');
            square4.classList.add('polyActive');

            square5.classList.add('inner7css');
            

          return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          square2.classList.remove('rshowActive');
          square3.classList.remove('lshowActive');
          square4.classList.remove('polyActive');

          square5.classList.remove('inner7css');
          

        });
      });
      observer7.observe(document.querySelector('.seven-block'));


      const observer8 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square2 = entry.target.querySelector('.larrowcss');
          const square3 = entry.target.querySelector('.rarrowcss');
          const square4 = entry.target.querySelector('.polygonimgcss');

          const square5 = entry.target.querySelector('.first8');
          const square6 = entry.target.querySelector('.second8');
          const square7 = entry.target.querySelector('.third8');

          if (entry.isIntersecting) {
            square2.classList.add('rshowActive');
            square3.classList.add('lshowActive');
            square4.classList.add('polyActive');

            square5.classList.add('Ani8');
            square6.classList.add('Ani8');
            square7.classList.add('Ani8');

            if(this.sequ3 == 0) {
              this.sequ3++;
              var x = document.getElementsByClassName("sequence8");
              for(var i = 0; i < x.length; i++) {
                var $this = x[i];
                var str = '防土主素的野全道由式學象成力如。';
                $this.innerHTML = str;
              }
              this.animateSequence8();
            }

          return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          square2.classList.remove('rshowActive');
          square3.classList.remove('lshowActive');
          square4.classList.remove('polyActive');

          square5.classList.remove('Ani8');
          square6.classList.remove('Ani8');
          square7.classList.remove('Ani8');

          this.sequ3 = 0
          var x = document.getElementsByClassName("sequence8");
          for(var i = 0; i < x.length; i++) {
            var $this = x[i];
            var str = '防土主素的野全道由式學象成力如。';
            $this.innerHTML = str;
          }


        });
      });
      observer8.observe(document.querySelector('.eight-block'));


      // const observer9m = new IntersectionObserver(entries => {
      //   entries.forEach(entry => {
      //     const square1 = entry.target.querySelector('.mcaroselbg-css');
      //     const square2 = entry.target.querySelector('.larrowcss');
      //     const square3 = entry.target.querySelector('.rarrowcss');
      //     const square4 = entry.target.querySelector('.polygonimgcss');

      //     const square8 = entry.target.querySelector("#mthirdId .carousel__pagination");
            
      //     this.mslickArr = []
      //     for(let i=0; i< this.slides.length; i++) {
      //       this.mslickArr.push(document.getElementById('mslideimgId'+i));
      //     }

      //     if (entry.isIntersecting) {
      //       square1.classList.add('caroAni1');
      //       square2.classList.add('rshowActive');
      //       square3.classList.add('lshowActive');
      //       square4.classList.add('polyActive');

      //       // square7.classList.add('slickAni2');
      //       for(let i=0; i<this.slides.length; i++) {
      //         this.mslickArr[i].classList.add('slickAni2');
      //       }

      //       square8.classList.add('pagiAni2');
            
      //       return; // if we added the class, exit the function
      //     }

      //     // We're not intersecting, so remove the class!
      //     square1.classList.remove('caroAni1');
      //     square2.classList.remove('rshowActive');
      //     square3.classList.remove('lshowActive');
      //     square4.classList.remove('polyActive');

      //     // square7.classList.remove('slickAni2');
      //     for(let i=0; i < this.slides.length; i++) {
      //       this.mslickArr[i].classList.remove('slickAni2');
      //     }
      //     square8.classList.remove('pagiAni2');
      //   });
      // });
      // observer9m.observe(document.querySelector('.m-third'));
    },
    animateSequence3() {
      var a = document.getElementsByClassName('mysequence3');
      for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 500;
        for (let l = 0; l < letter.length; l++) {
          if (letter[l] != ' ') {
            str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
            delay += 10;
          } else
            str += letter[l];
        }
        $this.innerHTML = str;
      }
    },
    animateSequence5() {
      var a = document.getElementsByClassName('sequence5');
      for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 500;
        for (let l = 0; l < letter.length; l++) {
          if (letter[l] != ' ') {
            str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
            delay += 20;
          } else
            str += letter[l];
        }
        $this.innerHTML = str;
      }
    },
    animateSequence8() {
      var a = document.getElementsByClassName('sequence8');
      for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 1200;
        for (let l = 0; l < letter.length; l++) {
          if (letter[l] != ' ') {
            str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
            delay += 100;
          } else
            str += letter[l];
        }
        $this.innerHTML = str;
      }
    },
    viewPort2() {
      // let temp = this.secondBlockId.offsetTop;
      // setTimeout(() => {
      //   window.scrollBy(0, temp);
      // }, 1000);

      // this.secondBlockId.scrollIntoView();
      // this.secondBlockId.scrollIntoView({behavior: "smooth", block: "end"});

      // this.secondBlockId.scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start'
      // });

      let sss = (this.secondBlockId.offsetTop - 50);
      $('html, body').animate({
        scrollTop: sss
      }, 1000, function() {
      });
    },
    viewPort3() {
      let sss = (this.thirdBlockId.offsetTop - 0);
      $('html, body').animate({
        scrollTop: sss
      }, 1000, function() {
      });
    },
    viewPort4() {
      let sss = (this.fourBlockId.offsetTop - 50);
      $('html, body').animate({
        scrollTop: sss
      }, 1000, function() {
      });
    },
    viewPort5() {
      let sss = (this.fiveBlockId.offsetTop - 50);
      $('html, body').animate({
        scrollTop: sss
      }, 1000, function() {
      });
      // return;
    },
    viewPort6() {
      let sss = (this.sixBlockId.offsetTop - 50);
      $('html, body').animate({
        scrollTop: sss
      }, 1000, function() {
      });
      // return;
    },
    viewPort7() {
      let sss = (this.sevenBlockId.offsetTop - 50);
      $('html, body').animate({
        scrollTop: sss
      }, 1000, function() {
      });
      // return;
    },
    viewPort8() {
      let sss = (this.eightBlockId.offsetTop);
      $('html, body').animate({
        scrollTop: sss
      }, 1000, function() {
      });
      // return;
    },

    dataCollect() {
      this.secondBlockId = document.getElementById('secondId')
      this.secLeftel = document.getElementById('sectarget-l')
      this.secRightel = document.getElementById('sectarget-r')
      this.secPoly = document.getElementById('polyId2');
      
      this.lcaro = document.getElementById('lcaroId');
      this.rcaro = document.getElementById('rcaroId');
      this.carobg = document.getElementById('carobgId');

      this.slickfirstArr = []
      for(let i=0; i< this.slides.length; i++) {
        this.slickfirstArr.push(document.getElementById('slideimgId'+i));
      }
      // this.slickImg = document.getElementById('slideimgId');

      this.mthirdBlockId = document.getElementById('mthirdId')
      this.mslickArr = []
      for(let i=0; i< this.slides.length; i++) {
        this.mslickArr.push(document.getElementById('mslideimgId'+i));
      }

      this.thirdBlockId = document.getElementById('thirdId')
      this.thirdLeftel = document.getElementById('thirdtarget-l')
      this.thirdRightel = document.getElementById('thirdtarget-r')
      this.thirdPoly = document.getElementById('polyId3');

      this.thirdAniTxt = document.getElementById('thirdContentId');

      
      this.fourBlockId = document.getElementById('fourId')
      this.fourLeftel = document.getElementById('fourtarget-l')
      this.fourRightel = document.getElementById('fourtarget-r')
      this.fourPoly = document.getElementById('polyId4');

      this.fourbgData = document.getElementById('fourbgId')
      this.fourcardData = document.getElementById('cardId');
      this.toplData = document.getElementById('toplId');
      this.toprData = document.getElementById('toprId');
      this.bottomlData = document.getElementById('bottomlId');
      this.bottomrData = document.getElementById('bottomrId');
      this.bottomPartData = document.getElementById('childActId');


      this.fiveBlockId = document.getElementById('fiveId')
      this.fiveLeftel = document.getElementById('fivetarget-l')
      this.fiveRightel = document.getElementById('fivetarget-r')
      this.fivePoly = document.getElementById('polyId5');

      this.fiveAniTxt = document.getElementById('fiveContentId');
      this.videoData = document.getElementById('video5Id');
      this.videoData1 = document.getElementById('video5Id1');

      
      this.sixBlockId = document.getElementById('sixId')
      this.sixLeftel = document.getElementById('sixtarget-l')
      this.sixRightel = document.getElementById('sixtarget-r')
      this.sixPoly = document.getElementById('polyId6');

      // this.slideData6 = document.getElementById('slideId6');
      this.slicksecArr = []
      for(let i=0; i< this.slidessec.length; i++) {
        this.slicksecArr.push(document.getElementById('slideId6'+i));
      }

      this.sixPagi = document.querySelector("#sixId .carousel__pagination");
      
      
      this.sevenBlockId = document.getElementById('sevenId')
      this.sevenLeftel = document.getElementById('seventarget-l')
      this.sevenRightel = document.getElementById('seventarget-r')
      this.sevenPoly = document.getElementById('polyId7');

      this.inner7Data = document.getElementById('inner7Id');

      
      this.eightBlockId = document.getElementById('eightId')
      this.eightLeftel = document.getElementById('eighttarget-l')
      this.eightRightel = document.getElementById('eighttarget-r')
      this.eightPoly = document.getElementById('polyId8');

      this.id8Data1 = document.getElementById('eightId1');
      this.id8Data2 = document.getElementById('eightId2');
      this.id8Data3 = document.getElementById('eightId3');
    },
    queryScroll() {
      var scroll = $(window).scrollTop();
      // console.log(this.secondBlockId.offsetTop + " " + scroll);
      if(!this.showMobile) {
        if((this.secondBlockId.offsetTop) > scroll) {
          // console.log(this.oldScroll + " < " + scroll);
          if (scroll > this.oldScroll) {
            if(this.temp2 == 0) {
              // console.log("scrolling downwards");
  
              this.temp2 += 1;
              this.downwardCount = 0
              this.upwardCount = 1
              
              // this.viewPort2();
              let sss = this.secondBlockId.offsetTop;
              // console.log(sss)
  
              $('html, body').animate({
                scrollTop: sss
                }, 1000, function() {
              });
              
            }
          } else if (scroll < this.oldScroll) {
            if(this.temp2 !== 0) {
              // console.log("scrolling upwards " + scroll + " > " + this.oldScroll);
  
              this.temp2 = 0;
              this.downwardCount = 1
              this.upwardCount = 0
              $('html, body').animate({
                scrollTop: 0
                }, 1000, function() {
              });
  
            }
          }
        } else if(this.thirdBlockId.offsetTop > scroll && this.secondBlockId.offsetTop < scroll) {
          if (scroll > this.oldScroll) {
            if(this.temp3 == 0) {
              // console.log("scrolling downwards");
              
              this.temp3 += 1;
              this.downwardCount = 0
              this.upwardCount = 1
  
              let sss = this.thirdBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
              }, 1000, function() {
              });
            }
          } else if (scroll < this.oldScroll) {
            if(this.temp3 !== 0) {
              // console.log("scrolling upwards");
  
              this.temp3 = 0;
              this.downwardCount = 1
              this.upwardCount = 0
  
              let sss = this.secondBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
                }, 1000, function() {
              });
  
            }
          }
        } else if(this.fourBlockId.offsetTop > scroll && this.thirdBlockId.offsetTop < scroll) {
          if (scroll > this.oldScroll) {
            if(this.temp4 == 0) {
              // console.log("scrolling downwards");
              
              this.temp4 += 1;
              this.downwardCount = 0
              this.upwardCount = 1
  
              let sss = this.fourBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
              }, 1000, function() {
              });
            }
          } else if (scroll < this.oldScroll) {
            if(this.temp4 !== 0) {
              // console.log("scrolling upwards");
  
              this.temp4 = 0;
              this.downwardCount = 1
              this.upwardCount = 0
  
              let sss = this.thirdBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
                }, 1000, function() {
              });
  
            }
          }
        } else if(this.fiveBlockId.offsetTop > scroll && this.fourBlockId.offsetTop < scroll) {
          if (scroll > this.oldScroll) {
            if(this.temp5 == 0) {
              // console.log("scrolling downwards");
              
              this.temp5 += 1;
              this.downwardCount = 0
              this.upwardCount = 1
  
              let sss = this.fiveBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
              }, 1000, function() {
              });
            }
          } else if (scroll < this.oldScroll) {
            if(this.temp5 !== 0) {
              // console.log("scrolling upwards");
  
              this.temp5 = 0;
              this.downwardCount = 1
              this.upwardCount = 0
  
              let sss = this.fourBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
                }, 1000, function() {
              });
  
            }
          }
        } else if(this.sixBlockId.offsetTop > scroll && this.fiveBlockId.offsetTop < scroll) {
          if (scroll > this.oldScroll) {
            if(this.temp6 == 0) {
              // console.log("scrolling downwards");
              
              this.temp6 += 1;
              this.downwardCount = 0
              this.upwardCount = 1
  
              // let sss = this.sixBlockId.offsetTop;
              // $('html, body').animate({
              //   scrollTop: sss
              // }, 1000, function() {
              // });
            }
          } else if (scroll < this.oldScroll) {
            if(this.temp6 !== 0) {
              // console.log("scrolling upwards");
  
              this.temp6 = 0;
              this.downwardCount = 1
              this.upwardCount = 0
  
              let sss = this.fiveBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
                }, 1000, function() {
              });
  
            }
          }
        } else if(this.sevenBlockId.offsetTop > scroll && this.sixBlockId.offsetTop < scroll) {
          if (scroll > this.oldScroll) {
            if(this.temp7 == 0) {
              // console.log("scrolling downwards");
              
              this.temp7 += 1;
              this.downwardCount = 0
              this.upwardCount = 1
  
              let sss = this.sevenBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
              }, 1000, function() {
              });
            }
          } else if (scroll < this.oldScroll) {
            if(this.temp7 !== 0) {
              // console.log("scrolling upwards");
  
              this.temp7 = 0;
              this.downwardCount = 1
              this.upwardCount = 0
  
              let sss = this.sixBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
                }, 1000, function() {
              });
  
            }
          }
        } else if(this.sevenBlockId.offsetTop < scroll) {
          if (scroll > this.oldScroll) {
            if(this.temp8 == 0) {
              // console.log("scrolling downwards");
              
              this.temp8 += 1;
              this.downwardCount = 0
              this.upwardCount = 1
  
              let sss = this.eightBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
              }, 1000, function() {
              });
            }
          } else if (scroll < this.oldScroll) {
            if(this.temp8 !== 0) {
              // console.log("scrolling upwards");
  
              this.temp8 = 0;
              this.downwardCount = 1
              this.upwardCount = 0
  
              let sss = this.sevenBlockId.offsetTop;
              $('html, body').animate({
                scrollTop: sss
                }, 1000, function() {
              });
  
            }
          }
        }
        // console.log(scroll)

        if(this.downwardCount == 0) {
          this.downwardCount = 1;
          var self = this;
          setTimeout(function() {
            // console.log('good luck to me')
            // this.oldScroll = scroll;
            self.oldScroll = $(window).scrollTop();
          }, 1000);
        } else if(this.upwardCount == 0) {
          this.upwardCount = 1;
          var self = this;
          setTimeout(function() {
            // console.log('thank you so much')
            self.oldScroll = $(window).scrollTop();
          }, 1000);
        }
      } 
      // else {
      //   if((this.thirdBlockId.offsetTop) > scroll) { // second
      //     if (scroll > this.oldScroll) {
      //       if(this.tempm2 == 0) {
      //         this.tempm2 += 1;
      //         this.downwardCount = 0
      //         this.upwardCount = 1
              
      //         let sss = this.thirdBlockId.offsetTop;
  
      //         $('html, body').animate({
      //           scrollTop: sss
      //           }, 1000, function() {
      //         });
              
      //       }
      //     } else if (scroll < this.oldScroll) {
      //       if(this.tempm2 !== 0) {
      //         this.tempm2 = 0;
      //         this.downwardCount = 1
      //         this.upwardCount = 0
      //         $('html, body').animate({
      //           scrollTop: 0
      //           }, 1000, function() {
      //         });
  
      //       }
      //     }
      //   } else if(this.mthirdBlockId.offsetTop > scroll && this.thirdBlockId.offsetTop < scroll) { //third
      //     if (scroll > this.oldScroll) {
      //       if(this.tempm3 == 0) {
      //         this.tempm3 += 1;
      //         this.downwardCount = 0
      //         this.upwardCount = 1
  
      //         let sss = this.mthirdBlockId.offsetTop;
      //         $('html, body').animate({
      //           scrollTop: sss
      //         }, 1000, function() {
      //         });
      //       }
      //     } else if (scroll < this.oldScroll) {
      //       if(this.tempm3 !== 0) {
      //         this.tempm3 = 0;
      //         this.downwardCount = 1
      //         this.upwardCount = 0
  
      //         let sss = this.thirdBlockId.offsetTop;
      //         $('html, body').animate({
      //           scrollTop: sss
      //           }, 1000, function() {
      //         });
  
      //       }
      //     }
      //   } else if(this.mthirdBlockId.offsetTop < scroll) {
      //     if (scroll > this.oldScroll) {
      //       if(this.tempm8 == 0) {
      //         this.tempm8 += 1;
      //         this.downwardCount = 0
      //         this.upwardCount = 1
  
      //       }
      //     } else if (scroll < this.oldScroll) {
      //       if(this.tempm8 !== 0) {
  
      //         this.tempm8 = 0;
      //         this.downwardCount = 1
      //         this.upwardCount = 0
  
      //         let sss = this.mthirdBlockId.offsetTop +1;
      //         $('html, body').animate({
      //           scrollTop: sss
      //           }, 1000, function() {
      //         });
  
      //       }
      //     }
      //   }
      // }

      // if(this.downwardCount == 0) {
      //   this.downwardCount = 1;
      //   var self = this;
      //   setTimeout(function() {
      //     // console.log('good luck to me')
      //     // this.oldScroll = scroll;
      //     self.oldScroll = $(window).scrollTop();
      //   }, 1000);
      // } else if(this.upwardCount == 0) {
      //   this.upwardCount = 1;
      //   var self = this;
      //   setTimeout(function() {
      //     // console.log('thank you so much')
      //     self.oldScroll = $(window).scrollTop();
      //   }, 1000);
      // }
      
    },


    handleScroll() {
      let pixel1 = window.pageYOffset
      
      if((this.secondBlockId.offsetTop) > pixel1) {
        console.log('1')
        if(this.oldScroll > pixel1){
          console.log('Scrolling up ' + this.oldScroll + " " + pixel1);
          if(pixel1 == 0) { 
            this.temp2 = 0;
          }
        } else{
          console.log('Scrolling down');
          if(this.temp2 == 0) {
            this.viewPort2();
            this.temp2 += 1;
          }
        }
      } else if(this.thirdBlockId.offsetTop > pixel1 && this.secondBlockId.offsetTop < pixel1) {
        console.log('2')
        if(this.oldScroll > pixel1){
          console.log('Scrolling up ' + this.oldScroll + " " + pixel1);
          const pixels = window.pageYOffset
          if(pixels < this.thirdBlockId.offsetTop ) {
            this.temp3 = 0;
          }
        }
        else{
          console.log('Scrolling down');
          if(this.temp3 == 0) {
            this.viewPort3();
            this.temp3 += 1;
          }
        }
      } else if(this.fourBlockId.offsetTop > pixel1 && this.thirdBlockId.offsetTop < pixel1) {
        console.log('3')
        if(this.oldScroll > pixel1){
          console.log('Scrolling up ' + this.oldScroll + " " + pixel1);
          const pixels = window.pageYOffset
          if(pixels < this.fourBlockId.offsetTop ) {
            this.temp4 = 0;
          }
        }
        else{
          console.log('Scrolling down');
          if(this.temp4 == 0) {
            this.viewPort4();
            this.temp4 += 1;
          }
        }
      } 
      this.oldScroll = pixel1;

    }
  },
  setup() {
    // const _slidessec = [
    //   { id: 1, title: 'My', content: 'VueJS is a library' , src: '/src/assets/images/carousel/caro-sec.png'},
    //   { id: 2, title: 'Current', content: 'Know the components' , src: '/src/assets/images/carousel/caro-sec.png'},
    //   { id: 3, title: 'Project', content: 'Know the components' , src: '/src/assets/images/carousel/caro-sec.png'}
    // ];
    // const _slidessec = toRefs(_slidessec);
    // const getImageUrl = (name) => {
    //   return new URL(`/src/assets/images/carousel/${name}`, import.meta.url).href
    // }
    // return {
    //   _slidessec,
    //   getImageUrl
    // }
  },
});
</script>

<style lang="scss" scoped>
.player-container {
  // margin-top: 100px;
}

.open-menu {
  display: none;
}
@media screen and (max-width: 768px) {
  .open-menu {
    display: block;
    z-index: 10;
    max-height: 100vh;
    min-height: 100vh;
    position: absolute;
    width: 100%;
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

.hrcss {
  border: 3px solid #000;
}
.first-block {
  position: relative;
  min-height: 101vh;
  max-height: 101vh;
  @media screen and (max-width: 768px) {
    background-image: url("../assets/images/mobile/m-bg1.png");
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;

    min-height: 100vh;
    max-height: 100vh;
  }
  .firstbgimg-css {
    width: 100%;
    // margin-bottom: -7px;
    min-height: 100vh;
    max-height: 100vh;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .m-firbgimg {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      width: 100%;
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
    bottom: 3rem;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
    // 1
    // -webkit-animation: left 1s;

    // 2
    // animation-name: move;
    // animation-delay: 2s;
    // animation-duration: 1s;
    // animation-fill-mode: forwards;
    
    .overlap1 {
      width: 32%;

      visibility: hidden;
      animation-name: leftToRight;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-delay: 2s;
      animation-fill-mode: forwards; // hidden to visible
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
      z-index: 10;
      .playstore-css {
        width: 293.9px;
        height: 85.27px;
        margin-right: 1rem;
        cursor: pointer;
      }
      .appstore-css {
        width: 293.9px;
        height: 85.27px;
        cursor: pointer;
      }
    }
    .overlap3 {
      width: 32%;
      text-align: right;

      visibility: hidden;
      animation-name: rightToLeft;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-delay: 2.5s;
      animation-fill-mode: forwards; // hidden to visible
      .messenger-css {
        width: 95px;
      }
    }
  }
  .m-overblock {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      bottom: 5rem;
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

  // 1
  // @-webkit-keyframes left{
  //     0%{padding-left: 0px;}
  //     100%{padding-left: 2rem;}
  // }

  // 2
  // @keyframes move {
  //   from { padding-left: 0px; }
  //   to { padding-left: 2rem; }
  // }
  

  .first-title-text {
    font-weight: 800;
    font-size: 64px;
    color: #FFFFFF;
    text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.88);

    @media screen and (max-width: 768px) {
      font-size: 32px;
      text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
    }
  }
  .first-content-text {
    font-weight: 800;
    font-size: 32px;
    color: #FFFFFF;
    text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.88);
    line-height: 1.3;
    
    @media screen and (max-width: 768px) {
      font-size: 14px;
      text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
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

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(70, 70, 70, 0) 100%);
  transform: rotate(-180deg);
  // @media screen and (max-width: 768px) {
    // position: unset;
    // background: none;
    // transform: none;
  // }
}
.second-block {
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  padding: 0;

  // https://codepen.io/gillytech/pen/AGYYyK
  box-shadow: 
        inset 0px 11px 8px -10px #000,
        inset 0px -11px 8px -10px #000; 
  box-shadow: 
        inset 0px 171px 40px -110px #000, 
        inset 0px -171px 48px -110px #000;

  background: rgba(38, 37, 107, 0.5); 
  .caro-img {
    height:0;
  }
  .slickAni2 {
    animation-name: overstuff;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards; // hidden to visible
  }
  .carouselbg-css {
    width: 100%;
    height: 100%;
  }
  .caroAni1 {
    width:70%;
    height: 70%;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    animation-name: stuff1;
    animation-duration: 1.5s;
    animation-fill-mode: forwards; // hidden to visible
  }
}
.third-block {
  position: relative;
  max-height: 100vh;
  min-height: 100vh;
  background: #000;
  .overlap-info {
    top: 150px;
    @media screen and (max-width: 768px) {
      top: 75px;
    }
  }
  .thirdbg-css {
    width: 100%;
    max-height: 100vh;
    min-height: 100vh;
    // margin-bottom: -7px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .m-bg3 {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      width: 100%;
      max-height: 100vh;
      min-height: 100vh;
    }
  }
  .third-block-content {
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
    text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.7);
    width: 70%;
    margin: 3rem auto 0;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      width: 90%;
    }
  }
}

.fourth-block {
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  background: #000;
  .thirdbg-css {
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    margin-bottom: -7px;
  }
  .fourAni {
    max-height: 100vh;
    // width:0;
    // top:50%;
    // left:50%;
    // transform: translate(-50%, -50%);
    animation-name: bgzerotofull; // same with stuff
    animation-duration: 1s;
    animation-fill-mode: forwards; 
    background: #000;
  }
  @keyframes bgzerotofull {
    // 0% {
    //   width: 0;
    // }
    // 22.2%{
    //   width: 22%;
    // }
    // 44.4%{
    //   width: 44%;
    // }
    // 66.6%{
    //   width: 66%;
    // }
    // 77.7%{
    //   width: 77%;
    // }
    // 100%{
    //   width: 100%;
    // }
    0% {
      transform: scaleY(0.5);
    }
    100%{
      transform: scaleY(1);
    }
  }
}
.five-block {
  position: relative;
  max-height: 200vh;
  background: #000;
  .thirdbg-css {
    width: 100%;
    // margin-bottom: -7px;
    
  }
  .fiveAni {
    animation-name: smallToOrigin; // same with bgzerotofull
    animation-duration: 0.75s;
    animation-fill-mode: forwards; 
    background: #000;
  }
  @keyframes smallToOrigin {
    0% {
      transform: scale(0.75, 0.75);
    }
    100%{
      transform: scale(1, 1);
    }
  }
  .third-block-content {
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
    text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.7);
    width: 70%;
    margin: 2rem auto 0;
    text-align: center;
  }
  .five-videoblock {
    text-align: center;
    padding-top: 5rem;
  }
  .videoBlock {
    opacity: 0.5;
    visibility: hidden;
    animation-name: leftToRight1;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 1s;
    animation-fill-mode: forwards; 
  }
  @keyframes leftToRight1 {
    0% {
      opacity: 0.5;
      transform: translateX(-200px);
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateX(0px);
    }
  }
  
  .five-videoblock1 {
    text-align: center;
    padding-top: 5rem;
  }
  .videoBlock1 {
    opacity: 0.5;
    visibility: hidden;
    animation-name: leftToRight2;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 1.8s;
    animation-fill-mode: forwards; 
  }
  @keyframes leftToRight2 {
    0% {
      opacity: 0.5;
      transform: translateX(-200px);
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateX(0px);
    }
  }
  .b5-txt {
    font-weight: 700;
    font-size: 48px;
    color: #FFFFFF;
    text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.7);
    margin-bottom: 1rem;
  }
  .video-overlap {
    position: relative;
    width: 55%;
    margin: 0 auto;
    .block5Video {
      width: 100%;
      max-height: 45vh
    }
    .play-css {
      position: absolute;
      width: 87px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .viideo-block {
    width: 55%;
    height: 100%;
    margin: 0 auto;
  }
}
.five-block:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(70, 70, 70, 0) 100%);
  transform: rotate(-180deg);
}
.six-block {
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  padding: 0;

  // https://codepen.io/gillytech/pen/AGYYyK
  box-shadow: 
        inset 0px 11px 8px -10px #000,
        inset 0px -11px 8px -10px #000; 
  box-shadow: 
        inset 0px 171px 40px -110px #000, 
        inset 0px -171px 48px -110px #000;
  
  .caro-img {
    height:0;
    // animation-name: caroanimation2; // copy of overstuff
    // animation-duration: 1s;
    // animation-delay: 1s;
    // animation-fill-mode: forwards; // hidden to visible
  }
  .slickAni6 {
    animation-name: caroanimation2; // copy of overstuff
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards; // hidden to visible
  }
  @keyframes caroanimation2 {
    0% {
      height: 0%;
    }
    22.2%{
      height: 22%;
    }
    44.4%{
      height: 44%;
    }
    66.6%{
      height: 66%;
    }
    77.7%{
      height: 77%;
    }
    100%{
      height: 100%;
    }
  }
  .carouselbg-css {
    width: 100%;

    width:0;
    min-height: 100vh;
    max-height: 100vh;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    animation-name: caroanimate2; // copy of stuff
    animation-duration: 1s;
    animation-fill-mode: forwards; // hidden to visible
  }
  @keyframes caroanimate2 {
    0% {
      width: 0;
    }
    22.2%{
      width: 22%;
    }
    44.4%{
      width: 44%;
    }
    66.6%{
      width: 66%;
    }
    77.7%{
      width: 77%;
    }
    100%{
      width: 100%;
    }
  }
}
.seven-block {
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  background: #000;
  .seven-img-block {
    margin: 2rem auto 0;
    width: 50%;
    .imgs-inner7 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .seven-imgcss {
        width: 49%;
        margin-bottom: 2%;
      }
    }
    .inner7css {
      visibility: hidden;
      opacity: 0.5;
      animation-name: bottomToTop7;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-delay: 1s;
      animation-fill-mode: forwards; // hidden to visible
    }
    @keyframes bottomToTop7 {
      0% {
        visibility: hidden;
        opacity: 0.5;
        transform: translateY(200px);
      }
      100% {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
  .thirdbg-css {
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    display: block;
    // margin-bottom: -7px;
  }
}
.eight-block {
  position: relative;
  max-height: 70vh;
  .eight-block-content {
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
    text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.7);
    width: 70%;
    margin: 2rem auto 0;
    text-align: center;
  }
  .row-head-block {
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 2rem auto 0;
    .each-div {
      background: rgba(80, 96, 112, 0.5);
      border: 2px solid #FFFFFF;
      backdrop-filter: blur(7.5px);

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 1rem 1rem;
      position: relative;
      width: 32%;
      width: 202px;
      height: 202px;
      margin: 0 10px;
      .youtube-css {
        width: 85px;
        height: 59px;
      }
      .discord-css {
        width: 97px;
        height: 74px;
      }
      .facebook-css {
        width: 85px;
        height: 85px;
      }
      .icon-text {
        position: absolute;
        bottom: 10px;
      }
      .youtube-text {
        font-weight: 600;
        font-size: 32px;
        color: #FFF;
      }
    }
    .first8, .second8, .third8 {
      visibility: hidden;
      opacity: 0.5;
    }
    .Ani8 {
      animation-name: BtoT1;
      animation-duration: 0.7s;
      animation-timing-function: linear;
      animation-fill-mode: forwards; // hidden to visible
      border-top-color: #FFF;
    }
    
    .first8 {
      animation-delay: 1s;
    }
    .second8 {
      animation-delay: 1.4s;
    }
    .third8 {
      animation-delay: 1.8s;
    }
    @keyframes BtoT1 {
      0% {
        visibility: hidden;
        opacity: 0.5;
        transform: translateY(100px);
        border-top-color: #FFF;
      }
      10% {
        border-top-color: rgba(80, 96, 112, 0.5);
      }
      20% {
        border-top-color: #FFF;
      }
      30% {
        border-top-color: rgba(80, 96, 112, 0.5);
      }
      40% {
        border-top-color: #FFF;
      }
      50% {
        border-top-color: rgba(80, 96, 112, 0.5);
      }
      60% {
        border-top-color: #FFF;
      }
      70% {
        border-top-color: rgba(80, 96, 112, 0.5);
      }
      80% {
        border-top-color: #FFF;
      }
      90% {
        border-top-color: rgba(80, 96, 112, 0.5);
      }
      100% {
        border-top-color: #FFF;
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
  .thirdbg-css {
    width: 100%;
    height: 70vh;
    // margin-bottom: -7px;
    display: block;
  }
}
.footer-block {
  background: #000;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 3rem;

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
.overlap-info {
  position: absolute;
  top: 0px;
  top: 35px;
  width: 100%;
  .title-info {
    display: flex;
    align-items: center;
    justify-content: center;
    .shawdow-wrap {
      filter: drop-shadow(0px 0px 10px rgb(235, 243, 235));
      .larrowcss {
        width: 35px;
        height: 20px;
        clip-path: polygon(0 50%, 78% 0, 100% 50%, 78% 99%);
        background: #FFF;
        @media screen and (max-width: 768px) {
          width: 45px;
          height: 25px;
        }
      }
      .rarrowcss {
        width: 35px;
        height: 20px;
        clip-path: polygon(0 50%, 22% 0, 100% 50%, 22% 99%);
        background: #FFF;
        @media screen and (max-width: 768px) {
          width: 45px;
          height: 25px;
        }
      }
    }
  }
  
  .card-row {
    padding: 0 2rem;
    margin-top: 5rem;
    transform: translateZ(0);
    .ani-cardrow {
      display: flex;
      justify-content: space-evenly;
      width: 100%;

      .each-card {
        width: 19%;
        opacity: 0.5;
      }
      .each-card:hover {
        position: relative;
        opacity: 1;
        cursor: pointer;
        .shawdow-wrap {
          filter: drop-shadow(0px 0px 10px rgb(235, 243, 235));
          .tlarrowcss {
            width: 52px;
            height: 51px;
            
            -webkit-clip-path: polygon(100% 100%, 0 50%, 0 0, 50% 0);
            clip-path: polygon(100% 100%, 0 50%, 0 0, 50% 0);
            background: #FFF;
          }
          .trarrowcss {
            width: 52px;
            height: 51px;
            
            -webkit-clip-path: polygon(0 100%, 50% 0, 100% 0, 100% 50%);
            clip-path: polygon(0 100%, 50% 0, 100% 0, 100% 50%);
            background: #FFF;
          }
          .blarrowcss {
            width: 52px;
            height: 51px;
            
            -webkit-clip-path: polygon(100% 0, 49% 100%, 0 100%, 0 48%);
            clip-path: polygon(100% 0, 49% 100%, 0 100%, 0 48%);
            background: #FFF;
          }
          .brarrowcss {
            width: 52px;
            height: 51px;
            
            -webkit-clip-path: polygon(0 0, 100% 49%, 100% 100%, 50% 100%);
            clip-path: polygon(0 0, 100% 49%, 100% 100%, 50% 100%);
            background: #FFF;
          }
        }
      }
      .activecard {
        position: relative;
        opacity: 1;
        .shawdow-wrap {
          filter: drop-shadow(0px 0px 10px rgb(235, 243, 235));
          .tlarrowcss {
            width: 52px;
            height: 51px;
            
            -webkit-clip-path: polygon(100% 100%, 0 50%, 0 0, 50% 0);
            clip-path: polygon(100% 100%, 0 50%, 0 0, 50% 0);
            background: #FFF;
          }
          .trarrowcss {
            width: 52px;
            height: 51px;
            
            -webkit-clip-path: polygon(0 100%, 50% 0, 100% 0, 100% 50%);
            clip-path: polygon(0 100%, 50% 0, 100% 0, 100% 50%);
            background: #FFF;
          }
          .blarrowcss {
            width: 52px;
            height: 51px;
            
            -webkit-clip-path: polygon(100% 0, 49% 100%, 0 100%, 0 48%);
            clip-path: polygon(100% 0, 49% 100%, 0 100%, 0 48%);
            background: #FFF;
          }
          .brarrowcss {
            width: 52px;
            height: 51px;
            
            -webkit-clip-path: polygon(0 0, 100% 49%, 100% 100%, 50% 100%);
            clip-path: polygon(0 0, 100% 49%, 100% 100%, 50% 100%);
            background: #FFF;
          }
        }
      }
      .child-act {
        position: absolute;
        background: rgba(22, 22, 36, 0.65);
        width: 100%;
        bottom: 6px;
        clip-path: polygon(50% 0%, 100% 20%, 100% 100%, 0 100%, 0 20%);

        .txt1 {
          font-weight: 600;
          font-size: 40px;
          color: #FFFFFF;
          text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.7);
          padding: 2rem 1rem 0;
          text-align: center;
        }
        .txt2 {
          font-weight: 400;
          font-size: 24px;
          color: #FFF96A;
          text-shadow: 0px 4px 16px rgba(26, 29, 40, 0.7);
          padding: 0 1rem 1rem;
          text-align: center;
        }
      }
      .childActAni {
        visibility: hidden;
        animation-name: BtoTopshow;
        animation-duration: 0.7s;
        animation-delay: 1s;
        animation-fill-mode: forwards; 
        -webkit-font-smoothing: antialiased;
      }
      @keyframes BtoTopshow {
        0% {
          visibility: hidden;
          transform: translateY(150px);
        }
        100% {
          visibility: visible;
          transform: translateY(0px);
        }
      }
    }
  }
  .cardAni {
    animation-name: bigToSmall;
    animation-duration: 1.7s;
    -webkit-font-smoothing: antialiased;
  }
  @keyframes bigToSmall {
    0% {
      transform: scale(1.2,1.2);
    }
    100%{
      transform: scal(1,1);
    }
  }
  .card1-css {
    // width: 336.88px;
    // height: 689.58px; 
    width: 100%;
    max-height: 65vh;
  }
  .topLdiamon {
    top: -25px;
    left: -25px;
    // transform: rotate(-90deg);
  }
  .toplAni {
    animation-name: topLtorigin;
    animation-duration: 2s;
    -webkit-font-smoothing: antialiased;
  }
  @keyframes topLtorigin {
    0% {
      transform: translate(-50px, -50px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  .topRdiamon {
    top: -25px;
    right: -25px;
  }
  .toprAni {
    animation-name: topRtorigin;
    animation-duration: 2s;
    -webkit-font-smoothing: antialiased;
  }
  @keyframes topRtorigin {
    0% {
      transform: translate(50px, -50px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  .bottomLdiamon {
    bottom: -20px;
    left: -20px;
    // transform: rotate(180deg);
  }
  .bottomlAni {
    animation-name: bLtorigin;
    animation-duration: 2s;
    -webkit-font-smoothing: antialiased;
  }
  @keyframes bLtorigin {
    0% {
      transform: translate(-50px, 50px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  .bottomRdiamon {
    bottom: -20px;
    right: -20px;
    // transform: rotate(90deg);
  }
  .bottomrAni {
    animation-name: bRtorigin;
    animation-duration: 2s;
    -webkit-font-smoothing: antialiased;
  }
  @keyframes bRtorigin {
    0% {
      transform: translate(50px, 50px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  .absoDiam {
    position: absolute;
    width: 52px;
    height: 51px;
    z-index: 1;

    
  }
  
  .activeinner {
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.85);
  }
}
.polygonimg {
  width: 736px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.25);
  transform: rotate(-180deg);
}
.latest-infotext {
  font-weight: 600;
  font-size: 48px;
  color: #FFFFFF;
  text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.88);
  padding: 0 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
}
.leftarrowimg {
  width: 35px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.85);
}
.lshowActive {
  visibility: hidden;
  animation-name: secRightoL;
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
.rightarrowimg {
  width: 35px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.85);
  transform: rotate(180deg);
}
.larrowcss {
  width: 35px;
  height: 20px;
  clip-path: polygon(0 50%, 78% 0, 100% 50%, 78% 99%);
  background: #FFF;
}
.rshowActive {
  visibility: hidden;
  animation-name: secLToRight;
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

  @media screen and (max-width: 768px) {
    width: 80%;
  }
}
.polyActive {
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
.header-firblock {
  background: rgba(23, 30, 44, 0.55);
  backdrop-filter: blur(8.5px);
  -webkit-animation: top 2s;
  @media screen and (max-width: 768px) {
    background: none;
    // backdrop-filter: none;
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
      cursor: pointer;
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
@-webkit-keyframes top{
    0%{top: -145px;}
    100%{top: 0px;}
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
      cursor: pointer;
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
    padding: 10px 1.5rem 10px 10px;
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
      width: 62px;
      height: 62px;
      cursor: pointer;
    }
    .rectangle-css {
      width: 35px;
      height: 25px;
    }
    .shawdow-wrap {
      filter: drop-shadow(0px 0px 10px rgb(235, 243, 235));
      .rarrowcss {
        width: 35px;
        height: 20px;
        clip-path: polygon(0 50%, 22% 0, 100% 50%, 22% 99%);
        background: #FFF;
        @media screen and (max-width: 768px) {
          width: 45px;
          height: 25px;
        }
      }
    }
    .each-sec-text {
      font-weight: 600;
      font-size: 20px;
      color: #FFF;
      text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.8);
    }
  }
}

// 5
// .fade-in-text5 {
//   animation: fadeIn1 5s;
//   -webkit-animation: fadeIn1 5s;
//   -moz-animation: fadeIn1 5s;
//   -o-animation: fadeIn1 5s;
//   -ms-animation: fadeIn1 5s;
// }
// @keyframes fadeIn1 {
//   0% { opacity: 0; }
//   100% { opacity: 1; }
// }

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
//////////////////////
@keyframes leftToRight {
  0% {
    visibility: hidden;
    transform: translateX(-200px);
  }
  100% {
    visibility: visible;
    transform: translateX(0px);
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
@keyframes rightToLeft {
  0% {
    visibility: hidden;
    transform: translateX(200px);
  }
  100% {
    visibility: visible;
    transform: translateX(0px);
  }
}

@media screen and (max-width: 768px) {
  .third-block {
  }
  .second-block, .fourth-block, .five-block, .six-block, .seven-block, .eight-block {
    display: none;
  }
  
  .menu-child-block {
    display: none;
  }
}
.m-third {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;

    width: 100%;
    max-height: 100vh;
    min-height: 100vh;

    .mcaroselbg-css {
      width: 100%;
      max-height: 100vh;
      min-height: 100vh;
      display: block;
    }
      
  }
}
</style>
<style lang="scss">
.second-block, .six-block {
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    /* border: 5px solid white; */
  }
  .carousel__prev {
    left: 5%;
  }
  .carousel__next {
    right: 5%;
  }
  
  .carousel {
    width: 100%;
    min-width: 100%;
  
    position: absolute;
    top: 0px;
  
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  li.carousel__slide> img {
    width: 60% !important;
  }
  
  .carousel__viewport {
    /* background: gray; */
  }
  .left-carocss {
    width: 53px;
    height: 100px;
    transform: rotate(180deg);
  }
  .carolArrowAni {
    opacity: 0;
    animation-name: caronav;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-fill-mode: forwards; /* don't go back to the start */
  }
  .right-carocss {
    width: 53px;
    height: 100px;
    /* background: rgba(255, 255, 255, 0.5); */
  }
  .carorArrowAni {
    opacity: 0;
    animation-name: caronav;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-fill-mode: forwards; /* don't go back to the start */
  }
  @keyframes caronav {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.2;
    }
    40% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  
  .carousel__pagination-button {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    border: 3px solid #FFF;
  }
  .carousel__pagination-button::after {
    background: none;
  }
  .carousel__pagination-button--active {
    background: #FFF;
    border: 3px solid #FFF;
  }
  .carousel__pagination-button:hover::after {
    background: none;
  }
  li.carousel__pagination-item {
    margin: 5px;
  }
  ol.carousel__track {
    padding-bottom: 6rem;
    padding-top: 166px;
  
    padding-bottom: 2.5rem;
    padding-top: 130px;
  }
  @keyframes overstuff {
    0% {
      height: 0%;
    }
    22.2%{
      height: 22%;
    }
    44.4%{
      height: 44%;
    }
    66.6%{
      height: 66%;
    }
    77.7%{
      height: 77%;
    }
    100%{
      height: 100%;
    }
  }
  @keyframes stuff1 {
    0% {
      width: 70%;
      height: 70%;
    }
    50%{
      width: 85%;
      height: 85%;
    }
    100%{
      width: 100%;
      height: 100%;
    }
  }
}
.second-block {
  .carousel__pagination {
    visibility: hidden;
  }
  .pagiAni2 {
    animation-name: caropagination;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-delay: 1.5s;
    animation-fill-mode: forwards; /* don't go back to the start */
  }
  @keyframes caropagination {
    0% {
      visibility: hidden;
      transform: translateY(10px);
    }
    100% {
      visibility: visible;
      transform: translateY(0px);
    }
  } 
}
.six-block {
  .carousel__pagination {
    visibility: hidden;
    opacity: 0.5;
  }
  .pagiAni6 {
    animation-name: caropagination2;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-delay: 1.9s;
    animation-fill-mode: forwards; /* don't go back to the start */
  }
  @keyframes caropagination2 {
    0% {
      visibility: hidden;
      opacity: 0.5;
      transform: translateY(10px);
    }
    100% {
      visibility: visible;
      opacity: 1;
      transform: translateY(0px);
    }
  }
}

.m-third {
  .carousel__pagination {
    padding-inline-start: 0px;
  }
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 4px;
  }
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    /* border: 5px solid white; */
  }
  .carousel__prev {
    left: 5%;
  }
  .carousel__next {
    right: 5%;
  }
  
  .carousel {
    width: 100%;
    min-width: 100%;
  
    position: absolute;
    top: 0px;
  
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  li.carousel__slide> img {
    width: 95% !important;
    height: 180px;
    border: 3px solid #FFF;
  }
  
  .carousel__viewport {
    /* background: gray; */
  }
  .left-carocss {
    width: 53px;
    height: 100px;
    transform: rotate(180deg);
  }
  .carolArrowAni {
    opacity: 0;
    animation-name: caronav;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-fill-mode: forwards; /* don't go back to the start */
  }
  .right-carocss {
    width: 53px;
    height: 100px;
    /* background: rgba(255, 255, 255, 0.5); */
    @media screen and (max-width: 768px) {
    }
  }
  .carorArrowAni {
    opacity: 0;
    animation-name: caronav;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-fill-mode: forwards; /* don't go back to the start */
  }
  @keyframes caronav {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.2;
    }
    40% {
      opacity: 0.4;
    }
    60% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  
  .carousel__pagination-button {
    width: 25px;
    height: 25px;
    border-radius: 25px;
    border: 3px solid #FFF;
  }
  .carousel__pagination-button::after {
    background: none;
  }
  .carousel__pagination-button--active {
    background: #FFF;
    border: 3px solid #FFF;
  }
  .carousel__pagination-button:hover::after {
    background: none;
  }
  li.carousel__pagination-item {
    margin: 5px;
  }
  ol.carousel__track {
    padding-bottom: 6rem;
    padding-top: 166px;
  
    padding-bottom: 2.5rem;
    padding-top: 0px;
  }
  @keyframes overstuff {
    0% {
      height: 0%;
    }
    22.2%{
      height: 22%;
    }
    44.4%{
      height: 44%;
    }
    66.6%{
      height: 66%;
    }
    77.7%{
      height: 77%;
    }
    100%{
      height: 100%;
    }
  }
  @keyframes stuff1 {
    0% {
      width: 70%;
      height: 70%;
    }
    50%{
      width: 85%;
      height: 85%;
    }
    100%{
      width: 100%;
      height: 100%;
    }
  }
}
.third-block {
  .cssanimation, .cssanimation span {
    animation-duration: .5s;
    animation-fill-mode: both;
  }

  .cssanimation span{ display: inline-block }

  .leRotateYZoomIn span { animation-name: leRotateYZoomIn }
  @keyframes leRotateYZoomIn {
    from {
        transform: perspective(600px) translate3d(10px, 0, 100px) rotateY(5deg);
        opacity: 0
    }
    5% { 
      transform: perspective(600px) translate3d(10px, 0, 50px) rotateY(5deg); }
  }
}
.five-block {
  .cssanimation, .cssanimation span {
    animation-duration: .5s;
    animation-fill-mode: both;
  }

  .cssanimation span{ display: inline-block }

  .leRotateYZoomIn span { animation-name: leRotateYZoomIn }
  @keyframes leRotateYZoomIn {
    from {
        transform: perspective(600px) translate3d(10px, 0, 100px) rotateY(5deg);
        opacity: 0
    }
    5% { 
      transform: perspective(600px) translate3d(10px, 0, 50px) rotateY(5deg); }
  }
}
.eight-block {
  .cssanimation, .cssanimation span {
    animation-duration: 1.5s;
    animation-fill-mode: both;
  }

  .cssanimation span{ display: inline-block }

  .leRotateYZoomIn span { animation-name: leRotateYZoomIn }
  @keyframes leRotateYZoomIn {
    from {
        transform: perspective(600px) translate3d(10px, 0, 100px) rotateY(5deg);
        opacity: 0
    }
    5% { 
      transform: perspective(600px) translate3d(10px, 0, 50px) rotateY(5deg); }
  }
}
.fixed-position {
  position: fixed;
}

.vjs-icon-placeholder:before {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
