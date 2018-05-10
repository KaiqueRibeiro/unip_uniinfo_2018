-- CRIAR TABELA CLIENTE
CREATE TABLE CLIENTE (
	CODCLI INT IDENTITY PRIMARY KEY,
	NOME VARCHAR(60) NOT NULL,
	CIDADE VARCHAR(30) NOT NULL,
	UF CHAR(2) NOT NULL
	);

-- CRIAR TABELA VENDEDOR
CREATE TABLE VENDEDOR (
	CODVEN INT IDENTITY PRIMARY KEY,
	NOME VARCHAR(30) NOT NULL,
	SALARIO NUMERIC(9,2)
	);

-- CRIAR TABELA PRODUTO
CREATE TABLE PRODUTO (
	CODPROD INT IDENTITY PRIMARY KEY,
	DESCRICAO VARCHAR(30) NOT NULL,
	VALOR NUMERIC(9,2)
	);

-- CRIAR TABELA PEDIDO
CREATE TABLE PEDIDO (
	NUMERO INT NOT NULL,
	CODCLI INT NOT NULL,
	CODVEN INT NOT NULL,
	CODPROD INT NOT NULL,
	DATA DATE NOT NULL,
	PRIMARY KEY (NUMERO, CODCLI, CODVEN, CODPROD),
	FOREIGN KEY (CODCLI) REFERENCES CLIENTE(CODCLI),
	FOREIGN KEY (CODVEN) REFERENCES VENDEDOR(CODVEN),
	FOREIGN KEY (CODPROD) REFERENCES PRODUTO(CODPROD)
	);

-- INSERIR CLIENTE
INSERT INTO CLIENTE
VALUES ('LOJAS AMERICANAS', 'Itu', 'SP'),
('LOJAS CEM S/A', 'Sorocaba', 'SP'),
('WWAL-MART BRASIL LTDA', 'São Paulo', 'SP'),
('TECELAGEM ROMA LTDA', 'Valinhos', 'SP'),
('LOJAS AVENIDA LTDA', 'Campinas', 'SP'),
('LOJAS COLOMBO S.A ', 'Extrema', 'MG'),
('LOJAS RENNER S.A.', 'Belo Horizonte', 'MG'),
('GETEC COMÉRCIO E IMPORTAÇÃO LTDA', 'Uberaba', 'MG'),
('BRASNEL COMERCIAL LTDA', 'Uberlândia', 'MG'),
('ASSEP CULTURAL LTDA', 'Araguari', 'MG'),
('LOJAS DINDIN', 'Anápolis', 'GO'),
('DADALTO EVENTOS LTDA', 'Rio Verde', 'GO'),
('TECH DATA BRASIL LTDA', 'Goiânia', 'GO'),
('ALJAN INFORMÁTICA LTDA', 'Goianópolis', 'GO'),
('KAIZEN CONSULTORIA E SERVIÇOS EM INFORMÁTICA LTDA', 'Aparecida de Goiânia', 'GO'),
('LOJAS FRANCES', 'Rio de Janeiro', 'RJ'),
('LOJAS GINGA', 'Angra dos Reis', 'RJ'),
('LOLAS HORAN', 'Vitória', 'ES'),
('LOJAS IGIL', 'Vila Velha', 'ES'),
('LOJAS EXCEL', 'Capim Grosso', 'MS');


-- INSERIR VENDEDOR
INSERT INTO VENDEDOR
VALUES ('CARLOS JERONIMO DA SILVA', 1200),
('MARCOS SILVA SALAZAR', 1200),
('NIVALDO SILVA', 5700),
('FRANCISCO BENTO DA SILVA FILHO', 1780),
('VALDIVINO DO NASCIMENTO MORAIS', 3450),
('MARILDA TEREZA CLEMENTE', 1780),
('SILVANA FLAVIA DOS SANTOS', 3450);

-- INSERIR PRODUTOS
INSERT INTO PRODUTO
VALUES ('Geladeira',1949),
('Máquina de Lavar', 1299),
('Micro Ondas', 1800),
('Fogão', 699),
('Lava Louças', 1896.90),
('Fritadeira', 399.90),
('Panela de Pressão Elétrica', 199.90),
('Aspirador de Pó', 129.90),
('Cafeteira', 399),
('TV de LED 32', 1099 ),
('TV de LED 42', 1849),
('Micro System', 425),
('Camera Digital', 399.20),
('Filmadora', 1399),
('Barbeador', 149.90),
('Depilador', 119.90);

-- INSERIR PEDIDO
INSERT INTO PEDIDO
VALUES ('001', '1', '1', '1','01/10/2017'),
('001', '1', '1', '2', '01/10/2017'),
('002', '2', '2', '3', '02/20/2017'),
('002', '2', '2', '5', '02/20/2017'),
('002', '2', '2', '7', '02/20/2017'),
('003', '3', '3', '8', '03/08/2017'),
('004', '5', '4', '10', '03/10/2017'),
('005', '6', '5', '11', '04/01/2017'),
('006', '7', '3', '12', '04/07/2017'),
('006', '7', '3', '13', '04/07/2017'),
('007', '8', '1', '15', '04/10/2017'),
('008', '9', '5', '16', '04/28/2017'),
('008', '9', '5', '4', '04/28/2017'),
('008', '9', '5', '6', '04/28/2017'),
('009', '4', '4', '1', '05/02/2017'),
('010', '5', '4', '16', '05/10/2017'),
('010', '5', '4', '3', '05/10/2017'),
('010', '5', '4', '14', '05/10/2017'),
('010', '5', '4', '5', '05/10/2017'),
('011', '10', '6', '2', '01/10/2018'),
('012', '11', '7', '3', '02/20/2018'),
('013', '12', '2', '5', '02/20/2018'),
('014', '13', '2', '7', '02/20/2018'),
('014', '13', '3', '8', '02/20/2018'),
('015', '16', '7', '10', '03/10/2018'),
('015', '16', '7', '11', '03/10/2018'),
('015', '16', '7', '12', '03/10/2018'),
('015', '16', '7', '13', '03/10/2018'),
('015', '16', '7', '15', '03/10/2018'),
('016', '8', '5', '16', '04/01/2018'),
('016', '8', '5', '4', '04/01/2018'),
('016', '8', '5', '6', '04/01/2018'),
('017', '19', '4', '1', '04/10/2018'),
('018', '20', '3', '16', '04/10/2018'),
('018', '20', '3', '3', '04/10/2018'),
('019', '14', '1', '14', '04/10/2018'),
('020', '1', '2', '5', '04/28/2018')


