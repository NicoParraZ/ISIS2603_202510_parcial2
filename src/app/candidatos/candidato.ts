export class Candidato {
    id: number;
    nombre: string;
    foto: string;
    pais_origen: string;
    edad: number;
    vertiente_religiosa: string;

    constructor(
        id: number,
        nombre: string,
        foto: string,
        pais_origen: string,
        edad: number,
        vertiente_religiosa: string,
    ) {
        this.id = id;
        this.nombre = nombre;
        this.pais_origen = pais_origen;
        this.edad = edad;
        this.vertiente_religiosa = vertiente_religiosa;
        this.foto = foto;
    }
}