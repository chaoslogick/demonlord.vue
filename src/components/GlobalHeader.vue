<template>
  <header id="global-header">
    <figure id="triangles" class="triangles" data-paroller-factor></figure>
    <nav>
      <div class="interior">
        <router-link to="/" class="logo"><img src="@/assets/img/logo-hvlogo-blk.png" alt="Hyperlotus" /></router-link>
        <nav-menu />

      </div><!-- /interior -->
    </nav><!-- /nav -->

    <div class="header-content">
      <div class="interior">
        <h1 id="headline"></h1>
      </div>
    </div><!-- /header-content -->
  </header> <!-- /header -->
</template>

<script>
import navMenu from '@/components/NavMenu.vue';
import Delaunator from 'delaunator';
//import Hydra from 'hydra-synth';

export default {
  name: 'GlobalHeader',
  components: {
    'nav-menu': navMenu,
  },
  methods: {
    hydra() {
        const hydra = new Hydra({ detectAudio: false });
        osc(4, 0.1, 1.2).out();
    },
    delaunay() {
      // delaunay triangles
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const len = 130;
      const points = Array.from({ length: len }, () => new Array(getRandomInt(24, window.innerWidth), getRandomInt(24, window.innerWidth)));
      const delaunay = Delaunator.from(points);

      function edgesOfTriangle(t) { return [3 * t, 3 * t + 1, 3 * t + 2]; }

      function pointsOfTriangle(delaunay, t) {
        return edgesOfTriangle(t)
          .map(e => delaunay.triangles[e]);
      }

      function circumcenter(a, b, c) {
        const ad = a[0] * a[0] + a[1] * a[1];
        const bd = b[0] * b[0] + b[1] * b[1];
        const cd = c[0] * c[0] + c[1] * c[1];
        const D = 2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
        return [
          1 / D * (ad * (b[1] - c[1]) + bd * (c[1] - a[1]) + cd * (a[1] - b[1])),
          1 / D * (ad * (c[0] - b[0]) + bd * (a[0] - c[0]) + cd * (b[0] - a[0])),
        ];
      }

      function triangleCenter(points, delaunay, t) {
        const vertices = pointsOfTriangle(delaunay, t).map(p => points[p]);
        return circumcenter(vertices[0], vertices[1], vertices[2]);
      }

      function voronoiSvg(points, delaunay) {
        const results = ['<g class="edges">'];
        for (let e = 0; e < delaunay.halfedges.length; e++) {
          if (e < delaunay.halfedges[e]) {
            const a = triangleCenter(points, delaunay, Math.floor(e / 3));
            const b = triangleCenter(points, delaunay, Math.floor(delaunay.halfedges[e] / 3));
            results.push(`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/>`);
          }
        }
        results.push('</g>');
        return results.join('');
      }

      function resize() {
        let svgWidth;
        let svgHeight;

        svgWidth = window.innerWidth / 1.66;
        svgHeight = window.innerHeight;

        document.querySelector('#triangles').innerHTML = `
          <svg viewBox="100 100 ${svgWidth} ${svgHeight}">
            ${voronoiSvg(points, delaunay)}
          </svg>`;
      }
      resize();
      window.onresize = resize;
    },
    newHeadline() {
      const headline = [
        'Placeholder text for a much better headline later',
      ];
      let randomHeadlineValue = headline[Math.floor(Math.random() * headline.length)];
      document.getElementById('headline').innerHTML = randomHeadlineValue;
    },
  },
  watch: {
    $route() {
      this.delaunay();
      this.newHeadline();
    }
  },
  mounted() {
    this.delaunay();
    this.newHeadline();
  }
};
</script>
