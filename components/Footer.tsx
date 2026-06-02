import Link from "next/link";
import { Zap, Globe, Mail, MessageSquare, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/8 text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center shadow-md shadow-violet-500/30">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">Nexly</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your one-stop shop for premium electronics and accessories at unbeatable prices.
            </p>
            <div className="flex gap-1 mt-5">
              {[Globe, Mail, MessageSquare, Code].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full hover:text-white hover:bg-white/8 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Shop
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Headphones", href: "/products?category=headphones" },
                { label: "Fans", href: "/products?category=fans" },
                { label: "Phone Covers", href: "/products?category=phone-covers" },
                { label: "Gadgets", href: "/products?category=gadgets" },
                { label: "Accessories", href: "/products?category=accessories" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {["About", "Contact", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {["Privacy Policy", "Terms of Service", "Returns", "Shipping"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <span>© 2025 Nexly. All rights reserved.</span>
          <span className="text-zinc-700">Built with love for tech lovers</span>
        </div>
      </div>
    </footer>
  );
}
