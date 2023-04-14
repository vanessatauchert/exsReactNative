import React from 'react';
import { View, Text, Image} from 'react-native';

function App(){
  return(
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginTop: 25}}>Meu Perfil Profssional</Text>
        <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/60265204?v=4' }}
            style={{width: 120, height: 120, marginTop: 10}}
        />
      </View>

      <View style={{marginLeft: 5}}>
        <Text style={{color: 'blue', marginTop: 15}}>Dados pessoais:</Text>
        <Text>Vanessa Oliveira, 30 anos</Text>

        <Text style={{color: 'blue', marginTop: 15}}>Formação:</Text>
        <Text>Sitemas para Internet - FATEC Rubens Lara</Text>
        <Text>Julho 2020 - Julho 2023</Text>

        <Text style={{color: 'blue', marginTop: 15}}>Experiência:</Text>
        <Text>Estágio Desenvolvedora Java - IBM: junho de 2022 - Present (11 meses)
Java | Projeto Petrobras
Desenvolvimento e suporte Back end com Java 6, 8 e 11+ 
SpringBoot 
SQL e Oracle
Desenvolvimento e suporte Front end com Angular e Bootstrap
Testes com JUnit
Análise de Código
Versionamento com Git
Jira
Metodologia Ágil
</Text>
        <Text style={{marginTop: 15}}>Estágio Analista de TI - Itaú Unibanco: Suporte a desenvolvedores que utilizam a API e serviços de e-commerce,
analise de código de aplicações, suporte a módulos e SDKs eRede, analise
de retorno Json e XML, suporte a APIS Rest e Soap, testes de api utilizando
a ferramenta postman, criação de ambientes. Participação de reuniões de
projetos, e metodologia agil.</Text>

        <Text style={{color: 'blue', marginTop: 15}}>Projetos:</Text>
        <Text>Udemy
Curso Livre Projeto FullStack com SpringBoot e Angular 12, Java · (outubro de
2022 - outubro de 2022)</Text>
      </View>
    </View>
  )
}

export default App;