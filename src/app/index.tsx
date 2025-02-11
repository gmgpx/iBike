import { ScrollView, View } from "react-native";
import Header from "../components/header";
import Banner from "../components/banner";
import Search from "../components/input";
import Section from "../components/section";
import { TrendingBikes } from "../components/trending";
import { Brands } from "../components/brands";
import { AvaliationsList } from "../components/avaliations";

import Constants from "expo-constants"

const statusBarHeight = Constants.statusBarHeight;

// tela principal
export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View
        className="w-full px-4"
        style={{ marginTop: statusBarHeight + 8 }}
      >
        <Header />

        <Banner />

        <Search />
      </View>

      <Section
        name="Anúncios em alta"
        label="Veja mais"
        action={() => console.log("Você clicou em ver mais motos")}
        size="text-2xl"
      />

      <TrendingBikes/>

      <Section
        name="Principais marcas"
        label="Veja todas"
        action={() => console.log("Você clicou em ver mais de cada marca")}
        size="text-xl"
      />

      <Brands/>

      <Section
        name="Avaliações em alta"
        label="Feito por jornalistas"
        action={() => console.log("Você clicou em ver mais avaliações")}
        size="text-xl"
      />

      <AvaliationsList />

    </ ScrollView>
  );
}

// Faculdade\mobile\iBike\src\app\index.tsx