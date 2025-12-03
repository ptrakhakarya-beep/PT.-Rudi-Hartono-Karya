import { FiPhone, FiMail } from 'react-icons/fi'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const produk = [
    'Projecting & Planning',
    'Consulting Engineering',
    'Full Service Construction',
  ]

  const jamLayanan = [
    { day: 'Senin', time: '09.00 - 16.00' },
    { day: 'Selasa', time: '09.00 - 16.00' },
    { day: 'Rabu', time: '09.00 - 16.00' },
    { day: 'Kamis', time: '09.00 - 16.00' },
    { day: 'Jumat', time: '09.00 - 16.00' },
    { day: 'Sabtu', time: '09.00 - 11.00' },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-5">
            <p className="text-primary font-bold text-xl">PT. RUDI HARTONO KARYA (RAKHA) </p>
            <p className="text-white/90 leading-relaxed">
              Gg. V No.25, Madyopuro, Kec. Kedungkandang, Kota Malang, Jawa Timur 65138
            </p>
            <div className="space-y-2">
              <a
                href="mailto:rudihartonokarya@gmail.com"
                className="flex items-center gap-3 text-white/90 hover:text-white"
              >
                <FiMail className="text-xl" /> rudihartonokarya@gmail.com
              </a>
              <a
                href="https://wa.me/6281233040137"
                className="flex items-center gap-3 text-white/90 hover:text-white"
              >
                <FiPhone className="text-xl" /> +62 812-3304-0137 (Rudi Hartono)
              </a>
              <a
                href="https://wa.me/6282131553325"
                className="flex items-center gap-3 text-white/90 hover:text-white"
              >
                <FiPhone className="text-xl" /> +62 821-3155-3325 (Usamah)
              </a>
            </div>

            {/* Sosial media (opsional) */}
            <div className="space-y-3 pt-2">
              <a href="#" className="flex items-center gap-3 text-white/90 hover:text-white">
                <FaInstagram className="text-2xl" /> rudihartonokarya
              </a>
              <a href="#" className="flex items-center gap-3 text-white/90 hover:text-white">
                <FaFacebookF className="text-2xl" /> PT. RUDI HARTONO KARYA
              </a>
              <a href="#" className="flex items-center gap-3 text-white/90 hover:text-white">
                <FaLinkedinIn className="text-2xl" /> PT. RUDI HARTONO KARYA
              </a>
            </div>
          </div>

          {/* Produk */}
          <div>
            <h4 className="text-primary font-semibold text-xl mb-5">Jasa</h4>
            <ul className="space-y-3">
              {produk.map((p) => (
                <li key={p} className="text-white/90">{p}</li>
              ))}
            </ul>
          </div>

          {/* Jam Layanan */}
          <div>
            <h4 className="text-primary font-semibold text-xl mb-5">Jam Layanan</h4>
            <ul className="space-y-2">
              {jamLayanan.map((row) => (
                <li key={row.day} className="flex items-center justify-between text-white/90">
                  <span>{row.day}</span>
                  <span className="tabular-nums">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} PT. RUDI HARTONO KARYA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer