import React from 'react'
import {Fade} from '@mui/material'
import NewPopup from './NewPopup'
import BestSellersPopup from './BestSellersPopup'
import FacePopup from './FacePopup'
import MakeupPopup from './MakeupPopup'
import SkincarePopup from './SkincarePopup'
import VirtualServicesPopup from './VirtualServicesPopup'
import DiscoverPopup from './DiscoverPopup'

const NavbarPopupComponent = ({type}) => {
  return (
    <Fade in={!!type} timeout={1000} >
        <div>
            {type==='NEW' && <NewPopup />}
            {type==='BEST' && <BestSellersPopup/>}
            {type==='FACE' && <FacePopup/>}
            {type==='MAKEUP' && <MakeupPopup/>}
            {type==='SKINCARE' && <SkincarePopup/>}
            {type==='VIRTUAL' && <VirtualServicesPopup/>}
            {type==='DISCOVER' && <DiscoverPopup/>}
        </div>
    </Fade>
  )
}

export default NavbarPopupComponent