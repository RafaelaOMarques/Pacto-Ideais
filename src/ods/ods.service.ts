import { Injectable } from '@nestjs/common';
import { ODS } from 'src/shared/constants/ods.constantes';

@Injectable()
export class OdsService {
  
  getAllOds() {
    return Object.values(ODS);
  }


  getOdsById(key: string){
    const ods = ODS[key];
    if(!ods){
      throw new Error(`ODS ${key} não encontrada. Verificar que as ODS são da ODS1 a ODS17`)
    }

    return ods;
  }

}
