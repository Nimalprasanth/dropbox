import './Products.css'
import X1 from '../../Assets/Images/x1.png'
import X2 from '../../Assets/Images/x2.png'
import X3 from '../../Assets/Images/x3.png'
import X4 from '../../Assets/Images/x4.png'
import X5 from '../../Assets/Images/x5.png'
import X6 from '../../Assets/Images/x6.png'
import X8 from '../../Assets/Images/x8.png'
import X7 from '../../Assets/Images/x7.png'


const Products =()=>{
    return(
        <div className='Prodiv'>
            <h1 className='Zo'>Products</h1>
        <div className='Mainpro'>
            <div className='Go1'>
            <div className='Z1'>
                <img className='Y1' src={X1} alt=""/><br/>
                <h3 className='Head'>Dropbox</h3><br/>
                <h4 className='Line'>Store, share, and access files across devices.</h4>
            </div><br/>
            <div className='Z1'>
                <img className='Y1' src={X2} alt=""/><br/>
                <h3 className='Head'>Replay</h3><br/>
                <h4 className='Line'>Review and approve videos faster.</h4>
            </div><br/>
            <div className='Z1'>
                <img className='Y1' src={X3} alt=""/><br/>
                <h3 className='Head'>Backup</h3><br/>
                <h4 className='Line'>Automatically Backup your devices.</h4>
            </div><br/>
            <div className='Z1'>
                <img className='Y1' src={X4} alt=""/><br/>
                <h3 className='Head'>Capture</h3><br/>
                <h4 className='Line'>Create screen recordings and videos.</h4>
            </div><br/>
            </div>

            <div className='Go2'>
            <div className='Z1'>
                <img className='Y1' src={X5} alt=""/><br/>
                <h3 className='Head'>Dropbox</h3><br/>
                <h4 className='Line'>Store, share, and access files across devices.</h4>
            </div><br/>
            <div className='Z1'>
                <img className='Y1' src={X6 } alt=""/><br/>
                <h3 className='Head'>Replay</h3><br/>
                <h4 className='Line'>Review and approve videos faster.</h4>
            </div><br/>
            <div className='Z1'>
                <img className='Y1' src={X8} alt=""/><br/>
                <h3 className='Head'>Backup</h3><br/>
                <h4 className='Line'>Automatically Backup your devices.</h4>
            </div><br/>
            <div className='Z1'>
                <img className='Y1' src={X7} alt=""/><br/>
                <h3 className='Head'>Capture</h3><br/>
                <h4 className='Line'>Create screen recordings and videos.</h4>
            </div><br/>
            </div>

        </div>
        </div>
    )
}
export default Products;