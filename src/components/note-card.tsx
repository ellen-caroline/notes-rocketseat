interface NoteCardProps {
  note: {
    date: Date
    content: string
  }
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <button className="rounded-md text-left flex flex-col bg-zinc-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-zinc-600 focus-visible:ring-2 focus-visible:ring-l1lac">
      <span className="text-sm font-medium text-zinc-300">
        {note.date.toISOString()}
       </span>
      <p className="text-sm leading-6 text-zinc-400">
        {note.content}
      </p>

       <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-zinc-900/60 to-zinc-900/0 pointer-events-none" />
    </button>
  )
}

