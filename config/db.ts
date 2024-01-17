// devwharry - Harry@2024
// senha do usuario: harry : 1UXKO2ghv3VVItii

import mongoose from "mongoose";
import config from "config";

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        console.log("Conectou ao banco de dados!");
    } catch(e) {
        console.log("Não foi possível conectar!");
        console.log(`ERROR: ${e}`);
    }
}

export default connect;