// components/WhatsAppButton.jsx
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "923028397473"; // country code + number, no +, spaces or leading 0
const MESSAGE = "Hi Stratone Studio, I'd like to know more about your services.";
const BUBBLE_DELAY = 4000; // ms before the greeting appears

const css = `
.wa-wrap {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  font-family: "Clash Grotesk", sans-serif;
}

/* Greeting bubble */
.wa-bubble {
  position: relative;
  max-width: 240px;
  padding: 12px 32px 12px 12px;
  background: #fff;
  border-radius: 16px 16px 4px 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: wa-fade-up 0.4s ease-out;
}
.wa-bubble-link {
  display: block;
  text-decoration: none;
  font-size: 14px;
  color: #1f2937;
}
.wa-bubble-title { font-weight: 600; }
.wa-bubble-text { display: block; margin-top: 2px; color: #4b5563; }
.wa-bubble-close {
  position: absolute;
  top: 6px;
  right: 8px;
  background: none;
  border: 0;
  font-size: 18px;
  line-height: 1;
  color: #9ca3af;
  cursor: pointer;
}
.wa-bubble-close:hover { color: #374151; }

/* Main button */
.wa-btn {
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  background: #25d366;
  color: #fff;
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}
.wa-btn:hover {
  padding-right: 20px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
}
.wa-btn:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}
.wa-ping {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: #25d366;
  opacity: 0.4;
  animation: wa-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
.wa-icon { position: relative; flex-shrink: 0; }

/* Label slides open on hover */
.wa-label {
  position: relative;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.wa-btn:hover .wa-label {
  max-width: 120px;
  margin-left: 8px;
  opacity: 1;
}

/* Notification badge */
.wa-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #ef4444;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  border-radius: 9999px;
  box-shadow: 0 0 0 2px #fff;
}

@keyframes wa-fade-up {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes wa-ping {
  75%, 100% { transform: scale(1.6); opacity: 0; }
}

@media (max-width: 480px) {
  .wa-wrap { bottom: 16px; right: 16px; }
  .wa-bubble { max-width: 210px; }
}

@media (prefers-reduced-motion: reduce) {
  .wa-bubble, .wa-ping { animation: none; }
  .wa-btn, .wa-label { transition: none; }
}
`;

const WhatsAppButton = () => {
  const [showBubble, setShowBubble] = useState(false);
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem("wa-bubble-dismissed") === "1";
    } catch {}
    if (dismissed) return;

    const timer = setTimeout(() => setShowBubble(true), BUBBLE_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShowBubble(false);
    try {
      sessionStorage.setItem("wa-bubble-dismissed", "1");
    } catch {}
  };

  return (
    <>
      <style>{css}</style>

      <div className="wa-wrap">
        {showBubble && (
          <div className="wa-bubble">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="wa-bubble-link"
            >
              <span className="wa-bubble-title">Stratone Studio</span>
              <span className="wa-bubble-text">
                👋 Need help with your project? Chat with us!
              </span>
            </a>
            <button
              onClick={dismiss}
              aria-label="Dismiss message"
              className="wa-bubble-close"
            >
              &times;
            </button>
          </div>
        )}

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
          aria-label="Chat with us on WhatsApp"
          className="wa-btn"
        >
          <span className="wa-ping" />
          <FaWhatsapp size={30} className="wa-icon" />
          <span className="wa-label">Chat with us</span>
          <span className="wa-badge">1</span>
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;