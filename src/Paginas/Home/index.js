import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import { Feather } from '@expo/vector-icons';

import Filmes from '../data/movies.js';

import Cabecalho from '../../components/cabecalho';
import Pesquisa from '../../components/barraPesquisa';
import Banners from '../../components/Banners';
import CardMovies from '../../components/cardsFilmes';

export default function Home(){
     return(

            <View style={styles.container}>


            {/* Inicio cabeçalho*/}
            <Cabecalho/>
            {/* Fim cabeçalho*/}

            {/* Inicio Barra de Pesquisa */}
            <Pesquisa/>
            {/* Fim Barra de Pesquisa */}

            {/*inicio do banner*/}
            <Banners/>
            {/*Fim do banner*/}

            <FlatList

            data ={Filmes}
            horizontal = {true}
            reyExtractor={(item) => item.id}
            renderItem= {({item}) => (

                <CardMovies titulo = {item.nome} nota = {item.nota} imagem = {item.imagem}/>

            )} />

            
        </View>
     )
     }