<template>
  <div class="characterInfo">
      <img alt="" class="bg-css" src="@/assets/images/characterinfo/bg-img.png" />
      <div class="back-div">
        <img alt="" class="back-css" @click="routetoFront()" src="@/assets/images/characterinfo/goBack.png" />
      </div>
      <Carousel :images="characterInfo" @deleteImage="handelDeleteImage" :currentSlide="currentSlide" />
    <div>
    </div>
  </div>
</template>

<script setup>
  import { useSlideStore } from "../stores/slide";
</script>
<script>
import { defineComponent, ref } from "vue";
import Carousel from "../components/Carousel.vue";

import { mapState, mapActions } from 'pinia'

export default defineComponent({
  components: {
    Carousel,
  },
  created() {
    this.currentSlide = this.$route.params.id;
    this.fetchCharacterInfo();
  },
  computed: {
    ...mapState(useSlideStore, {characterInfo: 'getCharaInfo'})
  },
  methods: {
    ...mapActions(useSlideStore, ['fetchCharacterInfo']),
    routetoFront() {
      this.$router.push('/');
    },
  },
  data() {
    return {
      currentSlide: 0,
      // slides: [
      //   { id: 1, title: 'My', content: 'VueJS is a library' , src: '/src/assets/images/characterinfo/info-caro.png'},
      //   { id: 2, title: 'Current', content: 'Know the components' , src: '/src/assets/images/carousel/c1.png'},
      //   { id: 3, title: 'Project', content: 'Know the components' , src: '/src/assets/images/carousel/c1.png'},
      //   { id: 4, title: 'is', content: 'Know the components' , src: '/src/assets/images/carousel/c1.png'},
      //   { id: 5, title: 'Vue 3', content: 'Know the components' , src: '/src/assets/images/carousel/c1.png'}
      // ]
    }
  },
  setup() {
    // const _images = [
    //   { id: 1, title: 'My', content: 'VueJS is a library' , src: '/src/assets/images/characterinfo/info-caro.png'},
    //   { id: 2, title: 'Current', content: 'Know the components' , src: '/src/assets/images/carousel/c1.png'},
    //   { id: 3, title: 'Project', content: 'Know the components' , src: '/src/assets/images/carousel/c1.png'},
    //   { id: 4, title: 'is', content: 'Know the components' , src: '/src/assets/images/carousel/c1.png'},
    //   { id: 5, title: 'Vue 3', content: 'Know the components' , src: '/src/assets/images/carousel/c1.png'}
    // ];
    // const images = ref(_images);
    // const handelDeleteImage = (index: number) => images.value.splice(index, 1);

    // return { handelDeleteImage, images };
  },
});
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .characterInfo {
    /* min-height: 100vh;
    display: flex;
    align-items: center; */
    .bg-css {
      width: 100%;
      height: 100vh;
      margin-bottom: -10px;
    }
    .back-div {
      position: absolute;
      top: 28px;
      right: 0;
      z-index: 1;
      width: 30%;
      padding-left: 2rem;
      padding-right: 5rem;
      text-align: center;
      .back-css {
        width: 103px;
        width: 5.15vw;
        height: 103px;
        height: 5.15vw;
        cursor: pointer;
  
        visibility: hidden;
        animation-name: topTobottom;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-delay: 3s;
        animation-fill-mode: forwards; // hidden to visible
      }
      @keyframes topTobottom {
        0% {
          visibility: hidden;
          transform: translateY(-100px);
        }
        100% {
          visibility: visible;
          transform: translateY(0px);
        }
      }
    }
  }
}
</style>
