import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveScale} from './src/utils';
import {commonStyles} from './src/utils/commonStyles';
import {myDefaultTheme} from './src/utils/theme';
import {Skeleton} from 'moti/skeleton';

const {colors, spacing} = myDefaultTheme;

const App = () => {
  return (
    <View style={commonStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, padding: responsiveScale(20)}}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={() => (
          <Skeleton.GRoup>
            <View style={styles.cardContainer}>
              <Skeleton>
                <Text>Title</Text>
              </Skeleton>
              <Skeleton>
                <Text>Descriptoion Descriptoion Descriptoion Descriptoion</Text>
              </Skeleton>
            </View>
          </Skeleton.GRoup>
        )}
        ItemSeparatorComponent={<View style={{height: responsiveScale(20)}} />}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  cardContainer: {
    padding: spacing,
    backgroundColor: colors.card,
    borderRadius: spacing,
    ...commonStyles.shadow,
  },
});
