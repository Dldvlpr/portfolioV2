/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                aurora: {
                    green: '#00FFC6',
                    blue: '#007CF0',
                    purple: '#7928CA',
                    dark: '#0F172A',
                },
                glass: {
                    white: 'rgba(255, 255, 255, 0.1)',
                    'white-light': 'rgba(255, 255, 255, 0.08)',
                    'white-heavy': 'rgba(255, 255, 255, 0.15)',
                    border: 'rgba(255, 255, 255, 0.2)',
                    'border-light': 'rgba(255, 255, 255, 0.15)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            backdropBlur: {
                xs: '2px',
                '4xl': '72px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'bounce-slow': 'bounce 3s ease-in-out infinite',
                'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'fade-in': 'fadeIn 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0px) rotate(0deg)'
                    },
                    '50%': {
                        transform: 'translateY(-20px) rotate(180deg)'
                    },
                },
                glow: {
                    '0%': {
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
                    },
                    '100%': {
                        boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
                    },
                },
                slideUp: {
                    '0%': {
                        transform: 'translateY(100%)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
                slideDown: {
                    '0%': {
                        transform: 'translateY(-100%)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
                fadeIn: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                scaleIn: {
                    '0%': {
                        transform: 'scale(0.9)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                },
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'glass-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                'glass-heavy': '0 20px 40px 0 rgba(31, 38, 135, 0.5)',
                'glow-blue': '0 0 20px rgba(59, 130, 246, 0.6)',
                'glow-purple': '0 0 20px rgba(147, 51, 234, 0.6)',
                'glow-pink': '0 0 20px rgba(236, 72, 153, 0.6)',
                'glow-green': '0 0 20px rgba(34, 197, 94, 0.6)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                'primary-gradient': 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8))',
                'secondary-gradient': 'linear-gradient(135deg, rgba(236, 72, 153, 0.8), rgba(59, 130, 246, 0.8))',
                'success-gradient': 'linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(59, 130, 246, 0.8))',
                'warning-gradient': 'linear-gradient(135deg, rgba(251, 191, 36, 0.8), rgba(236, 72, 153, 0.8))',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '112': '28rem',
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            fontSize: {
                '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                '9xl': ['8rem', { lineHeight: '1' }],
            },
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms',
                '900': '900ms',
            },
            transitionTimingFunction: {
                'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
                'in-cubic': 'cubic-bezier(0.32, 0, 0.67, 0)',
                'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
            },
        },
    },
    plugins: [
        // Plugin personnalisé pour les utilitaires glassmorphisme
        function({ addUtilities, theme }) {
            const newUtilities = {
                '.glass-base': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                },
                '.glass-light': {
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
                },
                '.glass-heavy': {
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 20px 40px 0 rgba(31, 38, 135, 0.5)',
                },
                '.glass-hover': {
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.15)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 20px 40px 0 rgba(31, 38, 135, 0.5)',
                    },
                },
                '.text-glass': {
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                },
                '.text-glow': {
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
                },
                '.gradient-text': {
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
            }

            addUtilities(newUtilities)
        },
    ],
};