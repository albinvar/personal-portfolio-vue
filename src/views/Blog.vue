<template>
<div v-for="post in posts" class="md:flex md:justify-center md:space-x-8 md:px-14">
	<div class="max-w-md m-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform hover:scale-95 transition duration-500 hover:bg-gray-100">
    <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-40 w-full object-cover md:w-48" src="https://cdn.pixabay.com/photo/2020/07/21/16/24/landscape-5426755_640.jpg" alt="Man looking at item at a store">
    </div>
    <div class="p-4">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
</div>
	{{ this.posts }}
</template>

<script>
	
import { ref } from 'vue'
import getPosts from '../composables/getPosts.js'
	
export default{
	name: 'Blog',
	components: {},
	setup() {
		
		const { posts, error, load } = getPosts()
		
		load()
		
		return { posts, error }
	}
	
}
</script>