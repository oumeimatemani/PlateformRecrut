export interface Candidature {
  id: number;
  nomComplet: string;
  email: string;
  telephone: string;
  posteSouhaite: string;
  lieuResidence: string;
  lettreMotivation: string;
  cvFileName: string;
  etat?: string; // EN_ATTENTE, ACCEPTEE, REFUSEE
  processInstanceId?: string;
  note?: string;
  feedback?: string;
  decision?: string;

  
  noteManager?: number;
  feedbackManager?: string;
  decisionManager?: boolean;
}
