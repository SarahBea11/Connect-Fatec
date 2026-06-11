import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../../context/AppContext";
import { getAdvice } from "../../services/api";

export default function HomeScreen({ navigation }) {
    const [texto, setTexto] = useState("");
    const [frase, setFrase] = useState("");
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    const { state, dispatch } = useContext(AppContext);
    const { registros, favoritos } = state;

    const carregarFrase = async () => {
        try {
            setLoading(true);
            setErro("");

            const advice = await getAdvice();
            setFrase(advice);

        } catch (e) {
            setErro("Erro ao carregar frase");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        carregarFrase();
    }, []);

    const salvar = () => {
        const novoTexto = texto.trim();
        if (!novoTexto) return;

        dispatch({
            type: "ADD_REGISTRO",
            payload: novoTexto,
        });

        setTexto("");
    };

    const isTextoVazio = !texto.trim();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>FatecConnect</Text>
            <Text style={styles.subtitulo}>Favoritos salvos: {favoritos.length}</Text>

            <View style={styles.card}>
                {loading ? (
                    <Text style={styles.frase}>Carregando...</Text>
                ) : erro ? (
                    <Text style={styles.frase}>{erro}</Text>
                ) : (
                    <Text style={styles.frase}>{frase}</Text>
                )}
            </View>

            <TextInput
                style={styles.input}
                placeholder="Como foi seu dia?"
                value={texto}
                onChangeText={setTexto}
            />

            <TouchableOpacity style={styles.botao} onPress={salvar}>
                <Text style={styles.botaoTexto}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.botaoSecundario, isTextoVazio && styles.botaoDesativado]}
                onPress={() => {
                    if (!texto.trim()) return;
                    navigation.navigate("Detalhes", { texto: texto.trim() });
                }}
                disabled={isTextoVazio}
            >
                <Text style={styles.botaoTexto}>Ver Detalhes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoSecundario}
                onPress={carregarFrase}
            >
                <Text style={styles.botaoTexto}>Nova frase</Text>
            </TouchableOpacity>

            <View style={styles.listaContainer}>
                <Text style={styles.listaTitulo}>Registros salvos</Text>
                {registros.length === 0 ? (
                    <Text style={styles.listaVazia}>Ainda não há registros.</Text>
                ) : (
                    registros.map((registro, index) => (
                        <TouchableOpacity
                            key={`${registro}-${index}`}
                            style={styles.itemCard}
                            onPress={() => navigation.navigate("Detalhes", { texto: registro })}
                        >
                            <Text style={styles.itemTexto}>{registro}</Text>
                            <Text style={styles.itemLink}>Ver detalhes</Text>
                        </TouchableOpacity>
                    ))
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "#f2f2f2",
    },
    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    card: {
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    frase: {
        color: "#fff",
        textAlign: "center",
    },
    input: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    botao: {
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    botaoTexto: {
        color: "#fff",
        fontWeight: "bold",
    },
    botaoSecundario: {
        backgroundColor: "#2196F3",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    botaoDesativado: {
        backgroundColor: "#90CAF9",
    },
    listaContainer: {
        marginTop: 20,
    },
    listaTitulo: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    listaVazia: {
        color: "#666",
        fontStyle: "italic",
    },
    itemCard: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: "#ddd",
        borderWidth: 1,
    },
    itemTexto: {
        color: "#333",
        marginBottom: 6,
    },
    itemLink: {
        color: "#2196F3",
        fontWeight: "600",
        textAlign: "right",
    },
});