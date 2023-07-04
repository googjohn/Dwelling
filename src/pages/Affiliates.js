import Affiliates1 from '../assets/images/affiliates/AYALALAND.png'
import Affiliates2 from '../assets/images/affiliates/VISTALAND.png'
import Affiliates3 from '../assets/images/affiliates/ROBINSONSLAND.png'
import Affiliates4 from '../assets/images/affiliates/CENTURY.png'
import Affiliates5 from '../assets/images/affiliates/SHANG.png'
import Affiliates6 from '../assets/images/affiliates/DMCI.png'
import Affiliates7 from '../assets/images/affiliates/SMDC.png'
import Affiliates8 from '../assets/images/affiliates/FILINVEST.png'
import Affiliates9 from '../assets/images/affiliates/MOLDEX.png'
import Affiliates10 from '../assets/images/affiliates/ROCKWELLLAND.png'
import Affiliates11 from '../assets/images/affiliates/MEGAWORLD.png'
import Affiliates12 from '../assets/images/affiliates/PRESELLO.jpg'
import POWEREDBY1 from '../assets/images/affiliates/VSCODE.png'
import POWEREDBY2 from '../assets/images/affiliates/JAVASCRIPT.png'
import POWEREDBY3 from '../assets/images/affiliates/TAILWIND.png'
import POWEREDBY4 from '../assets/images/affiliates/FLOWBITE.png'
import POWEREDBY5 from '../assets/images/affiliates/REACT.png'
import POWEREDBY6 from '../assets/images/affiliates/NODEJS.png'
import POWEREDBY7 from '../assets/images/affiliates/MONGODB.png'


export const Affiliates = () => {
    return (
        <>
            <div id='affiliates' className='relative mx-auto container text-left justify-center py-8'>
                <h3 className=' text-3xl font-semibold text-center pt-9'>Our Affiliates</h3>
                <div className='flex flex-wrap content-center '>
                    <div id="grid-affiliates" className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-4 pt-4 pb-4'>
                        <div>
                            <a href="https://filinvestland.com" target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates8} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.vistaland.com.ph' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates2} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.robinsonsland.com' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates3} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.centuryproperties.ph' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates4} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.shangproperties.com' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates5} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.dmcihomes.com' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates11} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://smdc.com' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates7} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.moldexrealty.ph' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates9} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.ayalaland.com.ph/' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates1} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.robinsonsland.com' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates10} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.megaworldcorp.com/' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates6} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.presello.com/' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={Affiliates12} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <h3 className=' text-3xl font-semibold text-center pt-9 pb-8'>Powered By</h3>

                <div className='flex flex-wrap content-center'>
                    <div id="grid-power" className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto pb-4 gap-4">
                        <div>
                            <a href='https://code.visualstudio.com/' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={POWEREDBY1} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://developer.mozilla.org/en-US/docs/Web/javascript' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={POWEREDBY2} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={POWEREDBY3} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://flowbite.com/' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={POWEREDBY4} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://react.dev/' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={POWEREDBY5} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://nodejs.org/en' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={POWEREDBY6} alt="" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.mongodb.com/' target='_blank' rel='noreferrer noopener'>
                                <img className='h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300' src={POWEREDBY7} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
