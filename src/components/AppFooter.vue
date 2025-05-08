<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
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
        <!-- Dev.to blog link-->
        <v-tooltip text="MiddleDev Blog at Dev.to" location="top">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              href="https://dev.to/middledev"
              target="_blank"
              aria-label="Dev.to Blog"
              flat
              icon
              variant="text"
            >
              <v-icon>mdi-notebook-outline</v-icon>
            </v-btn>
          </template>
        </v-tooltip>

        <!-- Resume pdf download -->
        <v-tooltip text="View Resume" location="top">
          <template #activator="{ props }">
            <v-btn
              flat
              icon
              variant="text"
              v-bind="props"
              href="/resume.pdf"
              aria-label="Resume"
            >
              <v-icon>mdi-file-account-outline</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
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
</template>
