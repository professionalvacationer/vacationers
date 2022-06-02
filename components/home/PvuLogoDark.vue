<template>
  <img class="PvuLogo" alt="PVU Logo" src="/pvuOfficial.svg" />
</template>

<style>
.PvuLogo {
  height: 220px;
  width: 160px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
