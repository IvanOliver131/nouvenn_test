# Nouvenn_test

![image](https://user-images.githubusercontent.com/62350674/124848792-ed46b800-df73-11eb-8c95-bf7f085d9312.png)
![image](https://user-images.githubusercontent.com/62350674/124848797-f2a40280-df73-11eb-8b4c-e5f3368e074a.png)
![image](https://user-images.githubusercontent.com/62350674/124848845-0e0f0d80-df74-11eb-8507-24fb861bb732.png)
![image](https://user-images.githubusercontent.com/62350674/124848865-15ceb200-df74-11eb-97a5-183487d5e13c.png)

# Necessidades para rodar a aplicação sem o DOCKER

1: ter instalado o mySql server e workbench.

3: adicionar um schema no workbench com o nome nouvenn_test.

![image](https://user-images.githubusercontent.com/62350674/124848910-2aab4580-df74-11eb-8cd4-4291aeb8ed05.png)
![image](https://user-images.githubusercontent.com/62350674/124848962-3e56ac00-df74-11eb-8751-2270017f4213.png)

3: instalar o angular/cli, nodejs e o wampserver para rodar o banco e migration localmente.

https://classic.yarnpkg.com/en/docs/install/#windows-stable

https://nodejs.org/en/

https://angular.io/cli

https://sourceforge.net/projects/wampserver/


4: crie um arquivo .env dentro da pasta "backend" e coloque os seus dados como no exemplo:

![image](https://user-images.githubusercontent.com/62350674/124854859-64814980-df7e-11eb-98e4-0d1b2c4ec455.png)

5: informe tambem estes dados dentro do arquivo "ormconfig.json" da pasta "backend"


# BackEnd

6: abrir a pasta backend no terminal e rodar os seguintes comandos:
	
  	yarn;

	/*** O COMANDO TYPEORM DEVE SER RODADO QUANDO O SCHEMA DO WORKBENCH JA ESTEJA CRIADO, DESSA FORMA
	ELE IRA ADICIONAR AS TABELAS NECESSARIAS ***/
	yarn typeorm migration:run;

	yarn dev;
 
 ![image](https://user-images.githubusercontent.com/62350674/124849023-5e866b00-df74-11eb-95e0-3b2b15dbe093.png)


# FrontEnd
 
8: abrir a pasta frontend no terminal e rodar os seguintes comandos:
	
	npm i;
	ng s;

![image](https://user-images.githubusercontent.com/62350674/124849039-68a86980-df74-11eb-8f31-0162bbffebeb.png)

# Rodar a aplicação com o DOCKER

1: intale o Docker;

2: abra o Docker;

3: abra a pasta "nouvenn_test" no terminal e rode o seguinte comando para subir o banco da aplicação:

	docker-compose up --build;
	
![image](https://user-images.githubusercontent.com/62350674/124854587-ecb31f00-df7d-11eb-87ee-9b6557f86015.png)

4: abra a pasta "backend" no terminal e rode os seguintes comandos:
	
	yarn;
	yarn typeorm migration:run;
	yarn dev;

![image](https://user-images.githubusercontent.com/62350674/124854648-048aa300-df7e-11eb-88eb-70d21695d8da.png)
	
5: abra a pasta frontend no terminal e rodar os seguintes comandos:
	
	npm i;
	ng s;

![image](https://user-images.githubusercontent.com/62350674/124854719-271cbc00-df7e-11eb-9ba8-5b88c234987e.png)
	
6: para descer os containers e limpar o docker digite o seguinte comando:
	
	docker-compose down;
	

	
	
