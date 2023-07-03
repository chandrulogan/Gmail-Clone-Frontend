import React from 'react'

function Snoozed({openDrawer}) {
  return (
    <div style={openDrawer ? {marginLeft: 250, width:'80%'}:{width:'100%'}}>Snoozed</div>
  )
}

export default Snoozed