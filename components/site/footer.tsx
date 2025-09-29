import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary mt-8" aria-labelledby="footer-title">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-6">
        <div>
          <h3 id="footer-title" className="font-bold text-primary">
            Grinty Technology
          </h3>
          <p className="text-sm text-muted-foreground mt-2">Jakarta, Indonesia</p>
          <div className="mt-3 text-sm space-y-1">
            <p className="flex items-center gap-2">
              <Mail className="size-4" /> support@grinty.id
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4" /> +62 812-3456-7890
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="size-4" /> Jakarta
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Perusahaan</h4>
          <ul className="mt-2 grid gap-1 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Career
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Navigasi</h4>
          <ul className="mt-2 grid gap-1 text-sm">
            <li>
              <a href="#features" className="hover:underline">
                Fitur
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:underline">
                Cara Kerja
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">
                Harga
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Ikuti Kami</h4>
          <div className="flex items-center gap-3 mt-2">
            <Link href="#" aria-label="Instagram">
              <Instagram className="size-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="size-5" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-4">© 2025 Grinty Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
