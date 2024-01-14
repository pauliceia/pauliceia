Feature: Validação do cadastro do usuário
  Como um Programador
  Quero melhorar a validação de cadatro
  Para aumentar a segurança do site e melhorar a experiência do usuário

Scenario Outline: Cadastro com campos vazios
  Given Estou na página de registro
  When Eu deixo de preencher algum campo:
  | Nome   | NomeDeUsuario   | Senha   | ConfirmeSenha   |
  | <nome> | <nomedeusuario> | <senha> | <confirmesenha> |
  And Eu clico no botão "Cadastrar"
  Then Aparece o erro: "Preencha todos os campos."

Examples:
    | nome       | nomedeusuario | senha   | confirmesenha |
    | Vazio      | NomeVálido    | Senha1  | Senha1        |
    | NomeVálido | Vazio         | Senha1  | Senha1        |
    | NomeVálido | NomeVálido    | Vazio   | Senha1        |
    | NomeVálido | NomeVálido    | Senha1  | Vazio         |

Scenario Outline: Cadastro com preenchimento inválido
  Given Estou na página de registro
  When Eu preencho com informações inválidas:
  | Nome   | NomeDeUsuario   | Senha   | ConfirmeSenha   |
  | <nome> | <nomedeusuario> | <senha> | <confirmesenha> |
  And Eu clico no botão "Cadastrar"
  Then Aparece <mensagemDeErro>

Examples:
    | nome       | nomedeusuario | senha   | confirmesenha | mensagemDeErro |
    | XX         | NomeVálido    | Senha1  | Senha1        | "O nome deve ter no mínimo 3 caracteres."                                           |
    | NomeVálido | XX            | Senha1  | Senha1        | "O nome de usuário deve ter no mínimo 3 caracteres."                                |
    | NomeVálido | NomeVálido    | XX      | XX            | "A senha deve ter no mínimo 6 caracteres, pelo menos 1 letra maiúscula e 1 número." |
    | NomeVálido | NomeVálido    | Senha1  | XX            | "As senhas devem ser iguais."                                                       |