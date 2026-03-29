export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20Masonry%20Architect%2C%20saya%20tertarik%20menggunakan%20jasa%20Anda."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-on-tertiary-container text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-[60]"
      aria-label="Chat WhatsApp"
    >
      <span
        className="material-symbols-outlined text-3xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        chat
      </span>
    </a>
  );
}
