
import HeroImage from '../images/undraw_cooking_p7m1.svg';

const Hero = () => {
    return (
        <section className="hero-section">
            
            <img src={HeroImage} alt='people cookin' className="hero-img"/>
            
            <div className='description'>
                <div>
                    <h1 className='hero-title'>Food Recipe</h1>
                    <p>Welcome to FoodRecipe, find your perfect Hida baci food recipe.</p>
                </div>
            </div>
        </section>
        
    )
}

export default Hero;