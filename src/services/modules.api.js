const SERVER = import.meta.env.VITE_URL_API;

async function getDBModules() {
    const modulo = await fetch(SERVER + '/modules');
    if (!modulo.ok) {
        throw new Error(`Error ${modulo.status} de la BBDD: ${modulo.statusText}`);
    };

    return modulo.json();
}
export default{ getDBModules};