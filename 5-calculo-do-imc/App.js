import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';

const App = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const res = peso / (altura * altura);
    if (res < 18.5)
      setResultado('Abaixo do peso');
    else if (res < 24.9)
      setResultado('Peso normal');
    else if (res < 29.9)
      setResultado('Sobrepeso');
    else if (res < 34.9)
      setResultado('Obesidade Grau I');
    else if (res < 39.9)
      setResultado('Obesidade Grau II');
    else
      setResultado('Obesidade Grau III ou Mórbida');
  };

  const pegaPeso = (p) => {
    setPeso(p);
  };

  const pegaAltura = (a) => {
    setAltura(a);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo do IMC</Text>

      <Image
        source={{uri: 'https://inuba.com/wp-content/uploads/2022/03/como-calcular-indice-masa-corporal.webp'}}
        style={styles.imagem}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o peso..."
        onChangeText={pegaPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a altura..."
        onChangeText={pegaAltura}
      />

      <Button title="Calcular" onPress={calcular} />

      <Text style={styles.texto}> {resultado} </Text>
    </View>
  );
};

export default App;