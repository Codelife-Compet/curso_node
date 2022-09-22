# Capítulo 4

Essas são as notas referentes ao capítulo 4 do livro Programação web com node e express

## O que o capítulo traz de novidade

O capítulo atual traz como novidade a re-estruturação das pastas e organização do código usando eslint/prettier, a organização dos diretórios usando usando as melhores práticas consideradas pelo autor **David Flanagan**.

O livro adota como boas práticas, o **versionamento**, e a **garantia de qualidade** (**QA**)

Outro tema muito relevante tratado nesse capítulo são sobre os **módulos javascript**, e aqui trarei informações atuais sobre como lidamos com módulos no javascript hoje em dia.

## O que são melhores práticas

O termo *best pratices* é muito conhecido no universo da programação como um modelo a ser seguido. São formas de organização e estruturação do código que geralmente trazem bons resultados quando se está trabalhando com projetos reais, e que facilitam ou melhoram a manutenção do código.

Também é tido como o contrário/solução dos chamados *code smells* que são práticas ruins ou que podem causar problemas futuros em relação ao desenvolvimento do projeto.

> Nem sempre as melhores práticas são as mais rápidas, mas sim as práticas que trazem melhores resultados em vista do longo prazo.

## O que é versionamento

Se você é membro do Codelife, provavelmente já sabe algo sobre o controle de versões, graças ao [README do projeto](/README.md).
Mas basicamente o controle de versões permite que façamos coisas extraordinárias em relação a documentação, experimentação e organização de projeto.

- Cada membro é responsável pelo código que criou e podemos ver cada passo que foi feito até a entrega do código.
- É possível testar novas funcionalidades, criar novas coisas sem interferir no código principal, o que também é incrível.
- Poder voltar em alterações feitas anteriormente como se viajássemos no tempo no código, pra resolver aquele bug que sabe Deus o que pode ter causado...

Por fim é importante que você caro membro do Codelife, esteja habituado e pronto para usar o git e o github como ferramenta pois ele possibilita que façamos coisas excepcionais com nosso código. Uma recomendação do autor para aprendizado do git é [esse link](https://try.github.io) sinta-se a vontade para buscar esse conhecimento.

## Módulos

Ao efetuar o processo de instalação de um pacote usando o node ou o yarn que seja, aparece no diretório uma pasta chamada ***node_modules***.