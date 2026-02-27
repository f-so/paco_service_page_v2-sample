/**
 * 特定商取引法に基づく表記（表のデータ）
 */
export const LEGAL_PAGE_TITLE = '特定商取引法に基づく表記';

export interface LegalTableRow {
  label: string;
  value: string | string[];
}

export const legalInfo: { tableData: LegalTableRow[] } = {
  tableData: [
    { label: '事業者名', value: 'ForestCode' },
    { label: '代表者名', value: '森 啓' },
    {
      label: '所在地',
      value: [
        '〒450-0003',
        '愛知県名古屋市中村区名駅南2丁目7-8 NAGOYAtheTOWER1013',
      ],
    },
    { label: '連絡先', value: 'メール：reuse.paco@gmail.com' },
    {
      label: '販売価格',
      value: '各プランの料金はご利用料金に記載の通りです',
    },
    { label: '支払方法', value: 'クレジットカード決済' },
    {
      label: '商品の提供時期',
      value:
        'お支払い完了後、原則として即日〜翌日までにご利用いただけます',
    },
  ],
};
