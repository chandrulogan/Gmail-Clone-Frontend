import React from 'react'

function Delete({openDrawer}) {
  return (
    <div style={openDrawer ? {marginLeft: 250, width:'80%'}:{width:'100%'}}>Delete</div>
  )
}

export default Delete