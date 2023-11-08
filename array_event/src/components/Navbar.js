import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="  w-2xl flex  justify-center p-3 bg-gradient-to-r from-slate-500 from-10% via-zinc-500 via-30% to-neutral-500 to-90%">
        <div className="flex items-center">
          <img
            src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1698473372~exp=1698473972~hmac=879f388b70bd7b5217f2f8d10073f450963c4fa2242bfa680ca5a18148945b47" 
            alt="Logo"
            className="h-8 w-8 mr-2 rounded-full" 
          />
          <h1 className="text-amber-200 text-3xl ">Event Dashboard</h1>
        </div>
      </div>

    
      
    </nav>
  );
  
};

export default Navbar;