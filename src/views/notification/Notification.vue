<template>
    <div id="Notification">
        <div class="mt-14">
            <div 
            class="cursor-pointer "
            v-for="(data, index) in getNotification.data"
            :class="data.status === 'Unread'? 'bg-blue-200':''"
            :key="index">
            <div class="px-4 p-2">
                <div
                    class="flex">
                    <div class="w-3/12 flex relative">
                        <div class="bg-red-primary relative flex justify-center rounded-lg w-24 max-h-14 mb-10 shadow-md">
                            <img 
                                class="w-14 h-14 rounded-lg"
                                :src="collectUrl.baseUrl + data.image" alt="user_1"
                            >
                        </div>
                        <span
                            v-if="data.thumbnail === 'check'"
                            class="absolute flex justify-end items-end w-24 h-16 mb-2 pr-1 text-white">
                                <span class="flex justify-center items-center bg-green-400 material-icons rounded-full h-5 w-5 p-1 " style="font-size: 14px;">
                                    check
                                </span>
                        </span>
                        <span
                            v-if="data.thumbnail === 'close'"
                            class="absolute flex justify-end items-end w-24 h-16 mb-2 pr-1 text-white">
                                <span class="flex justify-center items-center bg-red-700 material-icons rounded-full h-5 w-5 p-1 " style="font-size: 14px;">
                                    close
                                </span>
                        </span>
                        <span
                            v-if="data.thumbnail === 'next'"
                            class="absolute flex justify-end items-end w-24 h-16 mb-2 pr-1 text-white">
                                <span class="flex justify-center items-center bg-blue-400 material-icons rounded-full h-5 w-5 p-1 " style="font-size: 14px;">
                                    arrow_forward
                                </span>
                        </span>
                    </div>
                    <div class="flex flex-col w-6/12 pl-3 pr-2 text-sm">
                        <div class="font-bold mb-1">
                            {{utilize.truncateWord(data.name, 17)}}
                        </div>
                        <div class="text-justify leading-4">
                            {{utilize.truncateWord(data.description, 116)}}
                        </div>
                    </div>
                    <div class="w-3/12 text-center text-gray-500 text-sm text-right pr-1">
                        {{ data.date }}
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
import {useNotificationStore} from '../../stores/notification';
import {utilize} from '../../utilize/index'
import {collectUrl} from '../../utilize/collectUrl'

const notificationStore = useNotificationStore();
const getNotification = reactive(notificationStore.notification)
const title = import.meta.env.APP_URL

onMounted(()=>{

})
</script>

<style scoped>

</style>