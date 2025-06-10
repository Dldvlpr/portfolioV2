import './assets/main.scss'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Configuration globale pour de meilleures performances
if (typeof window !== 'undefined') {
    // Préchargement des polices
    const preloadFonts = () => {
        const fonts = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
            'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap',
            'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap'
        ]

        fonts.forEach(font => {
            const link = document.createElement('link')
            link.rel = 'preload'
            link.as = 'style'
            link.href = font
            document.head.appendChild(link)
        })
    }

    // Exécuter le préchargement des polices
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', preloadFonts)
    } else {
        preloadFonts()
    }
}