import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Jumbotron = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const totalSlides = 2;

  const leftSlide = () => {
    if (slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
    } else {
      setSlideNumber(totalSlides - 1);
    }
  };

  const rightSlide = () => {
    if (slideNumber < totalSlides - 1) {
      setSlideNumber(slideNumber + 1);
    } else {
      setSlideNumber(0);
    }
  };

  const Slide001 = () => {

    const viaLogo = "https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg"
    const sinceLabel = "Innovando desde 2001"
    const sloganLabel = "Aplicaciones empresariales y servicios de TI a través de herramientas digitales de última generación."
    const orbisLogo = "https://www.via-asesores.com/logos/logo_horizontal/orbistechnology_logo.svg"
    const bgImage = "https://d5tnfl9agh5vb.cloudfront.net/uploads/2023/09/dia-de-los-programadores.jpg"

    return (
      <div className='rounded-md border-t flex p-2'>
        <div className="flex flex-col items-center">
          <img src={viaLogo} className="h-16 " alt="VIA Asesores" />
          <div className="divide-y divide-gray-300/50 flex items-center flex-col">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <h1 className="text-2xl md:text-4xl text-center">{sinceLabel}</h1>

              <p className="text-md md:text-xl justify-center text-center">{sloganLabel}</p>
            </div>
            <div className="pt-8 text-base font-semibold leading-7 self-center inlin">
              <img src={orbisLogo} className="w-48 place-self-center" alt="Orbis Technology" />
            </div>
          </div>
        </div>
        <div className="collapse md:visible md:my-auto">
          <img src={bgImage} className="h-0 md:h-[90%] md:w-full invisible md:visible rounded-md shadow-sm" alt="VIA Asesores" />
        </div>
      </div>
    )
  };

  const Slide002 = () => {
    const bgImage = "https://i.blogs.es/a2066e/programando/1366_2000.jpg"
    const titleLabel = 'Administración y Finanzas'

    const productos = [
      { area: 'Administración y Finanzas', nombre: 'Smart Analytics', descripcion: 'Genere dashboard gerenciales en solo dos horas para la toma de decisiones.', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartanalytics_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartanalytics', visible: true },
      { area: 'Administración y Finanzas', nombre: 'Smart ERP', descripcion: 'Gestione los procesos administrativos financieros integrados, haciendo más eficiente la gestión de su negocio.', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smarterp_horizontal_logo.svg', url: 'https://qa.via-asesores.com/sp_login', visible: false },
      { area: 'Administración y Finanzas', nombre: 'Smart Operation', descripcion: 'Administre y controle las tareas asignadas al personal (interno o externo) fuera de la empresa y control del inventario utilizado.', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartoperation_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartoperation', visible: false },
      { area: 'Administración y Finanzas', nombre: 'Smart Buy', descripcion: 'Reduzca costos en la adquisición de productos y servicios, utilizando métodos de subasta inversa.', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartbuy_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartbuy', visible: false }
    ]

    return (
      <div className='rounded-md border-t p-2 flex'>
        <div className="flex flex-col">
          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
            <h1 className="text-2xl md:text-4xl text-center">{titleLabel}</h1>
          </div>
          {productos &&
            productos.map((producto, idxProducto) => {
              return (
                <div key={'dv' + idxProducto} className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                  <div className='border-t'>
                    <a href={producto.url} key={idxProducto} className="h-12 p-1 m-1 rounded-md border-md hover:drop-shadow-lg">
                      <img src={producto.logo} className="h-full w-full max-h-12 max-w-32" alt={producto.nombre} />
                    </a>
                  </div>
                  <div className="col-span-3 space-y-6 my-auto text-base leading-7 text-gray-600">
                    <p className="text-md md:text-xl">{producto.descripcion}</p>
                  </div>
                </div>

              )
            })
          }
        </div>
        <div className="collapse lg:visible lg:my-auto lg:h-full lg:items-center">
          <img src={bgImage} className="h-0 lg:h-full lg:w-96 lg:pt-4 invisible lg:visible rounded-md shadow-sm" alt="VIA Asesores" />
        </div>
      </div>
    )
  };

  const Slides = ({ position }) => {
    if (position !== undefined && position !== null) {
      const steps = [Slide001, Slide002];
      const Step = steps[position];
      return (
        <>
          <Step />
        </>
      );
    }
    return null;
  };

  return (
    <>
      <div className="px-10 flex flex-row md:h-[55vh] ">
        <div className="flex justify-center items-center cursor-pointer group" onClick={leftSlide}>
          <ChevronLeftIcon className="w-12 h-24 group-hover:text-green-600" />
        </div>
        <div className="relative pt-6 pb-2 sm:mx-auto sm:max-w-lg md:max-w-4xl lg:max-w-screen-xl sm:px-10 md:flex md:flex-row gap-4 h-1/3 md:h-[55vh] ">
          <Slides position={slideNumber} />
        </div>
        <div className="flex justify-center items-center cursor-pointer group" onClick={rightSlide}>
          <ChevronRightIcon className="w-12 h-24 group-hover:text-green-600" />
        </div>
      </div>
    </>
  );
};

export default Jumbotron;

