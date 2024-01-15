import ApiVGI from '@/middleware/ApiVGI'
import { from, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

// create a simple cache just to avoid to request the same feature table again
const cacheFeatureTables = {};


//Abaixo, explicação do refact para o uso de observables (rjxs), que pode melhorar a reatividade da página, necessita de um teste de performance para avaliar se de fato melhora a velocidade da página
//Importação de from e of: Estes operadores são usados para criar Observables a partir de valores existentes.
// Uso de from: No método getFeatureTable, usamos from(cacheFeatureTables[fTableName]) para criar um Observable a partir do valor em cache.
// Uso de switchMap: Este operador permite alterar o Observable a ser emitido, dependendo da condição. No caso de haver um valor em cache, emitimos esse valor diretamente. Caso contrário, fazemos a requisição HTTP.
// Uso de tap: Este operador permite executar efeitos colaterais sem alterar o valor emitido pelo Observable. No caso, usamos para atualizar o cache com a resposta da requisição, se o status for 200.


export default {
  createLayer(infosLayer) {
    return ApiVGI().post(`/api/layer/create`, infosLayer);
  },

  createUserLayer(infosUserLayer) {
    return ApiVGI().post(`/api/user_layer/create`, infosUserLayer);
  },

  createFeatureTable(infosFeatureTable) {
    return ApiVGI().post(`/api/feature_table/create/`, infosFeatureTable);
  },

  deleteLayer(id) {
    return ApiVGI().delete(`/api/layer/${id}`);
  },

  getFeatureTable(fTableName) {
    return from(cacheFeatureTables[fTableName]).pipe(
      switchMap(cachedResponse =>
        cachedResponse ? of(cachedResponse) : ApiVGI().get(`/api/feature_table/?f_table_name=${fTableName}`)
      ),
      tap(response => {
        if (response.status === 200) {
          cacheFeatureTables[fTableName] = response;
        }
      })
    );
  }
};