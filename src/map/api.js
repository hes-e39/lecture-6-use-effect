import { createClient } from '@supabase/supabase-js';

import { SUPABASE_KEY, SUPABASE_URL } from './config';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const fetchLocations = ({ search } = {}) => {
  
  let selectPromise = supabase.from('location').select('*');

  if (search) {
    selectPromise = selectPromise.ilike('name', `%${search}%`);
  }
  
  return selectPromise.then(res => res.data ?? []);
};
