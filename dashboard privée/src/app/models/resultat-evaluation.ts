export interface ResultatEvaluation {
    id?: number;
    nomCandidat?: string;
    candidatNom?: string; 
    email?: string;
    testTitre?: string;
    test?: {
      titre?: string;
    };
    score: number;
    statut?: string;
    dateEvaluation?: string;
    datePassage?: string;
  }
  