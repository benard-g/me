export interface Education {
  name: string;
  dates: {
    startYear: number;
    endYear: number;
  };
  list?: string[];
}
