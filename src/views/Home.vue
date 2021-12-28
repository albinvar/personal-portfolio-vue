<template>
	<Hero />
</template>

<script>
import Hero from '@/components/Hero.vue'
import Blog from '@/components/Blog.vue'

export default {
  name: 'Home',
  title: 'Albin Varghese',
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
