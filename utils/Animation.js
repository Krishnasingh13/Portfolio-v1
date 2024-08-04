import { gsap } from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';

const Animation = () => {
    useGSAP(()=>{
        const timeLine = gsap.timeline()
        timeLine.to(document.querySelectorAll('.home-entry-2'),{
            opacity : 1,
            y:'0px',
            duration : 1,
            delay : 1
        }).to(document.getElementById('navbar'), {
          y: '0px',
          duration : 1
        }).to(document.querySelectorAll('.home-entry-3'),{
            opacity : 1,
            y:'0px',
            duration : 1})
      },[])


      return <div></div>
}

export default Animation