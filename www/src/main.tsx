import { App } from '@/app'
import '@/index.css'
import { createRoot } from 'react-dom/client'

const element = document.getElementById('root') as HTMLDivElement
const root = createRoot(element)

root.render(<App />)
