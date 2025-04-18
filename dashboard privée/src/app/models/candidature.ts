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
}
