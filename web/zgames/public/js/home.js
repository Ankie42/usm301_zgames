const cargarMarcas = async()=>{ //async= espera a que funcione
    //1. Buscar marcas de la api
    let resultado = await axios.get("api/marcas/get");
    let marcas = resultado.data;
    //2. Cargarlas dentre de select
    let marcaSelect = document.querySelector("#marca-select");
    marcas.forEach(m => { //por cada marca hara: eso
        let option = document.createElement("option");
        option.innerText = m;
        marcaSelect.appendChild(option);
    });
};

cargarMarcas();