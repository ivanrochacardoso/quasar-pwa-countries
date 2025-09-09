<template>
  <q-page padding>
    <div class="text-h5 q-mb-md"></div>

    <q-btn round icon="refresh" title="Atualizar" color="primary" @click="fetchCountries" class="q-mb-md" />

    <q-inner-loading :showing="loading">
      <q-spinner />
    </q-inner-loading>

<div v-if="error" class="text-red">{{ error }}</div>
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  <q-card v-for="c in countries" :key="c.name" class="shadow-md flex flex-row items-center">
    <!-- Conteúdo do card (nome, população, região) -->
    <q-card-section class="flex-grow">
      <div class="text-subtitle1">{{ c.name }}</div>
      <div class="text-caption text-grey">População: {{ c.population.toLocaleString() }}</div>
      <div class="text-caption">Região: {{ c.region }}</div>
    </q-card-section>
 <q-space />
    <!-- Bandeira à direita -->
    <img class="q-mr-md"
      :src="c.flag"
      :alt="c.name"
  style="height: 80px; width: auto; margin-left: 10px;"
    />

  </q-card>
</div>

  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCountries } from 'src/composables/useCountries'

const { countries, loading, error, fetchCountries } = useCountries()

onMounted(fetchCountries)
</script>

