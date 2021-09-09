<template>
	{{ this.posts }}
</template>

<script>
	
import { ref } from 'vue'
	
export default{
	name: 'Blog',
	components: {},
	setup() {
		
		const posts = ref([])
		const errors = ref(null)
		
		const load = async () => {
			try {
				let data = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
				
				if(!data.ok) {
					throw Error('No Data Available')
				}
				
				posts.value = await data.json()
				
			} catch(err) {
				error.value = err.message
				console.log(error.value)
			}
		}
		
		load()
		
		return { posts, errors }
	}
	
}
</script>