import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AlertCircle } from 'lucide-react-native';
import { usePatientContext } from '@/hooks/context/PatientContext';

const ITEMS_PER_PAGE = 10;

type PatientData = {
  missed_doses: string[];
};

export default function TakeDosage() {
  const { patientData } = usePatientContext();
  const { missed_doses = [] }: PatientData = patientData ?? { missed_doses: [] };

  const sortedMissedDoses = useMemo(() => {
    return [...missed_doses].sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  }, [missed_doses]);

  const extractRecentMissedDoses = (doses: string[]) => {
    const recent = doses.slice(0, 7);
    const remaining = doses.slice(7);
    return { recent, remaining };
  };

  const { recent: recentMissedDoses, remaining: paginatedMissedDoses } = extractRecentMissedDoses(sortedMissedDoses);
  
  const [takenDates, setTakenDates] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(paginatedMissedDoses.length / ITEMS_PER_PAGE);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return paginatedMissedDoses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handleDatePress = (date: string) => {
    setTakenDates((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  return (
    <ScrollView className='flex-1 p-2 font-primary'>
      <View className='bg-[#ffffff99] backdrop:blur-sm p-8 m-[15px] rounded-2xl'>
        <Text className='text-[#333] text-xl mb-2 font-primary font-bold'>Missed Doses</Text>
        <Text className='text-[16px] text-[#666] mb-5'>
          Below are the missed doses for the last 7 days. Click on the date to mark it as taken.
        </Text>

        <View className='flex flex-row flex-wrap gap-3'>
          {recentMissedDoses.map((date) => (
            <TouchableOpacity
              key={date}
              className={`p-[10px] rounded-lg  min-w-20 items-center ${takenDates.includes(date) ? 'bg-[#4CAF50]' : 'bg-[#ffffffe8]'}`}
              onPress={() => handleDatePress(date)}
            >
              <Text style={[styles.dateText, takenDates.includes(date) && styles.takenDateText]}>
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className='mt-5'>
          <Text className='mb-[10px] text-[#333] text-xl font-primary font-bold'>Remaining Missed Doses</Text>
          <View className='flex flex-row flex-wrap items-center gap-3 justify-around'>
            {getPaginatedData().map((dose, index) => (
              <View key={index} style={styles.missedDoseItem}>
                <AlertCircle size={20} color="#FF5252" />
                <Text style={styles.missedDoseMedication}>{dose}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className='flex flex-row justify-between items-center mt-3'>
          <TouchableOpacity
            onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={[styles.paginationButton, currentPage === 1 && styles.disabledButton]}
          >
            <Text style={styles.paginationButtonText}>Previous</Text>
          </TouchableOpacity>

          <Text style={styles.paginationInfo}>Page {currentPage} of {totalPages}</Text>

          <TouchableOpacity
            onPress={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={[styles.paginationButton, currentPage === totalPages && styles.disabledButton]}
          >
            <Text style={styles.paginationButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dateText: { fontSize: 14, color: '#333', fontWeight: '500' },
  takenDateText: { color: '#fff' },
  missedDoseItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#FF5252',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    width: '45%',
  },
  paginationButton: { backgroundColor: '#007BFF', padding: 10, borderRadius: 8 },
  disabledButton: { backgroundColor: '#A9CCE3' },
  paginationButtonText: { color: '#fff', fontWeight: 'bold' },
  paginationInfo: { fontSize: 16, color: '#333' },
  missedDoseMedication: {
    fontSize: 15,
    color: '#444',
  }
});
