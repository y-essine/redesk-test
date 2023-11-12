<template>
  <div class="flex justify-center">
    <div class="w-[1280px] h-full flex py-5 2xs:px-8 relative">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Main",
});
</script>
