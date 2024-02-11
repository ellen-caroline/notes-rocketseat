export function Notecard() {
  return (
    <div className="rounded-md bg-zinc-800 p-5 space-y-3 overflow-hidden relative">
      <span className="text-sm font-medium text-zinc-300">
        Há 2   dias
       </span>
      <p className="text-sm leading-6 text-zinc-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat deserunt tenetur non, neque amet dicta! Facere est voluptate nobis a rem error expedita, nesciunt deleniti eveniet quod repellat corrupti!
      </p>
       <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-zinc-900/60 to-zinc-900/0 pointer-events-none" />
    </div>
  )
}

