import axios from "axios";

const translateText = async (text) => {
  try {
    const response = await axios.get(
      "https://api.mymemory.translated.net/get",
      {
        params: {
          q: text,
          langpair: "en|pt-BR",
        },
      }
    );

    return response.data.responseData.translatedText || text;
  } catch (error) {
    return text;
  }
};

export const getAdvice = async () => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const englishAdvice = response.data.slip.advice;
    const translatedAdvice = await translateText(englishAdvice);

    return translatedAdvice;
  } catch (error) {
    throw new Error("Erro ao buscar conselho");
  }
};
