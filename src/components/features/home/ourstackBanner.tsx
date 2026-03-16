'use client';

import { useState } from 'react';
import {Code2, Database, Server, Smartphone, Globe, FileCode, Braces, Box, Layers, Zap} from 'lucide-react';

type TechnologyTab = 'frontend' | 'backend' | 'devops';
interface Technology {
  name: string;
  icon: React.ReactNode;
}

const technologies: Record<TechnologyTab, Technology[]> = {
  frontend: [
    { name: 'React', icon: <Code2 className="w-6 h-6 text-[#61DAFB]" /> },
    { name: 'Angular', icon: <Box className="w-6 h-6 text-[#DD0031]" /> },
    { name: 'Vue.js', icon: <Layers className="w-6 h-6 text-[#4FC08D]" /> },
    { name: 'JavaScript', icon: <FileCode className="w-6 h-6 text-[#F7DF1E]" /> },
    { name: 'CSS3', icon: <Braces className="w-6 h-6 text-[#1572B6]" /> },
    { name: 'TypeScript', icon: <FileCode className="w-6 h-6 text-[#3178C6]" /> },
    { name: 'HTML', icon: <Globe className="w-6 h-6 text-[#E34F26]" /> },
    { name: 'Swift', icon: <Smartphone className="w-6 h-6 text-[#FA7343]" /> },
    { name: 'Kotlin', icon: <Smartphone className="w-6 h-6 text-[#7F52FF]" /> },
    { name: 'Next.js', icon: <Code2 className="w-6 h-6 text-black" /> },
    { name: 'Flutter', icon: <Smartphone className="w-6 h-6 text-[#02569B]" /> },
    { name: 'jQuery', icon: <Zap className="w-6 h-6 text-[#0769AD]" /> },
  ],
  backend: [
    { name: 'Node.js', icon: <Server className="w-6 h-6 text-[#339933]" /> },
    { name: 'Python', icon: <Code2 className="w-6 h-6 text-[#3776AB]" /> },
    { name: 'Java', icon: <FileCode className="w-6 h-6 text-[#007396]" /> },
    { name: 'PHP', icon: <Server className="w-6 h-6 text-[#777BB4]" /> },
    { name: 'Ruby', icon: <Code2 className="w-6 h-6 text-[#CC342D]" /> },
    { name: 'Go', icon: <Server className="w-6 h-6 text-[#00ADD8]" /> },
    { name: 'C#', icon: <FileCode className="w-6 h-6 text-[#239120]" /> },
    { name: 'Rust', icon: <Code2 className="w-6 h-6 text-[#000000]" /> },
  ],
  devops: [
    { name: 'Docker', icon: <Box className="w-6 h-6 text-[#2496ED]" /> },
    { name: 'Kubernetes', icon: <Layers className="w-6 h-6 text-[#326CE5]" /> },
    { name: 'AWS', icon: <Database className="w-6 h-6 text-[#FF9900]" /> },
    { name: 'Azure', icon: <Database className="w-6 h-6 text-[#0078D4]" /> },
    { name: 'Jenkins', icon: <Server className="w-6 h-6 text-[#D24939]" /> },
    { name: 'GitLab CI', icon: <Zap className="w-6 h-6 text-[#FCA121]" /> },
    { name: 'Terraform', icon: <Code2 className="w-6 h-6 text-[#7B42BC]" /> },
    { name: 'Ansible', icon: <Server className="w-6 h-6 text-[#EE0000]" /> },
  ],
};

export default function OurStack() {
  const [activeTab, setActiveTab] = useState<TechnologyTab>('frontend');

  return (
    <section className="relative bg-gradient-to-br from-[#0f1729] via-[#1e2747] to-[#2a3554] py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 mb-8">
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
            <span className="text-white font-medium text-sm tracking-wide">OUR STACK</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Modern Stack.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a]">
              Real Results.
            </span>
          </h2>

          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies powering next-generation solutions for startups and enterprises worldwide
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('frontend')}
            className={`px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-sm uppercase tracking-wider ${
              activeTab === 'frontend'
                ? 'bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white shadow-lg shadow-orange-500/30 scale-105'
                : 'bg-white/5 backdrop-blur-sm text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab('backend')}
            className={`px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-sm uppercase tracking-wider ${
              activeTab === 'backend'
                ? 'bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white shadow-lg shadow-orange-500/30 scale-105'
                : 'bg-white/5 backdrop-blur-sm text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab('devops')}
            className={`px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-sm uppercase tracking-wider ${
              activeTab === 'devops'
                ? 'bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] text-white shadow-lg shadow-orange-500/30 scale-105'
                : 'bg-white/5 backdrop-blur-sm text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            DevOps
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies[activeTab].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-300 cursor-pointer border border-transparent hover:border-[#FF6B35]/20 hover:shadow-2xl hover:shadow-[#FF6B35]/10"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/0 to-[#FF6B35]/0 group-hover:from-[#FF6B35]/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

              <div className="relative flex flex-col items-center gap-3">
                <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="text-[#1e2747] font-bold text-base text-center">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Trusted by innovative companies worldwide
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
