import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import InstagramIcon from '@material-ui/icons/Instagram';
import RestaurantIcon from '@material-ui/icons/Restaurant';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import FacebookIcon from '@material-ui/icons/Facebook';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import './optionsFood.css';

const OptionsFood = ({choosePanel, left, setOpenLeft}) => {

    const[panelFloating, setPanelFloating] = useState(false);

    const actions = [
        {icon: RestaurantIcon, className: `fab-main-food restaurantIcon ${panelFloating ? 'open-food' : ''}`, onClick: () => handlePanel()},
        {icon: LocalPizzaIcon, className: `fab-food pizzaIcon ${panelFloating ? 'open-food' : ''}`, onClick: () => choosePanel(1)},
        {icon: Brightness2Icon, className: `fab-food pieIcon ${panelFloating ? 'open-food' : ''}`, onClick: () => choosePanel(2)},
        {icon: LocalBarIcon, className: `fab-food drinkIcon ${panelFloating ? 'open-food' : ''}`, onClick: () => choosePanel(3)}
    ]

    const handlePanel = () => {
        setPanelFloating(!panelFloating);
        left && setOpenLeft();
    }

    return (
        <div className="options-food-container">
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

export default OptionsFood;
