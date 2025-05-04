<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <v-footer
    app
    padless
    tag="footer"
    class="bg-grey-lighten-4 text-center py-4"
  >
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="d-flex justify-center mb-2">
          <v-btn
            variant="text"
            icon
            href="https://github.com/Meekb"
            target="_blank"
            aria-label="GitHub"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>

          <v-btn
            variant="text"
            icon
            href="https://linkedin.com/in/bethmeeker"
            target="_blank"
            aria-label="LinkedIn"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>

          <v-btn
            variant="text"
            icon
            href="mailto:you@example.com"
            aria-label="Email"
          >
            <v-icon>mdi-email-outline</v-icon>
          </v-btn>

          <v-btn
            variant="text"
            icon
            href="/resume.pdf"
            target="_blank"
            aria-label="Resume"
          >
            <v-icon>mdi-file-account-outline</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12">
          <small class="text-grey-darken-1">
            &copy; {{ year }} Career-Up. Built with ❤️ using Vue 3 + Vuetify 3.
          </small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
