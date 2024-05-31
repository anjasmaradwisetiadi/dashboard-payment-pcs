<template>
    <div id="CarouselNews">
        <Carousel :items-to-show="2.5" :wrap-around="true">
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">{{ slide }}</div>
            </Slide>
        
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'CarouselNews',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
        // carousel settings
        settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
        // 700px and up
        700: {
            itemsToShow: 3.5,
            snapAlign: 'center',
        },
        // 1024 and up
        1024: {
            itemsToShow: 5,
            snapAlign: 'start',
        },
        },
    }),
  })
</script>