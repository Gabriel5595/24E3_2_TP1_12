import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListaTarefas from './components/ListaTarefas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaTarefas />
  </StrictMode>,
)
