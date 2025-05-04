<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <v-footer
    app
    padless
    tag="footer"
    class="bg-grey-lighten-4 text-center py-2"
  >
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" class="d-flex justify-center mb-1">
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
        <!-- GitHub repo badge -->
        <a
          href="https://github.com/Meekb/career-up-dashboard"
          target="_blank"
          aria-label="GitHub Repo"
        >
          <img
            alt="GitHub repo"
            src="https://img.shields.io/badge/view%20on-GitHub-181717?logo=github&style=for-the-badge"
            style="height: 24px; margin-left: 8px"
          />
        </a>

        <v-col cols="12">
          <small class="text-grey-darken-1">
            &copy; {{ year }} Career-Up. Built with ❤️ using Vue 3 + Vuetify 3.
          </small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
