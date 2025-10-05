/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pine-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'silver': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'gold': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-pine': 'linear-gradient(135deg, #15803d 0%, #22c55e 100%)',
        'gradient-silver': 'linear-gradient(135deg, #475569 0%, #94a3b8 100%)',
        'gradient-gold': 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0f172a 0%, #334155 50%, #475569 100%)',
        'gradient-university': 'linear-gradient(135deg, #15803d 0%, #fbbf24 50%, #22c55e 100%)',
        'metallic-silver': 'linear-gradient(135deg, #cbd5e1 0%, #f1f5f9 25%, #fbbf24 50%, #f1f5f9 75%, #cbd5e1 100%)',
      },
      animation: {
        // Entrance Animations
        'fadeInUp': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fadeInDown': 'fadeInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
        'slideInLeft': 'slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
        'slideInRight': 'slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
        'scalePop': 'scalePop 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        
        // Continuous Animations
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'gradientShift': 'gradientShift 6s ease infinite',
        'pulseGlow': 'pulseGlow 3s ease-in-out infinite',
        'metallicShine': 'metallicShine 3s linear infinite',
        'tilt3d': 'tilt3d 10s ease-in-out infinite',
        'particleFloat': 'particleFloat 4s ease-in-out infinite',
        
        // Utility Animations
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scalePop: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(251, 191, 36, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(251, 191, 36, 0.4)' 
          },
        },
        tilt3d: {
          '0%, 100%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)' },
          '75%': { transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg)' },
        },
        metallicShine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        particleFloat: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translate(100px, -100px) rotate(180deg)', opacity: '0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '2000': '2000ms',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
    },
  },
  plugins: [],
}