import logo from './assets/logo-notes.svg';
import { NewNoteCard } from './components/new-note-card';
import { Notecard } from './components/note-card';

function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={ logo } alt="Notes" width={100} />

      <form className="w-full">
        <input 
          type="text" 
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-zinc-500"
        />
      </form>

      <div className="h-px bg-zinc-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <Notecard />
        <Notecard />
        <Notecard />
      </div>
    </div>
  )
}

export default App;
