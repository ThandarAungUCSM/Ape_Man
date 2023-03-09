<template>
  <!-- :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000" -->
  <!-- :autoplay="2000" :wrap-around="true" -->
  <Carousel class="carosel-css" v-model="activeItem">
    <template #slides="{ slidesCount }" >
      <Slide v-for="(image, index) in images" :key="image.id">
        <div class="left-div">
          <h1 class="comparePre cssanimation sequence leRotateYZoomIn">有比地。隨早小個懷</h1>
          <!-- <h1 class="cssanimation sequence leRotateYZoomIn">cssanimation</h1> -->
          <div class="hr-block rightToLeft">
            <div class="hr-line"><hr class="hrcss"></div>
            <div class="hr-center">
              <img alt="diamond" class="rectangle-css" src="@/assets/images/rectangle-icon.png" />
            </div>
            <div class="hr-line"><hr class="hrcss"></div>
          </div> 
          <h1 class="secTxt cssanimation1 sequence leRotateYZoomIn1">有比地。隨早小個懷</h1>
          <!-- <span class="secTxt">有比地隨早小個懷</span> -->
        </div>
        <img :src="image.src" class="caro-img" />
        <div class="right-div">
          <div class="network-block">
            <img alt="diamond" class="network-css" src="@/assets/images/characterinfo/network.png" />
            <img alt="diamond" class="innernet-css" src="@/assets/images/characterinfo/inner-network.png" />
            <span class="each-angle1">有比地</span>
            <span class="each-angle2">有比地</span>
            <span class="each-angle3">有比地</span>
            <span class="each-angle4">有比地</span>
            <span class="each-angle5">有比地</span>
          </div> 
          <p class="text-block">
            <span style="--delay: 0s;">有比地。隨早小個懷當是許被角就部人美</span>
            <span style="--delay: .15s;">人專；結禮不生斯，法起年不說面位動：</span>
            <span style="--delay: .2s;">題了得教人落情美病力信國覺，許動為部</span>
            <span style="--delay: .25s;">高地觀燈學層起人開意、者商之達期，</span>
            <span style="--delay: .30s;">情種處，自了面的於人何後畫還務只發沒施影三，</span>
            <span style="--delay: .35s;">整精來！死人告稱小現對報可怎十教男出</span>
            <span style="--delay: .40s;">時收音氣回魚取 了中前變個；的太著進不。</span>
          </p>
        </div>
        <!-- <button v-if="slidesCount > 1" @click="deleteImage(index)">x</button> -->
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
  </Carousel>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  data() {
    return {
      activeItem: 0
    }
  },
  props: {
    images: Array,
    currentSlide: Number
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  created() {
    // console.log('carousel created')
    if(this.currentSlide) {
      this.activeItem = (this.currentSlide-1);
    }
  },
  mounted() {
    this.animateSequence();
  },
  methods: {
    animateSequence() {
      var a = document.getElementsByClassName('sequence');
      for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 2500;
        for (let l = 0; l < letter.length; l++) {
          if (letter[l] != ' ') {
            str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
            delay += 20;
          } else
            str += letter[l];
        }
        $this.innerHTML = str;
      }
    }
  },
  setup(props, { emit }) {
    const { images } = toRefs(props);

    const deleteImage = (index) => emit("delete-image", index);

    return { images, deleteImage };
  },
});
</script>

<style lang="scss" scoped>
.left-div {
  width: 30%;
  padding-left: 53px;
  .comparePre {
    font-weight: 500;
    font-size: 40px;
    font-size: 2vw;
    color: #FFFFFF;
    text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.7);
  }
  .secTxt {
    font-weight: 700;
    font-size: 48px;
    font-size: 2.4vw;
    color: #FFFFFF;
    text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.7);
  }
  .hr-block {
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    .hr-line {
      width: 120px;
      width: 6vw;
    }
    .hr-center {
      text-align: center;
      padding: 10px;
    }
    .rectangle-css {
      width: 22px;
      // width: 1.1vw;
      transform: rotate(90deg);
    }
    .hrcss {
      width: 6vw;
      border: 3px solid #FFFFFF;
      border: 1px solid #FFFFFF;
    }
  }
  .rightToLeft { 
    animation-name: rightToLeft;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-fill-mode: forwards; // hidden to visible
  }
  @keyframes rightToLeft {
    from {
      visibility: hidden;
      transform: translateX(100px);
    }
    to { 
      visibility: visible;
      transform: translateX(0px);
    } 
  }
}

