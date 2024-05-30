<template>
    <div id="Notification">
        <div>
            <p>Notification Component</p>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
import {useNotificationStore} from '../../stores/notification';

const notificationStore = useNotificationStore();
const getNotification = reactive(notificationStore.notification)

onMounted(()=>{
    console.log('getNotification = ');
    console.log(getNotification);
})
</script>

<style scoped>

</style>