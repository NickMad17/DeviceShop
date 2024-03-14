import {createClient} from '@supabase/supabase-js'
import {Database} from "@/app/types/supabase.ts";

//TODO: Добавить переменнные окружения

const supabaseUrl = import.meta.env.VITE_APP_SUPARBASE_URL;
const supabaseKey = import.meta.env.VITE_APP_SUPARBASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
