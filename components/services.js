import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import CreditScoreRoundedIcon from '@mui/icons-material/CreditScoreRounded';

export default function Services() {
    return (
        <div className="bg-gray-200">
            <div className="max-w-5xl mx-auto px-5 md:py-10 py-5">
                <div className="grid grid-flow-col gap-2">
                    <div className="rounded col-span-2 row-span-2 group bg-gray-300/20">
                        <div className="flex w-full h-full py-2 text-center md:text-sm text-xs text-green-800 group-hover:text-green-800/50 duration-200 flex-col space-y-1 justify-center items-center">
                            <div className='bg-gray-300/50 rounded-full p-2 flex items-center justify-center'>
                                <FastForwardRoundedIcon fontSize='md:large'/>
                            </div>
                            <p>Super Fast handling</p>
                        </div>
                    </div>
                    <div className="bg-gray-300/20  rounded col-span-2 row-span-1 md:col-span-1 group">
                        <div className="flex  w-full h-full py-2 px-2 text-left md:text-sm text-xs text-green-800 group-hover:text-green-800/50 duration-200 items-center">
                            <div className='bg-gray-300/50 rounded-full p-2 mr-3 flex items-center justify-center'>
                                <ShieldRoundedIcon fontSize='md:large'/>
                            </div>
                            <p>Secured Data</p>
                        </div>
                    </div>
                    <div className="bg-gray-300/20  rounded col-span-2 md:col-span-1 row-span-1 group">
                        <div className="flex w-full h-full py-2 px-2 text-left md:text-sm text-xs text-green-800 items-center group-hover:text-green-800/50 duration-200">
                            <div className='bg-gray-300/50 rounded-full p-2 mr-3 flex items-center justify-center'>
                                <CurrencyExchangeRoundedIcon fontSize='md:large'/>
                            </div>
                            <p>Money-back guarantee</p>
                        </div>
                    </div>
                    <div className="bg-gray-300/20  rounded col-span-2 row-span-2 group">
                        <div className="flex w-full h-full py-2 text-center md:text-sm text-xs text-green-800 flex-col space-y-1 justify-center items-center group-hover:text-green-800/50 duration-200">
                            <div className='bg-gray-300/50 rounded-full p-2 flex items-center justify-center'>
                                <CreditScoreRoundedIcon fontSize='md:large'/>
                            </div>
                            <p>Super secure payment system</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}