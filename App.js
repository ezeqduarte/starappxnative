import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import API from "./Api";

export default function App() {
  //Animal va a ser mi objeto que se va a ir seteando cada vez que haga la peticion a la api
  const [animal, setAnimal] = useState();

  //utilizando axios realizo la peticion y con la respuesta, guardo los datos en la variable para poder utilizarla. Lo realizo en una funcion asincrona ya que las peticiones se manejan mediante promesas.

  async function peticion() {
    const res = await axios.get(`${API}`);
    setAnimal(res.data);
  }

  return (
    <View style={styles.App}>
      <View style={styles.divInformation}>
        <Image
          style={styles.image}
          source={{
            uri: `${animal?.image}`,
          }}
        />
        <Text style={styles.textInformation}>{animal?.fact}</Text>
        <Button
          title="VIEW MORE"
          style={styles.button}
          color="#rgb(225, 129, 129)"
          onPress={() => {
            peticion();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: "rgb(218, 218, 218)",
    alignItems: "center",
    padding: 55,
  },
  divInformation: {
    flex: 1,
    width: 300,
    height: 30,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "70%",
    borderRadius: 12,
  },
  textInformation: {
    fontWeight: 400,
    fontSize: 15,
  },
  button: {
    width: 100,
    borderRadius: 25,
  },
});
