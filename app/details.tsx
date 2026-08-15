import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/theme";
import { workouts } from "../data/workouts";

export default function WorkoutDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const workout = workouts.find((item) => item.id === id) ?? workouts[0];

  const [completed, setCompleted] = useState(false);
  const [favourite, setFavourite] = useState(false);

  return (
    <View style={styles.container}>
      {/* Pink top area with header + round hero */}
      <SafeAreaView edges={["top"]} style={styles.header}>
        <TouchableOpacity
          style={styles.circleButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Workout</Text>
        <TouchableOpacity
          style={styles.circleButton}
          onPress={() => setFavourite((prev) => !prev)}
        >
          <Ionicons
            name={favourite ? "heart" : "heart-outline"}
            size={20}
            color={favourite ? colors.coral : colors.ink}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroArea}>
          <View style={styles.heroRing}>
            <Image
              source={{ uri: workout.image }}
              style={styles.hero}
              contentFit="cover"
            />
          </View>

          {/* Pill badges */}
          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{workout.level}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{workout.duration}</Text>
            </View>
          </View>

          <Text style={styles.title}>{workout.title}</Text>
          <Text style={styles.subtitle}>{workout.description}</Text>
        </View>

        {/* White sheet */}
        <View style={styles.sheet}>
          {/* Floating play FAB */}
          <View style={styles.fabWrapper}>
            <View style={styles.fabGlow} />
            <View style={styles.fab}>
              <Ionicons name="play" size={26} color={colors.white} />
            </View>
          </View>

          {/* Quick stats */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Ionicons name="flame-outline" size={18} color={colors.coral} />
              <Text style={styles.statValue}>{workout.calories}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Ionicons name="time-outline" size={18} color={colors.coral} />
              <Text style={styles.statValue}>{workout.duration}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Ionicons name="footsteps-outline" size={18} color={colors.coral} />
              <Text style={styles.statValue}>{workout.distance}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Exercises</Text>

          {workout.moves.map((move) => (
            <View key={move.name} style={styles.moveRow}>
              <View style={styles.moveIcon}>
                <Ionicons name={move.icon as any} size={20} color={colors.ink} />
              </View>
              <Text style={styles.moveName}>{move.name}</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.muted}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Start / Completed toggle */}
      <SafeAreaView edges={["bottom"]} style={styles.footer}>
        <Pressable
          style={[styles.startButton, completed && styles.completedButton]}
          onPress={() => setCompleted((prev) => !prev)}
        >
          <Ionicons
            name={completed ? "checkmark-circle" : "play"}
            size={20}
            color={colors.white}
          />
          <Text style={styles.startButtonText}>
            {completed ? "Completed" : "Start Workout"}
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pinkBg,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.ink,
  },
  circleButton: {
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(26,26,26,0.12)",
    alignItems: "center",
    justifyContent: "center",
  },
  heroArea: {
    alignItems: "center",
    paddingTop: 14,
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  heroRing: {
    height: 220,
    width: 220,
    borderRadius: 110,
    padding: 8,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  hero: {
    flex: 1,
    borderRadius: 104,
  },
  badgeRow: {
    flexDirection: "row",
    marginTop: 22,
    marginBottom: 16,
  },
  badge: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 16,
    marginHorizontal: 6,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.ink,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.ink,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: colors.muted,
    textAlign: "center",
    fontWeight: "500",
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 20,
    minHeight: 400,
  },
  fabWrapper: {
    position: "absolute",
    top: -34,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  fabGlow: {
    position: "absolute",
    height: 84,
    width: 84,
    borderRadius: 42,
    backgroundColor: colors.coralGlow,
  },
  fab: {
    height: 68,
    width: 68,
    borderRadius: 34,
    backgroundColor: colors.coral,
    alignItems: "center",
    justifyContent: "center",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.pinkBg,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginBottom: 26,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "700",
    color: colors.ink,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: colors.pinkSoft,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.ink,
    marginBottom: 14,
  },
  moveRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  moveIcon: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: colors.pinkSoft,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  moveName: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: colors.ink,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    backgroundColor: colors.white,
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.coral,
    borderRadius: 20,
    height: 58,
  },
  completedButton: {
    backgroundColor: colors.ink,
  },
  startButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },
});
