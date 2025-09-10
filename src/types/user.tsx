export interface User {
  name: string;
  lastName: string;
  birthDay: string;
  document: string;
  documentType: string;
  phone: string;
  privacy: boolean;
  commercial: boolean;
  plan: PlanValue | null;
}

export interface FormValues {
  documentType: string;
  document: string;
  phone: string;
  privacy: boolean;
  commercial: boolean;
};

export interface PlanValue {
  id: number;
  name: string,
  price: number,
  description: string[],
  age: number 
}