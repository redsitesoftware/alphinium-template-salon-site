import React, { useEffect, useMemo, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import AppShell from '../components/AppShell';
import { COLORS, serviceCategories, services } from '../data';

export default function ServicesScreen({ navigation, route }) {
  const [selectedCategory, setSelectedCategory] = useState(route.params?.category || 'All');

  useEffect(() => {
    if (route.params?.category) {
      setSelectedCategory(route.params.category);
    }
  }, [route.params?.category]);

  const filteredServices = useMemo(() => (
    services.filter((service) => selectedCategory === 'All' || service.category === selectedCategory)
  ), [selectedCategory]);

  return (
    <AppShell navigation={navigation} activeTab="Services">
      <View style={styles.header}>
        <Text style={styles.title}>Services</Text>
        <Text style={styles.subtitle}>Tailored appointments from precision cuts to glow-boosting facials and luxury manicures.</Text>
      </View>

      <View style={styles.pillRow}>
        {serviceCategories.map((category) => {
          const active = category === selectedCategory;
          return (
            <Pressable key={category} onPress={() => setSelectedCategory(category)} style={[styles.pill, active && styles.pillActive]}>
              <Text style={[styles.pillText, active && styles.pillTextActive]}>{category}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.list}>
        {filteredServices.map((service) => (
          <View key={service.id} style={styles.card}>
            <Image source={{ uri: service.image }} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{service.name}</Text>
                <Text style={styles.price}>{service.price}</Text>
              </View>
              <Text style={styles.meta}>{service.category} · {service.duration}</Text>
              <Text style={styles.description}>{service.description}</Text>
              <Pressable style={styles.bookButton} onPress={() => navigation.navigate('Booking', { serviceId: service.id })}>
                <Text style={styles.bookButtonText}>Book</Text>
              </Pressable>
            </View>
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
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 22,
  },
  pill: {
    backgroundColor: COLORS.surface,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  pillActive: {
    backgroundColor: COLORS.primary,
  },
  pillText: {
    color: COLORS.muted,
    fontWeight: '600',
  },
  pillTextActive: {
    color: COLORS.text,
  },
  list: {
    paddingHorizontal: 20,
    marginTop: 24,
    gap: 16,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardBody: {
    padding: 18,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardTitle: {
    flex: 1,
    color: COLORS.text,
    fontSize: 19,
    fontWeight: '700',
  },
  price: {
    color: COLORS.roseGold,
    fontSize: 17,
    fontWeight: '700',
  },
  meta: {
    color: COLORS.primary,
    marginTop: 10,
    fontSize: 13,
    fontWeight: '700',
  },
  description: {
    color: COLORS.muted,
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
  },
  bookButton: {
    alignSelf: 'flex-start',
    marginTop: 14,
    backgroundColor: COLORS.roseGold,
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 11,
  },
  bookButtonText: {
    color: COLORS.background,
    fontWeight: '700',
  },
});
