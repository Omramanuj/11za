import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import './Home.css';

const HomePage = () => {

  const navigate = useNavigate(); 

  const handleGetStartedClick = () => {
    navigate('/login'); 
  };

  return (
    <div className="relative h-screen bg-cover bg-center flex flex-col" style={{backgroundImage: "url('https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/working-on-plans-in-board-room-scaled.jpg')"}}>

      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <Navbar />

      <div className="flex-grow flex items-center pl-20 z-10">
        <div className="text-left text-white">
          <h1 className="title text-5xl font-bold mb-6" style={{fontFamily: "'Montserrat', sans-serif"}}>Boost Your Business </h1>
          <p className="text-2xl w-4/5 mb-10" style={{fontFamily: "'Open Sans', sans-serif"}}>Take your business to next level  with Whatsapp.</p>
          <button onClick={handleGetStartedClick} className="bg-green-700 py-3 px-4 text-[1.2rem] rounded-lg hover:bg-green-600 transition duration-300" style={{fontFamily: "'Roboto', sans-serif"}}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
