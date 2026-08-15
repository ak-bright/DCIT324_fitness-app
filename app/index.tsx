import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WorkoutCard from "../components/WorkoutCard";
import { colors } from "../constants/theme";
import { workouts } from "../data/workouts";

const days = [
  { label: "Mon", date: "5" },
  { label: "Tue", date: "6" },
  { label: "Wed", date: "7" },
  { label: "Thu", date: "8" },
  { label: "Fri", date: "9" },
  { label: "Sat", date: "10" },
  { label: "Sun", date: "11" },
];

export default function WorkoutListScreen() {
  const [activeDay, setActiveDay] = useState("8");

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header row */}
            <View style={styles.topBar}>
              <View>
                <Text style={styles.greeting}>Good morning 👋</Text>
                <Text style={styles.name}>Pump House</Text>
              </View>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
                }}
                style={styles.avatar}
              />
            </View>

            {/* Coral summary banner */}
            <LinearGradient
              colors={[colors.coralLight, colors.coral]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.banner}
            >
              <View style={styles.bannerLeft}>
                <Text style={styles.bannerDate}>Today, 8 Jul</Text>
                <Text style={styles.bannerKcal}>1 883 Kcal</Text>
                <View style={styles.trackPill}>
                  <Text style={styles.trackText}>Track your activity</Text>
                </View>
              </View>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=400&q=80",
                }}
                style={styles.bannerImage}
                contentFit="cover"
              />
            </LinearGradient>

            {/* Date selector */}
            <View style={styles.dateRow}>
              {days.map((day) => {
                const active = day.date === activeDay;
                return (
                  <Pressable
                    key={day.date}
                    onPress={() => setActiveDay(day.date)}
                    style={[styles.dateChip, active && styles.dateChipActive]}
                  >
                    <Text
                      style={[styles.dateNum, active && styles.dateNumActive]}
                    >
                      {day.date}
                    </Text>
                    <Text
                      style={[styles.dateLabel, active && styles.dateLabelActive]}
                    >
                      {day.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Section header */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular workouts</Text>
              <Text style={styles.sectionLink}>See all</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <WorkoutCard
            image={item.image}
            title={item.title}
            category={item.category}
            duration={item.duration}
            calories={item.calories}
            level={item.level}
            onPress={() =>
              router.push({ pathname: "/details", params: { id: item.id } })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.ink,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  banner: {
    flexDirection: "row",
    borderRadius: 28,
    padding: 20,
    overflow: "hidden",
    marginBottom: 24,
  },
  bannerLeft: {
    flex: 1,
    justifyContent: "center",
  },
  bannerDate: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    marginBottom: 4,
  },
  bannerKcal: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 14,
  },
  trackPill: {
    alignSelf: "flex-start",
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
  },
  trackText: {
    color: colors.coral,
    fontWeight: "700",
    fontSize: 13,
  },
  bannerImage: {
    width: 96,
    height: 120,
    borderRadius: 20,
    marginLeft: 12,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  dateChip: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 18,
    flex: 1,
    marginHorizontal: 2,
  },
  dateChipActive: {
    backgroundColor: colors.coral,
  },
  dateNum: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.ink,
    marginBottom: 4,
  },
  dateNumActive: {
    color: colors.white,
  },
  dateLabel: {
    fontSize: 11,
    color: colors.muted,
    fontWeight: "600",
  },
  dateLabelActive: {
    color: "rgba(255,255,255,0.9)",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: colors.ink,
  },
  sectionLink: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.coral,
  },
});
