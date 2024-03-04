import { createSlice } from '@reduxjs/toolkit';
import automotivoThumb from 'assets/categorias/thumbnail/automotivo.png';
import eletronicosThumb from 'assets/categorias/thumbnail/eletronicos.png';
import escritorioThumb from 'assets/categorias/thumbnail/escritorio.png';
import jogosThumb from 'assets/categorias/thumbnail/jogos.png';
import somThumb from 'assets/categorias/thumbnail/som.png';
import automotivoHeader from 'assets/categorias/header/automotivo.png';
import eletronicosHeader from 'assets/categorias/header/eletronicos.png';
import escritorioHeader from 'assets/categorias/header/escritorio.png';
import jogosHeader from 'assets/categorias/header/jogos.png';
import somHeader from 'assets/categorias/header/som.png';

const initialState = [{
    nome: 'Eletronicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: 'eletronicos',
    descricao: 'Os melhores eletronicos estao aqui.'
  },{
    nome: 'Automotivo',
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: 'automotivo',
    descricao: 'Os melhores equipamentos de veiculos estao aqui.'
  }, {
    nome: 'Jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: 'jogos',
    descricao: 'Os melhores jogos estao aqui.'
  }, {
    nome: 'Escritorio',
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: 'escritorio',
    descricao: 'Os melhores equipamentos de escritorio estao aqui.'
  }
  , {
    nome: 'Som',
    thumbnail: somThumb,
    header: somHeader,
    id: 'som',
    descricao: 'Os melhores equipamentos de som estao aqui.'
  }];

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
});

export default categoriasSlice.reducer;
