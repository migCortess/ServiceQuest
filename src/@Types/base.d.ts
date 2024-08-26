// Generated by https://quicktype.io

export interface GeneralList {
  value: number;
  label: string;
  idExtra?: string;
}

export interface Token {
  sToken: string;
}

export interface ISQLResult {
  identity?: number;
  errorMessage?: string;
  errorNumber?: number;
}

//////////////////////////////////////////////////////////
/////////////////// Service Quest /////////////////////////////
//////////////////////////////////////////////////////////
interface Answer {
  idAnswer: number;
  description: string;
}

interface Question {
  idQuestion: number;
  description: string;
  activationDate: string;
  answers: Answer[];
}

interface TeamScore {
  idTeam: number;
  teamName: string;
  totalScore: number;
}

interface AnswerResponse {
  idAnswer: number;
  isCorrectAnswer: boolean;
}

interface Team {
  idTeam: number;
  teamName: string;
}

interface User {
  idUser: number;
  userName: string;
  email: string;
  idTeam: number;
  teamName: string;
}

interface SetAnswerResponse {
  idAnswer?: number;
  isCorrectAnswer?: boolean;
  errorMessage: string;
  errorNumber?: number;
}

interface SetAnswer {
  idUser: number;
  idQuestion: number;
  idAnswer: number;
}

interface QuestionResponse {
  idQuestion?: number;
  description?: string;
  activationDate?: string;
  answers?: Answer[];
  errorMessage?: string;
  errorNumber?: number;
}

interface AllowedtoResponse {
  isAllowedToResponse: boolean;
}

interface FirstUsersAnswered {
  idQuestion: number;
  idUser: number;
  userName: string;
  creationDate: Date;
}

interface Feature {
  idFeature: number;
  featureName: string;
  description: string;
}

interface FeatureResponse {
  idFeature: number;
  featureName: string;
  description: string;
  errorMessage?: string;
  errorNumber?: number;
}
