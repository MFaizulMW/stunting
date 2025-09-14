// components/Header.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Baby, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Header() {
  const [open, setOpen] = useState(false);

  const whatsappNumbers = [
    { name: "Poliklinik Polresta ", number: "6282325600253" },
    { name: "Klinik Biddokes", number: "6289519100422" },
  ];
  

  const handleWhatsApp = (number: string) => {
    const message = "Halo saya ingin konsultasi kesehatan lebih lanjut.";
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleFindNearbyPuskesmas = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = `https://maps.google.com/?q=puskesmas&ll=${latitude},${longitude}&z=15`;
          window.open(mapsUrl, "_blank");
        },
        (error) => {
          alert("Gagal mendapatkan lokasi. Pastikan izin lokasi diaktifkan.");
          console.error(error);
        }
      );
    } else {
      alert("Browser tidak mendukung fitur lokasi.");
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Branding & Subtitle */}
        <div className="flex items-center space-x-2">
          <Image
  src="/images/logo-2.jpeg"
  alt="Stunting Hero Logo"
  width={120}           // 40 x 3
  height={120}          // 40 x 3
  className="w-24 h-24 md:w-30 md:h-30"
/>


          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold text-gray-800">
              SiPenting
            </h1>
            <p className="text-xs hidden md:block mt-1 max-w-sm">
              <span className="font-semibold text-gray-700">
                Strategi Pencegahan Stunting
              </span><br/>
              
            </p>
          </div>
        </div>

        {/* Menu Aksi untuk Desktop */}
        <nav className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleFindNearbyPuskesmas}
            className="text-teal-600 hover:text-teal-800 font-medium transition duration-300"
          >
            Cari Puskesmas
          </button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white font-medium">
                Konsultasi
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold mb-4">
                  Pilih Nomor Konsultasi
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                {whatsappNumbers.map((item, idx) => (
                  <Button
                    key={idx}
                    onClick={() => handleWhatsApp(item.number)}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow"
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-gray-600 text-center pt-2">
                Jam operasional: Senin – Jumat, pukul 08.00 – 14.00 WIB
              </p>
            </DialogContent>
          </Dialog>
          <a
            href="https://forms.gle/dzziPiEwTSFdHzAq7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-600 font-medium transition duration-300 underline"
          >
            Kritik & Saran
          </a>
        </nav>

        {/* Burger Menu untuk Mobile */}
        <div className="md:hidden">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xs rounded-lg p-6">
              <DialogHeader>
                <DialogTitle>Menu Aksi</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 mt-4">
                <button
                  onClick={handleFindNearbyPuskesmas}
                  className="w-full px-6 py-3 bg-white text-teal-600 border border-teal-600 rounded-lg text-base font-medium shadow-sm"
                >
                  Cari Puskesmas Terdekat
                </button>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium">
                      Konsultasi Kesehatan Online
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-xs rounded-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-center text-xl font-bold mb-4">
                        Pilih Nomor Konsultasi
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-3">
                      {whatsappNumbers.map((item, idx) => (
                        <Button
                          key={idx}
                          onClick={() => handleWhatsApp(item.number)}
                          className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow"
                        >
                          {item.name}
                        </Button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 text-center pt-2">
                      Jam operasional: Senin – Jumat, pukul 08.00 – 14.00 WIB
                    </p>
                  </DialogContent>
                </Dialog>
                <a
                  href="https://forms.gle/dzziPiEwTSFdHzAq7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-gray-600 hover:text-teal-600 text-center font-medium underline"
                >
                  Kritik & Saran
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}