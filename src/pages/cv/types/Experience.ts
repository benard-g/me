type TTechnology =
  | 'Angular'
  | 'Apache'
  | 'C'
  | 'C++'
  | 'C#'
  | 'CSS'
  | 'Django'
  | 'ExpressJS'
  | 'ElasticSearch'
  | 'Elixir'
  | 'Flask'
  | 'HTML'
  | 'Javascript'
  | 'LINQ'
  | 'MongoDB'
  | 'MySQL'
  | 'NodeJS'
  | 'OpenCV'
  | 'OrmLite'
  | 'Phoenix'
  | 'Postgres'
  | 'Python'
  | 'React'
  | 'Typescript'
  | 'Unix'
  | 'WebSocket';

export interface Experience {
  company: string;
  title: string;
  contract: string;
  dates: {
    start: Date;
    end?: Date;
  };
  location: string;
  list: string[];
  technologies?: TTechnology[];
}
