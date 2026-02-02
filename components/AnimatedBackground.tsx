"use client";

import { useEffect, useRef } from "react";
import { content } from "@/config/content";
import { theme } from "@/config/theme";

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { animatedBackground } = content;

  useEffect(() => {
    // Se mouseParallax desativado, não adiciona listener
    if (!animatedBackground.mouseParallax) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      const elements = containerRef.current.querySelectorAll("[data-parallax]");
      elements.forEach((el: Element) => {
        const speed = parseInt((el as HTMLElement).dataset.parallax || "1");
        (el as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [animatedBackground.mouseParallax]);

  // Animação do canvas (grid + partículas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configurar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Partículas
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Criar partículas
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    // Grid animado
    let gridOffset = 0;
    const gridSize = 50;

    // Animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar grid animado
      ctx.strokeStyle = `rgba(${theme.animatedBackground.gridColor}, ${theme.animatedBackground.gridOpacity})`;
      ctx.lineWidth = 1;

      // Linhas verticais
      for (let x = (gridOffset % gridSize); x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Linhas horizontais
      for (let y = (gridOffset % gridSize); y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      gridOffset += 0.5;

      // Desenhar e atualizar partículas
      particles.forEach((particle, i) => {
        // Atualizar posição
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce nas bordas
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Desenhar partícula
        ctx.fillStyle = `rgba(${theme.animatedBackground.particleColor}, ${theme.animatedBackground.particleOpacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Conectar partículas próximas
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(${theme.animatedBackground.connectionColor}, ${theme.animatedBackground.connectionOpacity * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Se desativado, não renderiza nada
  if (!animatedBackground.enabled) {
    return null;
  }

  return (
    <div ref={containerRef} className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Gradiente de fundo base */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: animatedBackground.backgroundGradient,
          opacity: animatedBackground.backgroundOpacity,
        }}
      />

      {/* Canvas com grid e partículas animadas - ACIMA de tudo */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 1, zIndex: 10 }}
      />

      {/* Animated orbs com configuração */}
      {animatedBackground.orbs.map((orb, index) => {
        const animationClasses = orb.animation ? "animate-pulse" : "";
        const delayClass = index === 1 ? "delay-1000" : "";

        return (
          <div
            key={index}
            data-parallax={orb.parallax}
            className={`absolute ${orb.position} ${orb.size} ${orb.blur} ${animationClasses} ${delayClass} rounded-full`}
            style={{ 
              willChange: "transform",
              opacity: orb.opacity,
              background: orb.color,
              zIndex: 5,
            }}
          />
        );
      })}
    </div>
  );
}
