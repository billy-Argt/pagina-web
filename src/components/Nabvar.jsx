const Navbar = () => {
  const title = 'Asesores';

  const Marca = () => {
    return (
      <a href="https://www.via-asesores.com" className="flex items-center">
        <img src="https://www.via-asesores.com/logos/logo_vertical/viaasesores_vertical_logo.svg" className="h-12 mr-3" alt="VIA Asesores" />
        <span className="self-center text-3xl font-bold whitespace-nowrap text-white"> {title} </span>
      </a>
    );
  };

  const AccesosButton = () => {
    const accesosLabel = 'Accesos';

    return (
      <a href="#" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none">
        {accesosLabel}
      </a>
    );
  };

  const Contactos = () => {
    return (
      <>
        <a href="mailto:guatemala@via-asesores.com" className="text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none">
          guatemala@via-asesores.com
        </a>
        <a href="telto:+502 22971267" className="text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none">
          +502 2297 1267
        </a>
      </>
    );
  };

  return (
    <nav className="bg-gradient-to-b from-blue-900 to-blue-700 border-blue-200 rounded-lg m-1 shadow-md">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Marca />
        <div className="flex items-center md:order-2">
          <Contactos />
          <AccesosButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
