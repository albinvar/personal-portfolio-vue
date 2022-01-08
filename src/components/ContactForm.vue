<template>
  <div class="container">
    {{ emailSendResponseMessage }}
    <form @submit.prevent="sendEmail">
      <label>Name</label>
      <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
          required
      >
      <label>Email</label>
      {{ emailSendResponseMessage }}
      <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
          required
      >
      <label>Message</label>
      <textarea
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message" required>
          </textarea>

      <div class="g-recaptcha" :data-sitekey="siteKey"></div>

      <input type="submit" value="Send">
    </form>
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
      message: '',
      emailSendResponseMessage: '',
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
          message: this.meessage
        })
        this.emailSendResponseMessage = "Thank you so much for reaching out to me.";
      } catch (error) {
        this.emailSendResponseMessage = "Email sending failed due to a server error.";
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>