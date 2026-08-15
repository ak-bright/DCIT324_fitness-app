import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/theme";

// Reusable workout card. Every piece of content arrives through props so the
// same component renders any workout. The favourite heart uses local state and
// toggles independently for each card.
type WorkoutCardProps = {
  image: string;
  title: string;
  category: string;
  duration: string;
  calories: string;
  level: string;
  onPress?: () => void;
};

export default function WorkoutCard({
  image,
  title,
  category,
  duration,
  calories,
  level,
  onPress,
}: WorkoutCardProps) {
  const [favourite, setFavourite] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} contentFit="cover" />

        <View style={styles.categoryPill}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>

        <TouchableOpacity
          style={styles.favouriteButton}
          onPress={() => setFavourite((prev) => !prev)}
          activeOpacity={0.85}
        >
          <Ionicons
            name={favourite ? "heart" : "heart-outline"}
            size={20}
            color={favourite ? colors.coral : colors.ink}
          />
        </TouchableOpacity>

        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{level}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <View style={styles.metaIcon}>
              <Ionicons name="time-outline" size={14} color={colors.coral} />
            </View>
            <Text style={styles.metaText}>{duration}</Text>
          </View>

          <View style={styles.metaItem}>
            <View style={styles.metaIcon}>
              <Ionicons name="flame-outline" size={14} color={colors.coral} />
            </View>
            <Text style={styles.metaText}>{calories}</Text>
          </View>

          <View style={styles.arrow}>
            <Ionicons name="chevron-forward" size={18} color={colors.ink} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 28,
    marginBottom: 18,
    overflow: "hidden",
    shadowColor: colors.coral,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 4,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
  },
  imageWrapper: {
    height: 172,
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  categoryPill: {
    position: "absolute",
    top: 14,
    left: 14,
    backgroundColor: colors.coral,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
  },
  favouriteButton: {
    position: "absolute",
    top: 14,
    right: 14,
    height: 38,
    width: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.92)",
    alignItems: "center",
    justifyContent: "center",
  },
  levelBadge: {
    position: "absolute",
    bottom: 14,
    left: 14,
    backgroundColor: "rgba(26,26,26,0.55)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  levelText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "700",
  },
  body: {
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.ink,
    marginBottom: 14,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 18,
  },
  metaIcon: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: colors.pinkSoft,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },
  metaText: {
    fontSize: 13,
    color: colors.ink,
    fontWeight: "600",
  },
  arrow: {
    marginLeft: "auto",
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.pinkBg,
    alignItems: "center",
    justifyContent: "center",
  },
});
