<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">My Followers</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">I am so happy for the help and love that i get from my supporters. Much gratitude to all of you for being such a great support. Happy on hitting <strong>{{ followers == null ? 0 : followers.length }}</strong> followers at github.</p>
      </div>
      <div class="flex flex-wrap -m-2">
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full" v-if="followers" v-for="follower in followers">
          <a :href="follower.html_url">
          <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg"  data-aos="fade-up-right">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" :src="follower.avatar_url">
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">@ {{ follower.login }}</h2>
            </div>
          </div>
          </a>
        </div>

          <div class="p-2 lg:w-1/3 md:w-1/2 w-full" v-else v-for="index in 10">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg" data-aos="fade-up-right">
              <span alt="team" class="animate-pulse w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"> </span>
              <div class="flex-grow">
                <div class="my-2 animate-pulse space-y-4 h-4 rounded bg-gray-200 title-font font-medium"></div>
                <div class="animate-pulse space-y-4 h-4 rounded bg-gray-200 title-font font-medium"></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	name: 'Followers',
  title: 'Followers | Albin Varghese',
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