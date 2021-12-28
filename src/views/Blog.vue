<template>
<div v-if="posts" v-for="post in posts" class="md:flex md:justify-center md:space-x-8 md:px-14">
<div class="max-w-md m-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform hover:scale-95 transition duration-500 hover:bg-gray-100">
    <div class="">
    <div class="">
      <img class="w-full object-fill" src="https://cdn.pixabay.com/photo/2020/07/21/16/24/landscape-5426755_640.jpg" alt="Man looking at item at a store">
    </div>
    <div class="p-4">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
</div>
<div v-else class="md:flex md:justify-center md:space-x-8 md:px-14">
<div class="max-w-md m-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform hover:scale-95 transition duration-500 hover:bg-gray-100">
    <div class="">
    <div class=" animate-pulse space-4 bg-gray-300 h-40">
      <span class="h-40 w-full"></span>
    </div>
    <div class="p-4">
      <div class="my-4 mx-20 animate-pulse space-y-4 h-4 rounded bg-gray-200 title-font font-medium"></div>
      <div class="h-6 mt-4 mx-3 animate-pulse space-y-4 h-4 rounded bg-gray-200 mb-6"></div>
      <p class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-200"></p>
      <p class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-200"></p>
      <p class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-200"></p>
    </div>
  </div>
</div>

  <div class="max-w-md m-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform hover:scale-95 transition duration-500 hover:bg-gray-100">
    <div class="">
      <div class=" animate-pulse space-4 bg-gray-300 h-40">
        <span class="h-40"></span>
      </div>
      <div class="p-4">
        <div class="my-4 mx-20 animate-pulse space-y-4 h-4 rounded bg-gray-200 title-font font-medium"></div>
        <div class="h-6 mt-4 mx-3 animate-pulse space-y-4 h-4 rounded bg-gray-200 mb-6"></div>
        <p class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-200"></p>
        <p class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-200"></p>
        <p class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-200"></p>
      </div>
    </div>
  </div>

  <div class="max-w-md m-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform hover:scale-95 transition duration-500 hover:bg-gray-100">
    <div class="">
      <div class=" animate-pulse space-4 bg-gray-300 h-40">
        <span class="h-40"></span>
      </div>
      <div class="p-4">
        <div class="my-4 mx-20 animate-pulse space-y-4 h-4 rounded bg-gray-200 title-font font-medium"></div>
        <div class="h-6 mt-4 mx-3 animate-pulse space-y-4 h-4 rounded bg-gray-200 mb-6"></div>
        <p class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-200"></p>
        <p class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-200"></p>
        <p class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-200"></p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
	
import { ref } from 'vue'
import getPosts from '../composables/getPosts.js'
	
export default{
	name: 'Blog',
  title: 'Blog | Albin Varghese',
	components: {},
	setup() {
		
		const { posts, error, load } = getPosts()
		
		load()
		
		return { posts, error }
	}
	
}
</script>

<style>
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style>