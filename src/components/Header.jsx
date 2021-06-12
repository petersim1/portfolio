import React,{useState,useEffect} from 'react'
import '../styles/Header.css'




function Header() {
    

    const [navBG,setNavBG] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setNavBG(window.scrollY >= 100)
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
          }
    })

    const [tog,setTog] = useState(false)

    const handleToggle = () => {
        let obj = document.querySelector('nav .header-list')
        obj.style['display'] = (!tog ? 'flex' : 'none')
        document.querySelector('nav > *').className = (!tog ? 'fixed-header' : (navBG ? 'fixed-header' : 'transparent-header'))
        setTog(!tog)
    }

    const [curSection,setCurSection] = useState('about')

    useEffect(() => {

        let sectionHeights = {}
        let runNum = 0

        document.querySelectorAll('section').forEach(item => {
            sectionHeights[item.id] = item.scrollHeight + runNum
            runNum += item.scrollHeight
        })

        const handleScroll = () => {
            let prevHeight = 0;
            let curScroll;
            for (var sec in sectionHeights) {
                curScroll = window.scrollY
                if (curScroll >= prevHeight -40 && curScroll < sectionHeights[sec]-40 && curScroll + window.innerHeight < document.body.offsetHeight) {
                    setCurSection(sec)
                    break
                } else {
                    if (curScroll + window.innerHeight >= document.body.offsetHeight) {
                        setCurSection('contact')
                        break
                    }
                }
                prevHeight = sectionHeights[sec]
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
          }
    })

    function highlighter(sectionID) {
        return curSection !== sectionID ? 'header-item' : 'header-item highlight'
    }

    return (
        <nav>
            <div className={navBG || tog ? 'fixed-header' : 'transparent-header'}>
                <button id='toggle-icon' onClick={() => handleToggle()}><i className="fas fa-bars"></i></button>
                <ul className='header-list'>
                    <li className={highlighter('about')}><a href="#about">About</a></li>
                    <li className={highlighter('education')}><a href="#education">Education</a></li>
                    <li className={highlighter('skills')}><a href="#skills">Skills</a></li>
                    <li className={highlighter('projects')}><a href="#projects">Projects</a></li>
                    <li className={highlighter('contact')}><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
    
}

export default Header