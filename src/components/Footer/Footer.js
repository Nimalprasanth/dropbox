import './Footer.css'
import So1 from '../../Assets/Images/so1.png'
import So2 from '../../Assets/Images/so2.png'
import So3 from '../../Assets/Images/so3.png'
import So4 from '../../Assets/Images/so4.png'
import So5 from '../../Assets/Images/so5.png'



function Footer(){
    return(
        <div className='Footermain'>
        <div className='Footer'>
            <div className='Icon'>
                <img className='O' src={So1}/>
            </div>
            <div className='Icon'>
                <img className='O' src={So2}/>
            </div>
            <div className='Icon'>
                <img className='O' src={So3}/>
            </div>
            <div className='Icon'>
                <img className='O' src={So4}/>
            </div>
            <div className='Icon'>
                <img className='O' src={So5}/>
            </div>
        </div>
        <div className='Menuitem'>
            <h4>Home</h4>
            <h4>News</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Our Team</h4>
        </div>
        <h4 className='Foo'>Copyright @2024; Designed by Nimal</h4>







        </div>
    )
}
export default Footer;