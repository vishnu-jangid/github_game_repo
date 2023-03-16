import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { gamesAction } from "../store/game/actions";

import styles from "./style";
import GameItem from "../components/gameItem";

interface GameProps {
  gamesFetch: () => void;
  data: any;
}

const Game = (props: GameProps) => {
  useEffect(() => {
    props.gamesFetch();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => GameItem(item)}
        keyExtractor={(item, index) => index.toString()}
        
      />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    data: state.game.games,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    gamesFetch: () => dispatch(gamesAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
