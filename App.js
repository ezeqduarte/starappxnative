import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import API from "../starappxreact/src/Api";

export default function App() {
  //Animal va a ser mi objeto que va a ir seteando cada vez que clickeo el boton
  const [animal, setAnimal] = useState();

  //utilizando axios realizo la peticion a la API y con lo que me responde, guardo en la variable para poder utilizarla. Lo realizo en una funcion asincrona ya que las peticiones se manejan mediante promesas.

  async function peticion() {
    const res = await axios.get(`${API}`);
    /* console.log(res.data); */
    setAnimal(res.data);
  }

  //Ejecuto la peticion dentro de un useEffect para poder controlar la peticion
  useEffect(() => {
    peticion();
  }, []);

  return (
    <View style={styles.app}>
      <View style={styles.divInformation}>
        <Image style={styles.image} source={animal?.image} />
        <Text style={styles.text}>{animal?.fact}</Text>
        <Button
          style={styles.button}
          onPress={peticion()}
          title="NEXT"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(218, 218, 218)",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  divInformation: {
    flex: 1,
    backgroundColor: "#white",
    alignItems: "center",
    justifyContent: "space-between",
    width: "500px",
    height: "500px",
    borderRadius: "15px",
    flexWrap: "wrap",
    padding: "10px",
  },
  image: {
    height: "55%",
    width: "100%",
    borderRadius: "7px",
  },
  text: {
    fontWeight: "300",
  },
  button: {
    borderRadius: "3px",
    padding: "7px",
    backgroundColor: "rgb(225, 129, 129)",
    color: "white",
    width: "100%",
  },
});
