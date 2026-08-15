// Workout data used by the list and details screens.
// Images are pulled from external sources (Unsplash) rather than bundled assets.

export type Workout = {
  id: string;
  title: string;
  category: string;
  image: string;
  duration: string;
  calories: string;
  level: string;
  distance: string;
  description: string;
  moves: { name: string; icon: string }[];
};

export const workouts: Workout[] = [
  {
    id: "1",
    title: "Full-Body Workout",
    category: "Gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    duration: "45 min",
    calories: "420 kcal",
    level: "Easy",
    distance: "2.4 km",
    description: "Shift stubborn body fat and build lean muscle.",
    moves: [
      { name: "Bicep", icon: "barbell-outline" },
      { name: "Body-Back", icon: "body-outline" },
      { name: "Body-Butt", icon: "walk-outline" },
      { name: "Legs and Core", icon: "fitness-outline" },
    ],
  },
  {
    id: "2",
    title: "Morning Yoga Flow",
    category: "Yoga",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    duration: "30 min",
    calories: "180 kcal",
    level: "Easy",
    distance: "—",
    description: "Gently wake up the body and set a calm tone.",
    moves: [
      { name: "Sun Salutation", icon: "sunny-outline" },
      { name: "Downward Dog", icon: "body-outline" },
      { name: "Warrior Pose", icon: "walk-outline" },
      { name: "Breathing", icon: "leaf-outline" },
    ],
  },
  {
    id: "3",
    title: "HIIT Cardio Blast",
    category: "Cardio",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    duration: "25 min",
    calories: "350 kcal",
    level: "Hard",
    distance: "3.1 km",
    description: "High intensity intervals to maximise fat burn.",
    moves: [
      { name: "Jumping Jacks", icon: "flash-outline" },
      { name: "Burpees", icon: "fitness-outline" },
      { name: "Mountain Climb", icon: "trending-up-outline" },
      { name: "Sprints", icon: "walk-outline" },
    ],
  },
  {
    id: "4",
    title: "Core & Abs Sculpt",
    category: "Gym",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    duration: "20 min",
    calories: "160 kcal",
    level: "Medium",
    distance: "1.2 km",
    description: "Define and strengthen your midsection.",
    moves: [
      { name: "Crunches", icon: "body-outline" },
      { name: "Plank", icon: "remove-outline" },
      { name: "Russian Twist", icon: "sync-outline" },
      { name: "Leg Raise", icon: "walk-outline" },
    ],
  },
  {
    id: "5",
    title: "Upper Body Strength",
    category: "Gym",
    image:
      "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&w=800&q=80",
    duration: "40 min",
    calories: "300 kcal",
    level: "Hard",
    distance: "1.8 km",
    description: "Build a stronger, more defined upper body.",
    moves: [
      { name: "Push Ups", icon: "fitness-outline" },
      { name: "Pull Ups", icon: "barbell-outline" },
      { name: "Shoulder Press", icon: "body-outline" },
      { name: "Rows", icon: "trending-up-outline" },
    ],
  },
  {
    id: "6",
    title: "Evening Stretch",
    category: "Yoga",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    duration: "15 min",
    calories: "90 kcal",
    level: "Easy",
    distance: "—",
    description: "Release the day's tension before rest.",
    moves: [
      { name: "Neck Roll", icon: "sync-outline" },
      { name: "Hamstring", icon: "walk-outline" },
      { name: "Child Pose", icon: "leaf-outline" },
      { name: "Spine Twist", icon: "body-outline" },
    ],
  },
  {
    id: "7",
    title: "Leg Day Power",
    category: "Gym",
    image:
      "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=800&q=80",
    duration: "50 min",
    calories: "480 kcal",
    level: "Hard",
    distance: "2.9 km",
    description: "Build powerful legs and glutes.",
    moves: [
      { name: "Squats", icon: "fitness-outline" },
      { name: "Lunges", icon: "walk-outline" },
      { name: "Leg Press", icon: "barbell-outline" },
      { name: "Calf Raise", icon: "trending-up-outline" },
    ],
  },
  {
    id: "8",
    title: "Beginner Pilates",
    category: "Yoga",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    duration: "35 min",
    calories: "200 kcal",
    level: "Easy",
    distance: "—",
    description: "Improve posture, flexibility and core stability.",
    moves: [
      { name: "The Hundred", icon: "fitness-outline" },
      { name: "Roll Up", icon: "sync-outline" },
      { name: "Leg Circle", icon: "walk-outline" },
      { name: "Teaser", icon: "body-outline" },
    ],
  },
];
