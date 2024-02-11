import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    if(event.target.value === '') {
      setShouldShowOnboarding(true)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col bg-zinc-700 text-left p-5 gap-3 outline-none hover:ring-2 hover:ring-zinc-600 focus-visible:ring-2 focus-visible:ring-l1lac">
        <span className="text-sm font-medium text-zinc-200">
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-zinc-400">
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50"/>
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-zinc-700 rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 top-0 p-1.5 text-zinc-400 hover:text-zinc-100">
            <X className="size-5" />
          </Dialog.Close>
          
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-zinc-300">
              Adicionar nota
            </span>
            {shouldShowOnboarding ? (
              <p className="text-sm leading-6 text-zinc-400">
                Comece <button className="font-md text-purple-400 hover:underline">gravando uma nota</button> em áudio ou se preferir <button onClick={handleStartEditor} className="font-md text-purple-400 hover:underline">utilize apenas texto</button>.
              </p>
            ) : (
              <textarea 
                autoFocus 
                className="text-sm leading-6 text-zinc-400 bg-transparent resize-none flex-1 outline-none"
                onChange={handleContentChanged}
              />
            )} 
            
          </div>

          <button 
            type='button'
            className="w-full bg-purple-400 py-4 text-center text-sm text-purple-950 outline-none font-medium hover:bg-purple-500"
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}