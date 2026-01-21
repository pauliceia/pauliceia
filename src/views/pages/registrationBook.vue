  <template>
    <div class="meu-fundo">
      <div class="form-container header d-flex justify-content-center">
        <div>
          <p>Entrada de Dados de Emplacamento para o Serviço Web do Geocoding</p>
        </div>
      </div>
  
      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="field1">Rua</label>
              <input type="text" id="field1" v-model="fields[0].value" class="form-control" placeholder="Digite algo" autocomplete="off"  @blur="fetchStreetId">
            </div>
            <div class="col-md-3 mb-3">
              <label for="field2">Id Rua</label>
              <input type="text" id="field2" v-model="fields[1].value" class="form-control" placeholder="Digite algo" autocomplete="off">
            </div>
            <div class="col-md-4 mb-3">
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="field4">Número Saboya</label>
              <input type="text" id="field4" v-model="fields[2].value" class="form-control" placeholder="Digite algo" autocomplete="off">
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="field4">Id Ponto (Imóvel)</label>
              <input type="text" id="field4" v-model="fields[3].value" class="form-control" placeholder="Digite algo" autocomplete="off">
            </div>
            <div class="col-md-3 mb-3">
              <label for="field5">Metragem</label>
              <input type="text" id="field5" v-model="fields[4].value" class="form-control" placeholder="Digite algo" autocomplete="off">
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="field4">Autor</label>
              <input type="text" id="field4" v-model="fields[5].value" class="form-control" placeholder="Digite algo" autocomplete="off">
            </div>
            <div class="col-md-4 mb-3">
              <label for="field5">Fonte</label>
              <input type="text" id="field5" v-model="fields[6].value" class="form-control" placeholder="Digite algo" autocomplete="off">
            </div>
            <div class="col-md-3 mb-3">
              <label for="field6">Data de Submissão</label>
              <input type="text" id="field6" v-model="fields[7].value" class="form-control" @input="formatDate2()" placeholder="DD/MM/YYYY" autocomplete="off">
            </div>
          </div>
  
          <!-- CAMPOS DINAMICOS -->
          <div style="border: 2px solid #f15a29; padding: 30px; margin: 20px;">  
            <div v-for="(valor, index) in var_fields"  class="row">
              <div class="col-md-4 mb-3">
                <label for="field7">Número {{ index + 1 }}</label>
                <input type="text" v-model="valor.numero" class="form-control" placeholder="Digite algo" autocomplete="off">
              </div>
              <div class="col-md-3 mb-3">
                <label for="field8">Data Inicial</label>
                <input type="text" v-model="valor.dataInicial" class="form-control" @input="formatDate(index, 'dataInicial')" placeholder="DD/MM/YYYY" autocomplete="off">
              </div>
              <div class="col-md-3 mb-3">
                <label for="field9">Data Final</label>
                <input type="text" v-model="valor.dataFinal" class="form-control" @input="formatDate(index, 'dataFinal')" placeholder="DD/MM/YYYY" autocomplete="off">
              </div>
              <!--Botão de Remover linha-->
              <div class="col-md-2 mb-3 d-flex justify-content-center align-items-end">
                <button type="button" class="btn btn-circle red" @click="removeField(index)">-</button>
              </div>
            </div>
            <!-- Botão para adicionar mais campos -->
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-circle" @click="addField">+</button>
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-4 mb-3 d-flex justify-content-center">
              <button type="button" class="btn btn-base" @click="resetNumbers">Limpar</button>
                <div class="teste">
                    <el-popover
                        class="info"
                        placement="top-start"
                        width="350"
                        trigger="hover"
                        type="primary"
                        >
                        <div v-html="$t('registrationBook.button.clear')" />
                        <button
                            type="button"
                            slot="reference"
                            class="btn btn-outline-primary info"
                        >
                            <md-icon class="icon">error_outline</md-icon>
                        </button>
                    </el-popover>
                </div>
            </div>
            <div class="col-md-4 mb-3 d-flex justify-content-center">
              <button type="submit" class="btn btn-base">Salvar</button>
              <div class="teste">
                    <el-popover
                        class="info"
                        placement="top-start"
                        d        width="350"
                        trigger="hover"
                        type="primary"
                        >
                        <div v-html="$t('registrationBook.button.save')" />
                        <button
                            type="button"
                            slot="reference"
                            class="btn btn-outline-primary info"
                        >
                            <md-icon class="icon">error_outline</md-icon>
                        </button>
                    </el-popover>
                </div>
            </div>
            <div class="col-md-4 mb-3 d-flex justify-content-center">
              <button type="button" class="btn btn-base" @click="newPoint">Novo Imóvel</button>
              <div class="teste">
                    <el-popover
                        class="info"
                        placement="top-start"
                        width="357"
                        trigger="hover"
                        type="primary"
                        >
                        <div v-html="$t('registrationBook.button.newpoint')" />
                        <button
                            type="button"
                            slot="reference"
                            class="btn btn-outline-primary info"
                        >
                            <md-icon class="icon">error_outline</md-icon>
                        </button>
                    </el-popover>
                </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'RegistrationBook',
    
    data() {
      return {
        fields: [
          { value: '' }, // Campo 1
          { value: '' }, // Campo 2
          { value: '' }, // Campo 3
          { value: '' }, // Campo 4
          { value: '' }, // Campo 5
          { value: '' }, // Campo 6
          { value: '' }, // Campo 7
          { value: '' }, // Campo 8
        ],

        var_fields: [
          //Primeira linha variavel
          {numero: '', dataInicial: '', dataFinal: ''},
        ],  
      };
    },
    
    methods: {

      async fetchStreetId() {
        try {
          const streetName = this.fields[0].value.trim();

          if (streetName !=='') {
            const response = await axios.get(
              `https://pauliceia-dev.unifesp.br/api/geocoding/street-id`,
              {
                params: {
                  name: streetName,
                },
              }
            );

            if (response.data.success) {
              console.log("entrou?");
              this.fields[1].value = response.data.results[0].id_street.toString();
            } else {
              this.fields[1].value = 'nul';
            }
          }
        } catch (error) {
          if (error.response) {
            if (error.response.status == 404) {
              console.warn("Nome rua nao encontrado");
            } else if (error.response.status == 500) {
              console.warn("Consulta não funcionou");
            }
            else {
              console.warn("Erro de conexao");
            } 
          } else {
            console.error(error);
            this.streetId = 'Erro na busca';
          }
        }
      },


      addField() {
        this.var_fields.push({ numero: '', dataInicial: '', dataFinal: '' });
      },

      removeField(index) {
        // Remove o campo específico com base no índice
        this.var_fields.splice(index, 1);
      },  

      handleSubmit() {
        console.log("Formulário enviado:", this.fields);
        console.log("Campos dinâmicos enviados:", this.var_fields);
  
        // Usar condicional para fazer ou não submissão
        if(this.verifyDates() && !this.verifyEmptyInput()) {
          const csv = this.createCSV();
          const blob = new Blob([csv], {type: 'text/csv; charset=utf-8'})
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.setAttribute('download', 'dados.csv');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        else {
          alert('submissao cancelada');
        }
        //this.resetHeader();
      },
  
      resetHeader() {
        this.fields[2].value = '';
        this.fields[3].value = '';
        this.fields[4].value = '';
      },
  
      resetNumbers() {
        this.var_fields =  [
          //Primeira linha variavel
          {numero: '', dataInicial: '', dataFinal: ''},
        ]
      },
  
      newPoint() {
        //resetNumbers com resetHeader!
        this.resetNumbers();
        this.resetHeader();
      },
  
      formatDate(index, fieldDate) {
        //Remove não dígitos
        let value = this.var_fields[index][fieldDate].replace(/\D+/g, '');
        
        if (value.length > 8) value = value.slice(0, 8);
        if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
        if (value.length > 5) value = value.slice(0, 5) + '/' + value.slice(5);
  
        this.var_fields[index][fieldDate] = value;
      },
  
      formatDate2() {
        let data = this.fields[7].value.replace(/\D+/g, '');
        
        if (data.length > 8) data = data.slice(0, 8);
        if (data.length > 2) data = data.slice(0, 2) + '/' + data.slice(2);
        if (data.length > 5) data = data.slice(0, 5) + '/' + data.slice(5);
  
        this.fields[7].value = data;
      },
  
      verifyDates() {
        for (let i = 0; i < this.var_fields.length; i++) {   
          let dataInicial = this.var_fields[i].dataInicial;
          let dataFinal = this.var_fields[i].dataFinal;
  
          if (dataInicial && dataFinal) {
            if (!this.compareDates(dataInicial, dataFinal)) {
              alert(`Erro no número ${i + 1}: A data final deve ser posterior à data inicial.`);
              return false;
            }
          }
        }
        //alert('Todas as datas estão consistentes.');
        return true;
      },
  
      compareDates(inicial, final) { // Verdadeiro se final mais recente que inicial
        let partesInicial = inicial.split("/");
        let partesFinal = final.split("/");
        let dataInicial = new Date(partesInicial[2], partesInicial[1] - 1, partesInicial[0]);
        let dataFinal = new Date(partesFinal[2], partesFinal[1] - 1, partesFinal[0]);
        return dataFinal >= dataInicial; //para o caso de strings vazias
      },
  
      verifyEmptyInput() { // Verificar se algum campo do formulário está vazio
        for(let i = 0; i < this.fields.length; i++) {
          if(this.fields[i].value == '') {
            alert('Há campos vazios!');
            return true;
          }
        }
        
        for(let i = 0; i < this.var_fields.length; i++) {
          if(this.var_fields[i].numero == '' || this.var_fields[i].dataInicial == '' || this.var_fields[i].dataFinal == '') {
            alert('Há campos vazios!');  
            return true;
          }
        }

        return false;
      },
  
      createCSV() {
        let csvRows = [];
        csvRows.push("Rua,Id Rua,Número Saboya,Id Ponto,Metragem,Autor,Fonte,Data,Número,Data Inicial,Data Final");

        this.var_fields.forEach( (elem) => {
          let row = this.fields.map(f => f.value).join(',') + `,${elem.numero},${elem.dataInicial},${elem.dataFinal}`;
          csvRows.push(row);
        });
  
        return csvRows.join("\n");
      }
      
  
    }
  }
  </script>
  
  <style scoped>
  /* Define a posição e o tamanho do formulário */
  .form-container {
    position: relative;
    width: 50%;
    max-width: 2000px;
    margin: 0 auto;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.8); /* Fundo branco com transparência */
    border-radius: 10px;
    z-index: 10;
    max-height: 80%;
    overflow-y: auto;
  }
  
  .header {
    margin: 20px auto;
    background-color: #c05a29;
    color: #FFF;
    font-family: IrisUPC;
    font-size: 40px;
  }
  
  /* Define a imagem de fundo */
  .background-image {
    position: relative;
    height:300px;
    background-image: '@/views/assets/images/mapa1_1943.jpg';
    background-position: center;
    filter: blur(5px); 
  }
  
  .meu-fundo {
    height: 100%;
    background-image: url('../assets/images/mapa1_1943.jpg');
    padding: 30px;
    background-color: red;
  }
  
  /* Ajustes de espaçamento */
  .mb-3 {
    margin-bottom: 1rem;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.2rem; /* Espaçamento entre o label e a caixa de preenchimento */
    display: block; /* Garante que o label ocupe uma linha inteira */
  }
  
  .btn-circle {
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    font-size: 20px;
    text-align: center;
    line-height: 1.42857;
    display: inline-block;
    background-color: mediumturquoise;
    color: white;
    border: none;
  }
  
  .btn-circle.red {
    background-color: red;
    width: 40px;
    height: 40px;
    padding: 1px;
  }
  
  .btn-circle:hover {
    background-color: #0056b3;
  }
  
  /* MEesmo estilo como em header.vue, login */
  .btn-base {
              color: #FFF;
              background: #f15a29;
              font-family: IrisUPC;
              font-size: 30px;
              padding: 0 20px;
              border-radius: 7.5px;
              line-height: 1;
              width: 60%;
  }

  .teste {
        position: absolute;
        transform: translateY(-20%) translateX(100px); 
        padding: 5px 5px 1px 5px;
        font-size: 1.3em;
        font-weight: 400;
        font-family: 'Roboto' !important;
        display: inline-block;
        margin: 0 !important;

        .info {
            top: -7px !important;
            border: none;
            position: relative;
            border-radius: 30px;

            &:hover {
                background: #008ae6 !important;
            }
        }

        .btn {
            margin: 3px !important;
            padding: 2px !important;
            background: none;
            border: none;
            float: right;
            display: inline-block;

            &:hover {
                background: rgba(#000, 0.1);
            }
        }
    }

  </style>
  