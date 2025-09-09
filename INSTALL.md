* PWA instalável (ícone, splash, offline).
* API externa (dados + bandeiras).
* Cache automático (textos + imagens).
* Funciona mesmo sem internet.

---

###  Esqueleto do projeto Quasar PWA (Countries)

1. Criar o projeto:

```bash
npm init quasar
cd quasar-pwa-countries
quasar mode add pwa
```

2. Selecionar recursos do projeto:

- axios
- ESLint


3. Criar um composable para buscar países (`src/composables/useCountries.js`):

4. Modificar página `src/pages/IndexPage.vue`:

5. Configurar o PWA para **cachear imagens e JSON**:
   Editar `quasar.config.js` → seção `pwa` → `workboxOptions`:

---

Resultado:

* Na primeira visita → dados e bandeiras são baixados.
* Offline → o app continua mostrando lista + imagens.
* "Atualizar" quando voltar online.

---


