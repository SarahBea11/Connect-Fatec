import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../../context/AppContext";
import { getAdvice } from "../../services/api";

export default function HomeScreen({ navigation }) {
    const [texto, setTexto] = useState("");
    const [frase, setFrase] = useState("");
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    const { dispatch } = useContext(AppContext);

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
        if (!texto) return;

        dispatch({
            type: "ADD_REGISTRO",
            payload: texto,
        });

        setTexto("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>FatecConnect</Text>

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
                style={styles.botaoSecundario}
                onPress={() => {
                    if (!texto) return;
                    navigation.navigate("Detalhes", { texto });
                }}
            >
                <Text style={styles.botaoTexto}>Ver Detalhes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoSecundario}
                onPress={carregarFrase}
            >
                <Text style={styles.botaoTexto}>Nova frase</Text>
            </TouchableOpacity>

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
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
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
        marginTop: 10,
    },
});