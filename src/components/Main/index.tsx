import { Embed } from './Embed'
import { Logo } from './Logos'
import Image from 'next/image'
import DinheiroImg from '../../../public/casual-life-3d-wad-of-money-coins 2.png'

export function Main() {
    return (
        <>
            <div
                id="Main"
                className="w-full text-purple-store pt-40 pb-20 min-h-screen"
            >
                <div className="w-5/6 flex flex-col mx-auto items-center md:flex-row">
                    <div className="w-full flex flex-col items-center gap-4 text-center md:w-[41%] md:block md:text-start md:gap-0">
                        <h1 className="text-purple-store opacity-10 text-6xl md:text-[7vw] font-bold md:absolute md:leading-3">
                            UMA NOVA
                        </h1>
                        <h2 className="uppercase text-2xl ml-4 font-bold pb-2 md:mt-2">
                            FORMA de revender iPhones com segurança e aumentar
                            seus{' '}
                            <span className="relative block w-24 mx-auto md:mx-0">
                                {' '}
                                <div className="bg-red-600 rounded-xl w-[80%] ml-[10%] p-[1.5px] absolute bottom-0"></div>
                                Lucros
                            </span>
                        </h2>
                        <div className="w-full h-[1px] bg-black opacity-20"></div>
                        <p className="ml-4">
                            Esqueça a compra de produtos importados sem
                            procedência, encomende{' '}
                            <b>produtos 100% nacionais</b> e lacrados, comprados
                            nas maiores lojas do Brasil!
                        </p>
                    </div>
                    <div className="w-full h-auto ml-12 mt-12 md:w-1/2 md:mt-0">
                        <Image
                            src={DinheiroImg}
                            quality={100}
                            placeholder="blur"
                            layout="responsive"
                            alt="Imagem de Dinheiro"
                        ></Image>
                    </div>
                </div>
                <Logo /> {/*LOGOS DAS LOJAS / IMPORTANDO DA PASTA LOGOS*/}
                <Embed />
            </div>
        </>
    )
}
