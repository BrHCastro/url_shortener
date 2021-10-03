![LICENSE](https://img.shields.io/github/license/brhcastro/url_shortener)
![VERSION](https://img.shields.io/github/package-json/v/BrHCastro/url_shortener)
# Encurtador de URL ✂
Desenvolvido durante o bootcamp *[Eduzz Fullstack Developer da Digital Innovation One](https://digitalinnovation.one/)*

## DESCRIÇÃO 📃
Neste projeto, foi desenvolvido um encurtador de url a partir da construção de uma API com NodeJS, Typescript e MongoDB para a base de dados.

## Endpoits: 🎯
> **POST/shorten**
- Este endpoint é responsável por fazer o encurtamento da url enviada.
```JSON
  {
    "originURL":"https://www.linkedin.com/in/henrique-castro-a26504118/",
    "title": "my-linkedin" 
  }
  
  // Obs.: title é opcional
```
- Respostas:
  - ✅ OK! 200 | Em caso de verdadeiro, você receberá JSON com as informações da nova URL e este será salvo no banco de dados.
  ```JSON
    {
      "hash": "Uvo8qrBdz",
      "originURL": "https://www.linkedin.com/in/henrique-castro-a26504118/",
      "shortURL": "https://domain/my-linkedin/Uvo8qrBdz",
      "_id": "615a0de1b74e8fa070b93acd",
      "__v": 0
    }
  ```
  - ❌ BAD REQUEST! 400 | URL Já existe no banco de dados.
  ```JSON
    {
      "message": "URL already exists"
    }
  ```
> **GET/:title?/:hash**
- Este endpoint é responsável por redirecionar o cliente para a URL original.
- Respostas:
  - ✅ OK! 200 | Será redirecionando para a URL origial.
  - ❌ BAD REQUEST! 400 | URL informada é inválida.
  ```JSON
    {
      "message": "Invalid URL"
    }
  ```
  

## Autor: 😎
Henrique de Castro

## Licença: 🤝
Projeto está sob licença do [MIT](https://opensource.org/licenses/mit-license.php)
