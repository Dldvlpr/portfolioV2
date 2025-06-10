<template>
  <div class="min-h-screen relative px-6 pb-32">
    <!-- Section Hero -->
    <section class="min-h-screen flex items-center justify-center">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <!-- Contenu principal -->
        <div class="order-2 md:order-1">
          <div class="glass-hero-card rounded-3xl p-8 md:p-12">
            <!-- Badge de localisation -->
            <div class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400/20 to-red-400/20
                        border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <span class="text-2xl">🇫🇷</span>
              <span class="text-blue-300 text-sm font-medium">Développeur basé en France</span>
            </div>

            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Salut, je suis
              <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ludovic Dormoy
              </span>
            </h1>

            <div class="text-xl md:text-2xl text-white/80 mb-4 font-light">
              Développeur Full-Stack & Créateur Digital
            </div>

            <p class="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              Je transforme vos idées en expériences web exceptionnelles.
              Spécialisé en Vue.js, React et développement moderne.
            </p>

            <!-- Stats rapides -->
            <div class="grid grid-cols-3 gap-4 mb-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-white">5+</div>
                <div class="text-sm text-white/60">Années d'expérience</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-white">50+</div>
                <div class="text-sm text-white/60">Projets réalisés</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-white">100%</div>
                <div class="text-sm text-white/60">Clients satisfaits</div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-wrap gap-4">
              <button class="glass-btn-primary group">
                <span>Découvrir mes projets</span>
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>

              <button class="glass-btn-secondary group">
                <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                <span>Discutons ensemble</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Avatar et éléments visuels -->
        <div class="order-1 md:order-2 flex justify-center">
          <div class="relative">
            <!-- Avatar principal avec photo ou initiales -->
            <div class="w-80 h-80 md:w-96 md:h-96 glass-avatar rounded-full p-1 relative overflow-hidden">
              <!-- Option avec initiales stylées -->
              <div class="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full
                          flex items-center justify-center text-white text-8xl font-bold shadow-2xl relative">
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                LD
              </div>

              <!-- Option avec votre photo (décommentez et ajoutez votre photo) -->
              <!--
              <img src="/path/to/your/photo.jpg" alt="Ludovic Dormoy"
                   class="w-full h-full object-cover rounded-full">
              -->
            </div>

            <!-- Éléments techniques flottants -->
            <div class="absolute -top-4 -right-4 glass-floating-element animate-bounce tech-element">
              <div class="text-2xl">⚡</div>
            </div>

            <div class="absolute -bottom-6 -left-6 glass-floating-element animate-pulse tech-element">
              <div class="text-xl">🚀</div>
            </div>

            <div class="absolute top-1/2 -right-8 glass-floating-element animate-ping tech-element">
              <div class="text-lg">💻</div>
            </div>

            <div class="absolute top-16 -left-8 glass-floating-element animate-bounce tech-element">
              <div class="text-xl">🎨</div>
            </div>

            <!-- Logos de technologies en arrière-plan -->
            <div class="absolute inset-0 -z-10">
              <div class="absolute top-12 left-8 text-blue-400/30 text-4xl animate-pulse">Vue</div>
              <div class="absolute bottom-12 right-8 text-cyan-400/30 text-3xl animate-bounce">React</div>
              <div class="absolute top-1/2 left-4 text-green-400/30 text-2xl animate-ping">Node</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Technologies favorites -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Mes Technologies de Prédilection
        </h2>
        <p class="text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Voici les outils et technologies que j'utilise quotidiennement pour créer des expériences exceptionnelles
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="glass-skill-card group cursor-pointer">
            <div class="flex items-center mb-4">
              <div class="text-4xl mr-3">🎨</div>
              <h3 class="text-xl font-semibold text-white">Frontend</h3>
            </div>
            <p class="text-white/70 mb-6 text-sm">
              Interfaces utilisateur modernes et performantes
            </p>
            <div class="grid grid-cols-2 gap-2">
              <div class="skill-tag-detailed">
                <span class="text-green-400">●</span>
                <span>Vue.js 3</span>
              </div>
              <div class="skill-tag-detailed">
                <span class="text-blue-400">●</span>
                <span>React</span>
              </div>
              <div class="skill-tag-detailed">
                <span class="text-blue-600">●</span>
                <span>TypeScript</span>
              </div>
              <div class="skill-tag-detailed">
                <span class="text-cyan-400">●</span>
                <span>Tailwind</span>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="glass-skill-card group cursor-pointer">
            <div class="flex items-center mb-4">
              <div class="text-4xl mr-3">⚙️</div>
              <h3 class="text-xl font-semibold text-white">Backend</h3>
            </div>
            <p class="text-white/70 mb-6 text-sm">
              APIs robustes et architectures scalables
            </p>
            <div class="grid grid-cols-2 gap-2">
              <div class="skill-tag-detailed">
                <span class="text-green-500">●</span>
                <span>Node.js</span>
              </div>
              <div class="skill-tag-detailed">
                <span class="text-yellow-400">●</span>
                <span>Python</span>
              </div>
              <div class="skill-tag-detailed">
                <span class="text-blue-600">●</span>
                <span>PostgreSQL</span>
              </div>
              <div class="skill-tag-detailed">
                <span class="text-green-600">●</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <!-- DevOps & Tools -->
          <div class="glass-skill-card group cursor-pointer">
            <div class="flex items-center mb-4">
              <div class="text-4xl mr-3">🚀</div>
              <h3 class="text-xl font-semibold text-white">DevOps & Outils</h3>
            </div>
            <p class="text-white/70 mb-6 text-sm">
              Déploiement et optimisation des performances
            </p>
            <div class="grid grid-cols-2 gap-2">
              <div class="skill-tag-detailed">
                <span class="text-blue-500">●</span>
                <span>Docker</span>
              </div>
              <div class="skill-tag-detailed">
                <span class="text-orange-400">●</span>
                <span>AWS</span>
              </div>
              <div class="skill-tag-detailed">
                <span class="text-red-500">●</span>
                <span>Git</span>
              </div>
              <div class="skill-tag-detailed">
                <span class="text-purple-400">●</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Services -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Comment je peux vous aider
        </h2>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="glass-service-item">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 glass-light rounded-xl flex items-center justify-center text-2xl">
                  🌐
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-2">Développement Web</h3>
                  <p class="text-white/70">
                    Sites web modernes, applications SPA et e-commerce performants
                  </p>
                </div>
              </div>
            </div>

            <div class="glass-service-item">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 glass-light rounded-xl flex items-center justify-center text-2xl">
                  📱
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-2">Applications Mobiles</h3>
                  <p class="text-white/70">
                    PWA et applications hybrides avec une UX native
                  </p>
                </div>
              </div>
            </div>

            <div class="glass-service-item">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 glass-light rounded-xl flex items-center justify-center text-2xl">
                  🎨
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
                  <p class="text-white/70">
                    Interfaces intuitives et expériences utilisateur optimisées
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card-lg">
            <h3 class="text-2xl font-bold text-white mb-6">Prêt à démarrer ?</h3>
            <p class="text-white/70 mb-8">
              Discutons de votre projet et transformons votre vision en réalité digitale.
            </p>

            <div class="space-y-4">
              <button class="w-full glass-btn-primary justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>Demander un devis gratuit</span>
              </button>

              <div class="flex gap-4">
                <button class="flex-1 glass-btn-secondary justify-center">
                  <span>Portfolio</span>
                </button>
                <button class="flex-1 glass-btn-secondary justify-center">
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Logique du composant ici si nécessaire
</script>

<style scoped>
.glass-hero-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.glass-avatar {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px 0 rgba(31, 38, 135, 0.5);
}

.glass-floating-element {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  padding: 0.75rem;
  box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.3);
}

.glass-skill-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
}

.glass-skill-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 40px 0 rgba(31, 38, 135, 0.4);
}

.glass-service-item {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.glass-service-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
}

.glass-card-lg {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.skill-tag-detailed {
  @apply flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded-lg;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}

.skill-tag-detailed:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.tech-element {
  animation-duration: 3s;
}

.tech-element:nth-child(2) {
  animation-delay: 1s;
}

.tech-element:nth-child(3) {
  animation-delay: 2s;
}

.tech-element:nth-child(4) {
  animation-delay: 0.5s;
}
</style>