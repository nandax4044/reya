import { useEffect, useRef } from 'react';

export default function SnowParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track resize
    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    // Particle Classes/Objects
    interface Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
    }

    interface Snow {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speedY: number;
      speedX: number;
      angle: number;
    }

    const stars: Star[] = [];
    const snowflakes: Snow[] = [];

    // Create stars
    for (let i = 0; i < 60; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: (0.003 + Math.random() * 0.007) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    // Create snowflakes
    for (let i = 0; i < 20; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1.5,
        opacity: Math.random() * 0.5 + 0.3,
        speedY: Math.random() * 0.5 + 0.3,
        speedX: Math.random() * 0.2 - 0.1,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and Twinkle stars
      stars.forEach(star => {
        // Subtle twinkle animation
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 0.95 || star.opacity < 0.15) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(1, star.opacity))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw and Fall snow
      snowflakes.forEach(snow => {
        snow.y += snow.speedY;
        snow.angle += 0.008;
        snow.x += snow.speedX + Math.sin(snow.angle) * 0.15;

        // Wrap around borders
        if (snow.y > height) {
          snow.y = -5;
          snow.x = Math.random() * width;
        }
        if (snow.x > width) snow.x = 0;
        if (snow.x < 0) snow.x = width;

        // Draw classic soft glowing snowflake circle
        ctx.fillStyle = `rgba(186, 230, 253, ${snow.opacity})`; // light sky blue text tint
        ctx.beginPath();
        ctx.arc(snow.x, snow.y, snow.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
