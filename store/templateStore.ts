import { create } from 'zustand';
import { Template } from '@/types';
import { TEMPLATE_PRESETS } from '@/lib/constants';

interface TemplateStoreState {
  templates: Template[];
  selectedTemplate: Template | null;
  customizations: Record<string, any>;
  
  setSelectedTemplate: (template: Template) => void;
  addTemplate: (template: Template) => void;
  updateCustomization: (key: string, value: any) => void;
  resetCustomizations: () => void;
}

const defaultTemplates: Template[] = TEMPLATE_PRESETS.map((preset) => ({
  id: preset.id,
  name: preset.name,
  description: preset.description,
  platform: 'instagram',
  layout: 'standard',
  colors: preset.colors,
  fonts: ['Arial', 'Serif', 'Montserrat'],
}));

export const useTemplateStore = create<TemplateStoreState>((set) => ({
  templates: defaultTemplates,
  selectedTemplate: defaultTemplates[0],
  customizations: {
    fontSize: 16,
    fontFamily: 'Arial',
    textColor: '#ffffff',
    backgroundColor: '#000000',
  },
  
  setSelectedTemplate: (template) => set({ selectedTemplate: template }),
  
  addTemplate: (template) => set((state) => ({
    templates: [...state.templates, template],
  })),
  
  updateCustomization: (key, value) => set((state) => ({
    customizations: { ...state.customizations, [key]: value },
  })),
  
  resetCustomizations: () => set({
    customizations: {
      fontSize: 16,
      fontFamily: 'Arial',
      textColor: '#ffffff',
      backgroundColor: '#000000',
    },
  }),
}));
