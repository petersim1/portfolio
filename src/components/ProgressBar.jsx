import React,{useState,useEffect, useRef} from 'react'


const delay = 10;
const totTime = 750;

function ProgressBar(props) {

    const incrementVal = props.maxVal*delay/totTime

    const [level,setLevel] = useState(0);
    const [isVis,setVis] = useState(false)
    const intervalID = useRef();
    const domRef = useRef();

    useEffect(() => {

        // observe for when progress-bar is in view, once it is, execute the bar fill.
        // somewhat repetitive (its parent element already has a fade-in effect),
        // but this gets rid of parent-child communication.

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
            
              setVis(true);
              
              observer.unobserve(domRef.current);
            }
          });

        intervalID.current = setInterval(() => {
            if (level < props.maxVal && isVis) {
                setLevel(level + incrementVal)
            }
            clearInterval(intervalID.current)
        }, delay);

        observer.observe(domRef.current); // keep observing if not seen.

        let curInterval = intervalID.current; // needed for knowing current interval
        let observerRefValue = domRef.current; // needed for knowing current reference

        return () => {
            clearInterval(curInterval); // stop interval
            observer.unobserve(observerRefValue); // stop observing
        };
    },);
  
    return (
        <div ref={ domRef } className='progress'>
            <div className='progress-bar' role="progressbar" style={{width: level + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    );
  };

export default ProgressBar