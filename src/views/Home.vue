<template>
	<Hero />
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: { Hero },
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
