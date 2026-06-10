import axios from "axios";

export const getAdvice = async () => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");

    return response.data.slip.advice;

  } catch (error) {
    throw new Error("Erro ao buscar conselho");
  }
};