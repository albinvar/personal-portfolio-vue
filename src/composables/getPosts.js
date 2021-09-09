import { ref } from 'vue'

const getPosts = () => {
		const posts = ref([])
		const error = ref(null)
		
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
	
	return { posts, error, load }
}

export default getPosts