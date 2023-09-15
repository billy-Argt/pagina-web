const Productos = () => {
  const productos = [
    { area: 'Administración y Finanzas', nombre: 'Smart Analytics', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartanalytics_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartanalytics', visible: true },
    { area: 'Administración y Finanzas', nombre: 'Smart ERP', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smarterp_horizontal_logo.svg', url: 'https://qa.via-asesores.com/sp_login', visible: false },
    { area: 'Administración y Finanzas', nombre: 'Smart Operation', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartoperation_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartoperation', visible: false },
    { area: 'Administración y Finanzas', nombre: 'Smart Buy', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartbuy_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartbuy', visible: false },
    { area: 'Servicios de TI', nombre: 'Smart Monitor', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartmonitor_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartmonitor', visible: false },
    { area: 'Servicios de TI', nombre: 'Smart Project', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartproject_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartproject', visible: false },
    { area: 'Servicios de TI', nombre: 'Smart Outsourcing', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartoutsourcing_horizontal_logo.svg', url: 'https://www.via-asesores.com/smartoutsourcing', visible: false },
    { area: 'Servicios de TI', nombre: 'Smart Developer', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartdeveloper_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartdeveloper', visible: false },
    { area: 'Procesos y Recaudación', nombre: 'Smart Process', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartprocess_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartprocess', visible: false },
    { area: 'Procesos y Recaudación', nombre: 'My City', logo: 'https://www.via-asesores.com/logos/logo_horizontal/mycity_horizontal_logo.svg', url: 'https://qa.mycitygt.com', visible: false },
    { area: 'Procesos y Recaudación', nombre: 'Smart Collector', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartcollector_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartcollector', visible: false },
    { area: 'Procesos y Recaudación', nombre: 'Smart CE', logo: 'https://www.via-asesores.com/logos/logo_horizontal/smartce_horizontal_logo.svg', url: 'https://qa.via-asesores.com/smartce', visible: false }

  ]

  const areas = [...new Set(productos.map((item) => item.area))];

  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 mt-8 p-8 md:px-12">
      <div className="font-semibold text-white">Nuestros Productos</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {areas.map((area, idxArea) => {
          return (
            <div key={idxArea} className="text-white">
              <h2 className="text-2xl font-semibold mb-2">{area}</h2>
              <div className="grid grid-cols-2 gap-2">
                {productos
                  .filter((prod) => prod.area === area)
                  .map((producto, idxProducto) => {
                    return (
                      <a
                        href={producto.url}
                        key={idxProducto}
                        className="flex items-center p-2 rounded-md border border-white hover:bg-teal-500 hover:text-white hover:shadow-lg"
                      >
                        <img src={producto.logo} className="h-10 w-10 mr-2" alt={producto.nombre} />
                        <span className="text-sm">{producto.nombre}</span>
                      </a>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Productos;