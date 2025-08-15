// Server component or server function
import { getLocale } from 'next-intl/server';


export async function getLocaleFromServer() {
  const locale = await getLocale();
  return locale|| 'ar';
}