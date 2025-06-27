<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Cableado estructurado',
          significado:
            'Sistema de interconexión de cables y componentes que permite la transmisión de datos y servicios de telecomunicaciones en una infraestructura.',
        },
        {
          termino: 'Código Eléctrico Colombiano',
          significado:
            'Normativa nacional (NTC 2050) que regula las instalaciones eléctricas en Colombia, asegurando la seguridad y el correcto funcionamiento de los sistemas.',
        },
        {
          termino: 'Control de calidad',
          significado:
            'Proceso de verificación y aseguramiento de que todos los componentes y procedimientos de instalación cumplen con los estándares de rendimiento establecidos.',
        },
        {
          termino: 'Documentación técnica',
          significado:
            'Conjunto de documentos que incluyen planos, diagramas y especificaciones técnicas que guían la instalación y el mantenimiento del sistema de cableado.',
        },
        {
          termino: 'Estándares internacionales',
          significado:
            'Conjuntos de normas que regulan la instalación y funcionamiento de sistemas de cableado a nivel global, como ANSI/TIA-568 e ISO/IEC 11801.',
        },
        {
          termino: 'Fundamentos de instalación',
          significado:
            'Conjunto de conocimientos y procedimientos básicos necesarios para realizar la instalación adecuada de un sistema de cableado estructurado.',
        },
        {
          termino: 'Gestión de riesgos',
          significado:
            'Proceso de identificación, evaluación y mitigación de posibles peligros en la instalación de sistemas eléctricos y de cableado.',
        },
        {
          termino: 'Mejores prácticas',
          significado:
            'Estrategias y procedimientos recomendados para garantizar la seguridad, eficiencia y calidad en la instalación y mantenimiento de cableado estructurado.',
        },
        {
          termino: 'Marco normativo',
          significado:
            'Conjunto de regulaciones y estándares que guían la instalación y operación de sistemas de cableado, incluyendo normativas nacionales e internacionales.',
        },
        {
          termino: 'Normas de seguridad',
          significado:
            'Conjunto de directrices que establecen procedimientos y requisitos para garantizar un ambiente de trabajo seguro durante la instalación de cableado estructurado.',
        },
        {
          termino: 'Planos y diagramas',
          significado:
            'Representaciones gráficas que ilustran la disposición y conexión de componentes en un sistema de cableado estructurado, facilitando la instalación y mantenimiento.',
        },
        {
          termino: 'Procedimientos de instalación',
          significado:
            'Secuencia de pasos y técnicas a seguir durante la instalación de un sistema de cableado, asegurando su correcto funcionamiento y cumplimiento normativo.',
        },
        {
          termino: 'Reglamento Técnico de Instalaciones Eléctricas (RETIE)',
          significado:
            'Normativa que establece los requisitos técnicos y de seguridad para las instalaciones eléctricas en Colombia.',
        },
        {
          termino: 'Seguridad eléctrica',
          significado:
            'Conjunto de prácticas y normas que buscan prevenir accidentes y garantizar la protección de las personas y bienes durante la manipulación de sistemas eléctricos.',
        },
        {
          termino: 'Simbología eléctrica',
          significado:
            'Conjunto de símbolos y convenciones gráficas utilizados en planos y diagramas eléctricos para representar componentes, circuitos y conexiones.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
