import { useState } from "react"

const Clientes = () => {
  const clientes = [
    { tipoCliente: 'Nacionales', nombre: 'Banco Industrial', logo: "https://www.via-asesores.com/assets/img/clients/banco_industrial.png" },
    { tipoCliente: 'Nacionales', nombre: 'Banco de los Trabajadores', logo: "https://www.via-asesores.com/assets/img/clients/bantrab.png" },
    { tipoCliente: 'Nacionales', nombre: 'Banco GyT Continental', logo: "https://www.via-asesores.com/assets/img/clients/banco_gyt.png" },
    { tipoCliente: 'Nacionales', nombre: 'Banco CHN', logo: "https://www.via-asesores.com/assets/img/clients/banco_chn.png" },
    { tipoCliente: 'Nacionales', nombre: 'Naturaceiter', logo: "https://www.via-asesores.com/assets/img/clients/naturaceites.png" },
    { tipoCliente: 'Nacionales', nombre: 'Telefónica Movistar', logo: "https://www.via-asesores.com/assets/img/clients/movistar.png" },
    { tipoCliente: 'Nacionales', nombre: 'Ingenio Magdalena', logo: "https://www.via-asesores.com/assets/img/clients/magdalena.png" },
    { tipoCliente: 'Nacionales', nombre: 'Tigo', logo: "https://www.via-asesores.com/assets/img/clients/tigo.png" },
    { tipoCliente: 'Nacionales', nombre: 'Walmart', logo: "https://www.via-asesores.com/assets/img/clients/walmart.png" },
    { tipoCliente: 'Nacionales', nombre: 'Meykos', logo: "https://www.via-asesores.com/assets/img/clients/meykos.png" },
    { tipoCliente: 'Nacionales', nombre: 'Aseguradora General', logo: "https://www.via-asesores.com/assets/img/clients/aseguradora_general.png" },
    { tipoCliente: 'Nacionales', nombre: 'GNC', logo: "https://www.via-asesores.com/assets/img/clients/gnc.png" },
    { tipoCliente: 'Nacionales', nombre: '5B', logo: "https://www.via-asesores.com/assets/img/clients/5b.png" },
    { tipoCliente: 'Nacionales', nombre: 'Agexport', logo: "https://www.via-asesores.com/assets/img/clients/agexport.png" },
    { tipoCliente: 'Nacionales', nombre: 'Administrador del Mercado Mayorista', logo: "https://www.via-asesores.com/assets/img/clients/amm.png" },
    { tipoCliente: 'Instituciones Públicas' },
    { tipoCliente: 'Internacionales' },

  ]
  const tiposCliente = [...new Set(clientes.map((item) => item.tipoCliente))];

  const [selectedCliente, setSelectedCliente] = useState(tiposCliente[0]);

  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 md:px-12 md:mt-10 border rounded-lg p-4">
      <div className="font-extrabold text-white text-3xl mb-4">Nuestros Clientes</div>

      <div className="flex space-x-4 mb-4">
        {tiposCliente.map((tipoCliente) => {
          return (
            <div
              key={tipoCliente}
              onClick={() => setSelectedCliente(tipoCliente)}
              className={`${
                tipoCliente === selectedCliente
                  ? "bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-800"
              } text-sm font-semibold inline-flex items-center px-4 py-2 rounded-full cursor-pointer hover:bg-blue-800 hover:text-white transition-colors duration-300`}
            >
              
              {tipoCliente}
            </div>
          );
        })}
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {clientes
          .filter((cl) => cl.tipoCliente === selectedCliente)
          .map((cliente) => {
            return (
              <li key={`li-${cliente.nombre}`} className="flex flex-col items-center space-y-2">
                <div key={cliente.nombre} className="h-28 p-3">
                  <img
                    src={cliente.logo}
                    className="h-full w-full max-h-28 opacity-100 rounded-md border-2 border-dashed transform hover:scale-105 transition-transform duration-300"
                    alt={cliente.nombre}
                  />
                </div>
                <p className="text-base font-medium text-gray-700">{cliente.nombre}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Clientes;