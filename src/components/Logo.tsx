interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'light' }: LogoProps) {
  return (
    <div className="flex flex-col items-center">
      <img 
        src="/final.png" 
        alt="Bunifu Logo" 
        className="h-10 sm:h-12 w-auto object-contain" 
      />
      <span className={`font-bold text-xs sm:text-sm -mt-0.5 ${
        variant === 'light' ? 'text-white' : 'text-brand-dark'
      }`}>
        Youths Kenya
      </span>
    </div>
  );
}
