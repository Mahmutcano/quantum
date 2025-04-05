"use client"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
}

export function WhatsAppButton({
  phoneNumber = "+902129620101", // Replace with your actual phone number
  message = "Merhaba, bilgi almak istiyorum.", // Default message
  className,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 cursor-pointer right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 z-50",
        className,
      )}
      aria-label="WhatsApp İletişim"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  )
}

