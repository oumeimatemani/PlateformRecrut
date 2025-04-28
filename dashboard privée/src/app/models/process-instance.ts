export interface ProcessInstance {
  id: string;
  startTime: string;
  endTime: string | null;
  processDefinitionId: string;
}
