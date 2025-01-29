export default function NavSlider(){
  <div className="fixed w-full h-screen bg-[#00000080] z-[10] border-[3px] border-red-500">
  <div className="bg-white flex flex-col w-[300px] h-screen">
  <Link to="/" className="text-accent font-bold text-xl hover:border-b border-b-accent">Home</Link >
      <Link to="/products" className="text-accent font-bold text-xl hover:border-b border-b-accent">Products</Link >
      <Link to="/about" className="text-accent font-bold text-xl hover:border-b border-b-accent">About Us</Link >
      <Link to="/contact" className="text-accent font-bold text-xl hover:border-b border-b-accent">Contact Us</Link >
      <Link to="/cart" className="text-accent font-bold text-xl hover:border-b border-b-accent">Cart</Link ></div></div>
}