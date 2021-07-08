# Nouvenn_test



# Necessidades para rodar a aplicação sem o DOCKER

1: ter instalado o mySql server e workbench.

3: adicionar um schema no workbench com o nome nouvenn_test.

3: instalar o angular/cli, nodejs e o wampserver para rodar o banco e migration localmente.

4: crie um arquivo .env dentro da pasta "backend" e coloque os seus dados como no exemplo:

![image](https://user-images.githubusercontent.com/62350674/123447096-de452a80-d5af-11eb-914d-0aee9a40a101.png)

5: informe tambem estes dados dentro do arquivo "ormconfig.json" da pasta "backend"


# BackEnd

6: abrir a pasta backend no terminal e rodar os seguintes comandos:
	
  	yarn;

	/*** O COMANDO TYPEORM DEVE SER RODADO QUANDO O SCHEMA DO WORKBENCH JA ESTEJA CRIADO, DESSA FORMA
	ELE IRA ADICIONAR AS TABELAS NECESSARIAS ***/
	yarn typeorm migration:run;

	yarn dev;
 
# FrontEnd
 
8: abrir a pasta frontend no terminal e rodar os seguintes comandos:
	
	npm i;
	ng s;


#Rodar a aplicação com o DOCKER

1: intale o Docker;

2: abra a pasta "nouvenn_test" no terminal e rode o seguinte comando para subir a aplicação:

	docker-compose up --build;

3: para descer os containers e limpar o docker digite o seguinte comando:
	
	docker-compose down;