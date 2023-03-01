import { View, Image, FlatList } from "react-native";
import { useEffect } from "react";
import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Header } from "../../components/Header";
import { GAMES } from "../../utils/games";

import { styles } from "./styles";

export function Home() {
  useEffect(() => {
    fetch("http://192.168.100.29:3333/games")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Header
        title={"Encontre seu duo!"}
        subtitle={"Selecione o game que deseja jogar..."}
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
