import React from 'react'

function Draft({openDrawer}) {
  return (
    <div style={openDrawer ? {marginLeft: 250, width:'80%'}:{width:'100%'}}>Draft</div>
  )
}

export default Draft