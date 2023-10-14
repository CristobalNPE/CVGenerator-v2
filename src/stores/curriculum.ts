import { nanoid } from "nanoid";
import { create } from "zustand";
export type CurriculumData = {
  id: string;
  title: string;
  description: string;
  from?: string;
  until?: string;
};

type Curriculum = {
  fullName: string;
  phoneNumber: string;
  email: string;
  title?: string;
  website?: string;
  github?: string;
  linkedIn?: string;
  aboutMe?: string;
  academicData: CurriculumData[];
  workExperience: CurriculumData[];
  technicalSkills: CurriculumData[];
  otherInfo?: CurriculumData[];
  pageSize: string;
  template: string;
  //functions
  setFullName: (fullName: string) => void;
  setPhoneNumber: (fullName: string) => void;
  setEmail: (fullName: string) => void;
  setTitle: (fullName: string) => void;
  setWebsite: (fullName: string) => void;
  setGithub: (fullName: string) => void;
  setLinkedIn: (fullName: string) => void;
  setAboutMe: (fullName: string) => void;
  addAcademicData: (academicData: CurriculumData) => void;
  removeAcademicData: (id: string) => void;
  addWorkExperience: (workExperience: CurriculumData) => void;
  removeWorkExperience: (id: string) => void;
  setPageSize: (fullName: string) => void;
  setTemplate: (fullName: string) => void;
};

export const useCurriculumStore = create<Curriculum>()((set) => ({
  fullName: "",
  phoneNumber: "",
  email: "",
  title: "",
  website: "",
  github: "",
  linkedIn: "",
  aboutMe: "",
  academicData: [],
  workExperience: [],
  technicalSkills: [],
  otherInfo: [],
  pageSize: "",
  template: "",

  setFullName: (fullName: string) => set({ fullName }),
  setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
  setEmail: (email: string) => set({ email }),
  setTitle: (title: string) => set({ title }),
  setWebsite: (website: string) => set({ website }),
  setGithub: (github: string) => set({ github }),
  setLinkedIn: (linkedIn: string) => set({ linkedIn }),
  setAboutMe: (aboutMe: string) => set({ aboutMe }),
  addAcademicData: (academicData: CurriculumData) =>
    set((state) => ({
      academicData: [...state.academicData, { id: nanoid(), ...academicData }],
    })),
  removeAcademicData: (id: string) =>
    set((state) => ({
      academicData: state.academicData.filter((data) => data.id !== id),
    })),

  addWorkExperience: (workExperience: CurriculumData) =>
    set((state) => ({
      workExperience: [
        ...state.workExperience,
        { id: nanoid(), ...workExperience },
      ],
    })),

  removeWorkExperience: (id: string) =>
    set((state) => ({
      workExperience: state.workExperience.filter((data) => data.id !== id),
    })),

  setPageSize: (pageSize: string) => set({ pageSize }),
  setTemplate: (template: string) => set({ template }),
}));
