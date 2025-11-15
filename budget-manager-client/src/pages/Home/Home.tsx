import Features from '../../components/ui/Features';
import HowItWorks from '../../components/ui/HowItWorks';
import Hero from './components/Hero';
// import Features from '../components/Features';
// import HowItWorks from '../components/HowItWorks';
// import Testimonials from '../components/Testimonials';


function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
    </div>
  );
}

export default Home;