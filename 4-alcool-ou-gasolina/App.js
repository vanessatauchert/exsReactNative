import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';

const App = () => {
  const [precoAlcool, setPrecoAlcool] = useState(0);
  const [precoGasolina, setPrecoGasolina] = useState(0);
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const res = precoAlcool / precoGasolina;
    const texto = res > 0.7 ? 'Melhor Gasolina' : 'Melhor Álcool';
    setResultado(texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>
      <Image
        source={{uri: 'https://i1.wp.com/veiculosnaweb.com.br/wp-content/uploads/2019/07/gasolina-alcool-min-1.jpg?fit=772%2C323&ssl=1'}}
        style={{width: 200, height: 100, alignSelf: 'center', marginTop: 5}}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o preço do álcool..."
        onChangeText={setPrecoAlcool}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o preço da gasolina..."
        onChangeText={setPrecoGasolina}
      />
      <Button title="Calcular" onPress={calcular} />
      <Text style={styles.texto}>{resultado}</Text>
    </View>
  );
};

export default App;