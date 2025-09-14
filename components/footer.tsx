// components/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Baby } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Main Messaging & Branding */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Baby className="h-6 w-6 text-white" />
          <span className="font-semibold text-lg">Cegah Stunting Indonesia</span>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Bersama wujudkan generasi Indonesia yang sehat dan cerdas
        </p>

        {/* Footer Navigation & Contact */}
        <div className="flex flex-col md:flex-row justify-center md:justify-around gap-8 md:gap-12 text-sm">
          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-gray-200 mb-2">Tautan Cepat</h4>
            <a href="#" className="text-gray-400 hover:text-white transition">Beranda</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a>
            <a href="https://forms.gle/dzziPiEwTSFdHzAq7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Kritik & Saran</a>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-gray-200 mb-2">Hubungi Kami</h4>
            <div className="text-gray-400 max-w-xs md:max-w-none text-left md:text-left mx-auto md:mx-0">
              <p>Jl. Sekar Dwijan No.6, Klitren, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55222</p>
              <p className="mt-1">Telp: 0895-1910-0422</p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 mb-4">
            Layanan Promosi Kesehatan ini kerja sama Biddokkes Polda DIY dan Kemenag Kota Yogyakarta:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Logo Biddokkes */}
            <a href="https://polda-diy.go.id/biddokes/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <Image
                src="/images/biddokes.png"
                alt="Logo Biddokkes Polda DIY"
                width={64}
                height={64}
                className="h-16 w-16 mb-2 object-contain"
              />
             
            </a>

            {/* Logo Kemenag */}
            <a href="https://diy.kemenag.go.id/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <Image
                src="/images/kemenag.png"
                alt="Logo Kemenag Kota Yogyakarta"
                width={64}
                height={64}
                className="h-16 w-16 mb-2 object-contain"
              />
            
            </a>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-8">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} StuntingHero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}