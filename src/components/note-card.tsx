import * as Dialog from '@radix-ui/react-dialog';

interface NoteCardProps {
  note: {
    date: Date
    content: string
  }
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md text-left flex flex-col bg-zinc-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-zinc-600 focus-visible:ring-2 focus-visible:ring-l1lac">
        <span className="text-sm font-medium text-zinc-300">
          {note.date.toISOString()}
        </span>
        <p className="text-sm leading-6 text-zinc-400">
          {note.content}
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-zinc-900/60 to-zinc-900/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50"/>
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-zinc-700 rounded-md flex flex-col outline-none">
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-zinc-300">
              {note.date.toISOString()}
            </span>
            <p className="text-sm leading-6 text-zinc-400">
              {note.content}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

