import './Home.css'
import Big from '../../Assets/Images/big1.png'
import I1 from '../../Assets/Images/img1.png'
import I2 from '../../Assets/Images/img2.png'
import I3 from '../../Assets/Images/img3.png'
import I4 from '../../Assets/Images/img4.png'
import I5 from '../../Assets/Images/img5.png'
import I6 from '../../Assets/Images/left.png'
import I7 from '../../Assets/Images/right.png'
import { useNavigate } from 'react-router-dom'





const Home=()=>{
    const navigate = useNavigate();
    const Go=()=>{
        navigate('/Plan')
    }
    return(
    <div className='Main'>
        <div className='Clr'>
        <h1 className='Move'>Join over 700 million registered</h1>
        <h1 className='Move1'>users who trust Dropbox</h1>
        <p className='Para1'>Easy to use, reliable, private, and secure. It’s no wonder Dropbox is the choice for storing and sharing your</p><br/>
        <p className='Para2'>most important files.</p>
        <button onClick={Go} className='Plan'>Find Your Plan</button><br/><br/>
        <div className='Box'>
        <label className='One' for="email" ></label>
        <input type="text ans number" placeholder="enter your email"></input>
        <button className='Two'>Sign up For Free</button>
        </div>
        </div>
        <div className='Cool'>
            
        </div>
        <div>
            <img src={Big} className='Main-img' alt={Big}/>
        </div><br/> 
        <h2 className='What'>What can you do with Dropbox?
        </h2><br/><br/>
        <div className='Card'>
            <div className='Main-box'>
            <img className='First' src={I1}/><br/><br/>
            <h1>Store and protect your files</h1><br/>
            <h4>Get the storage you and your teams need with security features like file recovery, password protection, watermarking, and viewer history.</h4>
            </div>
            <div className='Main-box'>
            <img className='First' src={I2}/><br/><br/>
            <h1>Stay in control of shared content</h1><br/>
            <h4>Trackable links show when someone has opened a shared file and how long they’ve engaged with it. Plus, you can turn off access for any individual at any time without affecting others’ permissions.</h4>
            </div>
            <div className='Main-box'>
            <img className='First' src={I3}/><br/><br/>
            <h1>Collaborate on your work</h1><br/>
            <h4>Directly edit PDFs and use video tools to streamline feedback and approval processes.</h4>
            </div>
            <div className='Main-box'>
            <img className='First' src={I4}/><br/><br/>
            <h1>Manage your business</h1><br/>
            <h4>Automate manual processes with tools like eSignature templates, which let you reuse documents in seconds.</h4>
            </div>
        </div><br/>
            <h1 className='Small'>New beta product</h1><br/>
            <div className='Big'>
            <h1 className='Pa1'>Shortcut your workday with Dropbox Dash</h1><br/>
            <h3 className='Pa2'>Quickly find, organize, and share important content all in one place with the AI universal search tool built to save you time, so you can focus on the work that matters most.</h3><br/>
            <button className='Small2'>Get Dash Beta Free--</button>
        </div>
        <div className='Bi'>
        <img className='Sm' src={I5}/>
        </div>
        <div>
        <h1 className='Ad'>How will you use Dropbox?</h1>
        </div>
        <div className='Fl'>
        <div className='Boxx'>
            <img className='Le' src={I6}/><br/>
            <h1 className='Ni'>For work</h1><br/>
            <h4 className='Mal'>Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe—all in one place.</h4>
        </div>
        <div className='Boxx'>
            <img className='Le' src={I7}/><br/>
            <h1 className='Ni'>For personal use</h1><br/>
            <h4 className='Mal'>Keep everything thats important to you and your family shareable and safe in one place. Back up files in the cloud, share photos and videos, and more.</h4>
        </div>
        </div>
        <div className='Co'>
            <h1>Cloud storage you can count on</h1>
        </div>
        <div className='Flex'>
            <div className='Cont'>
                <h1 className='C1'>1B+</h1><br/>
                <h3 className='C2'>mobile app downloads</h3><br/>
                <h5 className='C3'>with Editors’ Choice Awards from the Google Play and Apple App Store.</h5>
            </div>
            <div className='Cont'>
                <h1 className='C1'>575k+</h1><br/>
                <h3 className='C2'>teams globally</h3><br/>
                <h5 className='C3'>use Dropbox to share work, safeguard content, and grow their business.</h5>
            </div>
            <div className='Cont'>
                <h1 className='C1'>4.5B</h1><br/>
                <h3 className='C2'>connections and counting</h3><br/>
                <h5 className='C3'>created through Dropbox file sharing.</h5>
            </div>
        </div>
        
    </div>
    )
}
 export default Home ;