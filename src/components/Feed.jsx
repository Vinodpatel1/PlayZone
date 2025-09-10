import React from 'react'
import ButtonList from './ButtonList'
import VdoContainer from './VdoContainer'

import { useSelector } from 'react-redux'
export default function Feed() {
  const isSidebarOpen = useSelector((store) => store.app.issidebarOpen);
  return (
    <div className={
      `mt-14 p-4  ${isSidebarOpen ? "ml-56" : "ml-20"}`
    }>
      <ButtonList></ButtonList>
        <VdoContainer></VdoContainer>
    </div>
  )
}
