import { ref } from 'vue'
import axios from 'axios'

export function useCountries() {
  const countries = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchCountries() {
    loading.value = true
    error.value = null
    try {
      //const { data } = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,region,population')
      const { data } = await axios.get('https://restcountries.com/v3.1/alpha?codes=br,170,no,est,pe,ar')


      countries.value = data.map(c => ({
        name: c.name.common,
        flag: c.flags.png.replace('w320', 'w80'),
        population: c.population,
        region: c.region
      }))
    } catch (err) {
      error.value = 'Erro ao buscar países' + err
    } finally {
      loading.value = false
    }
  }

  return { countries, loading, error, fetchCountries }
}
