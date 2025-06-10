<template>
  <div class="h-screen overflow-hidden bg-gradient-to-br from-aurora-dark via-[#1A2A3A] to-aurora-dark text-white font-sans">
    <header class="backdrop-blur-md bg-white/10 border-b border-white/10 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-heading text-aurora-green">Ludovic Dormoy</h1>
        <nav class="flex gap-6 text-sm">
          <RouterLink to="/" class="hover:text-aurora-green transition">Accueil</RouterLink>
          <RouterLink to="/projets" class="hover:text-aurora-green transition">Projets</RouterLink>
          <RouterLink to="/cv" class="hover:text-aurora-green transition">CV</RouterLink>
          <RouterLink to="/contact" class="hover:text-aurora-green transition">Contact</RouterLink>
        </nav>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-10">
      <div class="bg-red-500 text-white">
        TEST TAILWIND
      </div>
      <RouterView />
    </main>

    <footer class="text-center text-sm py-6 text-white/60">
      © {{ new Date().getFullYear() }} Ludovic Dormoy — Tous droits réservés.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600&display=swap');

body {
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}
</style>