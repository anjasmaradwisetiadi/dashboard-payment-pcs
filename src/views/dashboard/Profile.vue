<template>
    <div id="Profile">
        <div class="flex flex-col px-3">
            <div class="py-2">Hi, Good Morning ?</div>
            <div class="px-3 py-5 text-sm text-white bg-gradient-to-r from-red-primary to-red-secondary rounded-lg shadow-md">
                <div class="flex flex-row">
                    <div class="w-2/12">
                        <img class="w-14 h-14 rounded-full" src="../../assets/image/user_1.png" alt="user_profile">
                    </div>
                    <div class="w-5/12 pl-2 leading-4">
                        <div class="text-lg font-semibold">
                            Tabay
                        </div>
                        <div class="text-xs font-extralight">
                            Ui/Ux Designer
                        </div>
                    </div>
                    <div class="w-5/12 text-right leading-4">
                        <div class="text-xs font-extralight">
                            Member price
                        </div>
                        <div class="text-lg font-semibold">
                            01 juni 2021
                        </div>
                    </div>
                </div>
                <div class="flex mt-4 items-end">
                    <div class="w-1/2">
                        <div class="text-xs font-extralight">
                            Location
                        </div>
                        <div class="font-semibold">
                            Kantor Sahid
                        </div>
                    </div>
                    <div class="w-1/2 text-right">
                        <div class="font-extralight">
                            ICO
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 text-black">
                <div>
                    <div class="text-base font-bold">
                        Today's Activity
                    </div>
                </div>
                <div class="flex p-2 text-sm text-center justify-center">
                    <div class="w-3/12">
                        <div class="mb-1">
                            <span class="material-icons-outlined icon-active text-red-primary" style="font-size: 28px;">
                                schedule
                            </span>
                        </div>
                        <div class="font-bold">
                            08:30
                        </div>
                        <div class="text-xs font-extralight">
                            Check in
                        </div>
                    </div>
                    <div class="w-6/12">
                        <div>
                            <span class="material-icons-outlined icon-active text-red-primary" style="font-size: 28px;">
                                update
                            </span>
                        </div>
                        <div class="font-bold text-base text-red-primary">
                            08:30:00
                        </div>
                        <div class="text-xs font-extralight">
                            Working Hours
                        </div>
                    </div>
                    <div class="w-3/12">
                        <div class="mb-1">
                            <span class="material-icons-outlined icon-active text-red-primary" style="font-size: 28px;">
                                info
                            </span>
                        </div>
                        <div class="font-bold">
                            --:--
                        </div>
                        <div class="text-xs font-extralight">
                            Check Out
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';

</script>

<style scoped>

</style>