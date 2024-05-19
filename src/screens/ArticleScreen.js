import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const ArticleScreen = ({ route }) => {
  const { article } = route.params;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={styles.container}>
      {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={[styles.image, { width: windowWidth - 32 }]} />}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  image: {
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
});

export default ArticleScreen;
