<template>
  <MenuItem v-slot="{ active, close }">
    <div @click="close">
      <router-link
        :to="subItem.path"
        :class="[
          active ? 'underline underline-offset-2' : '',
          'text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize',
        ]"
      >
        {{ subItem.title }}
      </router-link>
    </div>
  </MenuItem>
</template>

<script>
import { MenuItem } from "@headlessui/vue";

export default {
  name: "DropdownItem",
  components: {
    MenuItem,
  },
  props: {
    subItem: {
      type: Object,
      required: true,
    },
  },
};
</script>