.caro-img {
  height:0;
  animation-name: overstuff;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards; // hidden to visible
}
.right-div {
  width: 30%;
  padding: 0 5rem 0 2rem;
  padding: 0 3rem 0 0;
  .network-block {
    position: relative;

    margin: 0 3rem 2rem 2rem;
    padding-bottom: 7px;

    visibility: hidden;
    animation-name: largeToSmall;
    animation-duration: 1s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards; // hidden to visible

    z-index: 2;
    .network-css {
      width: 290px;
      width: 14.499vw;
    }
    .innernet-css {
      width: 122px;
      width: 6.1vw;

      position: absolute;
      top: 7px;
      left: 50%;
      transform: translateX(-52%);

      visibility: hidden;
      animation-name: topToBottom;
      animation-duration: 1s;
      animation-delay: 2.5s;
      animation-fill-mode: forwards; // hidden to visible
    }
    .each-angle1, .each-angle2, .each-angle3, .each-angle4, .each-angle5 {
      font-weight: 400;
      font-size: 24px;
      font-size: 1.2vw;
      color: #FFFFFF;
      text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.7);
    }
    .each-angle1 {
      position: absolute;
      top: -45px;
      top: -16%;
      left: 50%;
      transform: translateX(-52%);
    }
    .each-angle2 {
      position: absolute;
      right: -5%;
      top: 20%;
    }
    .each-angle3 {
      position: absolute;
      right: 7%;
      bottom: 0;
    }
    .each-angle4 {
      position: absolute;
      left: 7%;
      bottom: 0;
    }
    .each-angle5 {
      position: absolute;
      left: -5px;
      top: 20%;
    }
  }
  .text-block {
    font-weight: 400;
    font-size: 24px;
    font-size: 1.2vw;
    color: #FFFFFF;
    text-shadow: 0px 4px 16px rgba(255, 255, 255, 0.7);
  }
  .text-block span {
    display: block;
    opacity: 0;
    animation: reveal 1.5s forwards var(--delay);
    animation-delay: 2s;
  }
  @keyframes reveal {
    from { translate: 0 20px; }
    to { 
      translate: none;
      opacity: 1;
    }
  }
  
}
</style>
<style lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  font-size: 1vw;
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
  left: 22px;
}
.carousel__next {
  right: 22px;
}

.carousel {
  width: 100%;
  min-width: 100%;

  position: absolute;
  top: 0px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(12.5px);

  height: 100vh;
}

li.carousel__slide> img {
  width: 40% !important;
}

.carousel__viewport {
  /* background: gray; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.left-carocss {
  width: 53px;
  width: 2.65vw;
  height: 100px;
  height: 5vw;
  transform: rotate(180deg);
}
.right-carocss {
  width: 53px;
  width: 2.65vw;
  height: 100px;
  height: 5vw;
  /* background: rgba(255, 255, 255, 0.5); */
}
.carousel__pagination {
  visibility: hidden;
  animation-name: caropagination;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-delay: 3s;
  animation-fill-mode: forwards; /* don't go back to the start */

  background: rgba(39, 39, 39, 0.6);

  margin: 18px 0 0;
  padding: 10px;

  position: fixed;
  bottom: 0;
  width: 100%;
}

@keyframes caropagination {
  0% {
    visibility: hidden;
    transform: translateY(50px);
  }
  100% {
    visibility: visible;
    transform: translateY(0px);
  }
}

li.carousel__pagination-item {
  margin: 5px;
  padding: 0 2rem;

  opacity: 0;
  animation-name: eachpagination;
  animation-duration: 1s;
  animation-delay: 3.8s;
  animation-fill-mode: forwards; /* don't go back to the start */
}

@keyframes eachpagination {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.carousel__pagination-button {
  width: 56px;
  width: 2.8vw;
  height: 58px;
  height: 2.9vw;
  border-radius: 45px;
  border: 3px solid #94908e;

  background: rgba(255, 255, 255, 0.5);
  background: #94908e;
  border-radius: 14px;
  transform: matrix(0.71, 0.7, -0.71, 0.7, 0, 0);
}
.carousel__pagination-button--active {
  background: #FFF;
  border: 3px solid #FFF;

  width: 2.8vw;
  height: 2.9vw;
  border-radius: 14px;
  transform: matrix(0.71, 0.7, -0.71, 0.7, 0, 0);
}
.carousel__pagination-button::after {
  background: none;
}
.carousel__pagination-button:hover::after {
  background: none;
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
@keyframes stuff {
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
// collapse and expand
@keyframes largeToSmall {
  0% {
    visibility: hidden;
    transform: scale(1.3,1.3);
  }
  100%{
    visibility: visible;
    transform: scale(1,1);
  }
}
@keyframes topToBottom {
  0% {
    visibility: hidden;
    height: 0%;
  }
  25%{
    visibility: visible;
    height: 20%;
  }
  50%{
    visibility: visible;
    height: 40%;
  }
  75%{
    visibility: visible;
    height: 60%;
  }
  100%{
    visibility: visible;
    height: auto;
  }
}

.cssanimation, .cssanimation span, .cssanimation1, .cssanimation1 span {
  animation-duration: .8s;
  animation-delay: 2.3s;
  animation-fill-mode: both;
}

.cssanimation span, .cssanimation1 span { display: inline-block }

.leRotateYZoomIn span { animation-name: leRotateYZoomIn }
@keyframes leRotateYZoomIn {
  from {
      transform: perspective(600px) translate3d(0, -150px, -2000px) rotateY(75deg);
      opacity: 0
  }
  5% { transform: perspective(600px) translate3d(0, -150px, -1500px) rotateY(75deg) }
}

.leRotateYZoomIn1 span { animation-name: leRotateYZoomIn1 }
@keyframes leRotateYZoomIn1 {
  from {
      transform: perspective(600px) translate3d(100px, 0px, 2000px) rotateY(75deg); // right to left(smaller)
      transform: perspective(600px) translate3d(0px, 50px, 420px) rotateY(75deg);
      opacity: 0
  }
  5% { transform: perspective(600px) translate3d(100px, 0px, 1500px) rotateY(75deg) } // right to left(smaller)
  5% { transform: perspective(600px) translate3d(0px, 50px, 320px) rotateY(75deg) }
}
</style>
