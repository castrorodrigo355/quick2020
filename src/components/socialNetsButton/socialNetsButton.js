import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './socialNetsButton.css';

const SocialNetsButton = () => {

    const[panelFloating, setPanelFloating] = useState(false);

    const actions = [
        {icon: MobileScreenShareIcon, className: `fabmain addIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => handlePanel()},
        {icon: InstagramIcon, className: `fab instagramIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => console.log("INSTAGRAM")},
        {icon: WhatsAppIcon, className: `fab whatsAppIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => console.log("WHATSAPP")},
    ]

    const handlePanel = () => setPanelFloating(!panelFloating);

    return (
        <div className="social-nets-container">
            {
                actions.map((b, i) => {
                    return(
                        <div className={b.className} onClick={b.onClick} key={i}>
                            <IconButton color= "inherit">
                                <b.icon/>
                            </IconButton>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SocialNetsButton;
