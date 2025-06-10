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
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};