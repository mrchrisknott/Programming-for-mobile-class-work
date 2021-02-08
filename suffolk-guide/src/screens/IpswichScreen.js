import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import areaImage from "../../assets/Ipswich.jpg";

const IpswichScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={areaImage} style={styles.image} />
      <ScrollView>
        <Text style={styles.paragraph}>
          Ipswich is a historic county town in Suffolk, England. The town is
          located in East Anglia about 10 miles away from the mouth of the River
          Orwell and the North Sea. Ipswich is both on the Great Eastern Main
          Line railway and the A12 road, it is 66 miles (106 km) north-east of
          London, 54 miles (89 km) east-southeast of Cambridge, and 45 miles (72
          km) south of Norwich. Ipswich is surrounded by two Areas of
          Outstanding Natural Beauty (AONB); Suffolk Coast and Heaths and Dedham
          Vale.
        </Text>

        <Text style={styles.paragraph}>
          Ipswich's modern name is derived from the medieval name Gippeswic,
          probably taken either from an Anglo-Saxon personal name or from an
          earlier name given to the Orwell Estuary (although unrelated to the
          name of the River Gipping).It has also been known as Gyppewicus and
          Yppswyche. The town has been continuously occupied since the Saxon
          period, and is contested to be one of the oldest towns in the United
          Kingdom. Ipswich was a settlement of great economic importance to
          England throughout its history, particularly in trade. The town's
          historical dock, present-day Ipswich Waterfront, was known as the
          largest and most important dock in the kingdom.
        </Text>

        <Text style={styles.paragraph}>
          Ipswich is a non-metropolitan district and is a large settlement
          despite its town status. The urban development of Ipswich overspills
          the borough boundaries significantly, with 75% of the town's
          population living within the borough at the time of the 2011 Census,
          when it was the fourth-largest urban area in the United Kingdom's East
          of England region, and the 42nd-largest urban area in England and
          Wales. In 2011, the town of Ipswich was found to have a population of
          133,384,while the Ipswich built-up area is estimated to have a
          population of approximately 180,000 in 2011.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  paragraph: {
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {
    width: Dimensions.get("screen").width,
    height: 159,
    marginBottom: 20,
  },
});

export default IpswichScreen;
