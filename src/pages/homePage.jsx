import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop destination for all things awesome.</p>
      </header>
      <main>
        <button>Learn More</button>
        <button>Contact Us</button>
      </main>
      <Link to="/login">Login</Link> 
    </div> 

  );
}


