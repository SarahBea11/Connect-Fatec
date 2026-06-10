import { View, Text, StyleSheet } from "react-native";

export default function DetailScreen({ route }) {
  const { texto } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do seu dia</Text>

      <View style={styles.card}>
        <Text style={styles.texto}>{texto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
  },
});