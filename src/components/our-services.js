import React, { useLayoutEffect, useRef, useState } from "react";
import './our-services.css'
import {Card1, Card2, Card3} from './Card'

export const OurServices = () => {
    
    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false
    });

    const ourRef = useRef(null),
        twoRef = useRef(null);

    useLayoutEffect(() => {

        const topPos = element => element.getBoundingClientRect().top;

        // The current postions of the refs
        const divPos = topPos(ourRef.current);
        const div2Pos = topPos(twoRef.current);

        const onScroll = () => {
            // The window scroll
            const scrollPos = window.scrollY;

            /* if the components pos is less than the scroll pos
                will change itemOne and itemTwo, which will change
                the classes.
            */
            if (divPos < scrollPos) {
                doShow(state => ({ ...state, itemOne: true }));
            }
            else {
                doShow(state => ({ ...state, itemOne: false }));
            }
            
            if (div2Pos < scrollPos - 300) {
                doShow(state => ({ ...state, itemTwo: true }));
            }
            else {
                doShow(state => ({ ...state, itemTwo: false }));
            }

        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })


    return (
        <div id="Our-services">
            <section>
                {/* Will add the .hide class if scroll pos is not in range
                    same for Card-Group */}
                <div className={show.itemOne ? 'Description-container' : 'hide Description-container'} id="Learn more" ref={ourRef}> 
                    <div className="Left-Description-container"> </div>

                    <div className="Right-Description-container">
                        <ul> 
                        <h1> Our Services </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  </p>
                        </ul>
                    </div>
                </div>


            </section>
            <div className={show.itemTwo ? 'Card-group' : 'hide Card-group'} id="Learn more" ref={twoRef}>
                <Card1 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" header="Learn Coding"/>
                <Card2 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" header="Take Our Courses"/>
                <Card3 thisId="LastCard" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" header="Join the Community"/>
            </div> 
      </div>

      
    )
}
