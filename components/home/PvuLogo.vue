<template>
  <img class="PvuLogo" alt="PVU Logo" src="/pvulogo1.png" />
</template>

<style>
.PvuLogo {
  max-height: 220px;
  max-width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
