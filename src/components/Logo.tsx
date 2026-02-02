export default function Logo() {
  return (
    <div className="flex items-start gap-2">
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
         <img src="/logo.png" alt="Logo" className="w-24 sm:w-30 h-6 sm:h-8 bg-transparent" /> 
        </div>
        <span className="text-white font-semibold text-sm sm:text-lg -mt-1">Youths Kenya</span>
      </div>
    </div>
  );
}
