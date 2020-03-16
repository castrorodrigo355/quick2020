import React, { useState, useContext } from 'react';
import { appContext } from '../../contextApi';
import LeftPanel from "../leftPanel/leftPanel";
import ModalDetails from "../modalDetails/modalDetails";
import FloatingButton from '../floatingButton/floatingButton';
import LeftPanelButton from '../leftPanelButton/leftPanelButton';
import SocialNetsButton from '../socialNetsButton/socialNetsButton';
import MapLeaflet from '../map/map';
import '../../App.css';
import ModalProfile from '../modalProfile/modalProfile';
import OptionsFood from '../optionsFood/optionsFood';

const Home = () => {

    const state = useContext(appContext);
    const { subjects, courses, profileMessage, foods } = state;

    const[left, setLeft] = useState(false);

    const setOpenLeft = () => setLeft(c => !c);

    const[openModalDetails, setOpenModalDetails] = useState(false);
    const setOpenDetails = () => setOpenModalDetails(!openModalDetails);

    const[openModalProfile, setOpenModalProfile] = useState(false);
    const setOpenProfile = () => setOpenModalProfile(!openModalProfile);

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    React.useEffect(() => {
        const debouncedHandleResize = function handleResize() {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        });
        };

        window.addEventListener("resize", debouncedHandleResize);

        return () => {
        window.removeEventListener("resize", debouncedHandleResize);
        };
    });

    const[selectedCourse, setSelectedCourse] = useState(null);

    const showSubject = subject => {
        const myCourse = courses.find(c => c.id === subject.id);
        !myCourse ? setSelectedCourse(null) : setSelectedCourse(myCourse);
    }

    const[foodType, setFoodType] = useState(0);
    const[food, setFood] = useState(null);
    const choosePanel = option => {
        const food = foods.find(food => food.id === option);
        setOpenLeft();
        setFood(food);
        setFoodType(food.id);
        (left || !food) && setTimeout(() => setOpenLeft(), 1000);
    }

    return (
        <div className="App">
            {/* <LeftPanelButton left={left} setOpenLeft={setOpenLeft}/> */}
            <LeftPanel  left={left}
                        subjects={subjects}
                        food={food}
                        foodType={foodType}
                        setOpenLeft={setOpenLeft}
                        setOpenDetails={setOpenDetails} 
                        showSubject={showSubject}
                        widthScreen={dimensions.width} 
                        heightScreen={dimensions.height}/>
            <MapLeaflet/>
            {/* <ModalDetails   openModalDetails={openModalDetails} 
                            handleClose={setOpenDetails} 
                            selectedCourse={selectedCourse}/>
            <ModalProfile   profileMessage={profileMessage}
                            openModalProfile={openModalProfile} 
                            handleClose={setOpenProfile} /> */}
            <OptionsFood choosePanel={choosePanel} left={left} setOpenLeft={setOpenLeft}/>
            <SocialNetsButton />
            {/* <FloatingButton setOpenProfile={setOpenProfile}/> */}
        </div>
    )
}

export default Home;
