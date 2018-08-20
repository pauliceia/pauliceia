import termsPT from './termsPT-BR'

export default {
    "nav": {
        "explore": "Navegue",
        "about": "Sobre",
        "login": "Entrar",
        "profile": "Meu Perfil",
        "dashboard": "Painel",
        "logout": "Sair",
        "msgLogout": "Até breve!"
    },
    "dashboard": {
        "nav": {
            "home": "Inicio",
            "infos": "Informações",
            "newLayer": "Nova Camada",
            "keywords": "Palavras-chave",
            "layer": "Camadas"
        },
        "home":{
            "dashboard": "Painel de Controle",
            "notifications": "Notificações",
            "myLayers": "Minhas Camadas",
            "sharedLayers": "Camadas Compartilhadas"
        },
        "newLayer": {
            "name": "Nome",
            "keywords": "Palavras-chave",
            "collaborators": "Colaboradores",
            "description": "Descrição",
            "reference": "Referência",
            "addedReferences": "Referências Adicionadas",
            "add": "Adicionar",
            "submit": "Enviar",
            "fileInput": "Arquivo de Entrada",
            "zipFile": "Arquivo ZIP",
            "nameD": "Nome da camada. Ela é única no sistema.",
            "keywordsD": "Palavra-chave é uma etiqueta/rótulo relacionado a camada, que indica qual tipo ela pertence, como ruas, endereços, crimes e etc.",
            "collaboratorsD": "Colaboradores são as pessoas que poderão adicionar, editar ou remover os vetores da camada. Vetores são as geometrias da camada, como um ponto, linha ou polígono.",
            "descriptionD": "Descrição é uma descrição/informação sobre a camada.",
            "referenceD": "Referência é a fonte daquele dado, se ele é de um livro, artigo, dissertação ou etc. Ele deve estar no formato ABNT.",
            "epsgD": "É a projeção do Shapefile, um número inteiro, por exemplo 4326.",
            "fileInputD": "O arquivo que será inserido é um arquivo compactado ZIP que contém o Shapefile para ser enviado. Dentro deste arquivo ZIP deve conter todos os arquivos de um Shapefile, como o “.shp”, “.prj”, “.dbf” e etc.",
            "zipFileD": "Arquivo ZIP",
            "chooseFile": "Escolha o arquivo",
            "temporalColumns": "Dados Temporias",
            "startDate": "Data Inicial",
            "endDate": "Data Final",
            "startDateColumn": "Coluna da Data Inicial",
            "endDateColumn": "Coluna da Data Final",
            "startDateMask": "Máscara da Data Inicial",
            "endDateMask": "Máscara da Data Final"
        },
        "editLayer": {
            "delete": "Deletar",
            "layer": "Edição Camada",
            "editLayer": "Editar Camada"
        },
        "keywords":{
            "keywords": "Palavras-chave",
            "newKeyword": "Novas Palavras-Chave",
            "myKeywords": "Minhas Palavras-Chave",
            "name": "Nome",
            "nameD": "NameD"
        }
    },
    "login": {
        "inputEmail": "E-mail",
        "inputPassword": "Senha",
        "register": "Registre-se agora",
        "btnText": "Entrar",
        "terms": "Se você fizer login via rede social, estará automaticamente concordando com os termos do projeto.",
        "lbReadme": "leia os termos aqui",
        "msg": {
            "success": "BEM-VINDO",
            "err404": "<strong>E-mail</strong> ou <strong>senha</strong> incorreta!",
            "err409": "Você ainda <strong>não confirmou seu e-mail</strong>, acesse sua caixa de e-mail e confirme-o seguindo instruções!"
        }
    },
    "register": {
        "title": "Cadastrar",
        "lbName": "Nome",
        "lbEmail": "E-mail",
        "lbUsername": "Nome de usuário",
        "lbPassword": "Senha",
        "lbCheckNotification": "Receber notificações por e-mail",
        "lbCheckAgree": "Eu concordo com os termos de uso.",
        "lbReadme": "leia os termos aqui",
        "btnTitle": "Cadastrar",
        "lbToLogin": "Você já está cadastrado?",
        "lbToLoginLink": "CLIQUE AQUI",
        "msg": {
            "success": "seu cadastro está quase pronto. Basta acessar seu e-mail e seguir as instruções.",
            "emptyField": "ERRO: complete todos os campos!",
            "err500": "Erro no servidor interno - entre em contato com o administrador",
            "err409": "<strong>E-mail</strong> ou <strong>nome de usuário</strong> já existe em nosso sistema."
        }
    },
    "validEmail": {
        "msgSuccess": "Olá, seu e-mail foi validado com <strong>sucesso</strong>! Agora é só realizar o <i>login</i> para acessar o sistema.",
        "msgErr": "Erro ao efetuar a validação do seu E-mail. Link inválido!"
    },
    "validSocial": {
        "msgSuccess": "BEM-VINDO",
        "msgErr": "Erro ao efetuar o login. Link inválido!"
    },
    "map":{
        "geocoding": {
            "label":  {
                "search": "Procure um endereço",
                "geocoding": "Procure por endereços via CSV"
            },
            "placeholder": "nome da rua, número, ano",
            "btnText": "Pesquisar",
            "popupInfo": {
                "search": `
                    Para procurar um endereço, digite-o seguindo a estrutura nome da rua, número (apenas números), ano (apenas números). <br><strong>Ex: rua da consolaçao, 42, 1931</strong>
                `,
                "geocoding": `
                    <b>1° Passo:</b> Verifique se o seu arquivo CSV se encontra conforme o padrão.<br>
                    <b>Padrão:</b> Primeira linha de cabeçalho, endereços escritos por extenso na primeira coluna, um por linha, seguindo a estrutura nome da rua, numera, ano<br>
                    <b>2° Passo:</b> Através do botão Procurar, selecionando o seu arquivo CSV, visualizar no mapa os endereços encontrados.<br>
                    <b>3° Passo:</b> Através do botão Download, é possível baixar os dados encontrados, em formato Shapefile.
                `
            }
        },
        "sidebarLayer": {
            "title": "Camadas",
            "btnAdd": "Adicionar e remover camadas",
            "options": {
                "zoom": "Zoom",
                "infosLayer": "Informações da camada",
                "infosVector": "Informações sobre os objetos",
                "editColor": "Mudar a cor",
                "download": "Baixar .shp"
            },
            "msgEmpty": "Adicione as camadas para a visualização no mapa!"
        },
        "sidebarEdit": {
            "title": "Editor"      
        },
        "addLayer": {
            "title": "Adicionar e remover camadas",
            "input": "Pesquise por tema, camada ou autor:",
            "close": "Fechar",
            "box": {
                "lbTitle": "TITULO",
                "lbAuthors": "AUTORES",
                "lbTags": "TAGS"
            },
            "btns": {
                "active": "Ativar",
                "disable": "Desativar"
            },
            "msg": {
                "errTitle": "Erro Interno",
                "errMsg": "Serviço indisponível, tente mais tarde ou comunique nosso suporte!"
            }
        },
        "viewInfo": {
            "btnFollow": "Seguir Camada",
            "lbDescription": "DESCRIÇÃO",
            "lbTags": "TAGS",
            "lbAuthors": "AUTORERS",
            "lbDate": "DATA DE CRIAÇÃO",
            "lbReferences": "REFERÊNCIAS",
            "lbNotifications": "Notificações"
        },
        "viewInfoVector": {
            "title": "Selecione as informações",
            "btnFeature": "Por localização",
            "btnBox": "Por região",
            "btnClean": "Limpar"
        }
    },
    "terms": {
        "title": "TERMOS DE USO",
        "text": termsPT
    }
}
