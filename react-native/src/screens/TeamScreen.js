import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppShell from '../components/AppShell';
import { COLORS, stylists } from '../data';

export default function TeamScreen({ navigation }) {
  return (
    <AppShell navigation={navigation} activeTab="Team">
      <View style={styles.header}>
        <Text style={styles.title}>Meet the team</Text>
        <Text style={styles.subtitle}>A boutique team of artists specialising in effortless polish and luxury care.</Text>
      </View>
      <View style={styles.list}>
        {stylists.map((stylist) => (
          <View key={stylist.id} style={styles.card}>
            <Image source={{ uri: stylist.photo }} style={styles.photo} />
            <Text style={styles.name}>{stylist.name}</Text>
            <Text style={styles.role}>{stylist.role}</Text>
            <Text style={styles.specialties}>{stylist.specialties}</Text>
          </View>
        ))}
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: COLORS.muted,
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
  },
  list: {
    paddingHorizontal: 20,
    marginTop: 24,
    gap: 16,
  },
  card: {
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 22,
  },
  photo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 14,
  },
  name: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '700',
  },
  role: {
    color: COLORS.roseGold,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 6,
  },
  specialties: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 8,
  },
});
