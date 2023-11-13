<template>
  <div class="relative text-right">
    <Menu as="div" class="inline-block text-left" v-slot="{ open }">
      <div>
        <MenuButton
          class="flex justify-center items-center px-1 py-2 capitalize font-medium group text-sm hover:underline underline-offset-2"
        >
          {{ item.title }}
          <vue-feather
            v-if="item.subItems"
            class="ml-2 -mr-1 h-5 w-5 text-slate-500 group-hover:text-slate-800"
            aria-hidden="true"
            type="chevron-down"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          static
          v-show="open"
          v-if="item.subItems"
          class="fixed bg-white rounded-lg shadow-md p-2"
        >
          <div v-for="subItem in item.subItems">
            <DropdownItem :subItem="subItem" />
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";

import DropdownItem from "./DropdownItem.vue";

export default {
  name: "Dropdown",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    DropdownItem,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    children: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
