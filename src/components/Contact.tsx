import { FiPhone, FiMail } from 'react-icons/fi'
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  return (
    <section id="contact" className="w-full px-4">
      <div className="max-w-7xl mx-auto bg-primary backdrop-blur-md rounded-2xl px-8 py-16">
        <h2 className="text-white text-4xl md:text-5xl font-semibold mb-12 font-serif">
          Hubungi Kami
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white text-lg font-medium mb-2 flex items-center gap-2">
                  <FiMail className="text-xl" /> Email
                </h3>
                <a
                  href="mailto:rudihartonokarya@gmail.com"
                  className="text-gray-300 hover:text-white transition text-sm break-all"
                >
                  rudihartonokarya@gmail.com
                </a>
              </div>
              <div>
                  
                <h3 className="text-white text-lg font-medium mb-2 flex items-center gap-2">
                  <FiPhone className="text-xl" /> Telepon
                </h3>
                <a
                  href="https://wa.me/6281233040137"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  +62 812-3304-0137 (Rudi Hartono)
                </a>
                <br />
                <a
                  href="https://wa.me/6282131553325"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  +62 821-3155-3325 (Usamah)
                </a>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-2 flex items-center gap-2">
                  <FaLocationDot className="text-xl" /> Alamat
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Gg. V No.25, Madyopuro, Kec. Kedungkandang, Kota Malang, Jawa Timur 65138
                </p>
              </div>
            </div>

          {/* Map */}
          <div className="w-full h-[320px] md:h-[380px] rounded-xl overflow-hidden shadow-lg border border-white/20">
            <iframe
              title="Lokasi Perusahaan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.1603895814483!2d112.66431519999999!3d-7.9823664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629cb1aa0df57%3A0x507dde3a6112bd74!2sPT.%20GUNUNG%20MUJUR%20INDONESIA!5e0!3m2!1sen!2sid!4v1763995024725!5m2!1sen!2sid"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact