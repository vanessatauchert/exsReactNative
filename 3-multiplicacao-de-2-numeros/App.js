import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: 0,
      numero2: 0,
      resultado: ''
    };
    
    this.pegaNum1 = this.pegaNum1.bind(this);
    this.pegaNum2 = this.pegaNum2.bind(this);
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    res = this.state.numero1 * this.state.numero2
    this.setState({
      resultado: 'Resultado: ' + res
    });
  }

  pegaNum1(num1){
    this.setState({numero1: num1});
  }

  pegaNum2(num2){
    this.setState({numero2: num2});
  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>Multiplicador de Números</Text>
 
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número..."
        onChangeText={this.pegaNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número..."
        onChangeText={this.pegaNum2}
      />

      <Button title="Calcular" onPress={this.calcular} />
 
      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}
 
export default App;