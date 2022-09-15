import { api } from './api';

function service() {
  const resource = '/pokemon';

  async function getAllPokemon() {
    try {
      const response = await api.get(`${resource}/?limit=100000&offset=0`);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  return {
    getAllPokemon,
  };
}

export const pokemonService = service();
