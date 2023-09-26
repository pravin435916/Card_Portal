import React from 'react'
import Card from './Card'
import './home.css'
import { TbMoneybag } from 'react-icons/tb';
import { FiDownload } from 'react-icons/fi';
import { AiFillCreditCard } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function Home() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <>
<div className="container" >
    <div className="first-box">
        <span id='t1'> <TbMoneybag/> Start Saving Your Money</span>
        <animated.div className="text" style={fadeIn}>
        <span>Payments</span>
        <span>Have Never</span>
        <span>Been Easier</span>
        </animated.div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore et vel delectus repellendus excepturi consequatur porro inventore blanditiis minus, laudantium illum error, eaque voluptas adipisci dignissimos fugit. Laborum ipsum incidunt exercitationem ab?</p>
        <span id='own'>Make Your Own Card <AiFillCreditCard  id='dwl'/></span>
        <div className="btns">
        <Link to='/MakeCard'><button id='btn1'>Get Started</button></Link> 
            <button id='btn2'>Download App <FiDownload/></button>
        </div>
</div>
    <animated.div className="card-co" style={fadeIn}>
    <div className="card1"  >
    <Card user={'pravin nandankar'} date={'11/27'} />
    </div>
    <div className="card2">
    <Card user={'Vansh Kolte'} date={'12/28'}/>
    </div>
    </animated.div>
      
 </div>
    </>
  )
}

export default Home