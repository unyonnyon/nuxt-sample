<template>
  <div>
    <header>
      <Nav />
    </header>
    <slot />
    <footer>Footer elements</footer>
  </div>
</template>

<style scoped>
header {
  background-color: #0033ff;
}

footer {
  background-color: #0033ff;
}
</style>
