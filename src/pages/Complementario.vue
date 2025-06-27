<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: '1.  Marco normativo del cableado estructurado',
          referencia:
            'Camacol Colombia  (2024,septiembre 10) <i>Actualización Reglamento Técnico de Instalaciones Eléctricas (RETIE) Resolución 40117 de 2024</i>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=5tBwk7BPVFE ',
        },
        {
          tema: '1.  Marco normativo del cableado estructurado',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. <i>Procesos y normatividad del sector eléctrico</i>  (2023 julio 12)',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=QdO36H187yo ',
        },
        {
          tema: '2. Fundamentos de instalación',
          referencia:
            'AMGElectric (2024, junio 4). <i>Herramientas básicas de Electricista</i>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=oDL5vMZRzoU ',
        },
        {
          tema: '3. Documentación técnica',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 23). <i>Introducción a la documentación técnica de la instalación eléctrica</i>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=rtFjKCqvo04',
        },
        {
          tema: '5. Seguridad y buenas prácticas',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2022, marzo 4). <i>Riesgos de la electricidad: caso de ejemplo</i>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=ls-pANyapho ',
        },
        {
          tema: '5. Seguridad y buenas prácticas',
          referencia:
            'ARL SURA (2020, noviembre 10). <i>Las cinco reglas de oro para trabajos eléctricos</i>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=8UYgRMjtjPU',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
