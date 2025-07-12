# Use uma imagem base Node oficial
FROM node:18-alpine3.18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copie package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código para dentro do container
COPY . .

# Build da aplicação para produção
RUN npm run build

# Exponha a porta que a aplicação vai rodar
EXPOSE 3001

# Comando para rodar a aplicação em produção
CMD ["npm", "start"]
