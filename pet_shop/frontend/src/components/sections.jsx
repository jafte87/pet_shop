import './sections.css'
import dryfood from '../assets/dryfood.jpg';
import tuna from '../assets/tuna.jpg';
import toy from '../assets/toy.jpg';
import main from '../assets/main.jpg';
import rope from '../assets/rope.jpg';
import outfits from '../assets/outfits.jpg';

function Sections() {
    return(
        <div className='products-sec'>
            <div className='sec-box'>
                <img src={dryfood} alt="dryfood" />
                <p>Dry Food</p>
            </div>
            <div className='sec-box'>
                <img src={tuna} alt="tuna" />
                <p>Canned goods</p>
            </div>
            <div className='sec-box'>
                <img src={toy} alt="toy" />
                <p>Toys</p>
            </div>
            <div className='sec-box'>
                <img src={main} alt="animal care" />
                <p>Animal care</p>
            </div>
            <div className='sec-box'>
                <img src={rope} alt="rope" />
                <p>Gadgets</p>
            </div>
            <div className='sec-box'>
                <img src={outfits} alt="" />
                <p>Outfits</p>
            </div>
        </div>
    );
}

export default Sections;