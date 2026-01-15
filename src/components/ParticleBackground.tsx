import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;
  vx: number;
  vy: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 8000);
      
      const colors = [
        'rgba(212, 175, 139, 0.6)', // Gold/champagne
        'rgba(180, 150, 120, 0.5)', // Warm bronze
        'rgba(220, 200, 180, 0.4)', // Cream
        'rgba(200, 180, 160, 0.5)', // Soft beige
        'rgba(240, 220, 200, 0.3)', // Light rose
      ];

      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        
        particlesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size,
          density: Math.random() * 30 + 10,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      particles.forEach((particle) => {
        // Calculate distance from mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // Mouse interaction - particles are pushed away
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          
          const moveX = forceDirectionX * force * particle.density * 0.6;
          const moveY = forceDirectionY * force * particle.density * 0.6;
          
          particle.x -= moveX;
          particle.y -= moveY;
        } else {
          // Return to base position with easing
          if (particle.x !== particle.baseX) {
            const dxBase = particle.baseX - particle.x;
            particle.x += dxBase * 0.05;
          }
          if (particle.y !== particle.baseY) {
            const dyBase = particle.baseY - particle.y;
            particle.y += dyBase * 0.05;
          }
        }

        // Add subtle floating motion
        particle.baseX += particle.vx;
        particle.baseY += particle.vy;

        // Bounce off edges
        if (particle.baseX <= 0 || particle.baseX >= canvas.width) {
          particle.vx *= -1;
        }
        if (particle.baseY <= 0 || particle.baseY >= canvas.height) {
          particle.vy *= -1;
        }

        // Keep base position in bounds
        particle.baseX = Math.max(0, Math.min(canvas.width, particle.baseX));
        particle.baseY = Math.max(0, Math.min(canvas.height, particle.baseY));

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Add subtle glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 139, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 10,
        background: 'transparent'
      }}
    />
  );
};

export default ParticleBackground;
