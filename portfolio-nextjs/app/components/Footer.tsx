'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 bg-black/80">
      {/* Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-signature opacity-50" />

      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          Made by <span className="text-gradient-signature font-semibold">Shawn du Preez</span> © {currentYear}
        </p>
      </div>
    </footer>
  );
}

