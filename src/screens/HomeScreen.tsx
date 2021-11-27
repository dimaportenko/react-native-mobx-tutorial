import * as React from "react";
import { FAB } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { ClassItemType, RootStackScreenProps } from "../types";
import * as routes from "../navigation/routes";
import { ClassItem } from "../components/ClassItem";

type Props = {} & RootStackScreenProps<typeof routes.HOME>;

const classes: {
  items: ClassItemType[]
} = {
  items: [{
    id: 1,
    title: 'Gym',
  }, {
    id: 2,
    title: 'Dance'
  }]
};

export const HomeScreen = ({navigation}: Props) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        {classes.items.map((item) => {
          return (
            <View key={`${item.id}`} style={{marginBottom: 15}}>
              <ClassItem title={item.title} onPress={() => {
                navigation.navigate(routes.EDIT_CLASS, {
                  classItem: item
                })
              }}/>
            </View>
          );
        })}
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          navigation.navigate(routes.EDIT_CLASS);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    margin: 32,
    right: 0,
    bottom: 0,
  },
});
