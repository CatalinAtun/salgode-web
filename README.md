<!-- [![travisB]][travisL] -->
[![stdVersionB]][stdVersionL]
[![commitsB]][commitsL]
[![prettierB]][prettierL]

# Salgode API

App Web para compartir viajes hecha en [React](https://reactjs.org/).
Mobile se encuentra [aquí](https://github.com/Varuscl/salgode/).
Backend se encuentra [aquí](https://github.com/Varuscl/salgode-api).


Sigue el desarrollo web en [nuestro Trello web](https://trello.com/b/RpaMyHnH/salgode-web).
El desarrollo móvil y backend [aquí](https://trello.com/b/GCTJ1iMU/salgode).

## Indice

- [Scripts](#scripts)
- [Workflow](#workflow)
  - [Gitflow](#gitflow)
  - [Release](#release)
- [Motores](#motores)

## Scripts

- `yarn dev`

  Corre la aplicación en modo desarrollo

- `yarn lint`

  Corre el verificador de estilos.

- `yarn lint:fix`

  Corrige las fallas de estilos que se pueden corregir automáticamente.

## Workflow

### Development

  - Las ramas `feat/*`, `fix/*`, `chore/*`, `hotfix/*` and `docs/*` se ven bien con `dash-case`.

  - Usamos **squash and merge** a `dev` usando [conventional commits](https://conventionalcommits.org).

### Release

  - Hacemos **merge** de `dev` a `master` localmente.

  - Si el _fast-forward_ no es posible, usamos `prerelease: merge branch 'dev'` como _commit message_.

  - Luego hacemos el _release_ usando [standard version](https://github.com/conventional-changelog/standard-version#installation) con el comando `yarn release`, que se encarga de generar el CHANGELOG de la versión automáticamente y subir los cambios a GitHub con el tag de la nueva versión.

## Motores

  - node ^12.9.1
  - yarn ^1.17.3

<!-- BADGES -->

<!-- [travisB]:https://travis-ci.com/
[travisL]:https://travis-ci.com/ -->

[stdVersionB]:https://img.shields.io/badge/release-standard%20version-blue.svg
[stdVersionL]:https://github.com/conventional-changelog/standard-version

[commitsB]:https://img.shields.io/badge/commits-conventional%20-blue.svg
[commitsL]:https://conventionalcommits.org

[prettierB]:https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettierL]:https://github.com/prettier/prettier
