import 'react-native-gesture-handler';
import './ui/native-shim';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider, useTheme } from './ui/theme';
import { AppProvider } from './store/AppContext';

import HomeScreen from './screens/HomeScreen';
import PracticeScreen from './screens/PracticeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import GamesScreen from './screens/GamesScreen';
import GameScreen from './screens/GameScreen';
import ReadinessScreen from './screens/ReadinessScreen';
import TutorScreen from './screens/TutorScreen';
import PricingScreen from './screens/PricingScreen';
import SettingsScreen from './screens/SettingsScreen';

import { guardScreen } from './ui/theme';
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const stackOpts = { headerShown: false, cardStyle: { flex: 1, backgroundColor: 'transparent' } };

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={stackOpts}>
      <Stack.Screen name="HomeMain" component={guardScreen(HomeScreen, "HomeMain")} />
      <Stack.Screen name="Pricing" component={guardScreen(PricingScreen, "Pricing")} />
      <Stack.Screen name="Settings" component={guardScreen(SettingsScreen, "Settings")} />
    </Stack.Navigator>
  );
}

function PracticeStack() {
  return (
    <Stack.Navigator screenOptions={stackOpts}>
      <Stack.Screen name="PracticeHome" component={guardScreen(PracticeScreen, "PracticeHome")} />
      <Stack.Screen name="Quiz" component={guardScreen(QuizScreen, "Quiz")} />
      <Stack.Screen name="QuizResult" component={guardScreen(ResultScreen, "QuizResult")} />
    </Stack.Navigator>
  );
}

function GamesStack() {
  return (
    <Stack.Navigator screenOptions={stackOpts}>
      <Stack.Screen name="GamesHome" component={guardScreen(GamesScreen, "GamesHome")} />
      <Stack.Screen name="Game" component={guardScreen(GameScreen, "Game")} />
    </Stack.Navigator>
  );
}

function ReadinessStack() {
  return (
    <Stack.Navigator screenOptions={stackOpts}>
      <Stack.Screen name="ReadinessMain" component={guardScreen(ReadinessScreen, "ReadinessMain")} />
      <Stack.Screen name="Pricing" component={guardScreen(PricingScreen, "Pricing")} />
    </Stack.Navigator>
  );
}

const HIDE_TABBAR_ON = ['Quiz', 'Game'];

function RootTabs() {
  const t = useTheme() || {};
  const border = t.border || 'rgba(19,34,56,0.10)';

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => {
        const focused = getFocusedRouteNameFromRoute(route);
        const hidden = HIDE_TABBAR_ON.includes(focused);
        return {
          headerShown: false,
          tabBarActiveTintColor: t.accent || '#EA5E2A',
          tabBarInactiveTintColor: t.textMuted || '#7C8698',
          tabBarLabelStyle: { fontSize: 11, fontWeight: '700', marginBottom: 4 },
          tabBarStyle: hidden
            ? { display: 'none' }
            : {
                backgroundColor: t.surface || '#FFFFFF',
                borderTopColor: border,
                borderTopWidth: 1,
                height: 84,
                paddingTop: 8,
              },
          tabBarIcon: ({ color, size, focused: isOn }) => {
            const icons = {
              Home: isOn ? 'grid' : 'grid-outline',
              Practice: isOn ? 'documents' : 'documents-outline',
              Games: isOn ? 'game-controller' : 'game-controller-outline',
              Readiness: isOn ? 'pulse' : 'pulse-outline',
              Tutor: isOn ? 'chatbubbles' : 'chatbubbles-outline',
            };
            return <Ionicons name={icons[route.name] || 'ellipse-outline'} size={size ? size - 2 : 22} color={color} />;
          },
        };
      }}
    >
      <Tabs.Screen name="Home" component={guardScreen(HomeStack, "Home")} />
      <Tabs.Screen name="Practice" component={guardScreen(PracticeStack, "Practice")} />
      <Tabs.Screen name="Games" component={guardScreen(GamesStack, "Games")} />
      <Tabs.Screen name="Readiness" component={guardScreen(ReadinessStack, "Readiness")} />
      <Tabs.Screen name="Tutor" component={guardScreen(TutorScreen, "Tutor")} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider
          theme="paper"
          accent="#EA5E2A"
          accents={['#EA5E2A', '#1E3A5F', '#2E9E8F', '#F2A33C', '#6D5BD0', '#D9455A']}
        >
          <AppProvider>
            <StatusBar style="dark" />
            <NavigationContainer>
              <RootTabs />
            </NavigationContainer>
          </AppProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
