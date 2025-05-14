import { Candidato } from './candidato';

export class CandidatosDetail extends Candidato {
    constructor(
        public id: number,
        public nombre: string,
        public foto: string,
        public pais_origen: string,
        public edad: number,
        public vertiente_religiosa: string,
    ) {
        super(nombre, foto, pais_origen, edad, vertiente_religiosa);
    }
}