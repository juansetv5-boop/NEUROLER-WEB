'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ServiceType = 'neuroeducacion' | 'lectura' | 'atencion';
export type ModalityType = 'presencial' | 'virtual';

export interface BookingModalOptions {
  service?: ServiceType;
  modality?: ModalityType;
  specialistId?: 'leidy' | 'amma' | 'kevin' | 'orientacion';
}

interface BookingModalContextType {
  isOpen: boolean;
  selectedService: ServiceType;
  selectedModality: ModalityType;
  initialSpecialistId?: 'leidy' | 'amma' | 'kevin' | 'orientacion';
  openBookingModal: (options?: BookingModalOptions) => void;
  closeBookingModal: () => void;
  setSelectedService: (service: ServiceType) => void;
  setSelectedModality: (modality: ModalityType) => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const BookingModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType>('neuroeducacion');
  const [selectedModality, setSelectedModality] = useState<ModalityType>('presencial');
  const [initialSpecialistId, setInitialSpecialistId] = useState<'leidy' | 'amma' | 'kevin' | 'orientacion' | undefined>(undefined);

  const openBookingModal = (options?: BookingModalOptions) => {
    if (options?.service) {
      setSelectedService(options.service);
    }
    if (options?.modality) {
      setSelectedModality(options.modality);
    }
    if (options?.specialistId) {
      setInitialSpecialistId(options.specialistId);
    } else if (options?.service === 'neuroeducacion') {
      setInitialSpecialistId('leidy');
    } else if (options?.service === 'lectura') {
      setInitialSpecialistId('amma');
    } else if (options?.service === 'atencion') {
      setInitialSpecialistId('kevin');
    } else {
      setInitialSpecialistId(undefined);
    }
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        selectedService,
        selectedModality,
        initialSpecialistId,
        openBookingModal,
        closeBookingModal,
        setSelectedService,
        setSelectedModality,
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = (): BookingModalContextType => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal debe ser utilizado dentro de un BookingModalProvider');
  }
  return context;
};
