<template>
  <div class="custom-wrapper pure-g" id="menu">
    <div class="pure-u-1 pure-u-md-1-3">
      <div class="pure-menu">
        <a href="#" class="pure-menu-heading custom-brand">vue-readme</a>
        <a href="#" class="custom-toggle" id="toggle"><s class="bar"></s><s class="bar"></s></a>
      </div>
    </div>
    <div class="pure-u-1 pure-u-md-1-3">
      <div class="pure-menu pure-menu-horizontal custom-can-transform">
        <ul class="pure-menu-list">
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">About</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="pure-u-1 pure-u-md-1-3">
      <div class="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
        <ul class="pure-menu-list">
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Yahoo</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">W3C</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pure-menu-heading {
  color: #edf6ff;
}

.pure-menu-link {
  color: #edf6ff;
}

.custom-wrapper {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#8ca6db+0,b993d6+100 */
  /* #8ca6db, #b993d6 */
  background: rgb(140,166,219); /* Old browsers */
  background: -moz-linear-gradient(left,  rgba(140,166,219,1) 0%, rgba(185,147,214,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left,  rgba(140,166,219,1) 0%,rgba(185,147,214,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right,  rgba(140,166,219,1) 0%,rgba(185,147,214,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8ca6db', endColorstr='#b993d6',GradientType=1 ); /* IE6-9 */
  -webkit-font-smoothing: antialiased;
  height: 80px;
  -webkit-transition: height 0.5s;
  -moz-transition: height 0.5s;
  -ms-transition: height 0.5s;
  transition: height 0.5s;
  overflow: hidden;
  box-shadow: 0px 8px 8px rgba(164, 182, 216, 0.5);
}

.custom-wrapper.open {
  height: 14em;
}

.custom-menu-3 {
  text-align: right;
}

.custom-toggle {
  width: 34px;
  height: 34px;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}

.custom-toggle .bar {
  background-color: #777;
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 100px;
  position: absolute;
  top: 18px;
  right: 7px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}

.custom-toggle .bar:first-child {
  -webkit-transform: translateY(-6px);
  -moz-transform: translateY(-6px);
  -ms-transform: translateY(-6px);
  transform: translateY(-6px);
}

.custom-toggle.x .bar {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.custom-toggle.x .bar:first-child {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

@media (max-width: 47.999em) {
  .custom-menu-3 {
    text-align: left;
  }

  .custom-toggle {
    display: block;
  }
}
</style>

<script>
export default {
  name: 'hello',
  mounted() {
    /* eslint-disable */
    console.log(window);
    var menu = document.getElementById('menu');
    console.log(menu);
    var WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';

    function toggleHorizontal() {
      [].forEach.call(
        document.getElementById('menu').querySelectorAll('.custom-can-transform'),
        function(el) {
          el.classList.toggle('pure-menu-horizontal');
        }
      );
    };

    function toggleMenu() {
      menu.classList.contains('open')
        ? setTimeout(toggleHorizontal, 500)
        : toggleHorizontal();
      menu.classList.toggle('open');
      document.getElementById('toggle').classList.toggle('x');
    };

    function closeMenu() {
      if (menu.classList.contains('open')) {
        toggleMenu();
      }
    }

    document.getElementById('toggle').addEventListener('click', function(e) {
      toggleMenu();
      e.preventDefault();
    });

    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);

    /* eslint-enable */
  },
};

</script>
