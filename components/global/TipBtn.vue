<template>
  <v-dialog>
    <template #activator="{ on, attrs }">
      <v-btn
        id="hydrate"
        v-bind="attrs"
        class="ml-3 mr-2"
        small
        outlined
        color="accent"
        v-on="on"
      >
        <v-icon id="can" color="accent">mdi-watering-can</v-icon>
        ``
        <slot></slot>
      </v-btn>
    </template>
    <v-row class="d-flex justify-center py-4">
      <v-card class="d-flex justify-center py-2" flat width="400">
        <HydratePayPal />
      </v-card>
    </v-row>
  </v-dialog>
</template>
