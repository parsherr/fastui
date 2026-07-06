"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Cookies from "js-cookie"
import { encryptCookie, decryptCookie } from "@/lib/crypto"
import Image from "next/image"
import { siteConfig } from '@/config/site';

const version = siteConfig.version

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  // ℹ️ NOT: Bu Welcome Modal, kullanıcının sadece bir kez görmesi için Cookie kullanır.
  // Cookie adı: "hasSeenWelcome"

  useEffect(() => {
    const hasSeenWelcome = Cookies.get("hasSeenWelcome")
    if (hasSeenWelcome) {
      try {
        const decryptedValue = decryptCookie(hasSeenWelcome)
        if (decryptedValue === "true") {
          setIsOpen(false)
        }
      } catch {
        // Çözme hatası olursa (örneğin cookie bozulduysa), modalı göster.
        setIsOpen(true)
      }
    } else {
      // Cookie yoksa, modalı göster.
      setIsOpen(true)
    }
  }, [])

  const handleStartExploring = () => {
    // Cookie'yi "görüldü" olarak ayarla
    const encryptedValue = encryptCookie("true")
    Cookies.set("hasSeenWelcome", encryptedValue, { expires: 365 }) // 1 yıl boyunca gösterme
    setIsOpen(false)
  }

  const handleNotNow = () => {
    // Şu an görmemeyi seçse bile, bu modalı bir daha göstermek istemediğini varsayarak cookie ayarlanabilir.
    // Ancak welcome modal'larda genellikle "Şimdi Değil" seçeneği, modalı kapatır ama cookie'yi ayarlamaz.
    // Eğer tekrar göstermek isterseniz bu kısmı boş bırakın. Ben bir daha göstermeyecek şekilde ayarlıyorum:
    handleStartExploring() // Hata ayıklama (debug) kolaylığı için aynı fonksiyonu kullandım.
    // İhtiyaca göre Cookies.set'i kaldırabilirsiniz.
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[800px] p-0 gap-0 bg-[#1a1a1a] border-[#2a2a2a] overflow-hidden rounded-2xl">
        <div className="flex flex-col sm:flex-row">
          {/* Left side (text content) */}
          <div className="flex-1 px-6 py-6">

            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-semibold text-white text-left">
                {/* 🎯 Başlık: Sitenize Hoş Geldiniz */}
                Welcome to fastui
                <span className="text-sm ml-2 border p-1 rounded-full text-white border-white">
                  New!
                </span>
              </DialogTitle>
              <p className="text-gray-400 text-sm mt-2 text-left">
                {/* 🎯 Alt Başlık: Sitenizin amacı */}
                Kodlama yolculuğunuzu hızlandıracak modern bileşen ve şablonlarınızı keşfedin.
              </p>
            </DialogHeader>

            <div className="space-y-5 mb-6">
              {/* Feature 1: Kolaylık */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white text-black flex items-center justify-center font-semibold text-sm">
                 🎉
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1.5 text-base">
                    {version} is live now!
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    You can read change log before
                  </p>
                </div>
              </div>

              {/* Feature 2: Şablonlar */}
              <div className="flex gap-4">
                {/* <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white text-black flex items-center justify-center font-semibold text-sm">
                  2
                </div> */}
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1.5 text-base flex items-center gap-2">
                    {/* 🎯 Ana Özellik 2 */}
                    Templates and Components
                    <span className="px-2 py-0.5 bg-[#2563eb]/20 text-[#3b82f6] text-xs rounded-full font-semibold">
                      BETA
                    </span>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {/* 🎯 Açıklama 2 */}
                    Save development time by downloading complete templates, from landing pages to admin panels.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleStartExploring}
                className="w-full bg-white hover:bg-gray-200 text-black font-semibold h-11 rounded-lg transition-colors"
              >
                {/* 🎯 Buton 1 */}
                Start Exploring
              </Button>
              <Button
                onClick={handleNotNow}
                variant="ghost"
                className="w-full text-gray-400 hover:text-white hover:bg-[#2a2a2a] h-11 rounded-lg transition-colors border border-white text-white"
              >
                {/* 🎯 Buton 2 */}
                Not Now
              </Button>
            </div>
          </div>

          {/* Right side (image area) */}
          <div className="hidden sm:block relative w-[300px] bg-[#111] border-l border-[#2a2a2a]">
            <Image
              src="/images/welcomer.png" // buraya kendi görsel yolunu koy
              alt="Component Library Önizlemesi" // Alt metni güncelledim
              fill
              className="object-cover"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}