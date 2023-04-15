import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

export default function App() {
  const jobListings = [
    {
      title: 'Desenvolvedor Front-end',
      company: 'Empresa X',
      location: 'São Paulo, SP',
      description: 'Descrição da vaga 1',
      requirements: '- Experiência com HTML, CSS e JavaScript\n- Conhecimento em frameworks como React ou Angular',
    },
    {
      title: 'Analista de Dados',
      company: 'Empresa Y',
      location: 'Rio de Janeiro, RJ',
      description: 'Descrição da vaga 2',
      requirements: '- Experiência em análise de dados\n- Conhecimento em linguagens como Python ou Ruby',
    },
    {
      title: 'Gerente de Projetos',
      company: 'Empresa Z',
      location: 'Belo Horizonte, MG',
      description: 'Descrição da vaga 3',
      requirements: '- Experiência em gerenciamento de projetos\n- Conhecimento em metodologias ágeis',
    },
    {
      title: 'Gerente de Projetos Pleno',
      company: 'Empresa W',
      location: 'Belo Horizonte, MG',
      description: 'Descrição da vaga 4',
      requirements: '- Experiência em gerenciamento de projetos\n- Conhecimento em metodologias ágeis',
    },
    {
      title: 'Desenvolvedor Front-end',
      company: 'Empresa K',
      location: 'Rio de Janeiro, RJ',
      description: 'Descrição da vaga 5',
      requirements: '- Experiência com HTML, CSS e JavaScript\n- Conhecimento em frameworks como React ou Angular',
    },
  ];

  return (
    <ScrollView>
      {jobListings.map((listing, index) => (
        <View key={index} style={styles.jobContainer}>
          <View style={styles.jobInfoContainer}>
            <Text style={styles.jobTitle}>{listing.title}</Text>
            <Text style={styles.jobCompany}>{listing.company}</Text>
            <Text style={styles.jobLocation}>{listing.location}</Text>
          </View>
          <Text style={styles.jobDescription}>{listing.description}</Text>
          <Text style={styles.jobRequirements}>{listing.requirements}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  jobContainer: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  jobInfoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  jobCompany: {
    fontSize: 16,
    color: '#666',
    marginRight: 5,
  },
  jobLocation: {
    fontSize: 16,
    color: '#666',
  },
  jobDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  jobRequirements: {
    fontSize: 16,
  },
});