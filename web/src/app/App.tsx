import { Button } from "@/shared/components/ui/button"
import { toast } from "sonner"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button onClick={() => toast("Yeey.")}>Click me</Button>
    </div>
  )
}

export default App
