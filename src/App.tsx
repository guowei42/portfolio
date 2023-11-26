//f4c752
import { Button, Drawer, IconButton } from "@mui/material"
import { useState } from "react"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function App() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  }

  return (
    <div>
      <Drawer
        open={open}
        variant="persistent"
      >
        <Button onClick={toggleDrawer(false)}>Open</Button>
      </Drawer>
      <Button onClick={toggleDrawer(true)}>Open</Button>
    </div>
  )
}

export default App
