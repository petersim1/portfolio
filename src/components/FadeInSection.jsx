import React,{useRef,useState,useEffect} from 'react'
import '../styles/FadeInSection.css'

function FadeInSection(props) {

    const domRef = useRef();
    
    const [isVisible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        // In your case there's only one element to observe:     
        if (entries[0].isIntersecting) {
        
          // Not possible to set it back to false like this:
          setVisible(true);
          
          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      });
      
      observer.observe(domRef.current);
      let observerRefValue = domRef.current;
      
      return () => observer.unobserve(observerRefValue);
    }, []);
  
    return (
        <div ref={ domRef } className={ isVisible ? 'fade-in is-visible' : 'fade-in' }>
            {props.children}
        </div>);
  };

export default FadeInSection