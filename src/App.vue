<template>
  <router-view/>
</template>

<style>
body {
  font-family: 'Montserrat', Arial, sans-serif;
}

* {
  margin: 0;
  padding: 0;

  border: 0;
}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

:focus, :active {
  outline: none;
}

a:focus, a:active {
  outline: none;
}
nav, footer, header, aside {
  display: block;
}

html, body {
  font-size: 14px;
  line-height: 1;

  width: 100%;
  height: 100%;

  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;

  overflow-x: hidden;
}

input, button, textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

input:focus {
  outline: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;

  border: 0;
}

button:focus {
  outline: none;
}

a, a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1, h2, h3, h4, h5 {
  font-size: inherit;
  font-weight: 400;
}
</style>
