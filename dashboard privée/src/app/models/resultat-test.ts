export interface ResultatTest {
    id: number;
    score: number;
    statut: string; // "REUSSI" ou "ECHOUE"
    dateTest: string; // ISO format "aaaa-mm-jjThh:min:sec"
    candidature: {
      id: number;
      nomComplet: string;
      email: string;
    };
    test: {
      id: number;
      titre: string;
    };
  }
  