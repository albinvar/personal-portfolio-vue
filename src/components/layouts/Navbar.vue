<template>
<div v-if="show">
<div class="h-screen absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" @click.self="closeNavbar">
          <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
              	<router-link to="/" @click="closeNavbar">
	                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
				  </router-link>
              </div>
              <div class="-mr-2">
                <button type="button" @click="closeNavbar" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close main menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div v-for="item in items" class="px-2 pt-2 pb-3 space-y-1">
              <router-link :to="item.link" @click="closeNavbar" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" :class="{ 'w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-100 hover:bg-gray-200': item.isMain }">{{ item.name }}</router-link>
            </div>
          </div>
        </div>
       </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props: [ 'show', 'items' ],
  components: {},
  data() {
     return {
       
     }
   },
   
  methods: {
  	closeNavbar() {
	  	this.$emit('close')
	  }
	
	
  
  }
}
</script>
