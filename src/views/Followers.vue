<template>
<section class="text-gray-700 body-font">
   <div class="container px-5 py-6 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
         <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Thanks all</h1>
         <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Thanks to all of you for your valuable support. </p>
      </div>
      <div class="" v-if="followers" v-for="follower in followers">
         <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
         <a :href="follower.html_url">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg" data-aos="fade-up-right">
               <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" :src="follower.avatar_url">
               <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">{{ follower.login }}</h2>
                  <p class="text-gray-500"></p>
               </div>
            </div>
           </a>
         </div>
       </div>
       <div v-else>
       	Loading...
       </div>
      </div>
</section>
</template>

<script>
export default {
	name: 'Followers',
	props: [],
	components: {},
	
	data() {
		
		return {
			followers: null,
			errors: null
		}
	},
	
	
	mounted() {
		  // Simple GET request using fetch
		  fetch("https://api.github.com/users/albinvar/followers")
		  .then(response => response.json())
		  .then(data => (this.followers = data)
		  .catch(err => this.errors = err));
		}
	
}
</script>