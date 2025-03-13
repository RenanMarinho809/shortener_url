📌 API de Encurtador de Links com JavaScript e MongoDB

📖 Introdução

Esta API foi desenvolvida para encurtar URLs longas e fornecer estatísticas de acesso. Ela é construída utilizando Node.js, Express.js e MongoDB para armazenar os links encurtados e seus metadados.

.

🛠️ Tecnologias Utilizadas

Node.js - Ambiente de execução JavaScript

Express.js - Framework para criação da API

MongoDB - Banco de dados NoSQL

Mongoose - ODM para facilitar a manipulação do MongoDB

⚙️ Como Funciona

O usuário envia uma URL longa para a API.

A API gera um identificador curto para a URL usando Nanoid.

A URL encurtada é armazenada no MongoDB.

Quando alguém acessa a URL encurtada, a API redireciona para o link original e registra a visita.

📌 Conclusão

Essa API fornece uma solução simples e eficiente para encurtamento de URLs, permitindo o rastreamento de acessos e proporcionando uma experiência otimizada para os usuários.

📌 Próximos passos:

Implementar autenticação JWT para criar links privados.

Adicionar suporte a métricas avançadas (IP, localização, tempo de acesso).

Criar uma interface frontend para gerenciamento dos links.