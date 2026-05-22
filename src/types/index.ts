export interface Tool {
  id: number;
  name: string;
  monthlyPrice: number;
  category: string;
}

export interface SelectedTool {
  id: number;
  name: string;
  monthlyPrice: number;
  seats: number;
}

export interface AuditResult {
  totalMonthlySpend: number;
  estimatedSavings: number;
  annualSavings: number;
  recommendations: string[];
}