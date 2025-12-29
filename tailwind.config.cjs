/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./*.{js,ts,jsx,tsx}", 
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          chronos: {
            blue: "var(--chronos-blue)",
            dark: "var(--chronos-dark)",
            space: "var(--chronos-space)"
          },
          neuro: {
            purple: "var(--neuro-purple)",
            pink: "var(--neuro-pink)",
            cyan: "var(--neuro-cyan)"
          },
          quantum: {
            glow: "var(--quantum-glow)",
            energy: "var(--quantum-energy)",
            matter: "var(--quantum-matter)"
          },
          glass: {
            primary: "var(--hologram-primary)",
            secondary: "var(--hologram-secondary)",
            accent: "var(--hologram-accent)"
          }
        },
        fontFamily: {
          'space': ['Space Grotesk', 'sans-serif'],
          'inter': ['Inter', 'sans-serif'],
          'quantum': ['Courier New', 'monospace'], // Fallback for Quantum Sans
        },
        animation: {
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
          'quantum-pulse': 'quantum-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'chronos-spin': 'chronos-spin 20s linear infinite',
          'neural-flow': 'neural-flow 3s ease-in-out infinite',
          'cosmic-drift': 'cosmic-drift 60s linear infinite',
          'slide-up-fade': 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          glow: {
            'from': { boxShadow: '0 0 10px var(--quantum-glow)' },
            'to': { boxShadow: '0 0 20px var(--quantum-energy), 0 0 10px var(--quantum-glow)' },
          },
          'quantum-pulse': {
            '0%, 100%': { opacity: 1, transform: 'scale(1)' },
            '50%': { opacity: 0.5, transform: 'scale(1.05)' }
          },
          'chronos-spin': {
            from: { transform: 'rotate(0deg) scale(1)' },
            to: { transform: 'rotate(360deg) scale(1.1)' }
          },
          'neural-flow': {
            '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: 0.7 },
            '50%': { transform: 'translateY(-20px) scale(1.05)', opacity: 1 }
          },
          'cosmic-drift': {
            '0%': { transform: 'translateX(0) translateY(0)' },
            '25%': { transform: 'translateX(10px) translateY(-5px)' },
            '50%': { transform: 'translateX(0) translateY(-10px)' },
            '75%': { transform: 'translateX(-10px) translateY(-5px)' },
            '100%': { transform: 'translateX(0) translateY(0)' }
          },
          slideUpFade: {
            '0%': { opacity: 0, transform: 'translateY(40px) scale(0.95)' },
            '100%': { opacity: 1, transform: 'translateY(0) scale(1)' }
          },
          'quantum-materialize': {
            '0%': { opacity: 0, transform: 'scale(0.9) translateY(20px)', filter: 'blur(10px)' },
            '50%': { opacity: 0.5, filter: 'blur(5px)' },
            '100%': { opacity: 1, transform: 'scale(1) translateY(0)', filter: 'blur(0)' }
          }
        },
        boxShadow: {
          'quantum': '0 0 50px rgba(76, 201, 240, 0.3)',
          'neuro': '0 0 70px rgba(255, 0, 255, 0.4)',
          'chronos': '0 0 100px rgba(10, 12, 39, 0.5)',
        }
      }
    },
    plugins: [],
  }
