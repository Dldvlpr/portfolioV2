<template>
  <div class="min-h-screen overflow-hidden relative">
    <!-- Background animé -->
    <div class="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <!-- Effet Aurora -->
      <div class="aurora-bg pointer-events-none">
        <div class="aurora-item item1"></div>
        <div class="aurora-item item2"></div>
        <div class="aurora-item item3"></div>
      </div>
      <!-- Particules flottantes -->
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="i in 6" :key="i"
             class="absolute rounded-full opacity-20 animate-float"
             :class="`particle-${i}`"
             :style="getParticleStyle(i)">
        </div>
      </div>
    </div>

    <!-- Navigation glassmorphisme -->
    <nav class="fixed top-6 left-6 right-6 z-50 glass-nav rounded-2xl">
      <div class="flex justify-between items-center px-8 py-4">
        <div class="text-2xl font-bold text-white">
          <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ludovic
          </span>
        </div>

        <div class="hidden md:flex gap-8">
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
          <RouterLink to="/about" class="nav-link">À propos</RouterLink>
          <RouterLink to="/projects" class="nav-link">Projets</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        </div>

        <div class="flex items-center gap-4">
          <!-- Theme toggle -->
          <button class="glass-btn p-2 rounded-full">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
            </svg>
          </button>

          <!-- Menu mobile -->
          <button class="md:hidden glass-btn p-2 rounded-full">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <main class="relative z-10 pt-24">
      <RouterView />
    </main>

    <!-- Footer flottant -->
    <footer class="fixed bottom-6 left-6 right-6 z-40">
      <div class="glass-card rounded-2xl px-6 py-4">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <div class="mb-2 md:mb-0">
            © 2025 Ludovic Dormoy. Fait avec ❤️ et Vue.js
          </div>
          <div class="flex gap-4">
            <a href="https://twitter.com" target="_blank" class="social-link">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/ludovic-dormoy" target="_blank" class="social-link">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/ludovic-dormoy" target="_blank" class="social-link">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

// Animation des particules
const getParticleStyle = (index: number) => {
  const positions = [
    { top: '10%', left: '5%', width: '60px', height: '60px' },
    { top: '20%', right: '10%', width: '40px', height: '40px' },
    { bottom: '30%', left: '15%', width: '80px', height: '80px' },
    { top: '60%', right: '5%', width: '50px', height: '50px' },
    { bottom: '15%', right: '20%', width: '35px', height: '35px' },
    { top: '40%', left: '50%', width: '45px', height: '45px' },
  ]

  const gradients = [
    'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
    'linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3))',
    'linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.3))',
    'linear-gradient(45deg, rgba(251, 191, 36, 0.3), rgba(236, 72, 153, 0.3))',
    'linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(34, 197, 94, 0.3))',
    'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(251, 191, 36, 0.3))',
  ]

  return {
    ...positions[index - 1],
    background: gradients[index - 1],
    animationDelay: `${index * 0.5}s`,
    animationDuration: `${4 + index}s`
  }
}
</script>

<style scoped>
.social-link {
  @apply text-white/60 hover:text-white transition-all duration-300 p-2 rounded-full;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.4;
  }
}

.animate-float {
  animation: float linear infinite;
}

/* Aurora background */
.aurora-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: -1;
}

.aurora-item {
  position: absolute;
  width: 60%;
  height: 60%;
  border-radius: 50%;
  filter: blur(120px);
  mix-blend-mode: screen;
  opacity: 0.5;
}

.item1 {
  top: -20%;
  left: -10%;
  background: radial-gradient(circle at center, rgba(0, 255, 198, 0.4), transparent);
  animation: aurora1 10s ease-in-out infinite alternate;
}

.item2 {
  bottom: -15%;
  right: -15%;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.4), transparent);
  animation: aurora2 12s ease-in-out infinite alternate;
}

.item3 {
  top: 10%;
  right: -20%;
  background: radial-gradient(circle at center, rgba(147, 51, 234, 0.4), transparent);
  animation: aurora3 14s ease-in-out infinite alternate;
}

@keyframes aurora1 {
  from { transform: translate(-10%, -10%); }
  to { transform: translate(10%, 10%); }
}

@keyframes aurora2 {
  from { transform: translate(0, 0); }
  to { transform: translate(-20%, 5%); }
}

@keyframes aurora3 {
  from { transform: translate(10%, -10%); }
  to { transform: translate(-10%, 10%); }
}

/* Responsive */
@media (max-width: 768px) {
  .glass-nav {
    margin: 1rem;
  }

  footer {
    margin: 1rem;
  }
}
</style>