<template>
    <div>
        <img :src="imageSource[currentImage]" alt="images of vue barber shop subjects and objects"/>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import shavingTools from '@/images/carousel-image-barber-1.jpg'
import cuttingHairFront from '@/images/carousel-image-barber-2.jpg'
import partingHair from '@/images/carousel-image-barber-3.jpg'
import rowOfScissors from '@/images/carousel-image-barber-4.jpg'

const imageSource = [
    shavingTools,
    cuttingHairFront,
    partingHair,
    rowOfScissors
]

const currentImage = ref(0)
const interval = 3000;

const cycleThroughPhotos = () => {
    if(currentImage.value >= imageSource.length - 1){
        currentImage.value = 0
    } else {
        ++currentImage.value
    }
}

setInterval(cycleThroughPhotos, interval);
</script>

<style scoped>
div{
    margin-top: 1em;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

img{
    min-width: 200px;
    max-width: 780px;

    margin-left: 1em;
    margin-right: 1em;
}
</style>