<template>
  <div class="flex flex-grow justify-center">
    <div class="w-full h-full relative">
      <Topbar v-once />
      <Navbar v-once />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Topbar from "@/components/Topbar.vue";
import Navbar from "@/components/navbar/Navbar.vue";
</script>
