<template>
	<Hero />
	
	<Blog />
	
</template>

<script>
import Hero from '@/components/Hero.vue'
import Blog from '@/components/Blog.vue'

export default {
  name: 'Home',
  components: { Hero, Blog },
  data() {
     return {
       showModal: false
     }
   },
   
  methods: {
  	toggleShowModal() {
  	this.showModal = !this.showModal
	  }
  
  }
}
</script>
