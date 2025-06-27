<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Cardozo Cabal, M. C., Castro Aranda, F., & Gómez Luna, E. (2023). Revisión crítica de herramientas para monitoreo y gestión en transformadores de distribución ante la integración de recursos de energía distribuida. <i>Ingeniería</i>, 28(1), e18786. Universidad Distrital Francisco José de Caldas. ',
        link: 'https://doi.org/10.14483/23448393.18786',
      },
      {
        referencia:
          'Gil Montoya, F., Manzano-Agugliaro, F., Gómez López, J., & Sánchez Alguacil, P. (2012). Técnicas de investigación en calidad eléctrica: Ventajas e inconvenientes. <i>Dyna</i>, 79(173), 66-74. Universidad Nacional de Colombia.',
      },
      {
        referencia:
          'IEEE, C62.82.1, “IEEE Standard for Insulation Coordination-Definitions, Principles, and Rules ", 2010, en IEEE Std C62.82.1-2010 (Revisión de IEEE Std 1313.1-1996) , vol., No., Págs. 1-22, 15 de abril de 2011, doi: 10.1109 / IEEESTD.2011.5754137. Disponoble en:',
        link:
          'https://ieeexplore.ieee.org/document/5754137/references#references',
      },
      {
        referencia:
          'International Electrotechnical Commission (IEC) 60071-1, "Coordination Insulation, definitions, principies, and rule", edition 8.02006.',
      },
      {
        referencia:
          'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (s.f.). <i>Norma Técnica Colombiana NTC 2050: Código Eléctrico Colombiano</i>. Recuperado de ',
        link:
          'https://www.ugc.edu.co/pages/juridica/documentos/institucionales/Norma_%20NTC_2050_98_codigo_electrico_col.pdf',
      },
      {
        referencia:
          'Maza Amador, J. de J. (2019). <i>Manual técnico de normatividad y estándares internacionales aplicado al sistema de cableado estructurado (SCS) </i>(2.ª ed.). SENA. ',
        link: 'https://repositorio.sena.edu.co/handle/11404/5833',
      },
      {
        referencia:
          'Melguizo Bermúdez, S. (2009). <i>Instalaciones eléctricas: teoría y aplicaciones domiciliarias</i> (11.ª ed.). Centro de Publicaciones Universidad Nacional.',
      },
      {
        referencia:
          'Ministerio de Minas y Energía. (2024). <i>Resolución número 40150 de 03 de mayo de 2024</i>. Recuperado de ',
        link:
          'https://www.ugc.edu.co/pages/juridica/documentos/institucionales/Norma_%20NTC_2050_98_codigo_electrico_col.pdf',
      },
      {
        referencia:
          'North American Electric Reliability Council. “Electric System Restoration Reference Document”. Princeton Forrestal Village, New Jersey, April 1993. [Consultado 23 de enero de 2022]. Disponible en: ',
        link:
          'https://support.sosintl.com//AvatarHandler.ashx?radfile=%5CDepartments%5C1%5CStudy%20Guides%5CNERC%5CESRRef11.pdf',
      },
      {
        referencia:
          'Universidad Tecnológica De Bolívar “Guía Para Diseñar Instalaciones Eléctricas Domiciliarias Según Ntc 2050 Y Retie” 2012 ',
        link: 'https://biblioteca.utb.edu.co/notas/tesis/0063145.pdf',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
