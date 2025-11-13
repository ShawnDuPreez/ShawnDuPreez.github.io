'use client';

import Image from 'next/image';
import AnimatedText from './AnimatedText';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedText delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-gradient-signature">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-signature mx-auto rounded-full" />
          </div>
        </AnimatedText>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedText delay={0.4}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                I&apos;m a{' '}
                <span className="font-bold text-gradient-signature">
                  BSc Computer Science & IT student
                </span>{' '}
                at The Independent Institute of Education in Pretoria, South Africa, passionate about
                building robust, data-driven applications.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                My focus is on backend development with{' '}
                <span className="inline-block px-3 py-1 rounded-full bg-purple/20 text-purple text-sm font-semibold mx-1">
                  ASP.NET Core
                </span>
                , cloud integration via{' '}
                <span className="inline-block px-3 py-1 rounded-full bg-cyan/20 text-cyan text-sm font-semibold mx-1">
                  Azure
                </span>
                , and mobile apps with{' '}
                <span className="inline-block px-3 py-1 rounded-full bg-purple/20 text-purple text-sm font-semibold mx-1">
                  Kotlin
                </span>
                ,{' '}
                <span className="inline-block px-3 py-1 rounded-full bg-cyan/20 text-cyan text-sm font-semibold mx-1">
                  React Native
                </span>
                , and{' '}
                <span className="inline-block px-3 py-1 rounded-full bg-purple/20 text-purple text-sm font-semibold mx-1">
                  Flutter
                </span>
                .
              </p>
              <div className="p-4 rounded-lg bg-cyan/10 border border-cyan/30">
                <p className="font-bold text-cyan">
                  Clean code, secure authentication, and automated workflows are my passion!
                </p>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.6}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Full-Stack', tech: ['ASP.NET Core', 'Razor Pages', 'MVC', 'TailwindCSS'], emoji: '💻' },
                { title: 'Cloud', tech: ['Azure', 'Supabase', 'Serverless'], emoji: '☁️' },
                { title: 'Mobile', tech: ['Kotlin', 'Jetpack Compose', 'React Native', 'Flutter'], emoji: '📱' },
                { title: 'DevOps', tech: ['CI/CD', 'GitHub Actions', 'Security'], emoji: '🔧' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gradient-to-br from-purple/20 to-cyan/20 border border-purple/30 hover:border-cyan/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-3 text-center">{item.emoji}</div>
                  <h3 className="text-xl font-bold text-center mb-2 text-white">{item.title}</h3>
                  <ul className="text-sm text-gray-400 text-center space-y-1">
                    {item.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}

