import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import AppShell from '../components/AppShell';
import { COLORS } from '../data';

export default function ConfirmationScreen({ navigation, route }) {
  const { stylist, service, date, time, name, phone } = route.params || {};

  return (
    <AppShell navigation={navigation} activeTab="Booking" scroll={false}>
      <View style={styles.container}>
        <Text style={styles.icon}>OK</Text>
        <Text style={styles.title}>Appointment confirmed</Text>
        <Text style={styles.subtitle}>Your Lumière Studio visit is now reserved.</Text>

        <View style={styles.card}>
          {stylist ? <Image source={{ uri: stylist.photo }} style={styles.photo} /> : null}
          <Detail label="Client" value={name} />
          <Detail label="Service" value={service?.name} />
          <Detail label="Stylist" value={stylist?.name} />
          <Detail label="Date" value={date} />
          <Detail label="Time" value={time} />
          <Detail label="Phone" value={phone} />
        </View>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </Pressable>
      </View>
    </AppShell>
  );
}

function Detail({ label, value }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  icon: {
    textAlign: 'center',
    fontSize: 44,
    marginBottom: 16,
  },
  title: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.muted,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 20,
    gap: 12,
  },
  photo: {
    width: 84,
    height: 84,
    borderRadius: 42,
    alignSelf: 'center',
    marginBottom: 6,
  },
  detailRow: {
    gap: 5,
  },
  detailLabel: {
    color: COLORS.roseGold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  detailValue: {
    color: COLORS.text,
    fontSize: 16,
  },
  button: {
    marginTop: 24,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    paddingVertical: 16,
  },
  buttonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
  },
});
