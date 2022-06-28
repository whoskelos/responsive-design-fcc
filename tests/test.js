// Configuración
const recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [],
    },
    5439: {
        albumTitle: "ABBA Gold",
    },
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
    //Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.
    if (prop != "tracks" && value != "") {
        records[id][prop] = value;
        //Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.
    } else if (prop == "tracks" && records[id].hasOwnProperty(prop) == false) {
        records[id][prop] = [value];
        //Si prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.
    } else if (prop == "tracks" && value != "") {
        records[id][prop].push(value);
        //Si value es una cadena vacía, elimina esa propiedad prop del álbum.
    } else if (value == "") {
        delete records[id][prop];
    }
    return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
