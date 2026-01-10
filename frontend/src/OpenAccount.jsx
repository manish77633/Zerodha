import { useNavigate } from 'react-router-dom'; // 1. useNavigate import karo
function OpenAccount() {
    const navigate = useNavigate(); // 2. Hook initialize karo

    function handleSignUp() {
        // 3. User ko /signup route par bhejo
        navigate("/signup"); 
    }
	return ( 
		<>


		      {/* <section className="w-full flex items-center justify-center mt-8 bg-white"> */}
            <div className="w-full flex flex-col items-center justify-center w-full sm:w-full">
                
                         <div className="flex flex-col items-center text-center w-full px-6 md:px-0 max-w-2xl">
                    <h1 className='text-2xl md:text-3xl font-semibold text-gray-700 leading-tight '>
                        Invest in everything
                    </h1>
                    
                     <p className='text-lg sm:text-lg md:text-lg text-gray-500 mt-3 md:mt-2 leading-relaxed'>

                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.

                    </p> 
                    
                    {/* BUTTON: Mobile pe text-base aur kam padding, Desktop pe text-xl aur zyada padding */}
                    <button
                    onClick={handleSignUp} // 4. onClick handler lagao
                    className='mt-8 md:mt-12 bg-[#387ed1] hover:bg-gray-900 text-white 
                        text-base md:text-xl 
                        px-6 md:px-10 
                        py-2 md:py-3 
                        rounded-sm font-semibold transition-all shadow-md active:scale-95 
                        w-auto'>
                        Sign up for free
                    </button>
                </div>
                
            </div>
        {/* </section> */}
				      
		</>
	 );
}

export default OpenAccount