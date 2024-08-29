// Caso de Teste CF4.2 - GET - Buscar ID que não existe 

import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../../support/base/baseTest.js'
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { SharedArray } from 'k6/data';

export const options = testConfig.options.one;
const base_uri = testConfig.environment.hml.url
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();


// Colocando ID como: .

export default function (data) {
    const res = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT + `.`)
    console.log(res.body)
    console.log(`Status Code: ${res.status}`); 
   
    baseChecks.checkStatusCode(res, 404);
    baseChecks.checkFilmeTitulo(res);  
    baseChecks.checkFilmeDescricao(res); 
    baseChecks.checklaunchdate(res);  
    baseChecks.checkshowtimes(res); 
    baseChecks.checkId(res); 
}



