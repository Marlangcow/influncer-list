import { createClient } from '@supabase/supabase-js';

// 환경 변수 검증 (입력값 검증)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase 환경 변수가 올바르게 설정되지 않았습니다. .env.local 파일을 확인하세요.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 안전한 쿼리 예시 함수 (예외 처리, 입력값 검증, 비동기 타임아웃)
export async function safeSelectFromTable({ table, columns = '*', filter = undefined, timeout = 5000 }: {
  table: string;
  columns?: string;
  filter?: { column: string; operator: string; value: any };
  timeout?: number;
}) {
  // 입력값 검증
  if (!table || typeof table !== 'string') {
    throw new Error('table 이름이 올바르지 않습니다.');
  }
  if (typeof columns !== 'string') {
    throw new Error('columns 값이 문자열이어야 합니다.');
  }
  // 비동기 타임아웃 처리
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    let query = supabase.from(table).select(columns);
    if (filter) {
      query = query.filter(filter.column, filter.operator, filter.value);
    }
    // @ts-ignore
    const { data, error } = await query;
    if (error) throw error;
    return data;
  } catch (err: any) {
    if (err.name === 'AbortError') {
      throw new Error('요청이 타임아웃되었습니다.');
    }
    throw new Error(`Supabase 쿼리 실패: ${err.message}`);
  } finally {
    clearTimeout(timer);
  }
}