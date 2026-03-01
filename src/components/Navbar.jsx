// Using absolute path for public asset or removing if not needed.
// It's better to just use src="/BoldMarkLogo.png" below.

export default function Navbar() {
  return (
    <div 
    className="
    fixed -top-1 left-1/2 -translate-x-1/2 
    w-[95%] max-w-5xl 
    px-6 py-3 
    rounded-2xl 
    bg-white/10 
    backdrop-blur-xl 
    border border-white/20 
    shadow-lg 
    flex items-center justify-between 
    z-110000000
    bg-linear-to-b from-[#16525067] to-[#1b9c9c63]
        ">
            
        <div className="text-white font-semibold h-10 ">
          <a href="/" className="hover:text-white transition">
            <img src="/BoldMarkLogo.png" alt="BoldMark Logo" className="h-20 align-center object-cover w-30 pb-10" />
          </a>
        </div>

        <div className="flex gap-6 text-white/80">
          
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
    </div>
  );
}
