<template>
<!-- contact form -->
  <ContactForm>

  </ContactForm>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {

  name: 'Contact',
  title: 'Contact | Albin Varghese',
  props: [],
  components: { ContactForm },

  data() {
    return {
      formStatus: false
    }
  }
}
</script>