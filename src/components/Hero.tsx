import { Navbar } from './Navbar';

export default function MaskedVideoHero() {
    return (
        <>
            <main id="hero" className="h-screen w-full bg-white flex items-center justify-center">
                <div className="relative w-full h-full md:w-[98%] md:h-[94%] border-none md:rounded-tl-[3rem] md:rounded-br-[3rem] overflow-hidden shadow-2xl">
                    <video className="absolute inset-0 w-full h-full object-cover" src="DN&TITO_Template.mp4" autoPlay loop muted />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

                    <div className="relative z-10 h-full w-full flex flex-col justify-between p-6 md:p-12">
                        <Navbar />

                        <div className="flex flex-col items-center justify-center flex-1">
                            <h1
                                className="text-4xl md:text-6xl lg:text-7xl text-[#e6c07b] text-center font-serif font-normal tracking-wide leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] [text-shadow: 0_1px_0_rgba(255,255,255,0.15), 0_3px_6px_rgba(0,0,0,0.45)]">
                                We are getting married
                            </h1>
                            <p className="text-xl md:text-xl lg:text-3xl text-[#e6c07b] text-center font-serif font-normal tracking-wide leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] [text-shadow: 0_1px_0_rgba(255,255,255,0.15), 0_3px_6px_rgba(0,0,0,0.45)]">Dominion & Tito</p>
                        </div>

                        <div
                            style={{ clipPath: "url(#custom-clip)" }}
                            className="bg-white absolute top-[-0.9px] right-[-0.2px] w-[25rem] md:w-[30rem] h-[5rem] md:h-[6rem] flex items-start justify-center text-black shadow-lg z-100"
                        >
                            {/* <h2 className='text-xl md:text-2xl pl-20 fairplay font-semibold tracking-widest text-gray-800'>DOMINION&TITO</h2> */}
                            <img src="/DTLogo.png" className='pl-20 h-[2.3rem] md:h-[2.8rem] object-contain ' alt="Dominion and Tito Logo" />
                        </div>

                        <div
                            style={{ clipPath: "url(#custom-clip-2)" }}
                            className="bg-white absolute bottom-[-0.9px] left-[-0.2px] w-[25rem] md:w-[30rem] h-[5rem] md:h-[6rem] flex flex-col items-center justify-end gap-1 shadow-lg"
                        >
                            <h3 className='text-2xl md:text-3xl fairplay font-semibold tracking-wide text-gray-900'>February 28, 2026</h3>
                            <p className='text-xs md:text-sm tracking-widest text-gray-600 uppercase'>Ogun State, Nigeria</p>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
