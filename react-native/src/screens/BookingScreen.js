import React, { useEffect, useMemo, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AppShell from '../components/AppShell';
import { bookingDates, COLORS, services, stylists, timeSlots } from '../data';

function ChoicePill({ label, active, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.choicePill, active && styles.choicePillActive]}>
      <Text style={[styles.choicePillText, active && styles.choicePillTextActive]}>{label}</Text>
    </Pressable>
  );
}

export default function BookingScreen({ navigation, route }) {
  const [selectedStylistId, setSelectedStylistId] = useState(stylists[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState(route.params?.serviceId || services[0].id);
  const [selectedDate, setSelectedDate] = useState(bookingDates[0].label);
  const [selectedTime, setSelectedTime] = useState(timeSlots[1]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (route.params?.serviceId) {
      setSelectedServiceId(route.params.serviceId);
    }
  }, [route.params?.serviceId]);

  const selectedStylist = useMemo(() => stylists.find((stylist) => stylist.id === selectedStylistId), [selectedStylistId]);
  const selectedService = useMemo(() => services.find((service) => service.id === selectedServiceId), [selectedServiceId]);
  const selectedDateFull = useMemo(() => bookingDates.find((date) => date.label === selectedDate)?.full || selectedDate, [selectedDate]);

  const handleBook = () => {
    navigation.navigate('Confirmation', {
      stylist: selectedStylist,
      service: selectedService,
      date: selectedDateFull,
      time: selectedTime,
      name: name || 'Guest',
      phone: phone || '0400 000 000',
    });
  };

  return (
    <AppShell navigation={navigation} activeTab="Booking">
      <View style={styles.header}>
        <Text style={styles.title}>Book your appointment</Text>
        <Text style={styles.subtitle}>Select your stylist, service and ideal time in a few taps.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Choose your stylist</Text>
        {stylists.map((stylist) => {
          const active = stylist.id === selectedStylistId;
          return (
            <Pressable key={stylist.id} onPress={() => setSelectedStylistId(stylist.id)} style={[styles.stylistCard, active && styles.stylistCardActive]}>
              <Image source={{ uri: stylist.photo }} style={styles.stylistPhoto} />
              <View style={styles.stylistCopy}>
                <Text style={styles.stylistName}>{stylist.name}</Text>
                <Text style={styles.stylistRole}>{stylist.role}</Text>
                <Text style={styles.stylistSpecialties}>{stylist.specialties}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Service</Text>
        <View style={styles.choiceWrap}>
          {services.map((service) => (
            <ChoicePill key={service.id} label={service.name} active={selectedServiceId === service.id} onPress={() => setSelectedServiceId(service.id)} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Date & time</Text>
        <View style={styles.choiceWrap}>
          {bookingDates.map((date) => (
            <ChoicePill key={date.id} label={date.label} active={selectedDate === date.label} onPress={() => setSelectedDate(date.label)} />
          ))}
        </View>
        <View style={[styles.choiceWrap, styles.timeWrap]}>
          {timeSlots.map((time) => (
            <ChoicePill key={time} label={time} active={selectedTime === time} onPress={() => setSelectedTime(time)} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Client details</Text>
        <TextInput style={styles.input} placeholder="Your name" placeholderTextColor={COLORS.muted} value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Phone number" placeholderTextColor={COLORS.muted} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      </View>

      <Pressable style={styles.bookButton} onPress={handleBook}>
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </Pressable>
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
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionTitle: {
    color: COLORS.roseGold,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.1,
    marginBottom: 12,
  },
  stylistCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: COLORS.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
    marginBottom: 12,
  },
  stylistCardActive: {
    borderColor: COLORS.roseGold,
    backgroundColor: '#3A2258',
  },
  stylistPhoto: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  stylistCopy: {
    flex: 1,
  },
  stylistName: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
  },
  stylistRole: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 4,
  },
  stylistSpecialties: {
    color: COLORS.muted,
    fontSize: 13,
    marginTop: 6,
    lineHeight: 19,
  },
  choiceWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeWrap: {
    marginTop: 12,
  },
  choicePill: {
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  choicePillActive: {
    backgroundColor: COLORS.primary,
  },
  choicePillText: {
    color: COLORS.muted,
    fontWeight: '600',
    fontSize: 13,
  },
  choicePillTextActive: {
    color: COLORS.text,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 15,
    color: COLORS.text,
    fontSize: 15,
    marginBottom: 12,
  },
  bookButton: {
    marginHorizontal: 20,
    marginTop: 28,
    backgroundColor: COLORS.roseGold,
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: 'center',
  },
  bookButtonText: {
    color: COLORS.background,
    fontWeight: '800',
    fontSize: 16,
  },
});
