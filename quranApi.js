import axios from 'axios';

// الحصول على قائمة السور
export async function getSurahs() {
  try {
    const response = await axios.get('http://api.alquran.cloud/v1/surah');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching surahs:', error);
    return [];
  }
}

// الحصول على سورة محددة
export async function getSurah(surahId, edition = 'quran-uthmani') {
  try {
    const response = await axios.get(`http://api.alquran.cloud/v1/surah/${surahId}/${edition}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching surah ${surahId}:`, error);
    return null;
  }
}

// الحصول على آية محددة
export async function getAyah(surahId, ayahNumber, edition = 'quran-uthmani') {
  try {
    const response = await axios.get(`http://api.alquran.cloud/v1/ayah/${surahId}:${ayahNumber}/${edition}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching ayah ${surahId}:${ayahNumber}:`, error);
    return null;
  }
}

// الحصول على قائمة التفاسير المتاحة
export async function getTafseerList() {
  try {
    const response = await axios.get('http://api.quran-tafseer.com/tafseer');
    return response.data;
  } catch (error) {
    console.error('Error fetching tafseer list:', error);
    return [];
  }
}

// الحصول على تفسير آية محددة
export async function getAyahTafseer(tafsirId, surahId, ayahNumber) {
  try {
    const response = await axios.get(`http://api.quran-tafseer.com/tafseer/${tafsirId}/${surahId}/${ayahNumber}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tafseer for ayah ${surahId}:${ayahNumber}:`, error);
    return null;
  }
}

// الحصول على تفسير مجموعة من الآيات
export async function getAyahTafseerRange(tafsirId, surahId, fromAyah, toAyah) {
  try {
    const response = await axios.get(`http://api.quran-tafseer.com/tafseer/${tafsirId}/${surahId}/${fromAyah}-${toAyah}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tafseer range for surah ${surahId}:`, error);
    return [];
  }
}
