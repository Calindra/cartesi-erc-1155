# Cartesi POC

Somente para testar o voucher da Cartesi

Compile o contrato:
```shell
npx hardhat compile
```
Output:
```shell
Downloading compiler 0.8.17
Compiled 11 Solidity files successfully
```

Faça o deploy localmente no hardhat que está rodando o ambiente Cartesi:
```shell
npx hardhat run scripts/deploy.js
```
Output:
```shell
Contract deployed to address: 0x9E545E3C0baAB3E08CdfD552C960A1050f373042
```

## Como criar um voucher

Baixe o projeto
```shell
git clone https://github.com/Calindra/rollups-examples.git
cd ./rollups-examples
git checkout feature/solana-adapter
```

Rode o "backend":
```shell
cd ./solana-adapter
./dapp-start-prod.sh
```

Rode o frontend:
```shell
cd ./solana-front/frontend
yarn && yarn start
```

TODO: por enquanto o botao de criar conta está gerando um voucher.

## Como executar um voucher

Setup do frontend-console:
```shell
cd ./rollups-examples/frontend-console
yarn
```

Liste os vouchers:
```shell
yarn start voucher list
```
Avance o tempo para fechar o epoch:

```shell
curl --data '{"id":1337,"jsonrpc":"2.0","method":"evm_increaseTime","params":[864010]}' http://localhost:8545
```

Execute o voucher: 
```shell
yarn start voucher execute --id 1
```
Nessa etapa o Portal da Cartesi vai chamar o método mintNFT.
