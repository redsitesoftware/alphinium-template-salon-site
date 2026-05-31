import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppShell from '../components/AppShell';
import { COLORS, heroImage, services, testimonials } from '../data';

export default function HomeScreen({ navigation }) {
  return (
    <AppShell navigation={navigation} activeTab="Home">
      <Image source={{ uri: heroImage }} style={styles.heroImage} />
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>LUMIÈRE STUDIO · PREMIUM HAIR & BEAUTY</Text>
        <Text style={styles.title}>Luxury appointments for hair, nails and radiant skin.</Text>
        <Text style={styles.body}>Book with our expert team for polished everyday beauty or event-ready styling.</Text>
        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Booking')}>
          <Text style={styles.primaryButtonText}>Book Your Style</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured services</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
          {services.slice(0, 3).map((service) => (
            <Pressable key={service.id} style={styles.card} onPress={() => navigation.navigate('Services', { category: service.category })}>
              <Image source={{ uri: service.image }} style={styles.cardImage} />
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{service.name}</Text>
                <Text style={styles.cardText}>{service.duration} · {service.price}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Client love</Text>
        {testimonials.map((quote) => (
          <View key={quote} style={styles.quoteCard}>
            <Text style={styles.quote}>{quote}</Text>
          </View>
        ))}
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  heroImage: {
    width: '100%',
    height: 320,
  },
  heroCard: {
    marginTop: -88,
    marginHorizontal: 20,
    backgroundColor: 'rgba(23, 12, 38, 0.94)',
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  eyebrow: {
    color: COLORS.roseGold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginBottom: 10,
  },
  title: {
    color: COLORS.text,
    fontSize: 31,
    fontWeight: '700',
    lineHeight: 38,
  },
  body: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
    marginBottom: 20,
  },
  primaryButton: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  primaryButtonText: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 28,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  row: {
    paddingRight: 20,
  },
  card: {
    width: 240,
    marginRight: 16,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardImage: {
    width: '100%',
    height: 170,
  },
  cardBody: {
    padding: 16,
    gap: 6,
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
  },
  cardText: {
    color: COLORS.roseGold,
    fontSize: 13,
    fontWeight: '600',
  },
  quoteCard: {
    backgroundColor: COLORS.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
    marginBottom: 12,
  },
  quote: {
    color: COLORS.text,
    fontSize: 15,
    lineHeight: 22,
  },
});
