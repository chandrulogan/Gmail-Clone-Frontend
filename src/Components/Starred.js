import React from 'react'

function Starred({openDrawer}) {
  return (
    <div style={openDrawer ? {marginLeft: 250, width:'80%'}:{width:'100%'}}>
        Starred
    </div>
  )
}

export default Starred