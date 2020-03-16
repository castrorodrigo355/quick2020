import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@material-ui/core/Button';
import './leftPanel.css';

const LeftPanel = ({left, widthScreen, heightScreen, subjects, pizzasBig, food, foodType,
                    setOpenLeft, setOpenDetails, showSubject}) => {
        
    return (
        <div 
            className={ `${widthScreen > 600 ? "panel-container-web" : "panel-container-mobile"} 
                         ${left ? "open" : ""}
                         ${foodType === 1 ? "pizza" : foodType === 2 ? "empanada" : "bebida"}
                        `}>
            <div className={`${widthScreen > 600 ? "panel-title-web" : "panel-title-mobile"}`}>
                { food && <div>{food.name}</div>}
                <div style={{marginRight:"15px"}}>
                    <Button variant="outlined" color="primary" onClick={setOpenLeft}>
                        <DehazeIcon />
                    </Button>
                </div>
            </div>
            <hr/>
            {food && food.options.map((x, i) => <Item key={i} food={x} widthScreen={widthScreen} 
                                            setOpenLeft={setOpenLeft} setOpenDetails={setOpenDetails}
                                            showSubject={showSubject}/>)}
        </div>
    )
}

export default LeftPanel;

const Item = ({food, widthScreen, setOpenLeft, setOpenDetails, showSubject}) => {

    const chooseItem = food => {
        // showSubject(food)
        setOpenLeft();
        // setOpenDetails();
    }

    return(
        <div className={`${widthScreen > 600 ? "panel-item-web" : "panel-item-mobile"}`}
             onClick={() => chooseItem(food)}
        >
            <div><food.icon/></div>
            <div>{food.title}</div>
            <div>{food.price}</div>
        </div>
    )
}