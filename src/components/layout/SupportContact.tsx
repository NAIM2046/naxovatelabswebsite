"use client";
import React from "react";

const PHONE_NUMBER = "01743637814";
const WHATSAPP_LINK = `https://wa.me/88${PHONE_NUMBER}`;
const CALL_LINK = `tel:+88${PHONE_NUMBER}`;

const SupportContact: React.FC = () => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(PHONE_NUMBER);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const el = document.createElement("textarea");
            el.value = PHONE_NUMBER;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className=" flex items-center justify-center  p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
                {/* Divider */}
                <div className="my-4 border-t" />

                {/* Support Section */}
                <div className="text-center">
                    <p className="text-red-500 font-semibold text-lg">
                        ⚠️ কোনো সমস্যা হলে আমাদের জানান
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                        যেকোনো সমস্যায় নিচের নম্বরে যোগাযোগ করুন
                    </p>

                    {/* Phone Box */}
                    <div className="flex items-center justify-center gap-2 mt-4 bg-gray-100 py-2 px-4 rounded-lg">
                        <span>📞</span>
                        <span className="font-medium tracking-wide">{PHONE_NUMBER}</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 mt-5">
                        {/* Copy */}
                        <button
                            onClick={handleCopy}
                            className={`flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition ${copied
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-900 text-white hover:bg-gray-800"
                                }`}
                        >
                            <span>{copied ? "✅" : "📋"}</span>
                            {copied ? "কপি করা হয়েছে!" : "কপি নম্বর"}
                        </button>

                        {/* Call */}
                        <a
                            href={CALL_LINK}
                            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            <span>📲</span>
                            ক্লিক করে কল করুন
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition"
                        >
                            <span>💬</span>
                            হোয়াটসঅ্যাপ করুন
                        </a>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 border-t pt-3">
                        <p className="text-xs text-gray-400">
                            © 2026{" "}
                            <span className="font-semibold text-gray-600">NexovateLabs</span>{" "}
                            — All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportContact;
