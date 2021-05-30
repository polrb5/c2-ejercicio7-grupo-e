/* const equipos = [
  {
    id: "A7921",
    tipo: "Portátil",
    asignado: {
      empleado: {
        nombre: "Luis",
        apellidos: "Aguiler Sánchez",
        edad: 37,
        puesto: "Frontend developer",
      },
      direccion: "C/ Grassot, 55, 3º 1ª",
      poblacion: "Tarragona",
      provincia: "Tarragona",
    },
  },
  {
    id: "A1844",
    tipo: "Portátil",
    asignado: {
      empleado: {
        nombre: "Pere",
        apellidos: "Puig Abella",
        edad: 41,
        puesto: "Backend developer",
      },
      direccion: "Avda/ Independència, 105, 1º 2ª",
      poblacion: "Torredembarra",
      provincia: "Tarragona",
    },
  },
  {
    id: "T5491",
    tipo: "Sobremesa",
    asignado: {
      empleado: {
        nombre: "Saioa",
        apellidos: "Estevez Lupión",
        edad: 28,
        puesto: "Project Manager",
      },
      direccion: "C/ Roc, 13",
      poblacion: "L'Ametlla del Vallès",
      provincia: "Barcelona",
    },
  },
  {
    id: "T4405",
    tipo: "Sobremesa",
    asignado: {
      empleado: {
        nombre: "Roberto",
        apellidos: "García Robles",
        edad: 35,
        puesto: "El que trae los cafés",
      },
      direccion: "C/ Alfons X, 12, 1º 1ª",
      poblacion: "Tarragona",
      provincia: "Tarragona",
    },
  },
  {
    id: "A3187",
    tipo: "Portátil",
    asignado: {
      empleado: {
        nombre: "Andreu",
        apellidos: "Nieto Gavira",
        edad: 23,
        puesto: "El que friega los tuppers",
      },
      direccion: "C/ Besalú, 7",
      poblacion: "Barcelona",
      provincia: "Barcelona",
    },
  },
]; */

// Punt 1

const equiposMayoresEdad = (equipos, edadEmpleado) =>
  equipos.filter(
    ({
      asignado: {
        empleado: { edad },
      },
    }) => edad > edadEmpleado
  );

// Punt 2

const equiposProvincia = (equipos, provinciaEmpleado) =>
  equipos.filter(
    ({ asignado: { provincia } }) =>
      provincia.toLowerCase() === provinciaEmpleado.toLowerCase()
  );

// Punt 3

const provincias = (equipos) =>
  equipos
    .map((equipo) => equipo.asignado.provincia)
    .filter(
      (provincia, index, provincias) => provincias.indexOf(provincia) === index
    );

// Punt 4

const puestos = (equipos) =>
  equipos.map((equipo) => equipo.asignado.empleado.puesto);

// Punt 5

const edadMedia = (equipos) =>
  equipos.reduce(
    (
      totalEdad,
      {
        asignado: {
          empleado: { edad },
        },
      },
      i,
      empleados
    ) => totalEdad + edad / empleados.length,
    0
  );

// Punt 6

const equiposPorEdad = (equipos) =>
  equipos.sort(
    (equipos1, equipos2) =>
      equipos1.asignado.empleado.edad - equipos2.asignado.empleado.edad
  );

// Punt 7

const equiposTipo = (equipos, tipoEquipo) =>
  equipos.filter(
    (equipo) => equipo.tipo.toLowerCase() === tipoEquipo.toLowerCase()
  );
