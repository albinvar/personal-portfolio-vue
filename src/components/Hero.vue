<template>
 <section class="bg-white py-3">
		 	<div class="flex items-end justify-center my-6">
                    <img class="h-56 w-56 rounded-full shadow-lg animate__animated animate__jackInTheBox" src="../assets/me.webp" />
             </div>
            <div class="max-w-2xl px-6 text-center mx-auto">
                <h2 class="text-3xl font-semibold text-gray-800 animate__animated animate__slideInLeft">Hi, <span class="bg-indigo-600 text-white rounded px-1">I’m Albin</span> . Nice to meet you.</h2>
                <p class="text-gray-600 mt-4 animate__animated animate__fadeInUp">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam veniam suscipit eaque iure, eligendi harum expedita cupiditate sequi, culpa autem! Quaerat ex fugit iste suscipit reiciendis, accusamus ipsum quae.</p>
            </div>
        </section>

        <section class="bg-gray-800 pattern py-20" >
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-white">About Me</h2>

                <p class="text-gray-400 mt-4" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper nulla nunc quis molestie volutpat elementum at. Ultrices ipsum, enim cursus lorem ac. Orci maecenas praesent arcu eget orci est orci nullam. Leo purus est pellentesque massa at tortor, est. Aliquet pulvinar a mattis sagittis. Suspendisse porta id elementum, massa.</p>
            </div>
        </section>
        
        <section class="bg-white py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-gray-800">Latest Posts</h2>

                <div class="flex flex-col items-center justify-center mt-6">
                    <a class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Easy, Free Laravel CI Using GitHub Actions</h3>
                            <span class="block text-gray-600 font-light text-sm">20 Jan 2020</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Pest: a delightful PHP Testing Framework</h3>
                            <span class="block text-gray-600 font-light text-sm">29 Oct 2019</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Using inline SVGs in Vue components</h3>
                            <span class="block text-gray-600 font-light text-sm">15 Oct 2019</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Acceptance Testing Laravel & VueJs Apps with Codeception</h3>
                            <span class="block text-gray-600 font-light text-sm">3 Oct 2019</span>
                        </div>
                    </a>
                </div>

                <div class="flex items-center justify-center mt-12">
                    <a class="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="#">
                        <span>View More</span>

                        <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
</template>