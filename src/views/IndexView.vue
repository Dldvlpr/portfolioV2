<template>
  <div class="min-h-screen relative px-6 pb-32">
    <!-- Section Hero -->
    <section class="min-h-screen flex items-center justify-center aurora-section">
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

            <!-- Logos de technologies en arrière-plan -->
            <div class="absolute inset-0 -z-10"></div>
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

.aurora-section {
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 0% 50%, rgba(0, 255, 198, 0.15), transparent 70%),
              radial-gradient(circle at 100% 50%, rgba(59, 130, 246, 0.15), transparent 70%),
              radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.15), transparent 70%);
}

.aurora-section::before {
  content: '';
  position: absolute;
  top: -20%;
  left: -10%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle at center, rgba(0, 255, 198, 0.4), transparent);
  filter: blur(120px);
  animation: aurora-move 12s ease-in-out infinite alternate;
}

.aurora-section::after {
  content: '';
  position: absolute;
  bottom: -20%;
  right: -10%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle at center, rgba(147, 51, 234, 0.4), transparent);
  filter: blur(120px);
  animation: aurora-move 14s ease-in-out infinite alternate-reverse;
}

@keyframes aurora-move {
  from { transform: translate(0, 0); }
  to { transform: translate(20%, 20%); }
}

</style>