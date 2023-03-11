// stores/slide.js
import { defineStore } from 'pinia'
// Import axios to make HTTP requests
// import axios from "axios"

import fsix1 from '@/assets/images/carousel/c1.png'
import fsix2 from '@/assets/images/carousel/c1.png'
import fsix3 from '@/assets/images/carousel/c1.png'
import fsix4 from '@/assets/images/carousel/c1.png'

import chaInfo1 from '@/assets/images/not-active1.png'
import chaInfo2 from '@/assets/images/not-active2.png'
import chaInfo3 from '@/assets/images/not-active2.png'
import chaInfo4 from '@/assets/images/not-active3.png'
import chaInfo5 from '@/assets/images/not-active4.png'

import chaInfo6 from '@/assets/images/characterinfo/info-caro.png'
import chaInfo7 from '@/assets/images/carousel/c1.png'
import chaInfo8 from '@/assets/images/carousel/c1.png'
import chaInfo9 from '@/assets/images/carousel/c1.png'
import chaInfo10 from '@/assets/images/carousel/c1.png'

export const useSlideStore = defineStore("slide",{
  state: () => ({
    slides: [],
    characterInfo: [],
    carouselInfo: []
  }),
  getters: {
    getSlides(state) {
      return state.slides
    },
    getCharaInfo(state) {
      return state.characterInfo
    },
    getCarouselInfo(state) {
      return state.carouselInfo
    },
  },
  actions: {
    async fetchSlides() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        // this.slides = data.data;
        this.slides = [
          { id: 1, title: 'Current', content: 'VueJS is a library' , src: fsix1},
          { id: 2, title: 'Project', content: 'Know the components' , src: fsix2},
          { id: 3, title: 'is', content: 'Know the components' , src: fsix3},
          { id: 4, title: 'Vue 3', content: 'Know the components' , src: fsix4}
        ];
      } catch (error) {
        // alert(error);
        console.log(error);
      }
    },
    async fetchCharacterInfo() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        this.characterInfo = [
          { id: 1, src: chaInfo1},
          { id: 2, src: chaInfo2},
          { id: 3, src: chaInfo3},
          { id: 4, src: chaInfo4},
          { id: 5, src: chaInfo5}
        ];
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCarousel() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        this.carouselInfo = [
          { id: 1, src: chaInfo6},
          { id: 2, src: chaInfo7},
          { id: 3, src: chaInfo8},
          { id: 4, src: chaInfo9},
          { id: 5, src: chaInfo10}
        ];
      } catch (error) {
        console.log(error);
      }
    }
  },
})