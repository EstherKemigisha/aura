
export default function Footer() {
  return (
    <footer className="bg-deep-brown text-cream py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" stroke="#C9A84C" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <span className="text-deep-brown font-display font-bold text-lg">A</span>
              </div>
              <span className="font-display font-bold text-xl">Aura</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Celebrating natural African beauty with luxurious, effective hair care crafted for your unique curls and coils.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#shop" className="hover:text-gold transition-colors">All Products</a></li>
              <li><a href="#shop" className="hover:text-gold transition-colors">Treatments</a></li>
              <li><a href="#shop" className="hover:text-gold transition-colors">Styling</a></li>
              <li><a href="#shop" className="hover:text-gold transition-colors">Shampoo & Conditioner</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-gold transition-colors">Blog</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Our Values</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center hover:bg-gold hover:text-deep-brown transition-all social-icon">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/><path d="M17 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center hover:bg-gold hover:text-deep-brown transition-all social-icon">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
            <p className="text-sm text-cream/70 mb-2">Customer Care</p>
            <p className="text-gold font-semibold">hello@aura.com</p>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream/60">2026 Aura Beauty Co. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-cream/60">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
