export const DecorativeDivider = () => (
  <div className="flex items-center justify-center gap-3 my-8">
    <div className="w-16 h-px bg-gradient-to-r from-transparent to-stone-300" />
    <div className="flex gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
    </div>
    <div className="w-16 h-px bg-gradient-to-l from-transparent to-stone-300" />
  </div>
);
