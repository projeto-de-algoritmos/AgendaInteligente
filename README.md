# Agenda Inteligente

**Número da Lista**: X<br>
**Conteúdo da Disciplina**: Greed<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 20/0056603 |  Alex Gabriel Alves Faustino      |
| 18/0022512 |  Lucas de Lima Spinosa dos Santos |

## Sobre 

O objetivo do projeto é criar uma agenda que permite que o usuário registre as tarefas que precisa realizar, sendo elas ordenadas e organizadas por data.

O usuário pode, então, otimizar a execução das tarefas, através de duas formas:

- **Otimizar Tarefas**: Ao clicar nesse botão, as tarefas são organizadas usando o algoritmo **Interval Scheduling**, mostrando o máximo de tarefas que ele pode fazer no dia.

- **Minimizar Atraso**: Ao clicar nesse botão, as tarefas são organizadas usando o algoritmo **Minimizing Lateness**, mostrando a melhor forma de fazer as tarefas (com o mínimo de atraso com relação aos prazos de entrega delas possível).

Uma tarefa marcada como concluída não irá ser considerada em nenhuma das otimizações.


## Screenshots

![](./screenshots/Tela%20Inicial.png)

![](./screenshots/Interval%20Scheduling.png)

![](./screenshots/Minimizing%20Lateness.png)


Foi gravado um vídeo explicando melhor o projeto e mostrando ele em funcionamento. [Clique aqui para assistir pelo YouTube](https://youtu.be/LzrJBqhbwQU). O vídeo também se encontra no repositório.

## Instalação 
**Linguagem**: JavaScript<br>

Para rodar o projeto, é necessário que você tenha o Node.js instalado, juntamente com o NPM (Node Package Manager) e o pacote Http-Server.

Para instalar o Node.js (juntamente com o NPM) no Linux, use o comando a seguir:

```bash
sudo apt update
sudo apt install nodejs
```

Para instalar o pacote Http-Server, use o comando a seguir:

```
npm install --global http-server
```

Com tudo isso feito, na pasta do repositório, use o seguinte comando:

```
http-server
```

Isso irá rodar o projeto em duas portas diferentes. Basta abrir qualquer uma delas no navegador para usar a agenda.


## Uso 

Para inserir tarefas, basta informar a descrição da tarefa, a data dela e os horários de início e término, nesta ordem.

Clicar nos botões, como eles sugerem, irão marcar uma tarefa como concluída, apagar ela dos registros ou, como mencionado previamente, otimizar a lista de tarefas do dia.
