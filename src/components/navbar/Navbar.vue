<template>
  <div
    class="w-screen h-20 bg-zinc-100 border-b border-b-zinc-200 flex justify-center"
  >
    <div class="w-[1280px] h-full flex items-center justify-between px-4">
      <Logo />
      <div
        class="px-2 dropdown-items relative items-center justify-center gap-x-4 flex flex-wrap"
      >
        <Dropdown v-for="item in items" :item="item" />
        <!-- <NavbarItem v-for="item in items" :item="item" /> -->
      </div>
      <div
        class="action-btns flex items-center justify-end gap-5 text-slate-800"
      >
        <IconDropdown>
          <template #icon>
            <div
              class="hover:cursor-pointer text-slate-600 hover:text-slate-900 hover:scale-105 duration-200"
            >
              <vue-feather type="search" class="h-6 w-6" />
            </div>
          </template>
          <template #body>
            <div class="p-12">Search.....</div>
          </template>
        </IconDropdown>
        <IconDropdown>
          <template #icon>
            <div
              class="hover:cursor-pointer text-slate-600 hover:text-slate-900 hover:scale-105 duration-200"
            >
              <vue-feather type="shopping-cart" class="h-6 w-6" />
            </div>
          </template>
          <template #body>
            <div class="p-12">Cart.....</div>
          </template>
        </IconDropdown>
        <IconDropdown>
          <template #icon>
            <div
              class="hover:cursor-pointer text-slate-600 hover:text-slate-900 hover:scale-105 duration-200"
            >
              <vue-feather type="user" class="h-6 w-6" />
            </div>
          </template>
          <template #body>
            <div class="p-12">User.....</div>
          </template>
        </IconDropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import Logo from "@/components/navbar/Logo.vue";
// import NavbarItem from "@/components/navbar/NavbarItem.vue";
import Dropdown from "@/components/dropdown/Dropdown.vue";
import IconDropdown from "@/components/dropdown/IconDropdown.vue";

import { items } from "@/helpers/navbar";

export default {
  name: "Navbar",
  components: {
    Logo,
    // NavbarItem,
    Dropdown,
    IconDropdown,
    Menu,
    MenuButton,
    MenuItems,
  },
  data() {
    return {
      items,
    };
  },
};
</script>
