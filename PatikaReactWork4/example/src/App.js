import React from 'react'

import { MonsterButton } from 'monster-button-lib'
import 'monster-button-lib/dist/index.css'

const App = () => {
  return <>
    <MonsterButton type="primary" text="Primary button"/>

    <MonsterButton type="text" text="Text button"/>

    <MonsterButton type="link" text="Link button"/>

    <MonsterButton text="Default button"/>

    <MonsterButton type="dashed" text="Text button"/>
  
  </>
  
}



export default App
