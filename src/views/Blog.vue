<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div class="p-8 bg-white border rounded shadow-sm" v-if="posts" v-for="post in posts" >
        <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a  class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">weekend</a>
          <span class="text-gray-600"> — 1 Feb 2020</span>
        </p>
        <a  aria-label="Article" title="Jingle Bells" class="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">Jingle Bells</a>
        <p class="mb-5 text-gray-700">
          Some pilots get picked and become television programs. Some don't, become nothing.
        </p>
        <div class="flex items-center">
          <a  aria-label="Author" title="Author" class="mr-3">
            <img src="../assets/me.webp" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
          </a>
          <div>
            <a  aria-label="Author" title="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Albin Varghese</a>
            <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
          </div>
        </div>
      </div>
      <div class="p-8 bg-white border rounded shadow-sm" v-else v-for="index in 9">
        <h3 class="mx-8 h-6 my-3 animate-pulse space-y-4 h-4 rounded bg-gray-200">
        </h3>
        <p class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-200">
        </p>
        <p class="h-3 my-4 animate-pulse space-y-4 h-4 rounded bg-gray-200">
        </p>
        <div class="flex items-center">
          <span class="h-3 my-1 mx-4 animate-pulse space-y-4 h-4 rounded bg-gray-200 object-cover w-10 h-10 rounded-full shadow-sm"></span>
          <div>
            <a aria-label="Author" title="Author" class="h-3 my-1 mx-3 px-14 animate-pulse space-y-4 h-4 rounded bg-gray-200"></a>
            <p class="h-3 my-1 mx-4 px-8 animate-pulse space-y-4 h-4 rounded bg-gray-200"></p>
          </div>
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