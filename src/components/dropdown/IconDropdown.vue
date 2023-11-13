<template>
  <div class="relative text-right">
    <Menu as="div" class="inline-block text-left">
      <div>
        <MenuButton>
          <slot name="icon" />
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
        <MenuItems class="fixed bg-white rounded-lg shadow-md p-2">
          <slot name="body" />
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";

export default {
  name: "IconDropdown",
  components: {
    Menu,
    MenuButton,
    MenuItems,
  },
};
</script>
