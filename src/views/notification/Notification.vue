<template>
    <div id="Notification">
        <div class="flex px-4 mt-16">
            <div class="w-3/12 flex relative">
                <div class="bg-red-primary relative flex justify-center rounded-lg w-24 h-14 mb-10 shadow-md">
                    <img 
                        class="w-14 h-14 rounded-lg"
                        :src="collectUrl.baseUrl + dataNotification.notif.image" alt="user_1"
                    >
                </div>
                <span
                     v-if="thumbnailDummy === 'check'"
                     class="absolute flex justify-end items-end w-24 h-16 mb-2 pr-1 text-white">
                        <span class="flex justify-center items-center bg-green-400 material-icons rounded-full h-5 w-5 p-1 " style="font-size: 14px;">
                            check
                        </span>
                </span>
                <span
                     v-if="thumbnailDummy === 'close'"
                     class="absolute flex justify-end items-end w-24 h-16 mb-2 pr-1 text-white">
                        <span class="flex justify-center items-center bg-red-700 material-icons rounded-full h-5 w-5 p-1 " style="font-size: 14px;">
                            close
                        </span>
                </span>
                <span
                     v-if="thumbnailDummy === 'next'"
                     class="absolute flex justify-end items-end w-24 h-16 mb-2 pr-1 text-white">
                        <span class="flex justify-center items-center bg-blue-400 material-icons rounded-full h-5 w-5 p-1 " style="font-size: 14px;">
                            arrow_forward
                        </span>
                </span>
            </div>
            <div class="flex flex-col w-6/12 pl-3 pr-2 text-sm">
                <div class="font-bold mb-1">
                    Reimborsments
                </div>
                <div class="text-justify leading-4">
                    {{utilize.truncateWord(dataNotification.notif.description, 110)}}
                </div>
            </div>
            <div class="w-3/12 text-center text-gray-500 text-sm">
                Yesterday
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
import {useNotificationStore} from '../../stores/notification';
import {utilize} from '../../utilize/index'
import {collectUrl} from '../../utilize/collectUrl'


const descriptionDummy = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
const thumbnailDummy = "close"
const notificationStore = useNotificationStore();
const getNotification = reactive(notificationStore.notification)
const title = import.meta.env.APP_URL

const dataNotification = reactive({
    notif:
          {
            name: "Reimborsments",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            date: "2024-05-28",
            status: "Unread",
            image: "src/assets/image/coin.png",
            thumbnail: ""
          },
    })

onMounted(()=>{
    console.log('getNotification = ');
    console.log(getNotification);
    console.log(import.meta.env.APP_URL);
})
</script>

<style scoped>

</style>