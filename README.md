# Desmanche do Bakana

Site institucional do Desmanche do Bakana. Reúne informações sobre a empresa, fotos do estoque, contato pelo WhatsApp e localização.

**Acesse o site:** [cargnieli2016.github.io/desmache-do-bakana](https://cargnieli2016.github.io/desmache-do-bakana/)

## Recursos

- Apresentação da empresa e do estoque de veículos.
- Consulta de peças com contato direto pelo WhatsApp.
- Mapa com a localização da empresa.
- Layout adaptado para computadores e dispositivos móveis.

## Tecnologias

- [React](https://react.dev/) e [TypeScript](https://www.typescriptlang.org/) para a interface.
- [Vite](https://vite.dev/) para desenvolvimento e build.
- [Tailwind CSS](https://tailwindcss.com/) para os estilos.
- [TanStack Start](https://tanstack.com/start) e [TanStack Router](https://tanstack.com/router) para a aplicação e navegação.
- [GitHub Pages](https://pages.github.com/) para hospedagem.

## Executar localmente

É necessário ter o [Bun](https://bun.sh/) instalado.

```sh
bun install
bun run dev
```

O servidor local informa o endereço para acessar o site no terminal.

## Scripts disponíveis

| Comando           | Descrição                                   |
| ----------------- | ------------------------------------------- |
| `bun run dev`     | Inicia o servidor de desenvolvimento.       |
| `bun run build`   | Gera a versão de produção em `dist/client`. |
| `bun run preview` | Pré-visualiza a versão gerada.              |
| `bun run lint`    | Executa a análise estática do código.       |
| `bun run test`    | Executa os testes automatizados.            |

## Publicação

O GitHub Actions publica o site no GitHub Pages automaticamente a cada atualização da branch `main`. Também é possível iniciar a publicação manualmente pela aba **Actions** do repositório.
