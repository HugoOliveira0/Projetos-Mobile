import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  }
});

export default styles;