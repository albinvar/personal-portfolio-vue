<template>
  <div class="flex items-center min-h-screen">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-6 bg-white p-5 rounded-md">
        <div class="m-auto" v-if="emailSendResponse.ok !== null">
          <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-md" v-if="emailSendResponse.ok">
            <div class="flex flex-row">
              <div class="px-2">
                <svg width="24" height="24" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                </svg>
              </div>
              <div class="ml-2 mr-6">
                <span class="font-semibold">{{ emailSendResponse.message }}</span>
                <span class="block text-gray-500">I will reply to you as soon as possible.</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-md" v-else="emailSendResponse.ok">
            <div class="flex flex-row">
              <div class="px-2 text-red-400">
                <svg width="24" height="24" fill="#dc2626" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                </svg>
              </div>
              <div class="ml-2 mr-6">
                <span class="font-semibold text-red-500">{{ emailSendResponse.message }}</span>
                <span class="block text-red-400">Please try after sometimes.</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact Me</h1>
          <p class="text-gray-400 dark:text-gray-400">Fill up the form below to send me a message.</p>

        </div>
        <div class="m-7">
          <form method="POST" id="form" @submit.prevent="sendEmail">
            <div class="mb-6">
              <label for="name" class="block mb-2 text-left text-sm text-gray-600 dark:text-gray-400">Full Name</label>
              <input type="text" name="name" id="name" v-model="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-left text-sm text-gray-600 dark:text-gray-400">Email Address</label>
              <input type="email" name="email" id="email" v-model="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div class="mb-6">

              <label for="phone" class="block mb-2 text-left text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
              <input type="text" name="phone" id="phone" v-model="phone" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-left text-sm text-gray-600 dark:text-gray-400">Your Message</label>
              <textarea rows="5" id="message" name="message" v-model="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
            </div>
            <div class="block mx-auto text-center g-recaptcha my-3 mx-auto" :data-sitekey="siteKey" style="transform:scale(0.89);transform-origin:0 0;"> </div>
            <div class="mb-6">
              <input type="submit" class="w-full mx-2 px-3 py-3 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" value="Send Message">
            </div>
            <p class="text-base text-center text-gray-400">
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',
  props: [],
  components: {},

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      emailSendResponse: { ok: null},
      siteKey: process.env.VUE_APP_EMAIL_CAPTCHA_SITE_KEY
    }
  },

  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    document.head.appendChild(recaptchaScript)
  },

  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(process.env.VUE_APP_EMAIL_SERVICE_ID, process.env.VUE_APP_EMAIL_TEMPLATE_ID, e.target, process.env.VUE_APP_EMAIL_USER_ID, {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        })
        this.emailSendResponse = {ok: true, message: "Thank you so much for reaching out to me."}
      } catch (error) {
        this.emailSendResponse = {ok: false, message: "Email sending failed due to a server error."}
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.phone = ''
      this.message = ''
    },
  }
}
</script>