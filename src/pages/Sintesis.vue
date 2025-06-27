<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <p>
        El siguiente diagrama proporciona una visión general sintetizada de los
        principales temas abordados en este componente sobre la instalación de
        cableado estructurado. Este mapa está diseñado para ayudar al lector a
        visualizar la interconexión entre los diversos elementos que conforman
        el proceso integral de instalación y cumplimiento normativo.
      </p>
      <p>
        En el origen del diagrama se encuentra el concepto principal de
        instalación de cableado estructurado, del cual se ramifican cuatro áreas
        fundamentales: marco normativo, fundamentos de instalación,
        documentación técnica y seguridad y buenas prácticas. Cada una de estas
        áreas se desglosa en subtemas reflejando la estructura y el contenido
        del componente, desde los principios normativos y técnicos hasta los
        procedimientos de seguridad.
      </p>
      <p>
        Este diagrama sirve como una guía visual para navegar por los conceptos
        presentados en el texto, permitiendo al lector comprender rápidamente el
        flujo y la interrelación de los procesos involucrados en la instalación
        de sistemas de cableado estructurado. Al revisar este mapa, el aprendiz
        podrá apreciar cómo los diferentes aspectos, desde la normativa
        aplicable hasta las prácticas de seguridad, se integran para formar un
        enfoque cohesivo y sistemático.
      </p>
      <p class="mb-5">
        Se invita a explorar este diagrama como un complemento al contenido
        detallado del componente, utilizándolo como una referencia rápida y un
        recordatorio visual de los conceptos primordiales en el campo de la
        instalación de cableado estructurado.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5 bgs p-4 brad">
          <figure>
            <img
              src="@/assets/curso/temas/sintesis.svg"
              alt="La Figura 4 se denomina «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre cableado estructurado: instalación y cumplimiento normativo y algunos subtemas que los integran."
            />
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
