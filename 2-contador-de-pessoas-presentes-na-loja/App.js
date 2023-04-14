import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';

export default function App(){
  
  const [contador, setContador] = useState(0)

  function alterarContador(sinal){
    if (sinal == "+"){
      setContador(contador+1)
    }
    else{
      if (contador > 0){
        setContador(contador-1)
      }
    }
  }

  return(
    <View style={{ marginTop: 20 }}>

      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'orange'}}>Contador de Pessoas</Text>

        <Text style={{marginTop: 30, fontSize: 48, color: 'red'}}>{contador}</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Button title="+" onPress={() => alterarContador('+')}/>
      </View>

      <View style={{marginTop: 20}}>
        <Button title="-" onPress={() => alterarContador('-')} />
      </View>

    </View>
  )
}