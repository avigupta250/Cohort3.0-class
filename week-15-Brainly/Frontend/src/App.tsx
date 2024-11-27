
import './App.css'
import { PlusIcon } from './components/Icons/PlusIcon'
import { Button } from './components/ui/Button'
import { ShareIcon } from './components/Icons/ShareIcon'
function App() {


  return (
    <div className='m-6 gap-3 flex'>
      <Button startIcon={<ShareIcon size="md" />} variant='primary' size="md" text="Share"  />
      <Button startIcon={<PlusIcon size="md" />} variant='secondary' size="md" text="Add" />
    </div>
  )
}

export default App
